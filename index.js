var express = require('express')

var app = express()

app.get('/movies', function (req, res) {
    res.json(
        [
            { name: "Star Wars.", rating: 1, watchAgain: false },
            { name: "Star Wars 2", rating: 1, watchAgain: false }

        ]
    )
})

app.listen(8080);