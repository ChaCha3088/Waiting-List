const { Router } = require('express');

const router = Router();
const path = require('path');
const FoodList = require('../models/foodLists');
const WaitingLists = require('../models/waitingLists');

router.get("/:userID", (req, res, next) => {
    //userID 가져오기
    const userID = req.params.userID;

    

    //식당 리스트 보여주기
    const foodLists = FoodList.list();

    //현재 대기인원 보여주기
    const waitingLists = WaitingLists.countWaitingPeopleAll();
    res.json(waitingLists);



    //응답부
    res.json(foodLists, waitingLists);
    //HTML 보내기
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
    //json으로 여러개 어케 보냄?
    res.json(waitingLists);



    //프론트엔드
    //1. 이 json 응답을
    //클라이언트가 받아서 가공하여 페이지에 넣는 코드 작성 요망
    
    //html에 있는 식당 버튼을 클릭하면 userID와 함께 waitings.js로 연결 구현
});
//메인, 식당 페이지 랜더

//router.get("/lists", );
//json 응답을 보내줌

//html에서 js로 요청을 보내는 코드를 작성(ajax)


//메인, 식당 페이지 정보

module.exports = router;





