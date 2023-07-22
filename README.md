# Format json from underline to a hump style.

Please try in https://onyas.github.io/json-format/

## examples

input.json

```json
{
  "user_name": "Jack",
  "user_address": "New York",
  "age": 18,
  "books": ["", ""]
}
```

After format, output.json

```
{
  "userName": "Jack",
  "userAddress": "New York",
  "age": 18,
  "books": [
    "",
    ""
  ]
}
```

# Getting Started with Create React App

- `npm install -g create-react-app`
- `npx create-react-app json-format`
- `cd json-format`
- `npm start`

# How to publish

- `npm install gh-pages --save-dev`

When there are new changes, execute this command to deploy the latest code

- `npm run deploy`
