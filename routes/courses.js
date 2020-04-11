const {Router} = require('express');
const Course = require('../models/course');
const router = Router();

const getMappedCourse = (course) => ({
  title: course.title,
  price: course.price,
  url: course.url,
  id: course.id
});

router.get('/', async (req, res) => {
  const courses = await Course.find().populate('userId', 'email name');

  res.render('courses', {
    title: 'Courses',
    isCourses: true,
    courses: courses.map(c => getMappedCourse(c))
  })
});

router.get('/:id/edit', async (req, res) => {
  if (!req.query.allow) {
    return res.redirect('/')
  }

  const course = await Course.findById(req.params.id);

  res.render('course-edit', {
    title: course.title,
    course: getMappedCourse(course),
  })
});

router.post('/remove', async (req, res) => {
  try {
    await Course.deleteOne({
      _id: req.body.id
    });
    res.redirect('/courses');
  } catch (e) {
    console.log(e);
  }
});

router.get('/:id', async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.render('course', {
    layout: 'empty',
    title: `Course ${course.title}`,
    course: getMappedCourse(course),
  })
});

router.post('/edit', async (req, res) => {
  const {id} = req.body;
  delete req.body.id;

  await Course.findByIdAndUpdate(id, req.body);

  res.redirect('/courses');
});

module.exports = router;
