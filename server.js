const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://" + process.env.usernameMongoDB + ":" + process.env.password + "@cluster0.xgjts.mongodb.net/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true});

const articleSchema = {
    title: String,
    content: String
}

const Article = mongoose.model("Article", articleSchema);

app.get("/articles", function (req, res) {
    Article.find(function (err, foundArticle) {
        if(err){
            console.log(err);
        } else {
            res.json(foundArticle);
        }
    })
})

app.listen(PORT || 3000, function(){
    console.log('listening on port: ' + PORT);
});