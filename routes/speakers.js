let express = require('express');
let router = express.Router();


router.get('/speakers', (req, res) => {

    let dataFile = req.app.get("appData");
    let myHTML;

    res.render('index', {
        pageTitle: "Speakers",
        pageID: 'Home',
        speakers: data.speakers
})

    dataFile.speakers.forEach(function(item){
        myHTML += `
        <li>
            <h2>${item.name}</h2>
            <img src="/images/speakers/${item.shortname}.jpg" alt="">
            <p>${item.summary}</p>
        </li>
        `; 

    })
    res.send(`
    <h1>Speakers</h1>
    <ul>
        ${myHTML}
    </ul>
    `)

})


router.get('/speakers/:speakerID', (req, res) => {

    let dataFile = req.app.get("appData");
    let speaker = dataFile.speakers[req.params.speakerID];

})

module.exports = router;

