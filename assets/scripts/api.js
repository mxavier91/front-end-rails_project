const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/',
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createMovie = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showAllMovies = function () {
  return $.ajax({
    url: config.apiOrigin + '/movies',
    method: 'GET',
    headers: {
      // contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMovie = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + data.movie.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

/*
const deleteMovie = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + id,
    method: 'DELETE',
    headers: {
      ContentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}
*/

const deleteMovie = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAllUsers = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/users',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addMovie = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/movies',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getAllMovies = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/users',
    method: 'GET',
    headers: {
      contentType: 'application/json'
      // Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createMovie,
  showAllMovies,
  updateMovie,
  deleteMovie,
  getAllUsers,
  addMovie,
  getAllMovies
}
