const store = require('./store')
const showMovies = require('./templates/movie-listing.handlebars')

const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully')
  $('#message').css('background-color', 'green')
  $('#email-field').val('')
  $('#password-field').val('')
  $('#password-conformation-field').val('')
  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('#message').text('Signed up Failure')
  $('#message').css('background-color', 'red')
  $('#email-field').val('')
  $('#password-field').val('')
  $('#password-conformation-field').val('')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in Successfully')
  $('#message').css('background-color', 'blue')
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
  $('#message').text('Signed in Error')
  $('#message').css('background-color', 'yellow')
  $('#signInEmail').val('')
  $('#signInPassword').val('')
}

const changeSuccess = function () {
  $('#message').text('Changed Password Successfully')
  $('#message').css('background-color', 'green')
  $('#oldPasswordField').val('')
  $('#newPasswordField').val('')
}

const changeFailure = function () {
  $('#message').text('Error changing password')
  $('#message').css('background-color', 'red')
  $('#oldPasswordField').val('')
  $('#newPasswordField').val('')
}

const signOutSuccess = function () {
  $('#message').text('Signed out Successfully')
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
  $('#message').text('Error Signing Out')
  $('#message').css('background-color', 'red')
}

const createSuccessful = function (data) {
  console.log(data)
  $('#message').text('Let\'s do this!!!!!')
  $('#message').css('background-color', 'blue')
  $('#newMovieField').val('')
  $('#newDirectorField').val('')
  $('#newActorField').val('')
  store.movie = data.movie
}

const createFailed = function (data) {
  $('#message').text('Hold up one sec')
  $('#message').css('background-color', 'red')
  $('#newMovieField').val('')
  $('#newDirectorField').val('')
  $('#newActorField').val('')
}

const showAllMoviesSuccess = function (data) {
  console.log(data)
  const showMoviesHtml = showMovies({movies: data.movies})
  $('#message').text('Here ya Go!!!')
  $('#message').css('background-color', 'blue')
  $('.content').html(showMoviesHtml)
}

const showAllMoviesFailed = function (data) {
  console.log(data)
  if (data.length === 0) {
    $('#message').text('Hold up one sec')
    $('#message').css('background-color', 'red')
  }
}

const updateSuccess = function (data) {
  $('#message').text('Hold up one sec')
  $('#message').css('background-color', 'red')
  $('#movie-id-update').val('')
  $('#updateMovie').val('')
  $('#updateDirector').val('')
  $('#updateActor').val('')
}

const updateFailed = function (data) {
  $('#message').text('Hold up one sec')
  $('#message').css('background-color', 'red')
}

const deleteSuccessful = function () {
  $('#message').text('Delete Successfully')
  $('#message').css('background-color', 'green')
}

const deleteFailed = function () {
  $('#message').text('Hold up one sec')
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
  showAllMoviesFailed,
  updateSuccess,
  updateFailed,
  deleteSuccessful,
  deleteFailed
}
