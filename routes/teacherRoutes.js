const teacherController = require('../controllers/teacherController');
const { protect, restrictTo, isactive } = require('./../middlewares/authMiddlewers');
const { RoleCode } = require('./../utils/enum');
const {
  addAcTeachId,
  AddAcademyIdToQuary,
  checkTeacher,
  addAcademyId,
} = require('../middlewares/academyMiddleware');

const { MANAGER, ADMIN, USER } = RoleCode;
const express = require('express');
const Teacher = require('../models/teacherModel');
const router = express.Router();
router.use(protect);
router
  .route('/')
  .get(restrictTo(ADMIN, USER), teacherController.getAllTeacher)
  .post(
    restrictTo(MANAGER),
    isactive,
    addAcademyId("academyTeachId"),
    teacherController.createTeacher,
  );
router
  .route('/mine')
  .get(
    restrictTo(MANAGER),
    AddAcademyIdToQuary("academyTeachId"),
    teacherController.getAllTeacher,
  );
router
  .route('/:id')
  .get(restrictTo(MANAGER, ADMIN, USER), teacherController.getTeacher)
  .patch(restrictTo(MANAGER), checkTeacher, teacherController.updateTeacher)
  .delete(restrictTo(MANAGER), checkTeacher, teacherController.deleteTeacher);
module.exports = router;
