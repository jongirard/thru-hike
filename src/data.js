const points = [
  {
    "name": "Monson Post Office",
    "trail_mile": 114.5,
    "address": "General Delivery",
    "city": "Monson",
    "state": "ME",
    "zip": 2356,
    "latitude": 45.28602,
    "longitude": -69.500172,
    "notes": null
  },
  {
    "name": "Lakeshore House Lodge & Pub",
    "trail_mile": 114.5,
    "address": "9 Tenney Hill Road\nPO Box 307",
    "city": "Monson",
    "state": "ME",
    "zip": 2356,
    "latitude": 45.28567,
    "longitude": -69.499751,
    "notes": "$25/night"
  },
  {
    "name": "Shaw’s Hiker Hostel",
    "trail_mile": 114.5,
    "address": "17 Pleasant St",
    "city": "Monson",
    "state": "ME",
    "zip": 2356,
    "latitude": 45.286775,
    "longitude": -69.503159,
    "notes": "$30, $5 mail drop for non guest"
  },
  {
    "name": "Caratunk Post Office",
    "trail_mile": 151.2,
    "address": "General Delivery",
    "city": "Caratunk",
    "state": "ME",
    "zip": 4925,
    "latitude": 45.233924,
    "longitude": -69.991709,
    "notes": "Open M-F 2:00pm to 4:00pm, Sat 7:30am to 11:15am"
  },
  {
    "name": "Sterling Inn ",
    "trail_mile": 151.2,
    "address": "PO Box 129",
    "city": "Caratunk",
    "state": "ME",
    "zip": 4925,
    "latitude": 45.219073,
    "longitude": -69.987611,
    "notes": "Resupply and hostel, $40/night"
  },
  {
    "name": "Mountain View Hotel & Campground",
    "trail_mile": 188.2,
    "address": "4755 Carrabassett Rd",
    "city": "Stratton",
    "state": "ME",
    "zip": 4982,
    "latitude": 45.123989,
    "longitude": -70.413172,
    "notes": "Cabins & campsites"
  },
  {
    "name": "Hiker Hut",
    "trail_mile": 220.4,
    "address": "2 Pine Rd",
    "city": "Sandy River Plt",
    "state": "ME",
    "zip": 4970,
    "latitude": 44.89041,
    "longitude": -70.54007,
    "notes": "$35/night"
  },
  {
    "name": "Pine Ellis Lodge",
    "trail_mile": 256.9,
    "address": "20 Pine St",
    "city": "Andover",
    "state": "ME",
    "zip": 2190,
    "latitude": 44.633988,
    "longitude": -70.754834,
    "notes": "$25/night"
  },
  {
    "name": "Gorham Post Office",
    "trail_mile": 298.4,
    "address": "General Delivery",
    "city": "Gorham",
    "state": "NH",
    "zip": 3581,
    "latitude": 44.390025,
    "longitude": -71.182424,
    "notes": "M-F 8:30am 5:00pm"
  },
  {
    "name": "AMC Highland Center",
    "trail_mile": 345.4,
    "address": "Route 302",
    "city": "Bretton Woods",
    "state": "NH",
    "zip": 1916,
    "latitude": 44.219936,
    "longitude": -71.412169,
    "notes": null
  },
  {
    "name": "North Woodstock Post Office",
    "trail_mile": 373.1,
    "address": "General Delivery",
    "city": "North Woodstock",
    "state": "NH",
    "zip": 1714,
    "latitude": 44.033622,
    "longitude": -71.686937,
    "notes": "M-F 9:30pm-4:30pm"
  },
  {
    "name": "Hikers Welcome Hostel",
    "trail_mile": 398.9,
    "address": "1396 NH Rt 25\nPO Box 25",
    "city": "Glenclif",
    "state": "NH",
    "zip": 3238,
    "latitude": 43.986349,
    "longitude": -71.896039,
    "notes": "$35/night"
  },
  {
    "name": "Hanover Post Office",
    "trail_mile": 442.2,
    "address": "General Delivery\n50 S Main St",
    "city": "Hanover",
    "state": "NH",
    "zip": 2029,
    "latitude": 43.700477,
    "longitude": -72.289149,
    "notes": null
  },
  {
    "name": "Greenbrier Inn",
    "trail_mile": 485.7,
    "address": "2057 US-4",
    "city": "Killington",
    "state": "VT",
    "zip": 3049,
    "latitude": 43.66728,
    "longitude": -72.80929,
    "notes": null
  },
  {
    "name": "The Lodge at Bromley",
    "trail_mile": 539.1,
    "address": "4216 VT Rt 11",
    "city": "Peru",
    "state": "VT",
    "zip": 5148,
    "latitude": 43.212416,
    "longitude": -72.936482,
    "notes": null
  },
  {
    "name": "Bennington Post Office",
    "trail_mile": 579.2,
    "address": "118 South St",
    "city": "Bennington",
    "state": "VT",
    "zip": 2689,
    "latitude": 42.8775513,
    "longitude": -73.1969569,
    "notes": null
  },
  {
    "name": "Cheshire Post Office",
    "trail_mile": 612.1,
    "address": "General Delivery\n214 Church St",
    "city": "Cheshire",
    "state": "MA",
    "zip": 661,
    "latitude": 42.5618445,
    "longitude": -73.1578712,
    "notes": "M-F 7:30am-4:30pm"
  },
  {
    "name": "Berkshire Lakeside Lodge",
    "trail_mile": 640,
    "address": "3949 Jacob’s Ladder Rd",
    "city": "Becket",
    "state": "MA",
    "zip": 659,
    "latitude": 42.2900594,
    "longitude": -73.1556328,
    "notes": null
  },
  {
    "name": "Salisbury Post Office",
    "trail_mile": 690,
    "address": "22 Main St",
    "city": "Salisbury",
    "state": "CT",
    "zip": 6068,
    "latitude": 41.9821073,
    "longitude": -73.4222798,
    "notes": "M-F 8:30am-5:00pm"
  },
  {
    "name": "Kent Post Office",
    "trail_mile": 722.1,
    "address": "31 Kent Green Blvd",
    "city": "Kent",
    "state": "CT",
    "zip": 3567,
    "latitude": 41.727246,
    "longitude": -73.4718365,
    "notes": null
  },
  {
    "name": "Bear Mountain Inn",
    "trail_mile": 787.7,
    "address": "55 Hessian",
    "city": "Highlands",
    "state": "CT",
    "zip": 10926,
    "latitude": 41.3196028,
    "longitude": -73.9926904,
    "notes": null
  },
  {
    "name": "Lake Lodging",
    "trail_mile": 821,
    "address": "1145 Route 17A",
    "city": "Greenwood Lake",
    "state": "NY",
    "zip": 10925,
    "latitude": 41.2249755,
    "longitude": -74.2849272,
    "notes": null
  },
  {
    "name": "Mohican Outdoor Center",
    "trail_mile": 886.8,
    "address": "50 Camp Mohican Rd",
    "city": "Blairstown",
    "state": "NJ",
    "zip": 7825,
    "latitude": 41.0350028,
    "longitude": -75.0016245,
    "notes": null
  },
  {
    "name": "Delaware Water Gap Post Office",
    "trail_mile": 898,
    "address": "2 Shepard Ct",
    "city": "Delaware Water Gap",
    "state": "PA",
    "zip": 18327,
    "latitude": 40.978249,
    "longitude": -75.149277,
    "notes": null
  }
]
const features = points.map(p => ( {type: 'Feature', geometry: {type: 'Point', coordinates: [p.longitude, p.latitude] }}))

const featureCollection = { type: "FeatureCollection", features }

export default featureCollection
