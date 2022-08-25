var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    var dots = document.getElementsByClassName("dot2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 5 seconds
}

function myFunction() {
    var x = document.getElementById("divformedmob");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.transform = " all .5s";
        x.style.display = "block";


    }
}

// function modelWindow() {
//     var modal = document.getElementById("  ");
//     var span = document.getElementsByClassName("close")[0];
//     modal.style.display = "block";
//     span.onclick = function() {
//         modal.style.display = "none";
//     }
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }
// };

function modelWindow(params) {

    if (params.title === 'Arts') {
        id = 'artsh'
        displayModel(id)
    } else if (params.title === 'Science') {
        id = 'scienceh'
        displayModel(id)

    } else {
        id = 'commerceh'
        displayModel(id)
    }
    function displayModel(id) {
        var modal = document.getElementById(id);
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}
function streamSelect(par) {
    let Arts = ['arts ', 'science']
    let Science = ['arts ', 'science']
    let Commerce = ['arts ', 'science']
   let SelectList = document.getElementsByTagName('select')
    if (par.value === 'Arts') {
        for(var i =0 ; i<= SelectList.length; i++){
            for(var i =0 ; i<= Arts.length; i++){
                let SelectElements=`<option value="${Arts[i]}">${Arts[i]}</option>`
            }
            SelectList[i].innerHTML
        }
    } else if (par.value === 'Science') {

    } else {

    }

}