const List = require('./listModel');
const mongoose = require('mongoose');
const teacherSchema = new mongoose.Schema(
  {
    // <creating-property-schema />
    academyTeachId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Academy',
      required: [true, 'Please enter academyTeachId'],
    },
    name: {
      type: String,
      required: [true, 'Please enter name'],
    },
    specialization: {
      type: String,
      required: [true, 'Please enter specialization'],
    },
    description: {
      type: String,
      required: [true, 'Please enter description'],
    },
  },
  { timestamps: true, versionKey: false },
);
// <creating-function-schema />
teacherSchema.post('findOneAndDelete', async function (doc) {
  if (doc) {
    try {
      await List.deleteMany({ teacherListId: doc._id });
    } catch (error) {
      return next(new AppError('error deleting listss', 500));
    }
  }
});

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
