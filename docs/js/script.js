function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = '#f2f2f2';
  }
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.style.backgroundColor = '#ddd';
}


// award slides 

let slideawardIndex = 0;
showawardSlides(slideawardIndex);

function plusawardSlides(n) {
  showawardSlides((slideawardIndex += n));
}

function showawardSlides(n) {
  const awards = document.querySelectorAll(".awards");

  if (n >= awards.length) {
    slideawardIndex = 0;
  }
  if (n < 0) {
    slideawardIndex = awards.length - 1;
  }

  awards.forEach((award) => (award.style.display = "none"));
  awards[slideawardIndex].style.display = "block";
}




