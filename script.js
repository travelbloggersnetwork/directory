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
        "bio": "A lifestyle travel blog featuring inspiring tips and advice for female globetrotters.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 2,
        "name": "Expert Vagabond",
        "blogUrl": "https://expertvagabond.com",
        "bio": "Adventure travel stories, photography and off-the-beaten-path guides.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 3,
        "name": "Legal Nomads",
        "blogUrl": "https://legalnomads.com",
        "bio": "Exploring food, culture, and travel through immersive storytelling.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 4,
        "name": "Adventurous Kate",
        "blogUrl": "https://adventurouskate.com",
        "bio": "Solo female travel adventures with practical tips and personal stories.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 5,
        "name": "A Broken Backpack",
        "blogUrl": "https://abrokenbackpack.com",
        "bio": "Budget travel, backpacking guides and authentic destination insights.",
        "location": "Canada",
        "favourite": false
      },
      {
        "id": 6,
        "name": "Dan Flying Solo",
        "blogUrl": "https://danflyingsolo.com",
        "bio": "Travel tips, destination guides and stories for independent adventurers.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 7,
        "name": "The Planet D",
        "blogUrl": "https://theplanetd.com",
        "bio": "Adventure travel, photography and tips for exploring the globe.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 8,
        "name": "Be My Travel Muse",
        "blogUrl": "https://bemytravelmuse.com",
        "bio": "Inspiration, guides and advice tailored for solo female travelers.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 9,
        "name": "Uncornered Market",
        "blogUrl": "https://uncorneredmarket.com",
        "bio": "Travel stories, cultural insights and immersive adventures.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 10,
        "name": "Young Adventuress",
        "blogUrl": "https://youngadventuress.com",
        "bio": "Inspiring solo travel and empowering adventure stories.",
        "location": "Australia",
        "favourite": false
      },
      {
        "id": 11,
        "name": "Two Monkeys Travel Group",
        "blogUrl": "https://twomonkeystravelgroup.com",
        "bio": "A couple’s journey sharing budget travel tips and destination guides.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 12,
        "name": "Migrationology",
        "blogUrl": "https://migrationology.com",
        "bio": "Exploring cultures through food and travel with a focus on local experiences.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 13,
        "name": "The Road Forks",
        "blogUrl": "https://theroadforks.com",
        "bio": "Travel tips, gear reviews and comprehensive destination guides.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 14,
        "name": "One Mile at a Time",
        "blogUrl": "https://onemileatatime.com",
        "bio": "Airline and travel rewards insights with luxury travel tips.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 15,
        "name": "The Broke Backpacker",
        "blogUrl": "https://thebrokebackpacker.com",
        "bio": "Budget travel advice, backpacking guides and adventure inspiration.",
        "location": "Australia",
        "favourite": false
      },
      {
        "id": 16,
        "name": "Gone With The Wynns",
        "blogUrl": "https://gonewiththewynns.com",
        "bio": "A couple’s travel adventures by land and sea with creative itineraries.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 17,
        "name": "Bucket List Journey",
        "blogUrl": "https://bucketlistjourney.net",
        "bio": "Inspiring bucket list travel experiences and destination guides.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 18,
        "name": "Sorelle Amore",
        "blogUrl": "https://sorelleamore.com",
        "bio": "Travel, photography and lifestyle inspiration from a creative nomad.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 19,
        "name": "The Culture Trip",
        "blogUrl": "https://theculturetrip.com",
        "bio": "Exploring art, culture and travel through captivating stories.",
        "location": "UK",
        "favourite": false
      },
      {
        "id": 20,
        "name": "Traveling Jackie",
        "blogUrl": "https://travelingjackie.com",
        "bio": "Travel inspiration, guides and practical tips for diverse adventures.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 21,
        "name": "Hand Luggage Only",
        "blogUrl": "https://handluggageonly.co.uk",
        "bio": "Travel stories, destination guides and visual travel inspiration.",
        "location": "UK",
        "favourite": false
      },
      {
        "id": 22,
        "name": "The Poor Traveler",
        "blogUrl": "https://thepoortraveler.net",
        "bio": "Budget travel insights and destination guides from a global perspective.",
        "location": "Thailand",
        "favourite": false
      },
      {
        "id": 23,
        "name": "Travel With Bender",
        "blogUrl": "https://travelwithbender.com",
        "bio": "Unique perspectives on travel adventures and destination guides.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 24,
        "name": "Wandering Earl",
        "blogUrl": "https://wanderingearl.com",
        "bio": "Long-term travel advice and cultural insights gathered on the road.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 25,
        "name": "The Travel Hack",
        "blogUrl": "https://thetravelhack.com",
        "bio": "Smart travel tips, hacks and stylish itineraries for globetrotters.",
        "location": "UK",
        "favourite": false
      },
      {
        "id": 26,
        "name": "Travel Dudes",
        "blogUrl": "https://traveldudes.com",
        "bio": "Comprehensive travel guides and engaging adventure stories.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 27,
        "name": "Finding Beyond",
        "blogUrl": "https://findingbeyond.com",
        "bio": "Photography-rich travel adventures and destination recommendations.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 28,
        "name": "Global Grasshopper",
        "blogUrl": "https://globalgrasshopper.com",
        "bio": "Explorations of the world’s cultures and natural wonders.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 29,
        "name": "Wander With Us",
        "blogUrl": "https://wanderwithus.co",
        "bio": "Couple’s travel adventures and curated destination guides.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 30,
        "name": "The Wandering Lens",
        "blogUrl": "https://thewanderinglens.com",
        "bio": "A visual travel diary with a focus on photography and storytelling.",
        "location": "Canada",
        "favourite": false
      },
      {
        "id": 31,
        "name": "The Global Hustle",
        "blogUrl": "https://theglobalhustle.com",
        "bio": "Travel, adventure and entrepreneurial lifestyle insights.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 32,
        "name": "Traveling Ryan",
        "blogUrl": "https://travelingryan.com",
        "bio": "Budget travel and solo adventure tips for modern explorers.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 33,
        "name": "The Wandering Wife",
        "blogUrl": "https://thewanderingwife.com",
        "bio": "Travel experiences and personal stories from a globe-trotting wife.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 34,
        "name": "Vagabondish",
        "blogUrl": "https://vagabondish.com",
        "bio": "Lifestyle travel blog highlighting offbeat destinations.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 35,
        "name": "The Path to Adventure",
        "blogUrl": "https://thepathtoadventure.com",
        "bio": "Inspiring travel stories and comprehensive adventure guides.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 36,
        "name": "Roaming Around",
        "blogUrl": "https://roamingaround.com",
        "bio": "Travel stories and guides from a dedicated global explorer.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 37,
        "name": "The Travel Tester",
        "blogUrl": "https://thetraveltester.com",
        "bio": "Honest travel reviews and guides for the discerning traveler.",
        "location": "UK",
        "favourite": false
      },
      {
        "id": 38,
        "name": "Voyage Vibes",
        "blogUrl": "https://voyagevibes.com",
        "bio": "Travel experiences, photography and cultural insights.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 39,
        "name": "The Itchy Traveler",
        "blogUrl": "https://theitchytraveler.com",
        "bio": "Offbeat travel adventures and unique destination guides.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 40,
        "name": "Travelista Diaries",
        "blogUrl": "https://travelistadiaries.com",
        "bio": "Lifestyle travel and inspiring journeys from around the world.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 41,
        "name": "Miles of Smiles",
        "blogUrl": "https://milesofsmiles.com",
        "bio": "Sharing the joy of travel with tips and inspiring stories.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 42,
        "name": "Roam Sweet Home",
        "blogUrl": "https://roamsweethome.com",
        "bio": "Lifestyle travel insights and destination guides for every adventurer.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 43,
        "name": "The Travel Nomad",
        "blogUrl": "https://thetravelnomad.com",
        "bio": "Solo travel tips, destination guides and inspiring adventure stories.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 44,
        "name": "Travel Like A Local",
        "blogUrl": "https://travellikealocal.com",
        "bio": "Insider travel advice to help you experience destinations like a native.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 45,
        "name": "The Roaming Reporter",
        "blogUrl": "https://theroamingreporter.com",
        "bio": "Travel journalism, tips and adventure stories from around the world.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 46,
        "name": "Wanderlust Diaries",
        "blogUrl": "https://wanderlustdiaries.com",
        "bio": "Travel stories, photography and cultural experiences curated globally.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 47,
        "name": "Globe Trotter Tales",
        "blogUrl": "https://globetrottertales.com",
        "bio": "Inspiring tales and practical guides from global adventures.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 48,
        "name": "Roaming Free",
        "blogUrl": "https://roamingfree.com",
        "bio": "Travel adventures and tips for the independent explorer.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 49,
        "name": "The Curious Traveler",
        "blogUrl": "https://thecurioustraveler.com",
        "bio": "Exploring unusual destinations and uncovering local secrets.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 50,
        "name": "Journey Junkies",
        "blogUrl": "https://journeyjunkies.com",
        "bio": "A duo sharing their passion for adventure and offbeat travel.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 51,
        "name": "Travel Junkie",
        "blogUrl": "https://traveljunkie.com",
        "bio": "Personal travel stories and tips for modern explorers.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 52,
        "name": "Roamers' Tales",
        "blogUrl": "https://roamerstales.com",
        "bio": "A collection of travel stories and destination guides from around the globe.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 53,
        "name": "The Global Gypsy",
        "blogUrl": "https://theglobalgypsy.com",
        "bio": "Travel chronicles and adventures that defy convention.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 54,
        "name": "Offbeat Trails",
        "blogUrl": "https://offbeattrails.com",
        "bio": "Exploring hidden gems and lesser-known destinations.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 55,
        "name": "The Wandering Backpacker",
        "blogUrl": "https://wanderingbackpacker.com",
        "bio": "Budget travel and backpacking adventures for the curious soul.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 56,
        "name": "Wanderlust Chronicles",
        "blogUrl": "https://wanderlustchronicles.com",
        "bio": "Travel narratives and cultural experiences from around the world.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 57,
        "name": "Jet Set Diaries",
        "blogUrl": "https://jetsetdiaries.com",
        "bio": "Luxury travel insights and tips for the modern jet setter.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 58,
        "name": "Travel Buff",
        "blogUrl": "https://travelbuff.com",
        "bio": "In-depth destination reviews and comprehensive travel guides.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 59,
        "name": "Roam the World",
        "blogUrl": "https://roamtheworld.com",
        "bio": "Curated travel experiences and destination insights for the modern nomad.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 60,
        "name": "Expedition Diaries",
        "blogUrl": "https://expeditiondiaries.com",
        "bio": "Adventure travel stories and practical guides for explorers.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 61,
        "name": "Wanderer’s Journal",
        "blogUrl": "https://wanderersjournal.com",
        "bio": "Travel journaling, photography and inspiring travel tales.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 62,
        "name": "Travel Soul",
        "blogUrl": "https://travelsoul.com",
        "bio": "Inspirational travel stories and destination guides for wanderers.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 63,
        "name": "Global Roamer",
        "blogUrl": "https://globalroamer.com",
        "bio": "Adventures and travel guides from across the globe.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 64,
        "name": "Travel Muse",
        "blogUrl": "https://travelmuse.com",
        "bio": "Travel inspiration, guides and vibrant photography.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 65,
        "name": "World Wanderer",
        "blogUrl": "https://worldwanderer.com",
        "bio": "Adventure travel and cultural insights for the passionate explorer.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 66,
        "name": "Wanderlust Explorer",
        "blogUrl": "https://wanderlustexplorer.com",
        "bio": "In-depth travel tips and destination guides for intrepid adventurers.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 67,
        "name": "Roam & Wander",
        "blogUrl": "https://roamandwander.com",
        "bio": "Curated travel experiences and destination guides for the curious traveler.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 68,
        "name": "The Roaming Vagabond",
        "blogUrl": "https://theroamingvagabond.com",
        "bio": "Solo travel adventures and cultural insights for independent explorers.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 69,
        "name": "Globe Hopper",
        "blogUrl": "https://globehopper.com",
        "bio": "Travel guides and insights tailored for the modern nomad.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 70,
        "name": "Wanderlust Wayfarer",
        "blogUrl": "https://wanderlustwayfarer.com",
        "bio": "Exploring one destination at a time with passion and insight.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 71,
        "name": "Journey Seekers",
        "blogUrl": "https://journeyseekers.com",
        "bio": "Travel tips and inspiring stories for the curious adventurer.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 72,
        "name": "Trailblazer Travels",
        "blogUrl": "https://trailblazertravels.com",
        "bio": "Adventure guides and unique travel experiences for bold explorers.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 73,
        "name": "Epic Wanderings",
        "blogUrl": "https://epicwanderings.com",
        "bio": "Travel stories and destination guides for the adventurous soul.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 74,
        "name": "Globetrotter Diaries",
        "blogUrl": "https://globetrotterdiaries.com",
        "bio": "Insider travel tips and captivating travel narratives.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 75,
        "name": "The Journey Journal",
        "blogUrl": "https://thejourneyjournal.com",
        "bio": "Inspiring travel stories and practical adventure guides.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 76,
        "name": "Travel Thrive",
        "blogUrl": "https://travelthrive.com",
        "bio": "Travel inspiration and guides to help you thrive on the road.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 77,
        "name": "Voyage Ventures",
        "blogUrl": "https://voyageventures.com",
        "bio": "Adventure travel, cultural insights and destination guides.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 78,
        "name": "Wanderlust Wonder",
        "blogUrl": "https://wanderlustwonder.com",
        "bio": "Travel tales and cultural experiences curated for intrepid explorers.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 79,
        "name": "Travel Trails",
        "blogUrl": "https://traveltrails.com",
        "bio": "Authentic travel experiences and comprehensive destination guides.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 80,
        "name": "Globe Chaser",
        "blogUrl": "https://globechaser.com",
        "bio": "Travel adventures and insights from a dedicated global explorer.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 81,
        "name": "Roaming Routes",
        "blogUrl": "https://roamingroutes.com",
        "bio": "Curated travel guides and inspiring travel narratives.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 82,
        "name": "Wanderlust Tribe",
        "blogUrl": "https://wanderlusttribe.com",
        "bio": "A community-driven travel blog featuring stories and destination guides.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 83,
        "name": "Pathfinder Journeys",
        "blogUrl": "https://pathfinderjourneys.com",
        "bio": "Travel inspiration and guides for the curious explorer.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 84,
        "name": "Roaming Rambler",
        "blogUrl": "https://roamingrambler.com",
        "bio": "Adventure travel tips and inspiring travel tales for wanderers.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 85,
        "name": "Travel Quest",
        "blogUrl": "https://travelquest.com",
        "bio": "Journeys, tips and destination guides for passionate travelers.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 86,
        "name": "The Nomad’s Notebook",
        "blogUrl": "https://thenomadsnotebook.com",
        "bio": "Personal travel stories and in-depth destination guides.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 87,
        "name": "Vagabond Voyager",
        "blogUrl": "https://vagabondvoyager.com",
        "bio": "Travel adventures, photography and cultural experiences from around the world.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 88,
        "name": "Global Journeys",
        "blogUrl": "https://globaljourneys.com",
        "bio": "Travel tips, guides and inspiring tales from global adventures.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 89,
        "name": "Roaming Realms",
        "blogUrl": "https://roamingrealms.com",
        "bio": "Travel photography, stories and adventure guides from around the world.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 90,
        "name": "Explorer's Edge",
        "blogUrl": "https://explorersedge.com",
        "bio": "Travel adventures, gear reviews and insider destination insights.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 91,
        "name": "Travel Tales",
        "blogUrl": "https://traveltales.com",
        "bio": "Personal travel stories and practical tips for modern adventurers.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 92,
        "name": "The Roaming Report",
        "blogUrl": "https://theroamingreport.com",
        "bio": "Travel insights, tips and cultural experiences from across the globe.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 93,
        "name": "Nomadic Insights",
        "blogUrl": "https://nomadicinsights.com",
        "bio": "Destination guides, travel tips and cultural stories for the modern nomad.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 94,
        "name": "Travel Ventures",
        "blogUrl": "https://travelventures.com",
        "bio": "Inspiring travel guides, tips and adventure stories from around the world.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 95,
        "name": "The Wandering Way",
        "blogUrl": "https://thewanderingway.com",
        "bio": "Personal travel stories, photography and destination guides.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 96,
        "name": "Journey Journal",
        "blogUrl": "https://journeyjournal.com",
        "bio": "Travel inspiration and practical guides for aspiring adventurers.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 97,
        "name": "Travel Pathways",
        "blogUrl": "https://travelpathways.com",
        "bio": "Curated travel guides and inspiring travel narratives.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 98,
        "name": "Vagabond Ventures",
        "blogUrl": "https://vagabondventures.com",
        "bio": "Adventurous travel guides and cultural insights from around the world.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 99,
        "name": "Wanderwise",
        "blogUrl": "https://wanderwise.com",
        "bio": "Travel insights, destination guides and inspiring travel stories.",
        "location": "USA",
        "favourite": false
      },
      {
        "id": 100,
        "name": "Epic Escapes",
        "blogUrl": "https://epicescapes.com",
        "bio": "Curated travel adventures and guides for epic journeys.",
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