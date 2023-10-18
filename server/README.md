**Schema**

| user          |
| ------------- |
| \_id          | ObjectId
| first_name    | String
| last_name     | String
| email         | String
| password_hash | String


| survey    |
| --------- |
| \_id      | ObjectId
| user_id   | ObjectId (References User)
| title     | String
| questions | Array of ObjectId (References Question)


| question  |
| --------- |
| \_id      | ObjectId
| survey_id | ObjectId (References Survey)
| text      | String
| type      | String (e.g., 'text', 'multiple-choice', etc.)
| options   | Array of String (for multiple-choice questions)


| response   |
| ---------- |
| \_id       | ObjectId
| questionId | ObjectId (References Question)
| answers    | Array (Data type depends on the type of question)