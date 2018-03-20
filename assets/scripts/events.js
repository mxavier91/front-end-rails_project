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
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
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
    // .catch(ui.showAllMoviesFailed)
  $('#content').toggle()
}

const onUpdateMovie = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateMovie(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailed)
}
/*
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
*/

const onDeleteMovie = (event) => {
  event.preventDefault()
  const id = event.target.dataset.id
  api.deleteMovie(id)
    .then(ui.deleteSuccessful)
    .then(() => onShowAll(event))
    .catch(ui.deleteFailed)
}

const onShowAllUsers = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getAllUsers(data)
    .then(ui.allUsersSuccess)
    .catch(ui.allUserFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create').on('submit', onCreate)
  $('#showAll').on('click', onShowAll)
  $('#update').on('submit', onUpdateMovie)
  // $('#delete').on('submit', onDeleteMovie)
  $('#content').on('click', '.movie-delete', onDeleteMovie)
  $('#all-users').on('submit', onShowAllUsers)
}

module.exports = {
  addHandlers

}
