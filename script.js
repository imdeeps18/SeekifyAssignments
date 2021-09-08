// image carousel 

var myIndex = 0;
carousel();

//callback function
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000); 
}


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




function setAfterHover() {
  //first card done here---> setAfterHover method

  document.getElementById("img1").src="https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
  document.getElementById('h1').innerText="For every booking, every car model. With industary leading on-time performance. We love to make the things easy for you.";
}
function setBeforeHover() {
  //alert('mouseout');
  //first card done here-----> setBeforeHover method
  document.getElementById('img1').src="https://images.unsplash.com/photo-1609770231080-e321deccc34c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80";
  document.getElementById('h1').innerText="";
}


function setAfterHoverSec() {
  document.getElementById('img2').src="https://images.unsplash.com/photo-1494114685051-b9989320801f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=743&q=80";
  document.getElementById('h2').innerText="Drive as much as you want with unlimited kms. Just like your own car!";
}

function setBeforeHoverSec() {
  document.getElementById('img2').src="https://images.unsplash.com/photo-1519817914152-22d216bb9170?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80";
  document.getElementById('h2').innerText="";
}

function setAfterHoverThir() {
  document.getElementById('img3').src="https://images.unsplash.com/photo-1586377403109-cbd5fcd12c4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80";
  document.getElementById('h3').innerText="Our fleet addition process ensures that majority of our cars are only a few months old at any time. Say goodbye to bad cars!";
}

function setBeforeHoverThir() {
  document.getElementById('img3').src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=847&q=80";
  document.getElementById('h3').innerText="";
}


// fourth card
function setAfterHoverFour() {
  document.getElementById('img4').src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
  document.getElementById('h4').innerText="Our tariffs include taxes & insurance. And since our tariffs do NOT include fuel, it means you pay for only as much fuel as you use!";
}
function setBeforeHoverFour() {
  document.getElementById('img4').src="https://images.unsplash.com/photo-1511376868136-742c0de8c9a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
  document.getElementById('h4').innerText="";
}


// fifth card
function setAfterHoverFive() {
  document.getElementById('img5').src="https://images.unsplash.com/photo-1579226905180-636b76d96082?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
  document.getElementById('h5').innerText="Enjoy complete peace of mind with your liability limited to Rs. 10000. In case of any unfortunate incident, our insurance cover will take care of the rest!";
}

function setBeforeHoverFive() {
  document.getElementById('img5').src="https://images.unsplash.com/photo-1535745425003-d41f0bcca956?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
  document.getElementById('h5').innerText="";
}


// sixth card

function setAfterHoverSix() {
  document.getElementById('img6').src="https://images.unsplash.com/photo-1473881823110-d94cac66318a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80";
  document.getElementById('h6').innerText="No hassle of uploading your driving license and waiting for its approval. Easy enough!";
}

function setBeforeHoverSix() {
  document.getElementById('img6').src="https://images.unsplash.com/photo-1604399326967-8c3ddbb13e19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
  document.getElementById('h6').innerText="";
}