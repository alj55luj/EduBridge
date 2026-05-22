const Academy = require('../models/academyModel');

exports.addAcId = async (req, res, next) => {
  let doc = await Academy.findOne({ managerId: req.user._id });
  req.body.academyId = doc.id;
  next();
};
