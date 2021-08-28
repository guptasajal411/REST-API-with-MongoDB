const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));

mongoose.connect("mongodb+srv://" + process.env.usernameMongoDB + ":" + process.env.password + "@cluster0.xgjts.mongodb.net/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true});

const articleSchema = {
    title: String,
    content: String
}

const Article = mongoose.model("Article", articleSchema);

app.route("/articles")

.get(function (req, res) {
    Article.find(function (err, foundArticles) {
        if(err){
            console.log(err);
        } else {
            res.json(foundArticles);
        }
    });
})

.post(function(req, res){
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    })
    newArticle.save(function(err){
        if (err) {
            res.send(err);
        } else {
            res.send("Successfully created a new article with title: " + req.body.title + ".");
        }
    });
})

.delete(function(req, res){
    Article.deleteMany(function(err){
        if (err) {
            res.send(err);
        } else {
            res.send("Successfully deleted all articles.");
        }
    });
});

app.route("/articles/:articleTitle")

.get(function(req, res) {
    Article.findOne({title: req.params.articleTitle}, function(err, foundArticle) {
        if (err) {
            res.send("No article with title: " + req.params.articleTitle + " was found in the database.");
        } else {
            res.json(foundArticle);
        }
    });
})

.put(function(req, res) {
    Article.updateOne({title: req.params.articleTitle}, {title: req.body.title, content: req.body.content}, function(err, result){
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
});

app.listen(PORT || 3000, function(){
    console.log('listening on port: ' + PORT);
});