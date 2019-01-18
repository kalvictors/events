var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
       
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 6000); // Change image every 2 seconds
}  



function check_true (){
    if (document.getElementById('nm').value == "" || document.getElementById('pswd').value == ""){
        alert("Fill in all fields !");
    } else{
        document.getElementById('lg').submit();
        alert("Login successfully   " + "please wait");
        window.location.href = "events.html";
    }

}


 function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('password').value == "" || document.getElementById('phone').value == ""  || document.getElementById('msg').value == "") {
    alert("Fill All Fields !");
    } else {
    document.getElementById('form').submit();
    alert("Submission Successfully   " + "  Ticket number: 3256100273");
    window.location.href = "events.html";
    }

    }
    //Function To Display Popup
    function div_show() {
    document.getElementById('abc').style.display = "block";
    document.getElementById('logsec').style.visibility = "hidden";
    document.getElementById('headsec').style.visibility = "hidden";
    document.getElementById('foot').style.visibility = "hidden";
    }
    //Function to Hide Popup
    function div_hide(){
    document.getElementById('abc').style.display = "none";
    document.getElementById('logsec').style.visibility = "visible";
    document.getElementById('headsec').style.visibility = "visible";
    document.getElementById('foot').style.visibility = "visible";
    }

 