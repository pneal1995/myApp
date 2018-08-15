let express = require('express');
let router = express.Router();


router.get('/speakers', (req, res) => {

    let data = req.app.get("appData");

    res.render('speakers', {
        pageTitle: "Speakers",
        pageID: 'Speakers',
        speakers: data.speakers
})

})
module.exports = router;

