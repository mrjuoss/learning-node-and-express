import express from 'express';
import _ from 'lodash';
import students from '../data/students.json';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Success', data: students })
});

router.get('/:id', (req, res) => {
  const studentId = req.params.id;
  const student = _.find(students, student => student.id === studentId);

  if (student) {
    res.json({
        message: 'success',
        data: student
      })
  } else {
    res.status(404)
      .json({
        message: 'Not Found',
        data: ''
      })
  }

});

router.post('/', (req, res) => {
  console.log('Handling post request');
  res.end()
});

router.put('/', (req, res) => {
  console.log('Handling put for update request');
  res.end()
});

router.delete('/', (req, res) => {
  console.log('Handling delete request');
  res.end()
});

router.param('id', (req, res, next, id) => {
  if (isNaN(id)) {
    next(`id ${id} is not valid id`);
  } else {
    next();
  }
});

module.exports = router;