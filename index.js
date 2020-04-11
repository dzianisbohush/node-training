const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const User = require('./models/user');

//routes
const homeRoutes = require('./routes/home');
const coursesRoutes = require('./routes/courses');
const addRoutes = require('./routes/add');
const cartRoutes = require('./routes/cart');
const orders = require('./routes/orders');

//add .env
require('dotenv').config({path: __dirname + '/.env'});

const app = express();

//register hbs
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

//user
app.use(async (req, res, next) => {
  try {
    const user = await User.findById('5e90ba62be8e15e97dc15913');
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
  }
});

//register public folder
app.use(express.static(path.join(__dirname, 'public')));

//add body parsing
app.use(express.urlencoded());
app.use(express.json());

//register routes
app.use('/', homeRoutes);
app.use('/courses', coursesRoutes);
app.use('/add', addRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orders);

const startApp = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS_URL_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    const candidate = await User.findOne();
    if (!candidate) {
      const user = new User({
        email: 'dmbogush91@gmail.com',
        name: 'Denis',
        cart: {items: []}
      });
      await user.save();
    }

    const PORT = process.env.PORT || 9999;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

startApp();

