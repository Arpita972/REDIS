const express = require('express');
const axios = require("axios").default
const client = require("./client")
const app = express();
const port = 8000;
const string = require("./string")


app.get("/test", async (req, res) => {
  const cathchValue = await client.get("todos")
  if (cathchValue) return res.json(JSON.parse(cathchValue))
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
  await client.set("todos",JSON.stringify(data))
  await client.expire("todos",30)
  return res.json(data)
})


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});