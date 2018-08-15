let express = require('express');
let router = express.Router();


router.get('/music', (req, res) => {

    let data = req.app.get("appData");

    res.render('music', {
        pageTitle: "Music",
        pageID: 'Home',
        speakers: data.speakers
    })

})


// router.get('/music/:speakerID', (req, res) => {

//     let data = req.app.get("appData");
//     let speakers = data.speakers[req.params.speakerID];


//     res.render('individuals', {
//         pageTitle: "Individuals",
//         pageID: 'Home',
//         speakers: data.speakers
//     })

    

// })

module.exports = router;