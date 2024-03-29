const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Course = require("../models/Course");

// @desc      Get courses
// @route     GET /api/v1/courses
// @route     GET /api/v1/bootcamps/:bootcampId/courses
// @access    Public
exports.getCourses = asyncHandler(async (req, res, next) => {
  console.log(">>>>>>All");
  let courses;

  if (req.params.bootcampId) {
    courses = await Course.find({ bootcamp: req.params.bootcampId });
  } else {
    courses = await Course.find().populate({
      path: "bootcamp",
      select: "name description",
    });
  }

  return res.status(200).json({
    success: true,
    count: courses.length,
    data: courses,
  });
});
