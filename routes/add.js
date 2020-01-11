const {Router} = require('express');
const Course = require('../models/course');
const router = Router();

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Add course',
    isAdd: true
  });
});

router.post('/', async (req, res) => {
  try {
    const {body: {title, price, url}} = req;
    const course = new Course(title, price, url);

    await course.add();

    res.redirect('/courses');
  } catch (e) {
    throw e;
  }
});

module.exports = router;
