const academyController = require('../controllers/academyController');
const {
  protect,
  restrictTo,
  isactive,
} = require('./../middlewares/authMiddlewers');
const { addVarBody } = require('../middlewares/dynamicMiddleware');
const { checkOwner } = require('./../middlewares/checkMiddleware');
const { RoleCode } = require('./../utils/enum');
const { MANAGER, ADMIN,USER } = RoleCode;
const express = require('express');
const Academy = require('../models/academyModel');
const router = express.Router();
router.use(protect);
router
  .route('/')
  .get(academyController.getAllAcademy)
  .post(
    restrictTo(MANAGER),
    isactive,
    addVarBody('managerId', 'userId'),
    academyController.createAcademy,
  );
router
  .route('/:id')
  .get(restrictTo(MANAGER, ADMIN, USER) , academyController.getAcademy)
  .patch(
    restrictTo(MANAGER),
    checkOwner(Academy, 'managerId', 'id'),
    academyController.updateAcademy,
  )
  .delete(restrictTo(ADMIN), academyController.deleteAcademy);
module.exports = router;
