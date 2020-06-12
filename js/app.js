function scroll() {
    const control = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
            duration: "400%",
            triggerElement: ".about-title",
            triggerHook: 0,
        })
        .setPin(".about-title")

    .addTo(control);
}
scroll();

var card = document.getElementsByClassName("card");
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", () => {});
}

var more = document.getElementById("more");
var cont = document.getElementById("more-container");

more.addEventListener("click", function() {
    if (cont.style.display === "none") {
        console.log("baldh");
        cont.style.display = "block";
        more.innerHTML = "View Less";
    } else {
        console.log("baldasf");
        cont.style.display = "none";
        more.innerHTML = "View More";
    }
});
var cardContainer, introPositon, timeContainer, timePosition, i;

function scrollAppear() {
    cardContainer = document.getElementsByClassName("card-container");
    timeContainer = document.getElementsByClassName("time-container");
    timePosition = new Array();
    introPositon = new Array();
    //introPositon.push();
    for (i = 0; i < timeContainer.length; i++) {
        timePosition.push(timeContainer[i].getBoundingClientRect().top);
    }

    for (i = 0; i < cardContainer.length; i++) {
        introPositon.push(cardContainer[i].getBoundingClientRect().top);
    }
    var screen = window.innerHeight / 1.3;

    for (i = 0; i < introPositon.length; i++) {
        if (introPositon[i] < screen) {
            cardContainer[i].classList.add("card-move");
        }
    }
    for (i = 0; i < timeContainer.length; i++) {
        if (timePosition[i] < screen) {
            timeContainer[i].classList.add("time-move");
            console.log("ahd");
        }
    }
}

window.addEventListener("scroll", scrollAppear);

function size() {
    var width = document.body.clientWidth;
    console.log(width);
    if (width < 1100) {
        alert("Please visit this website from a desktop!");
    }
}

window.addEventListener("resize", size);