

export const userFormatter = (user) => ({
  fullName: user.name.first + " " + user.name.last,
  thumbnail: user.picture.thumbnail,
  picture: user.picture.large,
  location: user.location.state + " " + user.location.city,
  email: user.email,
  phone: user.phone,
  registeredDate: user.dob.date.slice(0, 10).split("-").reverse().join("/"),
})