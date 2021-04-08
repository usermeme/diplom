const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
// Allow all requests from all domains & localhost
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "Content-Range");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const regions = [
  {
    id: "1",
    name: "Brest",
  },
  {
    id: "2",
    name: "Vitebsk",
  },
  {
    id: "3",
    name: "Gomel",
  },
  {
    id: "4",
    name: "Grodno",
  },
  {
    id: "5",
    name: "Minsk",
  },
  {
    id: "6",
    name: "Mogilev",
  },
];

// type can be Pie | Line | Scatter | Bar | HorizontalBar | Radar | Polar | Bubble
const region = {
  id: "1",
  name: "Brest",
  charts: [
    {
      id: "1",
      title: "test",
      type: "Bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80, 81, 56, 55, 40],
          },
        ],
      },
    },
  ],
};

app.get("/region", (req, res) => {
  res.setHeader("Content-Range", regions.length);
  res.send(regions);
});

app.get("/region/:id", (req, res) => {
  res.send(region);
});

app.listen(5000);
