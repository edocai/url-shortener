const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrls");
const app = express();

mongoose.connect("mongodb://localhost/urlShortener", {
  //removes deprecation warnings
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.set("view engine", "ejs");
//middleware used to parse request body content-type that matches the type option
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  //shows all the stored Urls
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls: shortUrls });
});

app.post("/shortUrls", async (req, res) => {
  //gives access to full url property through form
  await ShortUrl.create({ full: req.body.fullUrl });

  res.redirect("/");
});

//searches and finds the specific short url and redirects to original url
app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++;
  //updates short url
  shortUrl.save();
  //redirects to original url
  res.redirect(shortUrl.full);
});

app.post("/delete/:shortUrl", async (req, res) => {
  //deletes the selected short url
  await ShortUrl.deleteOne({ short: req.params.shortUrl })

  res.redirect("/");
});

app.listen(process.env.PORT || 5000);
