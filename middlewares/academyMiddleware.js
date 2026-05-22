const Academy = require('../models/academyModel');
const Teacher = require('../models/teacherModel');
const { List } = require('../swagger/routes/listSwagger');
const catchAsync = require('../utils/catchAsync');


exports.AddAcademyIdToQuary =(value)=> async (req, res, next) => {
  const doc = await Academy.findOne({ managerId: req.user._id });
  req.query[value] = doc.id;
  next();
};

exports.checkTeacher = catchAsync(async (req, res, next) => {
  const mineAcademy = await Academy.findOne({ managerId: req.user._id });
  const teacher = await Teacher.findById(req.params.id);
  if (mineAcademy._id.toString() !== teacher.academyTeachId.toString()) {
    return next(
      new AppError('this teacher isnot in your academy. Access is denied', 403),
    );
  }
  next();
});


exports.checkList = catchAsync(async (req, res, next) => {
  const mineAcademy = await Academy.findOne({ managerId: req.user._id });
  const list = await List.findById(req.params.id);
  if (mineAcademy._id.toString() !== list.academyListId.toString()) {
    return next(
      new AppError('this teacher isnot in your academy. Access is denied', 403),
    );
  }
  next();
});

exports.addAcademyId=(value)=>async (req, res, next) => {
  let mineAcademy = await Academy.findOne({ managerId: req.user._id }); // req.body.academyId
  req.body[value] = mineAcademy.id;
  next();
};