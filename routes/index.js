let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    
    let data = req.app.get("appData");

    res.render('index', {
                    pageTitle: "Index",
                    pageID: 'Home',
                    speakers: data.speakers
            })

})



module.exports = router;