#!/bin/bash

API="${API_ORIGIN:-https://railsmovieapp.herokuapp.com/}"
URL_PATH="/movies"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  #--header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN"

echo
