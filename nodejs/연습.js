function login(id, pw, cb) {
    setTimeout(function(){
        console.log("사용자 입장");
        cb(id);
    }, 3000);
}
function getVideo(id, cb) {
    setTimeout(function(){
        console.log( id + "의 비디오 리스트");
        cb( ['아바타', '라라랜드']);
    }, 2000);
}
function getDetail(video, cb) {
    setTimeout(function() {
        cb("비디오 제목 : " + video);
    }, 1000);
}

login('kim', '1234', function(user){
    getVideo(user, function(videos){
        getDetail(videos[0], function(msg){
            console.log( msg );
        });
    });
});

// 21번줄 msg가 15번의 cb안에있는내용임 