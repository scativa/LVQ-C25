const express = require('express')
const config = require('config')
const app = express()
const port = config.get("port")
const cors = require("cors");
const DbFactory = require('./db/dbFactory.js');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbFactory = new DbFactory();
const db = dbFactory.db;
console.log("Usando base de datos " + db.type);

app.get('/rectificados', async (req, res) =>  {
  res.header("Access-Control-Allow-Origin", "*");
  const list = await db.getAll("Rectificados");
  res.json(list);
})

app.get('/genres', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json( await db.getAll("genres"));
})

app.delete('/delete_rectificado/:id', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  await db.deleteItem("Rectificados", req.params.id);
  console.log("Rectificados " + req.params.id + "deleted");
})

app.get('/entorno', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(process.env.UNA_VARIABLE_DE_ENTORNO);
})

app.get('/about', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("LVQ-C25-back");
})

app.post('/add_rectificado', async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const result = await db.insert("Rectificados", req.body);  
  console.log(`A document was inserted with the _id: ${result.insertedId}`);
  console.log(req.body);
  res.end();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


