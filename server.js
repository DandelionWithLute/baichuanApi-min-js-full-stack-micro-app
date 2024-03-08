const express = require("express");
const app = express();
const port = 8383;
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ info: "preset text bee" });
});

app.post("/post", async (req, res) => {
  const { parcel } = await req.body;
  console.log(parcel);
  if (!parcel) {
    return res.status(400).send({ status: "failed" });
  }
  res.status(200).send({ status: "received" });
});

app.listen(port, () =>
  console.log(`Server has been started on http://localhost:${port}`)
);
