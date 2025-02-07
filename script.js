  // Global pagination settings
  let currentPage = 1;
  const pageSize = 25;
  let latestFilteredBloggers = []; // to hold the current filtered result set

  // Sample JSON data for bloggers (100 entries; add more as needed)
  let bloggers = [
    {
      "id": 1,
      "name": "The Blonde Abroad",
      "blogUrl": "https://theblondeabroad.com",
      "bio": "A lifestyle travel blog with inspiring tips for female globetrotters.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 2,
      "name": "Expert Vagabond",
      "blogUrl": "https://expertvagabond.com",
      "bio": "Adventure travel stories, photography, and offbeat guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 3,
      "name": "Adventurous Kate",
      "blogUrl": "https://adventurouskate.com",
      "bio": "Solo female travel adventures with practical tips and personal stories.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 4,
      "name": "A Broken Backpack",
      "blogUrl": "https://abrokenbackpack.com",
      "bio": "Budget travel advice, backpacking guides, and authentic destination insights.",
      "location": "Canada",
      "favourite": false
    },
    {
      "id": 5,
      "name": "The Planet D",
      "blogUrl": "https://theplanetd.com",
      "bio": "Adventure travel, photography, and tips for exploring the globe.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 6,
      "name": "Be My Travel Muse",
      "blogUrl": "https://bemytravelmuse.com",
      "bio": "Inspiration, guides, and advice tailored for solo female travelers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 7,
      "name": "Uncornered Market",
      "blogUrl": "https://uncorneredmarket.com",
      "bio": "Travel stories, cultural insights, and immersive adventures.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 8,
      "name": "Young Adventuress",
      "blogUrl": "https://youngadventuress.com",
      "bio": "Inspiring solo travel and empowering adventure stories.",
      "location": "Australia",
      "favourite": false
    },
    {
      "id": 9,
      "name": "Two Monkeys Travel Group",
      "blogUrl": "https://twomonkeystravelgroup.com",
      "bio": "A couple’s journey sharing budget travel tips and destination guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 10,
      "name": "Migrationology",
      "blogUrl": "https://migrationology.com",
      "bio": "Exploring cultures through food and travel with a focus on local experiences.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 11,
      "name": "The Road Forks",
      "blogUrl": "https://theroadforks.com",
      "bio": "Travel tips, gear reviews, and comprehensive destination guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 12,
      "name": "One Mile at a Time",
      "blogUrl": "https://onemileatatime.com",
      "bio": "Airline and travel rewards insights with luxury travel tips.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 13,
      "name": "The Broke Backpacker",
      "blogUrl": "https://thebrokebackpacker.com",
      "bio": "Budget travel advice, backpacking guides, and adventure inspiration.",
      "location": "Australia",
      "favourite": false
    },
    {
      "id": 14,
      "name": "Gone With The Wynns",
      "blogUrl": "https://gonewiththewynns.com",
      "bio": "A couple’s travel adventures by land and sea with creative itineraries.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 15,
      "name": "Bucket List Journey",
      "blogUrl": "https://bucketlistjourney.net",
      "bio": "Inspiring bucket list travel experiences and destination guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 16,
      "name": "Sorelle Amore",
      "blogUrl": "https://sorelleamore.com",
      "bio": "Travel, photography, and lifestyle inspiration from a creative nomad.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 17,
      "name": "The Culture Trip",
      "blogUrl": "https://theculturetrip.com",
      "bio": "Exploring art, culture, and travel through captivating stories.",
      "location": "UK",
      "favourite": false
    },
    {
      "id": 18,
      "name": "Traveling Jackie",
      "blogUrl": "https://travelingjackie.com",
      "bio": "Travel inspiration, guides, and practical tips for diverse adventures.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 19,
      "name": "Hand Luggage Only",
      "blogUrl": "https://handluggageonly.co.uk",
      "bio": "Travel stories, destination guides, and visual travel inspiration.",
      "location": "UK",
      "favourite": false
    },
    {
      "id": 20,
      "name": "The Poor Traveler",
      "blogUrl": "https://thepoortraveler.net",
      "bio": "Budget travel insights and destination guides from a global perspective.",
      "location": "Thailand",
      "favourite": false
    },
    {
      "id": 21,
      "name": "Wandering Earl",
      "blogUrl": "https://wanderingearl.com",
      "bio": "Long-term travel advice and cultural insights gathered on the road.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 22,
      "name": "The Travel Hack",
      "blogUrl": "https://thetravelhack.com",
      "bio": "Smart travel tips, hacks, and stylish itineraries for globetrotters.",
      "location": "UK",
      "favourite": false
    },
    {
      "id": 23,
      "name": "Travel Dudes",
      "blogUrl": "https://traveldudes.com",
      "bio": "Comprehensive travel guides and engaging adventure stories.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 24,
      "name": "Finding Beyond",
      "blogUrl": "https://findingbeyond.com",
      "bio": "Photography-rich travel adventures and destination recommendations.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 25,
      "name": "Global Grasshopper",
      "blogUrl": "https://globalgrasshopper.com",
      "bio": "Explorations of the world’s cultures and natural wonders.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 26,
      "name": "Wander With Us",
      "blogUrl": "https://wanderwithus.co",
      "bio": "Couple’s travel adventures and curated destination guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 27,
      "name": "The Wandering Lens",
      "blogUrl": "https://thewanderinglens.com",
      "bio": "A visual travel diary with a focus on photography and storytelling.",
      "location": "Canada",
      "favourite": false
    },
    {
      "id": 28,
      "name": "The Global Hustle",
      "blogUrl": "https://theglobalhustle.com",
      "bio": "Travel, adventure, and entrepreneurial lifestyle insights.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 29,
      "name": "Traveling Ryan",
      "blogUrl": "https://travelingryan.com",
      "bio": "Budget travel and solo adventure tips for modern explorers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 30,
      "name": "The Wandering Wife",
      "blogUrl": "https://thewanderingwife.com",
      "bio": "Travel experiences and personal stories from a globe-trotting wife.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 31,
      "name": "Vagabondish",
      "blogUrl": "https://vagabondish.com",
      "bio": "A lifestyle travel blog highlighting offbeat destinations.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 32,
      "name": "The Path to Adventure",
      "blogUrl": "https://thepathtoadventure.com",
      "bio": "Inspiring travel stories and comprehensive adventure guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 33,
      "name": "Roaming Around",
      "blogUrl": "https://roamingaround.com",
      "bio": "Travel stories and guides from a dedicated global explorer.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 34,
      "name": "The Travel Tester",
      "blogUrl": "https://thetraveltester.com",
      "bio": "Honest travel reviews and guides for the discerning traveler.",
      "location": "UK",
      "favourite": false
    },
    {
      "id": 35,
      "name": "Voyage Vibes",
      "blogUrl": "https://voyagevibes.com",
      "bio": "Travel experiences, photography, and cultural insights.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 36,
      "name": "The Itchy Traveler",
      "blogUrl": "https://theitchytraveler.com",
      "bio": "Offbeat travel adventures and unique destination guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 37,
      "name": "Travelista Diaries",
      "blogUrl": "https://travelistadiaries.com",
      "bio": "Lifestyle travel and inspiring journeys from around the world.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 38,
      "name": "Miles of Smiles",
      "blogUrl": "https://milesofsmiles.com",
      "bio": "Sharing the joy of travel with tips and inspiring stories.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 39,
      "name": "Roam Sweet Home",
      "blogUrl": "https://roamsweethome.com",
      "bio": "Lifestyle travel insights and destination guides for every adventurer.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 40,
      "name": "The Travel Nomad",
      "blogUrl": "https://thetravelnomad.com",
      "bio": "Solo travel tips, destination guides, and inspiring adventure stories.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 41,
      "name": "Travel Like A Local",
      "blogUrl": "https://travellikealocal.com",
      "bio": "Insider travel advice to help you experience destinations like a native.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 42,
      "name": "The Roaming Reporter",
      "blogUrl": "https://theroamingreporter.com",
      "bio": "Travel journalism, tips, and adventure stories from around the world.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 43,
      "name": "Wanderlust Diaries",
      "blogUrl": "https://wanderlustdiaries.com",
      "bio": "Travel stories, photography, and cultural experiences curated globally.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 44,
      "name": "Globe Trotter Tales",
      "blogUrl": "https://globetrottertales.com",
      "bio": "Inspiring tales and practical guides from global adventures.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 45,
      "name": "Roaming Free",
      "blogUrl": "https://roamingfree.com",
      "bio": "Travel adventures and tips for the independent explorer.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 46,
      "name": "The Curious Traveler",
      "blogUrl": "https://thecurioustraveler.com",
      "bio": "Exploring unusual destinations and uncovering local secrets.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 47,
      "name": "Journey Junkies",
      "blogUrl": "https://journeyjunkies.com",
      "bio": "A duo sharing their passion for adventure and offbeat travel.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 48,
      "name": "Travel Junkie",
      "blogUrl": "https://traveljunkie.com",
      "bio": "Personal travel stories and tips for modern explorers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 49,
      "name": "Roamers' Tales",
      "blogUrl": "https://roamerstales.com",
      "bio": "A collection of travel stories and destination guides from around the globe.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 50,
      "name": "The Global Gypsy",
      "blogUrl": "https://theglobalgypsy.com",
      "bio": "Travel chronicles and adventures that defy convention.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 51,
      "name": "Offbeat Trails",
      "blogUrl": "https://offbeattrails.com",
      "bio": "Exploring hidden gems and lesser-known destinations.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 52,
      "name": "The Wandering Backpacker",
      "blogUrl": "https://wanderingbackpacker.com",
      "bio": "Budget travel and backpacking adventures for the curious soul.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 53,
      "name": "Wanderlust Chronicles",
      "blogUrl": "https://wanderlustchronicles.com",
      "bio": "Travel narratives and cultural experiences from around the world.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 54,
      "name": "Jet Set Diaries",
      "blogUrl": "https://jetsetdiaries.com",
      "bio": "Luxury travel insights and tips for the modern jet setter.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 55,
      "name": "Travel Buff",
      "blogUrl": "https://travelbuff.com",
      "bio": "In-depth destination reviews and comprehensive travel guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 56,
      "name": "Roam the World",
      "blogUrl": "https://roamtheworld.com",
      "bio": "Curated travel experiences and destination insights for the modern nomad.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 57,
      "name": "Expedition Diaries",
      "blogUrl": "https://expeditiondiaries.com",
      "bio": "Adventure travel stories and practical guides for explorers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 58,
      "name": "Wanderer’s Journal",
      "blogUrl": "https://wanderersjournal.com",
      "bio": "Travel journaling, photography, and inspiring travel tales.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 59,
      "name": "Travel Soul",
      "blogUrl": "https://travelsoul.com",
      "bio": "Inspirational travel stories and destination guides for wanderers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 60,
      "name": "Global Roamer",
      "blogUrl": "https://globalroamer.com",
      "bio": "Adventures and travel guides from across the globe.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 61,
      "name": "Travel Muse",
      "blogUrl": "https://travelmuse.com",
      "bio": "Travel inspiration, guides, and vibrant photography.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 62,
      "name": "World Wanderer",
      "blogUrl": "https://worldwanderer.com",
      "bio": "Adventure travel and cultural insights for the passionate explorer.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 63,
      "name": "Wanderlust Explorer",
      "blogUrl": "https://wanderlustexplorer.com",
      "bio": "In-depth travel tips and destination guides for intrepid adventurers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 64,
      "name": "Roam & Wander",
      "blogUrl": "https://roamandwander.com",
      "bio": "Curated travel experiences and destination guides for the curious traveler.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 65,
      "name": "The Roaming Vagabond",
      "blogUrl": "https://theroamingvagabond.com",
      "bio": "Solo travel adventures and cultural insights for independent explorers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 66,
      "name": "Globe Hopper",
      "blogUrl": "https://globehopper.com",
      "bio": "Travel guides and insights tailored for the modern nomad.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 67,
      "name": "Wanderlust Wayfarer",
      "blogUrl": "https://wanderlustwayfarer.com",
      "bio": "Exploring one destination at a time with passion and insight.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 68,
      "name": "Journey Seekers",
      "blogUrl": "https://journeyseekers.com",
      "bio": "Travel tips and inspiring stories for the curious adventurer.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 69,
      "name": "Trailblazer Travels",
      "blogUrl": "https://trailblazertravels.com",
      "bio": "Adventure guides and unique travel experiences for bold explorers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 70,
      "name": "Epic Wanderings",
      "blogUrl": "https://epicwanderings.com",
      "bio": "Travel stories and destination guides for the adventurous soul.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 71,
      "name": "Globetrotter Diaries",
      "blogUrl": "https://globetrotterdiaries.com",
      "bio": "Insider travel tips and captivating travel narratives.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 72,
      "name": "The Journey Journal",
      "blogUrl": "https://thejourneyjournal.com",
      "bio": "Inspiring travel stories and practical adventure guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 73,
      "name": "Travel Thrive",
      "blogUrl": "https://travelthrive.com",
      "bio": "Travel inspiration and guides to help you thrive on the road.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 74,
      "name": "Voyage Ventures",
      "blogUrl": "https://voyageventures.com",
      "bio": "Adventure travel, cultural insights, and destination guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 75,
      "name": "Wanderlust Wonder",
      "blogUrl": "https://wanderlustwonder.com",
      "bio": "Travel tales and cultural experiences curated for intrepid explorers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 76,
      "name": "Travel Trails",
      "blogUrl": "https://traveltrails.com",
      "bio": "Authentic travel experiences and comprehensive destination guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 77,
      "name": "Globe Chaser",
      "blogUrl": "https://globechaser.com",
      "bio": "Travel adventures and insights from a dedicated global explorer.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 78,
      "name": "Roaming Routes",
      "blogUrl": "https://roamingroutes.com",
      "bio": "Curated travel guides and inspiring travel narratives.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 79,
      "name": "Wanderlust Tribe",
      "blogUrl": "https://wanderlusttribe.com",
      "bio": "A community-driven travel blog featuring stories and destination guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 80,
      "name": "Pathfinder Journeys",
      "blogUrl": "https://pathfinderjourneys.com",
      "bio": "Travel inspiration and guides for the curious explorer.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 81,
      "name": "Roaming Rambler",
      "blogUrl": "https://roamingrambler.com",
      "bio": "Adventure travel tips and inspiring travel tales for wanderers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 82,
      "name": "Travel Quest",
      "blogUrl": "https://travelquest.com",
      "bio": "Journeys, tips, and destination guides for passionate travelers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 83,
      "name": "The Nomad’s Notebook",
      "blogUrl": "https://thenomadsnotebook.com",
      "bio": "Personal travel stories and in-depth destination guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 84,
      "name": "Vagabond Voyager",
      "blogUrl": "https://vagabondvoyager.com",
      "bio": "Travel adventures, photography, and cultural experiences from around the world.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 85,
      "name": "Global Journeys",
      "blogUrl": "https://globaljourneys.com",
      "bio": "Travel tips, guides, and inspiring tales from global adventures.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 86,
      "name": "Roaming Realms",
      "blogUrl": "https://roamingrealms.com",
      "bio": "Travel photography, stories, and adventure guides from around the world.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 87,
      "name": "Explorer's Edge",
      "blogUrl": "https://explorersedge.com",
      "bio": "Travel adventures, gear reviews, and insider destination insights.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 88,
      "name": "Travel Tales",
      "blogUrl": "https://traveltales.com",
      "bio": "Personal travel stories and practical tips for modern adventurers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 89,
      "name": "The Roaming Report",
      "blogUrl": "https://theroamingreport.com",
      "bio": "Travel insights, tips, and cultural experiences from across the globe.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 90,
      "name": "Nomadic Insights",
      "blogUrl": "https://nomadicinsights.com",
      "bio": "Destination guides, travel tips, and cultural stories for the modern nomad.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 91,
      "name": "The Wandering Way",
      "blogUrl": "https://thewanderingway.com",
      "bio": "Personal travel stories, photography, and destination guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 92,
      "name": "Travel Pathways",
      "blogUrl": "https://travelpathways.com",
      "bio": "Curated travel guides and inspiring travel narratives.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 93,
      "name": "Vagabond Ventures",
      "blogUrl": "https://vagabondventures.com",
      "bio": "Adventurous travel guides and cultural insights from around the world.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 94,
      "name": "Wanderwise",
      "blogUrl": "https://wanderwise.com",
      "bio": "Travel insights, destination guides, and inspiring travel stories.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 95,
      "name": "Epic Escapes",
      "blogUrl": "https://epicescapes.com",
      "bio": "Curated travel adventures and guides for epic journeys.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 96,
      "name": "Travel Explorer",
      "blogUrl": "https://travelexplorer.com",
      "bio": "In-depth destination explorations and travel insights.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 97,
      "name": "Roam Adventures",
      "blogUrl": "https://roamadventures.com",
      "bio": "Exciting travel adventures and practical travel tips.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 98,
      "name": "The Global Nomad",
      "blogUrl": "https://theglobalnomad.com",
      "bio": "Global travel insights and destination guides for modern nomads.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 99,
      "name": "Wanderlust Collective",
      "blogUrl": "https://wanderlustcollective.com",
      "bio": "A collaborative travel blog sharing diverse travel stories and guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 100,
      "name": "Infinite Journeys",
      "blogUrl": "https://infinitejourneys.com",
      "bio": "Curated travel adventures and endless inspiration for wanderers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 101,
      "name": "Travel Noire",
      "blogUrl": "https://www.travelnoire.com",
      "bio": "A digital platform for Black travelers sharing rich cultural experiences and travel tips.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 102,
      "name": "The Adventure Junkies",
      "blogUrl": "https://www.theadventurejunkies.com",
      "bio": "Adventure travel guides, outdoor activities, and practical tips for thrill-seekers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 103,
      "name": "Travel Fellas",
      "blogUrl": "https://www.travelfellas.com",
      "bio": "A travel blog by a group of friends exploring the world on a budget.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 104,
      "name": "Wandering Spirits",
      "blogUrl": "https://www.wanderingspirits.com",
      "bio": "Inspiring travel stories and tips for free-spirited explorers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 105,
      "name": "Nomad Soul",
      "blogUrl": "https://www.nomadsoul.com",
      "bio": "Connecting travel enthusiasts with immersive cultural experiences around the globe.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 106,
      "name": "Roamantics",
      "blogUrl": "https://www.roamantics.com",
      "bio": "Travel blog for couples and solo wanderers with romantic travel guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 107,
      "name": "Globe Trotters United",
      "blogUrl": "https://www.globetrottersunited.com",
      "bio": "Community-driven travel insights and destination guides for global adventurers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 108,
      "name": "Adventure Awaits",
      "blogUrl": "https://www.adventureawaits.com",
      "bio": "Your guide to adventure travel, outdoor pursuits, and unforgettable journeys.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 109,
      "name": "Footloose Traveler",
      "blogUrl": "https://www.footloosetraveler.com",
      "bio": "Travel tips and itineraries for those who prefer freedom on the road.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 110,
      "name": "Urban Nomad",
      "blogUrl": "https://www.urbanomad.com",
      "bio": "Exploring cities around the world with an insider’s perspective.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 111,
      "name": "The Global Wayfarer",
      "blogUrl": "https://www.theglobalwayfarer.com",
      "bio": "Modern travel guides and cultural explorations for the curious nomad.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 112,
      "name": "Roam Free & Easy",
      "blogUrl": "https://www.roamfreeandeasy.com",
      "bio": "Simple travel advice and budget-friendly itineraries for stress-free adventures.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 113,
      "name": "Journeys Beyond",
      "blogUrl": "https://www.journeysbeyond.com",
      "bio": "Travel inspirations and detailed guides to help you explore beyond the beaten path.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 114,
      "name": "Vivid Voyages",
      "blogUrl": "https://www.vividvoyages.com",
      "bio": "Capturing the essence of travel through vibrant stories and imagery.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 115,
      "name": "Epic Escapades",
      "blogUrl": "https://www.epicescapades.com",
      "bio": "Your source for epic travel adventures and extraordinary experiences.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 116,
      "name": "Travel Tonic",
      "blogUrl": "https://www.traveltonic.com",
      "bio": "Refreshing travel insights and guides to quench your wanderlust.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 117,
      "name": "Global Footprints",
      "blogUrl": "https://www.globalfootprints.com",
      "bio": "A journey through diverse cultures and destinations around the world.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 118,
      "name": "Travel Revelations",
      "blogUrl": "https://www.travelrevelations.com",
      "bio": "Uncovering hidden gems and transformative travel experiences.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 119,
      "name": "The Explorer’s Chronicle",
      "blogUrl": "https://www.explorerschronicle.com",
      "bio": "In-depth travel stories and guides for the modern explorer.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 120,
      "name": "Roaming Nomads",
      "blogUrl": "https://www.roamingnomads.com",
      "bio": "A community of modern nomads sharing travel tips and global adventures.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 121,
      "name": "Wanderlust Warriors",
      "blogUrl": "https://www.wanderlustwarriors.com",
      "bio": "Empowering travel stories and adventures from passionate wanderers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 122,
      "name": "Travel Mosaic",
      "blogUrl": "https://www.travelmosaic.com",
      "bio": "A colorful collection of travel experiences, tips, and cultural insights.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 123,
      "name": "Infinite Horizons",
      "blogUrl": "https://www.infinitehorizons.com",
      "bio": "Pushing boundaries and exploring new horizons through travel.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 124,
      "name": "Jetset Junkies",
      "blogUrl": "https://www.jetsetjunkies.com",
      "bio": "For the modern traveler chasing jetset lifestyles and luxury getaways.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 125,
      "name": "Travel Beacon",
      "blogUrl": "https://www.travelbeacon.com",
      "bio": "Guiding you to your next great adventure with expert travel tips.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 126,
      "name": "Nomadic Navigators",
      "blogUrl": "https://www.nomadicnavigators.com",
      "bio": "Charting a course through global destinations and travel tips.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 127,
      "name": "Wanderlust Wired",
      "blogUrl": "https://www.wanderlustwired.com",
      "bio": "Connecting travel enthusiasts with digital guides and modern travel tech.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 128,
      "name": "Adventure Archives",
      "blogUrl": "https://www.adventurearchives.com",
      "bio": "A collection of travel stories, experiences, and adventures worth remembering.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 129,
      "name": "Roam the Realms",
      "blogUrl": "https://www.roamtherealms.com",
      "bio": "Exploring diverse cultures and landscapes through travel narratives.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 130,
      "name": "The Travel Lab",
      "blogUrl": "https://www.thetravellab.com",
      "bio": "Experimenting with new travel ideas and creative itineraries for every traveler.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 131,
      "name": "Globetrotter Guide",
      "blogUrl": "https://www.globetrotterguide.com",
      "bio": "Essential travel tips, destination guides, and itineraries for savvy travelers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 132,
      "name": "Roam On",
      "blogUrl": "https://www.roamon.com",
      "bio": "Keep moving, keep exploring – travel inspiration for relentless wanderers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 133,
      "name": "The Expeditionist",
      "blogUrl": "https://www.theexpeditionist.com",
      "bio": "Inspiring outdoor adventures and expedition-style travel guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 134,
      "name": "Travel Pulse",
      "blogUrl": "https://www.travelpulse.com",
      "bio": "Stay updated with the latest travel trends and destination insights.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 135,
      "name": "Nomad Networker",
      "blogUrl": "https://www.nomadnetworker.com",
      "bio": "Building a community for nomads with expert travel tips and networking.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 136,
      "name": "Adventurous Spirits",
      "blogUrl": "https://www.adventurousspirits.com",
      "bio": "Fuel your wanderlust with stories of daring adventures and cultural explorations.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 137,
      "name": "Gypsy Traveler",
      "blogUrl": "https://www.gypsytraveler.com",
      "bio": "Modern travel narratives and practical guides for free-spirited wanderers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 138,
      "name": "Urban Excursions",
      "blogUrl": "https://www.urbanexcursions.com",
      "bio": "Discover urban travel experiences and city adventures worldwide.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 139,
      "name": "The Roaming Chronicle",
      "blogUrl": "https://www.theroamingchronicle.com",
      "bio": "Detailed travel guides and stories chronicling journeys across the globe.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 140,
      "name": "Travel Lightly",
      "blogUrl": "https://www.travellightly.com",
      "bio": "Minimalist travel tips and guides for those on a budget.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 141,
      "name": "Epic Journeys",
      "blogUrl": "https://www.epicjourneys.com",
      "bio": "Your source for epic travel experiences and life-changing adventures.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 142,
      "name": "Voyage Virtuoso",
      "blogUrl": "https://www.voyagevirtuoso.com",
      "bio": "Expert travel advice and curated itineraries for discerning globetrotters.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 143,
      "name": "The Travel Edit",
      "blogUrl": "https://www.thetraveledit.com",
      "bio": "Curated travel tips, stylish guides, and the best destinations for modern travelers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 144,
      "name": "Nomad Notes",
      "blogUrl": "https://www.nomadnotes.com",
      "bio": "Handwritten travel stories and practical itineraries for the modern nomad.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 145,
      "name": "The Uncharted Path",
      "blogUrl": "https://www.theunchartedpath.com",
      "bio": "Guiding you on a path of discovery with insider travel tips and personal stories.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 146,
      "name": "Wanderlust Insider",
      "blogUrl": "https://www.wanderlustinsider.com",
      "bio": "Insider secrets, tips, and guides for avid travelers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 147,
      "name": "Travel Trekker",
      "blogUrl": "https://www.traveltrekker.com",
      "bio": "Your companion for trekking adventures and off-grid travel experiences.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 148,
      "name": "Global Expedition",
      "blogUrl": "https://www.globalexpedition.com",
      "bio": "Embark on global expeditions with practical advice and immersive travel guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 149,
      "name": "Nomad Echoes",
      "blogUrl": "https://www.nomadechoes.com",
      "bio": "Echoes of travel experiences, stories, and cultural explorations.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 150,
      "name": "Travel Sparks",
      "blogUrl": "https://www.travelsparks.com",
      "bio": "Igniting your wanderlust with inspiring travel stories and tips.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 151,
      "name": "Roaming Rhythms",
      "blogUrl": "https://www.roamingrhythms.com",
      "bio": "Discover the rhythms of the world through immersive travel stories.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 152,
      "name": "The Voyager’s Voice",
      "blogUrl": "https://www.thevoyagersvoice.com",
      "bio": "The voice of travelers sharing authentic experiences and advice.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 153,
      "name": "Destination Diaries",
      "blogUrl": "https://www.destinationdiaries.com",
      "bio": "A diary of unforgettable destinations and travel experiences.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 154,
      "name": "Roam Reflex",
      "blogUrl": "https://www.roamreflex.com",
      "bio": "Instant travel insights and reflexive guides for spontaneous journeys.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 155,
      "name": "Travel & Beyond",
      "blogUrl": "https://www.travelandbeyond.com",
      "bio": "Pushing the boundaries of travel with expansive guides and innovative ideas.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 156,
      "name": "Nomadic Footsteps",
      "blogUrl": "https://www.nomadicfootsteps.com",
      "bio": "Following the footsteps of modern nomads through detailed travel guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 157,
      "name": "Global Drift",
      "blogUrl": "https://www.globaldrift.com",
      "bio": "Drifting across the globe with inspiring travel tales and destination guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 158,
      "name": "Travel Zephyr",
      "blogUrl": "https://www.travelzephyr.com",
      "bio": "A light breeze of travel tips and enchanting destination stories.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 159,
      "name": "Roaming Realities",
      "blogUrl": "https://www.roamingrealities.com",
      "bio": "Realistic travel advice and honest narratives from globetrotters.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 160,
      "name": "Wanderlust Wave",
      "blogUrl": "https://www.wanderlustwave.com",
      "bio": "Ride the wave of wanderlust with dynamic travel stories and guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 161,
      "name": "The Nomadic Compass",
      "blogUrl": "https://www.thenomadiccompass.com",
      "bio": "Let our compass guide your adventures with expert travel insights.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 162,
      "name": "Travel Frenzy",
      "blogUrl": "https://www.travelfrenzy.com",
      "bio": "Fuel your travel frenzy with high-energy guides and inspiring adventures.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 163,
      "name": "Roam Realm",
      "blogUrl": "https://www.roamrealm.com",
      "bio": "Explore the realm of travel with curated guides and inspiring stories.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 164,
      "name": "Nomad Nexus",
      "blogUrl": "https://www.nomadnexus.com",
      "bio": "Connecting nomads around the world with travel insights and community stories.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 165,
      "name": "Travel Surge",
      "blogUrl": "https://www.travelsurge.com",
      "bio": "Experience a surge of inspiration with dynamic travel guides and tips.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 166,
      "name": "WanderWire",
      "blogUrl": "https://www.wanderwire.com",
      "bio": "Wired for travel – bringing you the latest trends and destination highlights.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 167,
      "name": "The Roaming Artisan",
      "blogUrl": "https://www.theroamingartisan.com",
      "bio": "A creative journey through travel, culture, and artisan experiences.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 168,
      "name": "Voyager’s Vantage",
      "blogUrl": "https://www.voyagersvantage.com",
      "bio": "Get a fresh vantage point on travel with expert insights and guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 169,
      "name": "Nomad Nation",
      "blogUrl": "https://www.nomadnation.com",
      "bio": "Uniting global nomads with inspiring stories, guides, and travel hacks.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 170,
      "name": "Travel Vanguard",
      "blogUrl": "https://www.travelvanguard.com",
      "bio": "Leading the charge with cutting-edge travel advice and trendsetting guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 171,
      "name": "WanderWise Hub",
      "blogUrl": "https://www.wanderwisehub.com",
      "bio": "Your hub for smart travel tips and wise destination choices.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 172,
      "name": "Roam Oracle",
      "blogUrl": "https://www.roamoracle.com",
      "bio": "Your oracle for travel wisdom and destiny-defining journeys.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 173,
      "name": "Nomad Vision",
      "blogUrl": "https://www.nomadvision.com",
      "bio": "A visionary look at travel with innovative guides and inspiring narratives.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 174,
      "name": "Travel Loft",
      "blogUrl": "https://www.travelloft.com",
      "bio": "Elevate your travel experience with high-quality guides and destination insights.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 175,
      "name": "Roaming Muse",
      "blogUrl": "https://www.roamingmuse.com",
      "bio": "Let your travel muse inspire you with creative itineraries and stories.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 176,
      "name": "Nomad Spark",
      "blogUrl": "https://www.nomadspark.com",
      "bio": "Igniting the passion for travel with energetic stories and guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 177,
      "name": "Travel Echo",
      "blogUrl": "https://www.travelecho.com",
      "bio": "Echoing the voices of travelers with real-life stories and advice.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 178,
      "name": "Wanderlust Realm",
      "blogUrl": "https://www.wanderlustrealm.com",
      "bio": "Step into a realm of adventure with curated travel guides and narratives.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 179,
      "name": "The Global Trek",
      "blogUrl": "https://www.theglobaltrek.com",
      "bio": "Trek the globe with our detailed guides and travel insights.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 180,
      "name": "Nomad Navigations",
      "blogUrl": "https://www.nomadnavigations.com",
      "bio": "Navigating the world one destination at a time with expert advice.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 181,
      "name": "Travel Inspire",
      "blogUrl": "https://www.travelinspire.com",
      "bio": "Inspiring travel experiences and guides to ignite your next adventure.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 182,
      "name": "Roam Rituals",
      "blogUrl": "https://www.roamrituals.com",
      "bio": "Explore the rituals of travel with insights into cultural experiences.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 183,
      "name": "Wander Way",
      "blogUrl": "https://www.wanderway.com",
      "bio": "Chart your own path with unconventional travel guides and tips.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 184,
      "name": "Nomad Collective",
      "blogUrl": "https://www.nomadcollective.com",
      "bio": "A collective of modern nomads sharing travel advice and experiences.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 185,
      "name": "Travel Epoch",
      "blogUrl": "https://www.travelepoch.com",
      "bio": "Mark a new epoch in your travel experiences with transformative guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 186,
      "name": "Roam Unbound",
      "blogUrl": "https://www.roamunbound.com",
      "bio": "Unbound travel ideas and experiences for the adventurous soul.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 187,
      "name": "Global Wanderer",
      "blogUrl": "https://www.globalwanderer.com",
      "bio": "Wander the world with our curated guides and travel inspiration.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 188,
      "name": "Nomad Pulse",
      "blogUrl": "https://www.nomadpulse.com",
      "bio": "Feel the pulse of the world with dynamic travel stories and insights.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 189,
      "name": "Travel Frontier",
      "blogUrl": "https://www.travelfrontier.com",
      "bio": "Explore the frontiers of travel with daring adventures and insider tips.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 190,
      "name": "Roaming Legends",
      "blogUrl": "https://www.roaminglegends.com",
      "bio": "Legendary travel experiences and timeless destination guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 191,
      "name": "Nomad Journey",
      "blogUrl": "https://www.nomadjourney.com",
      "bio": "Your journey through nomadic travel with expert tips and personal stories.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 192,
      "name": "Travel Syndicate",
      "blogUrl": "https://www.travelsyndicate.com",
      "bio": "A syndicate of travel experts offering comprehensive guides and insights.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 193,
      "name": "Wanderlust X",
      "blogUrl": "https://www.wanderlustx.com",
      "bio": "X marks the spot for your next travel adventure with bold guides and tips.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 194,
      "name": "The Roaming Collective",
      "blogUrl": "https://www.theroamingcollective.com",
      "bio": "Collecting stories and experiences from travelers around the globe.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 195,
      "name": "Travel Orbit",
      "blogUrl": "https://www.travelorbit.com",
      "bio": "Orbit around the globe with expert travel guides and inspiring narratives.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 196,
      "name": "Nomad Realm",
      "blogUrl": "https://www.nomadrealm.com",
      "bio": "Enter the realm of nomadic living with travel insights and guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 197,
      "name": "Travel Portal",
      "blogUrl": "https://www.travelportal.com",
      "bio": "Your gateway to a world of travel experiences and destination guides.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 198,
      "name": "Roam Unlimited",
      "blogUrl": "https://www.roamunlimited.com",
      "bio": "Unlimited travel possibilities and comprehensive guides for wanderers.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 199,
      "name": "Nomad Expedition",
      "blogUrl": "https://www.nomadexpedition.com",
      "bio": "Embark on expeditions with practical tips and inspiring travel stories.",
      "location": "USA",
      "favourite": false
    },
    {
      "id": 200,
      "name": "Vanguard Travels",
      "blogUrl": "https://www.vanguardtravels.com",
      "bio": "Pioneering travel advice and guides for the modern explorer.",
      "location": "USA",
      "favourite": false
    }
  ];    

    const bloggerList = document.getElementById("bloggerList");
    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sortSelect");
    const countryFilter = document.getElementById("countryFilter");
    const favouritesToggle = document.getElementById("favouritesToggle");
    const paginationContainer = document.getElementById("pagination");

    // Function to display blogger cards
    function displayBloggers(bloggerArray) {
      bloggerList.innerHTML = "";
      bloggerArray.forEach(blogger => {
        const card = document.createElement("div");
        card.className = "bg-white rounded shadow p-6 flex flex-col justify-between";
        const starColor = blogger.favourite ? "text-yellow-500" : "text-gray-300";
        card.innerHTML = `
          <div>
            <h2 class="text-xl font-bold mb-2">${blogger.name}</h2>
            <p class="text-gray-700 mb-4">${blogger.bio}</p>
            <p class="text-gray-500 mb-2"><strong>Location:</strong> ${blogger.location}</p>
          </div>
          <div class="flex items-center justify-between mt-4">
            <button onclick="window.open('${blogger.blogUrl}', '_blank')" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Visit Blog
            </button>
            <button onclick="toggleFavourite(${blogger.id})" class="focus:outline-none" title="Toggle Favourite">
              <svg class="w-6 h-6 ${starColor}" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.951a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.95c.3.92-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.84-.197-1.54-1.118l1.287-3.95a1 1 0 00-.364-1.118L2.12 9.378c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.286-3.951z"/>
              </svg>
            </button>
          </div>
        `;
        bloggerList.appendChild(card);
      });
    }

    // Toggle favourite status for a blogger entry
    function toggleFavourite(id) {
      bloggers = bloggers.map(b => b.id === id ? { ...b, favourite: !b.favourite } : b);
      updateDisplay();
    }

    // Populate the Country Filter dropdown with unique countries from the data
    function populateCountryFilter() {
      const uniqueCountries = [...new Set(bloggers.map(b => b.location))].sort();
      uniqueCountries.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        countryFilter.appendChild(option);
      });
    }

    // Update and display bloggers based on search, sorting, country filter, favourites, and pagination
    function updateDisplay() {
      let filteredBloggers = [...bloggers];

      // Search filter
      const searchTerm = searchInput.value.toLowerCase();
      if (searchTerm) {
        filteredBloggers = filteredBloggers.filter(b =>
          b.name.toLowerCase().includes(searchTerm) ||
          b.bio.toLowerCase().includes(searchTerm) ||
          b.location.toLowerCase().includes(searchTerm)
        );
      }

      // Country filter
      const selectedCountry = countryFilter.value;
      if (selectedCountry !== "all") {
        filteredBloggers = filteredBloggers.filter(b => b.location === selectedCountry);
      }

      // Favourites filter
      if (showFavouritesOnly) {
        filteredBloggers = filteredBloggers.filter(b => b.favourite);
      }

      // Sorting
      const sortValue = sortSelect.value;
      if (sortValue === "nameAsc") {
        filteredBloggers.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortValue === "nameDesc") {
        filteredBloggers.sort((a, b) => b.name.localeCompare(a.name));
      } else if (sortValue === "locationAsc") {
        filteredBloggers.sort((a, b) => a.location.localeCompare(b.location));
      } else if (sortValue === "locationDesc") {
        filteredBloggers.sort((a, b) => b.location.localeCompare(a.location));
      }

      // Store for pagination use
      latestFilteredBloggers = filteredBloggers;

      // Pagination logic
      const totalPages = Math.ceil(filteredBloggers.length / pageSize) || 1;
      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;
      const startIndex = (currentPage - 1) * pageSize;
      const paginatedBloggers = filteredBloggers.slice(startIndex, startIndex + pageSize);

      // Display entries and update pagination controls
      displayBloggers(paginatedBloggers);
      updatePaginationControls(totalPages);
    }

    // Update pagination controls (Previous, Page Info, Next)
    function updatePaginationControls(totalPages) {
      let html = "";
      if (totalPages > 1) {
        html += `<button onclick="changePage(currentPage - 1)" class="px-3 py-1 border rounded ${currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}" ${currentPage <= 1 ? 'disabled' : ''}>Previous</button>`;
        html += `<span class="px-3 py-1">Page ${currentPage} of ${totalPages}</span>`;
        html += `<button onclick="changePage(currentPage + 1)" class="px-3 py-1 border rounded ${currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}" ${currentPage >= totalPages ? 'disabled' : ''}>Next</button>`;
      }
      paginationContainer.innerHTML = html;
    }

    // Change page and update display
    function changePage(page) {
      const totalPages = Math.ceil(latestFilteredBloggers.length / pageSize) || 1;
      if (page >= 1 && page <= totalPages) {
        currentPage = page;
        updateDisplay();
      }
    }

    // Global flag for favourites filter
    let showFavouritesOnly = false;

    // Event listeners
    searchInput.addEventListener("input", () => { currentPage = 1; updateDisplay(); });
    sortSelect.addEventListener("change", () => { currentPage = 1; updateDisplay(); });
    countryFilter.addEventListener("change", () => { currentPage = 1; updateDisplay(); });
    favouritesToggle.addEventListener("click", () => {
      showFavouritesOnly = !showFavouritesOnly;
      favouritesToggle.textContent = showFavouritesOnly ? "Show All" : "Show Favourites Only";
      currentPage = 1;
      updateDisplay();
    });

    // Initialize controls and display
    populateCountryFilter();
    updateDisplay();