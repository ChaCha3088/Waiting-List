const { Router } = require('express');
const router = Router();
const path = require('path');
const WaitingLists = require('../models/waitingLists');



router.get("/:foodID/:userID", (req, res, next) => {
    res.sendFile('waitings.html', { root: path.join(__dirname, '../public') });

    const foodID = req.params.foodID;
    const infoResult = WaitingLists.bringInfo(foodID);
    res.json(infoResult);
    //?html와 css 보내주기
});



//대기자 등록 기능
router.post('/:foodID/:userID', (req, res, next) => {
    const currentTime = WaitingLists.currentTimeIs();
    const foodID = req.params.foodID;
    const userID = req.params.userID;
    const ticket = WaitingLists.createWaiting(foodID, userID, currentTime);
    res.redirect(ticket);
});



module.exports = router;