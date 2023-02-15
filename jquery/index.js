function home() {
    window.location.href = '#home';
}

function about() {
    window.location.href = '#aboutus';
}

function image() {
    window.location.href = '#images';
}

function services() {
    window.location.href = '#services';
}

let img = ['slide2.png','slide3.png','slide4.png','slide5.png','slide6.png'];

let current = 0;

setInterval(() =>{
    $("#images").css("background-image",  "url('images/" + img[current] + "')")   // for localhost use "url('../images/" + img[current] + "')";
    current = current + 1 ;
    if(current > img.length) {
        $("#images").css("background-image",  "url('images/slide1.png')");  // for localhost use "url('images/slide1.png')";
        current = 0;
    }
}, 4000)


$("#prev").on('click', () => {
    
    if(current == 0) {
        $("#images").css("background-image",  "url('images/slide1.png')");  // for localhost use "url('images/slide1.png')";
        current = -1;
    } else if(current < 0 ) {
        current = img.length -1;
        $("#images").css("background-image",  "url('images/" + img[current] + "')"); // for localhost use "url('../images/" + img[current] + "')";
    }
    else {
        current = current - 1;
        $("#images").css("background-image",  "url('images/" + img[current] + "')"); // for localhost use "url('../images/" + img[current] + "')";
    }
});

$("#next").on('click', () => {
    $("#images").css("background-image",  "url('images/" + img[current] + "')"); // for localhost use "url('../images/" + img[current] + "')";
    current = current + 1 ;
    if(current > img.length) {
        $("#images").css("background-image",  "url('images/slide1.png')");  // for localhost use "url('images/slide1.png')";
        current = 0;
    }
})
