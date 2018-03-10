#!/bin/bash

API="${API_ORIGIN:-https://railsmovieapp.herokuapp.com/}"
URL_PATH="/movies/${ID}"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"
  #--header "Content-Type: application/json" \

echo
