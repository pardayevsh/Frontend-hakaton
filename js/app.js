// ******* Navbar Fixed Scroll *******
window.addEventListener("scroll", function () {
    const navScroll = document.getElementById("navbar");
    navScroll.classList.toggle("fixed", window.scrollY > 50);
});


// ******* Back to top button *******
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});


// ******* ScrollBar *******
let progress = document.getElementById('progressbar');
let height = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / height) * 100;
    progress.style.height = progressHeight + "%";
}


// ******* checkBox *******
function check() {

    var checkBox = document.getElementById("checkbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");

    for (var i = 0; i < text1.length; i++) {
        if (checkBox.checked == true) {
            text2[i].style.display = "block";
            text1[i].style.display = "none";
        }
        else if (checkBox.checked == false) {
            text2[i].style.display = "none";
            text1[i].style.display = "block";
        }
    }
}
check();