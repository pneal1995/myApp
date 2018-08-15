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
router.get('/music/:speakerID', (req, res) => {

    let data = req.app.get("appData");
    let speakers = data.speakers[req.params.speakerID];


    res.send(`
    
        <li>
        <h1>${speakers.name}<br> </h1>
        <h4>${speakers.title} </h4>
        <img src="/images/albums/${speakers.shortname}_1.jpg" alt="">
        <p> ${speakers.description} </p>
        </li>
    `)
})

module.exports = router;