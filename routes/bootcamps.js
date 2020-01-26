const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    success: true,
    msg: 'Show all bootcamps'
  });
});

router.post('/', (req, res) => {
  res.status(200).send({
    success: true,
    msg: 'Create new bootcamp'
  });
});

router.put('/:id', (req, res) => {
  res.status(200).send({
    success: true,
    msg: `Update bootcamp ${req.params.id}`
  });
});

router.get('/:id', (req, res) => {
  res.status(200).send({
    success: true,
    msg: `Display bootcamp ${req.params.id}`
  });
});

router.delete('/:id', (req, res) => {
  res.status(200).send({
    success: true,
    msg: `Delete bootcamp ${req.params.id}`
  });
});

module.exports = router;
