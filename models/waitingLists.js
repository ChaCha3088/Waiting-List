//?서버 재시작할 경우 waitingLists의 userIDAndTimestamp 초기화 해야함



let waitingLists = [
    {
        "foodID": 1,
        "foodName": "누구 가게 0",
        "userIDAndTimestamp": {
            3483: 20220406180000,
            5012: 20220808180000,
        },
    },
    {
        "foodID": 2,
        "foodName": "누구네 가게 1",
        "userIDAndTimestamp": {
            5675: 20220506180000,
        },
    },
    {
        "foodID": 3,
        "foodName": "누구네 가게 2",
        "userIDAndTimestamp": {
            7895: 20220507180000,
            3560: 20220509110000,
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



exports.createWaiting = (foodID, userID, currentTime) => {
    //대기표 추가 함수

    currentTime = Number(currentTime);

    const index = waitingLists.findIndex((list) => list.foodID == foodID);

    const isThere = waitingLists[index].userIDAndTimestamp[`${userID}`];

    if (isThere) {
        return `/tickets/${foodID}/${userID}`;
    } else {
        console.log({userID: currentTime});
        waitingLists[index].userIDAndTimestamp[`${userID}`] = currentTime;
        console.log(waitingLists);
        return `/tickets/${foodID}/${userID}`;        
    }
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



exports.currentTimeIs = () => {
    let today = new Date();

    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);
    let hours = ('0' + today.getHours()).slice(-2); 
    let minutes = ('0' + today.getMinutes()).slice(-2);
    let seconds = ('0' + today.getSeconds()).slice(-2);

    let dateString = year + month + day;
    let timeString = hours + minutes  + seconds;
    let result = dateString + timeString;

    return result;
}