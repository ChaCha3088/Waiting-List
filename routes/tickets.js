const { Router } = require('express');
const router = Router();
const path = require('path');
const WaitingLists = require('../models/waitingLists');



router.get("/:foodID/:userID", (req, res, next) => {
    //foodID와 userID에 가게이름 넘어와야할 듯?
    const foodID = req.params.foodID;
    const userID = req.params.userID;

    res.sendFile('tickets.html', { root: path.join(__dirname, '../public') });

    //waitingLists.js를 참고하여 가게에 맞는 정보 및 현재대기인원 함수 사용
});



router.delete('/:foodID/:userID', (req, res, next) => {
    const foodID = req.params.foodID;
    const userID = req.params.userID;
    const deletition = WaitingLists.deleteWaiting(foodID, userID);
    res.json(deletition);
});



//router.get("/:userID/info",);
//메인, 식당 페이지 정보

module.exports = router;