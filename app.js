const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const port = 3000;

app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs",
    helpers: {
      getShortComment(comment) {
        if (comment.length < 64) {
          return comment;
        }

        return comment.substring(0, 61) + "...";
      },
    },
  })
);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    posts: [
      {
        author: "Bidmus Ade",
        image: "https://picsum.photos/500/500",
        comments: [
          "This is the first comment",
          "This is the second comment",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec fermentum ligula. Sed vitae erat lectus.",
        ],
      },
      {
        author: "Ola Bode",
        image: "https://picsum.photos/500/500?2",
        comments: [],
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`the web server has started on port ${port}`);
});
