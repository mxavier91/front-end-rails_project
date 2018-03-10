#!/bin/bash

API="${API_ORIGIN:-https://railsmovieapp.herokuapp.com/}"
URL_PATH="/movies/${ID}"
curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
