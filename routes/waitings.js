const { Router } = require('express');
const router = Router();
const path = require('path');
const WaitingLists = require('../models/waitingLists');

router.get("/:foodID/:userID", (req, res, next) => {
    res.sendFile('waitings.html', { root: path.join(__dirname, '../public') });
    //waitingLists.js에서 가게 이름 가져오기
    //현재대기인원을 가져오는 waitingLists.js에 기록된 userID의 개수를 세는 model(현재대기인원 함수) 구현
    //완료
    
});
//식당 별 대기자 리스트 페이지 랜더
// router.get("/waitings/:id/lists", );
// 식당별 대기자 리스트 정보



//대기자 등록 기능
router.post('/:foodID/:userID', (req, res, next) => {
    const foodID = req.params.foodID;
    const userID = req.params.userID;
    const ticket = WaitingLists.createWaiting(foodID, userID);
    res.json(ticket);
});



//대기 등록 버튼을 누르면 그 가게의 foodID와 userID, 그리고 Timestamp를 전달받아 waitingLists.js에 기록
//router.post("/waitings/:userID", );
//대기 등록 후 userID와 함께 tickets.js로 redirect

//대기자로 이미 등록돼있으면 거절하는 기능도 추가해야함

module.exports = router;