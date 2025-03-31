require('dotenv').config();
const express = require('express');
const path = require('path');
const regionsRouter = require('./routes/regions');
const activitiesRouter = require('./routes/activities');

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('pages/home', { 
    title: 'Sweden Nature Reserves - Home',
    activeLink: 'home'
  });
});

// Use routers
app.use('/regions', regionsRouter);
app.use('/activities', activitiesRouter);

// 404 page
app.use((req, res) => {
  res.status(404).render('pages/404', { 
    title: 'Page Not Found',
    activeLink: ''
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
