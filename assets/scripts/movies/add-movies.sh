#!/bin/bash
API="${API_ORIGIN:-https://railsmovieapp.herokuapp.com/}"
URL_PATH="/movies"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "movie": {
      "title": "'"${TITLE}"'",
      "director": "'"${DIRECTOR}"'",
      "actor": "'"${ACTOR}"'"
    }
  }'

echo
