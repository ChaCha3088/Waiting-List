const { Router } = require('express');

const router = Router();
const path = require('path');
const FoodList = require('../models/foodLists');
const WaitingLists = require('../models/waitingLists');



router.get("/json", (req, res, next) => {
    //userID 가져오기
    const userID = req.params.userID;



    //식당 리스트와 대기인원 보여주기
    const resultAll = WaitingLists.showAll();



    //응답부
    res.json(resultAll);
});



router.get("/:userID", (req, res, next) => {
    //HTML 보내기
    res.sendFile('lists.html', { root: path.join(__dirname, '../public') });
});



module.exports = router;