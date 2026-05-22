const { classEnum } = require('../utils/enum');
const mongoose = require('mongoose');
const listSchema = new mongoose.Schema(
  {
    // <creating-property-schema />
    item: [
      {
        // <creating-property-object-item />
        teacherIds: {
          type: [
            {
              type: mongoose.Schema.ObjectId,
              ref: 'Teacher',
              default: [],
            },
          ],
        },
        subject: {
          type: String,
          required: [true, 'Please enter subject'],
        },
      },
    ],
    notes: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
    },
    level: {
      type: String,
    },
    class: {
      type: String,
      enum: Object.values(classEnum),
    },
    academyListId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Academy',
      required: [true, 'Please enter academyList'],
    },
    academicYear: {
      type: String,
      required: [true, 'Please enter academicYear'],
    },
  },
  { timestamps: true, versionKey: false },
);
// <creating-function-schema />

const List = mongoose.model('List', listSchema);
module.exports = List;
