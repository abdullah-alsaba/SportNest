export function mapFacility(item) {
  return {
    id: item._id,
    name: item.name,
    sport: item.sportType,
    location: item.location,
    price: item.pricePerHour,
    image: item.image,
    rating: item.rating,
    description: item.description,
    bookingsCount: item.bookingsCount,
  }
}

export function formatDate(dateValue) {
  const date = new Date(dateValue)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
