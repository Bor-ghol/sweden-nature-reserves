const express = require('express');
const router = express.Router();
const activitiesData = require('../data/activities');

// Main activities page
router.get('/', (req, res) => {
  res.render('pages/activities/index', { 
    title: 'Activities - Sweden Nature Reserves',
    activities: activitiesData,
    activeLink: 'activities'
  });
});

// Individual activity pages
router.get('/:activityId', (req, res) => {
  const activity = activitiesData.find(a => a.id === req.params.activityId);
  
  if (!activity) {
    return res.status(404).render('pages/404', { 
      title: 'Activity Not Found',
      activeLink: 'activities'
    });
  }
  
  res.render('pages/activities/activity', { 
    title: `${activity.name} - Sweden Nature Reserves`,
    activity,
    activeLink: 'activities'
  });
});

// Specific location for an activity
router.get('/:activityId/:locationId', (req, res) => {
  const activity = activitiesData.find(a => a.id === req.params.activityId);
  
  if (!activity) {
    return res.status(404).render('pages/404', { 
      title: 'Activity Not Found',
      activeLink: 'activities'
    });
  }
  
  const location = activity.locations.find(l => l.id === req.params.locationId);
  
  if (!location) {
    return res.status(404).render('pages/404', { 
      title: 'Location Not Found',
      activeLink: 'activities'
    });
  }
  
  res.render('pages/activities/location', { 
    title: `${location.name} - ${activity.name} - Sweden Nature Reserves`,
    activity,
    location,
    activeLink: 'activities'
  });
});

module.exports = router;
