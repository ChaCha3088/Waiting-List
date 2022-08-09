//?서버 재시작할 경우 waitingLists의 userIDAndTimestamp 초기화 해야함



let waitingLists = [
    {
        "foodID": 1,
        "foodName": "회오리 감자",
        "userIDAndTimestamp": {
            3483: 202204061800,
            5012: 202208081800,
        },
    },
    {
        "foodID": 2,
        "foodName": "누구네 가게 1",
        "userIDAndTimestamp": {
            5675: 202205061800,
        },
    },
    {
        "foodID": 3,
        "foodName": "누구네 가게 2",
        "userIDAndTimestamp": {
            7895: 202205071800,
            3560: 202205091100,
        },
    },
];



exports.countWaitingPeopleAll = () => {
    let Lists=[];
    waitingLists.map(
        (item) => {
            Lists.push({
                'foodID': item['foodID'],
                'foodName': item['foodName'],
                'userIDAndTimestamp': item['userIDAndTimestamp'],
                'userCount': Object.keys(item['userIDAndTimestamp']).length,
            });
    });
    return Lists;
}



exports.createWaiting = (foodID, userID) => {
    //대기표 추가 기능
    //1. userID와 일치하는 대기표가 이미 존재하는지 확인
    //이미 만들어진게 없다면, 이미 등록되었다는 알림창을 띄우고
    //`/tickets/${foodID}/${userID}`로 redirect

    //이미 만들어진게 없다면
    //waitingLists에 추가하는 함수
    //대기 등록 버튼을 누르면 그 가게의 foodID와 userID, 그리고 Timestamp를 전달받아 waitingLists.js에 기록
    //waitingLists 객체 안에 userIDAndTimestamp 안에 키와 밸류 형태로 넣습니다.
    //키는 userID 밸류는 현재 날짜와 시간(yyyymmddHHmm)
    return 
}



exports.deleteWaiting = (foodID, userID) => {
    userID = Number(userID);

    const index = waitingLists.findIndex((list) => list.foodID == foodID);
    if (index < 0) {
        throw new Error('User not found for delete.');
    }
    
    delete waitingLists[index].userIDAndTimestamp[`${userID}`];
}


exports.bringInfo = (foodID) => {
    //waitingLists.js에서 가게 이름, 대기자 수 가져오기
    let info = waitingLists.find(e => e.foodID == `${foodID}`);
    return info;
}