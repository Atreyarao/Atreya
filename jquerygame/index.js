var pc = [];
var user = [];
var color = ["green", "red", "yellow", "blue"];
var level = 0;
var started = false;
$(document).keydown(function (event) {
    if (!started) {
        started = true;
        startgame();
    }
});

function startgame() {
    level++;
    $("#level-title").text("Level " + level);
    var n = Math.floor(Math.random() * 4);
    pc.push(n);

    press(color[n]);

}
$(".btn").on("click", function () {

    var id = this.id;
    // user.push(color.findIndex(id));
    var ind = index(color, id)
    press(color[ind]);
    user.push(ind);
    // console.log(user);

    checkAns();

});
function checkAns() {
    if (user.length === pc.length) {
        if (JSON.stringify(pc) !== JSON.stringify(user)) {
            lost();
        } else {
            setTimeout(function () {
                user = [];
                startgame();
            }, 1000);

        }
    } else {
        for (let i = 0; i < user.length; i++) {
            if (user[i] != pc[i]) {
                lost();
            }
        }
    }
}
function lost() {
    user = [];
    pc = [];
    $("#level-title").text("you lost");
    level = 0;
    started = false;
}
function index(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value)
            return i;
    }
    return -1;
}
function playsound(str) {
    var audio = new Audio("sounds/" + str + ".mp3");
    audio.play();
}
function press(str) {
    $("#" + str).addClass("pressed");
    playsound(str);
    setTimeout(function () {
        $("#" + str).removeClass("pressed");
    }, 100);
}