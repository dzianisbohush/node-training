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
    const course = new Course({
      title: req.body.title,
      price: req.body.price,
      url: req.body.url,
      userId: req.user
    });

    await course.save();

    res.redirect('/courses');
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
