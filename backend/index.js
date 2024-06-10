const express = require("express");
const cors = require("cors");

let posts = [
  {
    id: 1,
    title: "OPDL Soccer Game",
    description: "U21 Vaughan vs Woodbridge",
  },
  {
    id: 2,
    title: "League One Soccer Game",
    description: "U18 Toronto vs York",
  },
  {
    id: 3,
    title: "Highschool Rugby",
    description: "Girls' Highschool Rugby Game",
  },
  {
    id: 4,
    title: "test",
    description: "test",
  },
  {
    id: 5,
    title: "asdf",
    description: "asdf",
  },
];

const app = express();

app.use(cors());
app.use(express.static("dist"));

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/posts", (request, response) => {
  response.json(posts);
});

app.get("/api/posts/:id", (request, response) => {
  const id = Number(request.params.id);
  const post = posts.find((post) => post.id === id);
  if (post) {
    response.json(post);
  } else {
    response.status(404).end();
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
