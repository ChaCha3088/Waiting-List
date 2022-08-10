const { Router } = require('express');
const router = Router();
const path = require('path');
const WaitingLists = require('../models/waitingLists');



router.get("/:foodID/:userID", (req, res, next) => {
    const foodID = req.params.foodID;



    res.sendFile('tickets.html', { root: path.join(__dirname, '../public') });



    //waitingLists.js를 참고하여 가게에 맞는 정보 및 현재대기인원 함수 사용
    const infoResult = WaitingLists.bringInfo(foodID);
    res.json(infoResult);
});



router.delete('/:foodID/:userID', (req, res, next) => {
    const foodID = req.params.foodID;
    const userID = req.params.userID;
    const deletition = WaitingLists.deleteWaiting(foodID, userID);
    res.json(deletition);
});



module.exports = router;