const List = require('./listModel');
const Teacher = require('./teacherModel');
const mongoose = require('mongoose');
const academySchema = new mongoose.Schema(
  {
    // <creating-property-schema />
    managerId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      unique: true,
    },
    photo: {
      type: String,
      default: 'ddd.png',
    },
    name: {
      type: String,
      required: [true, 'Please enter name'],
    },
  },
  { timestamps: true, versionKey: false },
);
// <creating-function-schema />
academySchema.post('findOneAndDelete', async function (doc) {
  if (doc) {
    try {
      await List.deleteMany({ academyListId: doc._id });
    } catch (error) {
      return next(new AppError('error deleting listss', 500));
    }
  }
});
academySchema.post('findOneAndDelete', async function (doc) {
  if (doc) {
    try {
      await Teacher.deleteMany({ academyTeachId: doc._id });
    } catch (error) {
      return next(new AppError('error deleting teacherss', 500));
    }
  }
});

const Academy = mongoose.model('Academy', academySchema);
module.exports = Academy;
