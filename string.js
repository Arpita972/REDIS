const client = require("./client")

async function init(){
  await client.set("user:3", "hello node js")
  const result = await client.get("user:3")
  console.log(result)
}

init()