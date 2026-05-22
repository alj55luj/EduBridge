const List = require('../models/listModel');
const AppError = require('../utils/appError');
const handlerFactory = require('../utils/handlerFactory');
const catchAsync = require('../utils/catchAsync');
exports.getList = handlerFactory.getOne(List,{
    path: 'item.teacherIds',
    select: 'name -_id',
  });
exports.createList = handlerFactory.createOne(List);
exports.updateList = handlerFactory.updateOne(List);
exports.deleteList = handlerFactory.deleteOne(List);
exports.getAllList = handlerFactory.getAllpop1(List,{
    path: 'item.teacherIds',
    select: 'name -id',
  } );
