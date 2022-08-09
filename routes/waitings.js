const { Router } = require('express');
const router = Router();
const path = require('path');
const WaitingLists = require('../models/waitingLists');

router.get("/:foodID/:userID", (req, res, next) => {
    res.sendFile('waitings.html', { root: path.join(__dirname, '../public') });



    //WaitingLists.bringInfo()
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





//대기자로 이미 등록돼있으면 거절하는 기능도 추가해야함

module.exports = router;