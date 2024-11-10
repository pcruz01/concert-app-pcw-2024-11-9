let express = require("express");
let app = new express();                                                                     

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"concert-db.czq0ggww0r1o.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "gocougs!",
  database:"paradies-concerts",
  port: 3306,
 },
});

app.get("/",(req,res) => {
 knex
 .select()
 .from("venues")
 .then((result) => {
  console.log(result);
  res.send(result);
 }); 
});
app.listen(3000);
