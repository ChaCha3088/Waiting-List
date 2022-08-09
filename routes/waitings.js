const { Router } = require('express');
const router = Router();
const path = require('path');
const WaitingLists = require('../models/waitingLists');



router.get("/:foodID/:userID", (req, res, next) => {
    res.sendFile('waitings.html', { root: path.join(__dirname, '../public') });


    const foodID = req.params.foodID;
    const infoResult = WaitingLists.bringInfo(foodID);
    res.json(infoResult);

    //?waitingLists.js에서 가게 이름, 대기자 수 가져오기
    //?foodID가 같은 것 찾고, 대기자 수 return
});



//대기자 등록 기능
router.post('/:foodID/:userID', (req, res, next) => {
    const foodID = req.params.foodID;
    const userID = req.params.userID;
    const ticket = WaitingLists.createWaiting(foodID, userID);
    res.json(ticket);
    res.redirect(`/tickets/${foodID}/${userID}`)
});



router.get('/:foodID/:userID/debug', (req, res, next) => {
    const foodID = req.params.foodID;
    const userID = req.params.userID;
    const deletition = WaitingLists.deleteWaiting(foodID, userID);
    res.json(deletition);
});



module.exports = router;