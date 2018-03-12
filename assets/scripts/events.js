const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changeSuccess)
    .catch(ui.changeFailure)
}

const onSignOut = function () {
  event.preventDefault()
  const data = getFormFields(this)
  api.signOut(data)
    .then(ui.deleteSuccess)
    .catch(ui.deleteFailure)
}

const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createMovie(data)
    .then(ui.createSuccessful)
    .catch(ui.createFailed)
}

const onShowAll = function (event) {
  event.preventDefault()
  api.showAllMovies()
    .then(ui.showAllMoviesSuccess)
    .catch(ui.showAllMoviesFailed)
}

const onUpdateMovie = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const movie = data.movie
  if (movie.title === '') {
    // alert('title required')
    $('#content').html('<p>Title is required</p>')
    $('#content').css('background-color', 'red')
    return false
  }
  if (movie.id.length !== 0) {
    api.updateMovie(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onError)
  } else {
    console.log('Please provide a movie id!')
  }
}

const onDeleteMovie = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const movie = data.movie
  if (movie.id.length !== 0) {
    api.deleteMovie(movie.id)
      .then(ui.onDeleteSuccess)
      .catch(ui.onError)
  } else {
    console.log('Please provide a movie id!')
  }
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create').on('submit', onCreate)
  $('#showAll').on('submit', onShowAll)
  $('#update').on('submit', onUpdateMovie)
  $('#delete').on('submit', onDeleteMovie)
}

module.exports = {
  addHandlers

}
