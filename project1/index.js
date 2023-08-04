const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
     bodyParser.urlencoded({
          extended: true,
     })
);

app.listen(3000, () => console.log("connect to server"));

app.get("/", (_req, res) => {
     res.send("Server is start  running");
});


const routes = require("./routes/routes")

app.use("/routes", routes)
