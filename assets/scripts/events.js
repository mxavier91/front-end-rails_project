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
    .then(ui.newGameCreated)
    .catch(ui.newGameFailed)
}

const onShowAll = function (event) {
  event.preventDefault()
  api.showAllMovies()
    .then(ui.showAllMoviesSuccess)
    .catch(ui.showAllMoviesFailed)
}

const onShowById = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const movie = data.movie
  if (movie.id.length !== 0) {
    api.showMovieById(movie.id)
      .then(ui.showMovieByIdSuccess)
      .catch(ui.showMovieByIdFailed)
  } else {
    console.log('Please provide a book id!')
  }
  console.log(data)
  console.log(movie)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#delete').on('submit', onSignOut)
  $('#create').on('submit', onCreate)
  $('#showAll').on('submit', onShowAll)
  $('#show-by-id').on('submit', onShowById)
}

module.exports = {
  addHandlers

}
