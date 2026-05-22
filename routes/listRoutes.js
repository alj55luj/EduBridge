const listController = require('../controllers/listController');
const { addAcTeachId, addAcademyId, AddAcademyIdToQuary, checkList } = require('../middlewares/academyMiddleware');
const { protect, restrictTo } = require('./../middlewares/authMiddlewers');
const { RoleCode } = require('./../utils/enum');
const { MANAGER, ADMIN, USER } = RoleCode;
const express = require('express');
const router = express.Router();
router.use(protect);
router
  .route('/')
  .get(restrictTo(ADMIN, USER), listController.getAllList)
  .post(restrictTo(MANAGER),    addAcademyId("academyListId")
  , listController.createList);


router
  .route('/mine')
  .get(
    restrictTo(MANAGER),
    AddAcademyIdToQuary("academyListId"),
    listController.getAllList,
  );

  router
  .route('/:id')
  .get(restrictTo(MANAGER, ADMIN, USER), listController.getList)
  .patch(restrictTo(MANAGER),checkList, listController.updateList)
  .delete(restrictTo(MANAGER),checkList, listController.deleteList);
module.exports = router;
