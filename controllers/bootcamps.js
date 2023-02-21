// @desc        Get all bootcamps
// @route       GET /api/v1/bootcamps
// @accees      Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all " });
};

// @desc        Get single bootcamps
// @route       GET /api/v1/bootcamps/:id
// @accees      Public
exports.getBootcamp = (req, res, next) => {};

// @desc        Create new bootcamp
// @route       POST /api/v1/bootcamps
// @accees      Private
exports.createBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: `create ` });
};

// @desc        Update bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @accees      Private
exports.updateBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: `update ${req.params.id}` });
};

// @desc        Delete bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @accees      Private
exports.deleteBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: `update ${req.params.id}` });
};
