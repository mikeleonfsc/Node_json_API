var express = require('express')

var app = express()

app.get('/movies', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*') 
    res.json(
        [
            { name: "Star Wars.", rating: 1, watchAgain: false },
            { name: "Star Wars 2", rating: 1, watchAgain: false },
            { name: "Bull Durham", rating: 3, watchAgain: false }

        ]
    )
})

app.listen(8080);