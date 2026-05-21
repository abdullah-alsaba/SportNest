export const FEATURED_FACILITIES = [
  {
    id: '1',
    name: 'Elite Football Arena',
    sport: 'Football',
    location: 'Westside Sports Complex',
    price: 40,
    image:
      'https://images.unsplash.com/photo-1529900748604-07564a03e8a9?w=800&q=80',
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Grand Slam Badminton',
    sport: 'Badminton',
    location: 'Central Indoor Hub',
    price: 25,
    image:
      'https://images.unsplash.com/photo-1626224583764-f87db39efaa7?w=800&q=80',
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Aqua Sprint Pool',
    sport: 'Swimming',
    location: 'Riverside Aquatic Center',
    price: 35,
    image:
      'https://images.unsplash.com/photo-1576013551627-0cc20b96a821?w=800&q=80',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Premier Tennis Courts',
    sport: 'Tennis',
    location: 'Downtown Sports Park',
    price: 45,
    image:
      'https://images.unsplash.com/photo-1554068865-24cecd4e1b71?w=800&q=80',
    rating: 4.9,
  },
  {
    id: '5',
    name: 'Skyline Basketball Hub',
    sport: 'Basketball',
    location: 'Eastside Recreation Zone',
    price: 30,
    image:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
    rating: 4.6,
  },
  {
    id: '6',
    name: 'Victory Soccer Turf',
    sport: 'Football',
    location: 'North Valley Fields',
    price: 50,
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    rating: 5.0,
  },
]

export const ALL_FACILITIES = [
  ...FEATURED_FACILITIES,
  {
    id: '7',
    name: 'Premier Arena East',
    sport: 'Football',
    location: 'Downtown, Central Park',
    price: 45,
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    rating: 4.9,
  },
  {
    id: '8',
    name: 'Grand Court West',
    sport: 'Tennis',
    location: 'Westside, River Park',
    price: 38,
    image:
      'https://images.unsplash.com/photo-1554068865-24cecd4e1b71?w=800&q=80',
    rating: 4.7,
  },
  {
    id: '9',
    name: 'Hoops Central',
    sport: 'Basketball',
    location: 'Midtown Sports Hub',
    price: 32,
    image:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
    rating: 4.5,
  },
]

export const SPORT_TYPES = [
  'Football',
  'Tennis',
  'Basketball',
  'Swimming',
  'Badminton',
]

export const MOCK_BOOKINGS = [
  {
    id: '1',
    facilityName: 'Grand Slam Arena',
    details: 'Court 4 • Indoor Court',
    date: 'Oct 24, 2024',
    time: '18:00 - 20:00',
    price: 45,
    status: 'confirmed',
    image:
      'https://images.unsplash.com/photo-1554068865-24cecd4e1b71?w=200&q=80',
  },
  {
    id: '2',
    facilityName: 'Elite Football Turf',
    details: 'Field A • Outdoor Turf',
    date: 'Oct 28, 2024',
    time: '10:00 - 12:00',
    price: 90,
    status: 'pending',
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&q=80',
  },
  {
    id: '3',
    facilityName: 'Aqua Sprint Pool',
    details: 'Lane 2 • Olympic Pool',
    date: 'Sep 12, 2024',
    time: '07:00 - 08:00',
    price: 35,
    status: 'cancelled',
    image:
      'https://images.unsplash.com/photo-1576013551627-0cc20b96a821?w=200&q=80',
  },
]

export const MANAGE_FACILITIES = [
  {
    id: '1',
    name: 'Elite Tennis Arena',
    sport: 'Tennis',
    location: 'Downtown Sports Complex',
    price: 45,
    bookings: 124,
    image:
      'https://images.unsplash.com/photo-1554068865-24cecd4e1b71?w=200&q=80',
  },
  {
    id: '2',
    name: 'Skyline Basketball Hub',
    sport: 'Basketball',
    location: 'Eastside Recreation Zone',
    price: 30,
    bookings: 89,
    image:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=200&q=80',
  },
  {
    id: '3',
    name: 'Victory Soccer Turf',
    sport: 'Football',
    location: 'North Valley Fields',
    price: 50,
    bookings: 201,
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&q=80',
  },
]

export const WHY_CHOOSE = [
  {
    title: 'Easy Booking',
    description: 'Reserve your favorite court in just a few clicks.',
    icon: '📅',
  },
  {
    title: 'Professional Courts',
    description: 'Premium-grade facilities maintained to pro standards.',
    icon: '🏆',
  },
  {
    title: 'Instant Confirmation',
    description: 'Get real-time booking confirmation and reminders.',
    icon: '⚡',
  },
]

export const HOW_IT_WORKS = [
  { step: '01', title: 'Search', description: 'Find facilities by sport, location, or price.' },
  { step: '02', title: 'Book', description: 'Pick your date, time slot, and confirm instantly.' },
  { step: '03', title: 'Play', description: 'Show up and enjoy your game without hassle.' },
]

export function getFacilityById(id) {
  return ALL_FACILITIES.find((f) => f.id === id) || FEATURED_FACILITIES[0]
}
