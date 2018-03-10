#!/bin/bash

API="${API_ORIGIN:-https://railsmovieapp.herokuapp.com/}"
URL_PATH="/movies/${ID}"
curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "movie": {
      "title": "'"${TITLE}"'",
      "director": "'"${DIRECTOR}"'",
      "actor": "'"${ACTOR}"'"
    }
  }'

echo
