# Format json from underline to a hump style.

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
