const express = require('express');
const router = express.Router();
const regionsData = require('../data/regions');

// Main regions page
router.get('/', (req, res) => {
  res.render('pages/regions/index', { 
    title: 'Regions - Sweden Nature Reserves',
    regions: regionsData,
    activeLink: 'regions'
  });
});

// Individual region pages
router.get('/:regionId', (req, res) => {
  const region = regionsData.find(r => r.id === req.params.regionId);
  
  if (!region) {
    return res.status(404).render('pages/404', { 
      title: 'Region Not Found',
      activeLink: 'regions'
    });
  }
  
  res.render('pages/regions/region', { 
    title: `${region.name} - Sweden Nature Reserves`,
    region,
    activeLink: 'regions'
  });
});

// Specific reserve within a region
router.get('/:regionId/:reserveId', (req, res) => {
  const region = regionsData.find(r => r.id === req.params.regionId);
  
  if (!region) {
    return res.status(404).render('pages/404', { 
      title: 'Region Not Found',
      activeLink: 'regions'
    });
  }
  
  const reserve = region.reserves.find(r => r.id === req.params.reserveId);
  
  if (!reserve) {
    return res.status(404).render('pages/404', { 
      title: 'Reserve Not Found',
      activeLink: 'regions'
    });
  }
  
  res.render('pages/regions/reserve', { 
    title: `${reserve.name} - Sweden Nature Reserves`,
    region,
    reserve,
    activeLink: 'regions'
  });
});

module.exports = router;