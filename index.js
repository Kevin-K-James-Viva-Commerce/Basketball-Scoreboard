let homeScore = document.getElementById("home-score-number")
let guestScore = document.getElementById("guest-score-number")
let count_home=0
let count_guest=0


function add_1_point_home() {
    count_home+=1
    homeScore.innerText=count_home
}

function add_2_point_home() {
    count_home+=2
    homeScore.innerText=count_home
}

function add_3_point_home() {
    count_home+=3
    homeScore.innerText=count_home
}
function add_1_point_guest() {
    count_guest+=1
    guestScore.innerText=count_guest
}

function add_2_point_guest() {
    count_guest+=2
    guestScore.innerText=count_guest
}

function add_3_point_guest() {
    count_guest+=3
    guestScore.innerText=count_guest
}

