module.exports = [
    {
      id: 'hiking',
      name: 'Hiking',
      description: 'Sweden offers some of Europe\'s most spectacular hiking trails through pristine wilderness areas.',
      image: '/images/hiking.jpg',
      locations: [
        {
          id: 'kungsleden',
          name: 'Kungsleden (The King\'s Trail)',
          description: 'Kungsleden is Sweden\'s most famous long-distance hiking trail, stretching 440 km through some of the country\'s most beautiful mountain landscapes.',
          image: '/images/kungsleden.jpg',
          difficulty: 'Moderate to challenging',
          bestSeason: 'June to September',
          highlights: [
            'Spectacular mountain views',
            'Midnight sun in summer',
            'Mountain huts for accommodation',
            'Crossing through four national parks'
          ]
        },
        {
          id: 'skaneleden',
          name: 'Skåneleden',
          description: 'Skåneleden is a network of hiking trails covering over 1,000 km through the varied landscapes of Skåne in southern Sweden.',
          image: '/images/skaneleden.jpg',
          difficulty: 'Easy to moderate',
          bestSeason: 'April to October',
          highlights: [
            'Coastal paths',
            'Beech forests',
            'Cultural landscapes',
            'Accessible from many towns'
          ]
        }
      ]
    },
    {
      id: 'wildlife-watching',
      name: 'Wildlife Watching',
      description: 'Sweden\'s diverse ecosystems support a rich variety of wildlife, from large mammals like moose and bears to numerous bird species.',
      image: '/images/wildlife-watching.jpg',
      locations: [
        {
          id: 'moose-safari',
          name: 'Moose Safari in Värmland',
          description: 'The forests of Värmland offer excellent opportunities to spot Sweden\'s iconic moose, especially during dawn and dusk.',
          image: '/images/moose-safari.jpg',
          bestSeason: 'Year-round (best in summer)',
          guidedTours: true,
          highlights: [
            'High chance of moose sightings',
            'Professional guides with local knowledge',
            'Beautiful forest landscapes',
            'Combination with beaver safaris'
          ]
        },
        {
          id: 'bear-watching',
          name: 'Bear Watching in Hälsingland',
          description: 'Hälsingland offers the chance to observe brown bears in their natural habitat from specially constructed hides.',
          image: '/images/bear-watching.jpg',
          bestSeason: 'May to August',
          guidedTours: true,
          highlights: [
            'Overnight stays in wilderness hides',
            'Professional guides ensuring safety',
            'Possible sightings of other wildlife',
            'Educational experience about bear ecology'
          ]
        }
      ]
    },
    {
      id: 'kayaking',
      name: 'Kayaking',
      description: 'With thousands of lakes and a long coastline, Sweden offers excellent kayaking opportunities in diverse settings.',
      image: '/images/kayaking.jpg',
      locations: [
        {
          id: 'stockholm-archipelago-kayaking',
          name: 'Stockholm Archipelago',
          description: 'The Stockholm Archipelago with its 30,000 islands offers endless possibilities for kayaking adventures close to the capital.',
          image: '/images/stockholm-archipelago-kayaking.jpg',
          difficulty: 'Easy to moderate',
          bestSeason: 'May to September',
          highlights: [
            'Island hopping',
            'Sheltered waters',
            'Camping on islands',
            'Rich cultural heritage'
          ]
        },
        {
          id: 'bohuslan-coast',
          name: 'Bohuslän Coast',
          description: 'The Bohuslän coast on Sweden\'s west side offers dramatic sea kayaking among smooth granite islands and fishing villages.',
          image: '/images/bohuslan-coast.jpg',
          difficulty: 'Moderate',
          bestSeason: 'June to August',
          highlights: [
            'Smooth granite shorelines',
            'Clear waters',
            'Picturesque fishing villages',
            'Marine wildlife'
          ]
        }
      ]
    }
  ];
  