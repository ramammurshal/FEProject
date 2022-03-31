var i = 0;
var images = [];
var time = 3000;

images[0] = 'Assets/anak1.png';
images[1] = 'Assets/anak2.png';
images[2] = 'Assets/anak3.png';

function changeImg() {
    document.querySelector(".theSlide").setAttribute("src", images[i]);

    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;
