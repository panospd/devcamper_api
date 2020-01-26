// @desc    Get all bootcamps
// @route   Get /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res) => {
  res.status(200).send({
    success: true,
    msg: 'Show all bootcamps'
  });
};

// @desc    Get single bootcamp
// @route   Get /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res) => {
  res.status(200).send({
    success: true,
    msg: `Display bootcamp ${req.params.id}`
  });
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res) => {
  res.status(200).send({
    success: true,
    msg: `Display bootcamp ${req.params.id}`
  });
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res) => {
  res.status(200).send({
    success: true,
    msg: `Update bootcamp ${req.params.id}`
  });
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res) => {
  res.status(200).send({
    success: true,
    msg: `Delete bootcamp ${req.params.id}`
  });
};
