const store = require('./store')
const showMovies = require('./templates/movie-listing.handlebars')
const showUsersMovies = require('./templates/users-movie-listings.handlebars')

const signUpSuccess = function (data) {
  $('#message').text('"You Had Me at Hello"-Sign up Success')
  $('#message').css('background-color', 'green')
  $('#email-field').val('')
  $('#password-field').val('')
  $('#password-conformation-field').val('')
  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('#message').text('"Houston, We Have a Problem"-Sign up Error')
  $('#message').css('background-color', 'red')
  $('#email-field').val('')
  $('#password-field').val('')
  $('#password-conformation-field').val('')
}

const signInSuccess = function (data) {
  $('#message').text('"Welcome to THUNDERDOME!!!!!"-Sign In Success')
  $('#message').css('background-color', 'green')
  $('#signInEmail').val('')
  $('#signInPassword').val('')
  $('#change-password').show()
  $('#sign-out').show()
  $('#create').show()
  $('#showAll').show()
  $('#update').show()
  $('#delete').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  store.user = data.user
}

const signInFailure = function (data) {
  $('#message').text('"DANGER Will Robinson DANGER"-Signed in Error')
  $('#message').css('background-color', 'yellow')
  $('#signInEmail').val('')
  $('#signInPassword').val('')
}

const changeSuccess = function () {
  $('#message').text('"May The Force Be With You"-Changed Password Successfully')
  $('#message').css('background-color', 'green')
  $('#oldPasswordField').val('')
  $('#newPasswordField').val('')
}

const changeFailure = function () {
  $('#message').text('"I Drink Your MilkShake!!!"-Error changing password')
  $('#message').css('background-color', 'red')
  $('#oldPasswordField').val('')
  $('#newPasswordField').val('')
}

const signOutSuccess = function () {
  $('#message').text('"I\'ll be Back"-Signed out Successfully')
  $('#message').css('background-color', 'green')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#create').hide()
  $('#showAll').hide()
  $('#update').hide()
  $('#delete').hide()
  $('#content').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}

const signOutFailure = function () {
  $('#message').text('"Get Your Stinking Paws Off Me, You damned dirty ape!!!"-Signout Error')
  $('#message').css('background-color', 'red')
}

const createSuccessful = function (data) {
  console.log(data)
  $('#message').text('"It\'s Alive, It\'s Alive!!!"-New Movie Added')
  $('#message').css('background-color', 'green')
  $('#newMovieField').val('')
  $('#newDirectorField').val('')
  $('#newActorField').val('')
  store.movie = data.movie
}

const createFailed = function (data) {
  $('#message').text('"Argo F@%# Yourself"-Error Adding Movie')
  $('#message').css('background-color', 'red')
  $('#newMovieField').val('')
  $('#newDirectorField').val('')
  $('#newActorField').val('')
}

const showAllMoviesSuccess = function (data) {
  console.log(data)
  const showMoviesHtml = showMovies({movies: data.movies})
  $('.content').html(showMoviesHtml)
}

const allUsersSuccess = function (data) {
  console.log(data)
  const showUsersMoviesHtml = showUsersMovies({users: data.users})
  $('#message').text('"It\'s Alive, It\'s Alive!!!"-New Movie Added')
  $('#message').css('background-color', 'green')
  $('#moreContent').html(showUsersMoviesHtml)
}

/*
const showAllMoviesFailed = function (data) {
  $('#message').text('Hold up one sec')
  $('#message').css('background-color', 'red')
}
*/

const updateSuccess = function (data) {
  $('#message').text('"I wish I knew how to quit you"-Successfully Update')
  $('#message').css('background-color', 'green')
  $('#movie-id-update').val('')
  $('#updateMovie').val('')
  $('#updateDirector').val('')
  $('#updateActor').val('')
}

const updateFailed = function (data) {
  $('#message').text('Hold up one sec, Update Failure')
  $('#message').css('background-color', 'red')
  $('#movie-id-update').val('')
  $('#updateMovie').val('')
  $('#updateDirector').val('')
  $('#updateActor').val('')
}

const deleteSuccessful = function () {
  $('#message').text('"Leave the gun. Take the Cannoli"-Delete Successfully')
  $('#message').css('background-color', 'green')
  console.log('deleteSuccessful')
}

const deleteFailed = function () {
  $('#message').text('Hold up one sec, Failed to Delete')
  $('#message').css('background-color', 'red')
}

const joinSuccessful = function (data) {
  console.log(data)
  $('#message').text('"It\'s Alive, It\'s Alive!!!"-New Movie Added')
  $('#message').css('background-color', 'green')
  store.movie = data.movie
}

const joinFailed = function (error) {
  console.log(error)
  $('#message').text('"Argo F@%# Yourself"-Error Adding Movie')
  $('#message').css('background-color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changeSuccess,
  changeFailure,
  signOutSuccess,
  signOutFailure,
  createSuccessful,
  createFailed,
  showAllMoviesSuccess,
  allUsersSuccess,
  updateSuccess,
  updateFailed,
  deleteSuccessful,
  deleteFailed,
  joinSuccessful,
  joinFailed
}
