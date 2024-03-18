function openMailInNewTab(){
    var mail = "mailto: block.chain@vitap.ac.in";
    window.open(mail, '_blank');
}

function openLinkedinInNewTab(){
    var linkedin = "https://www.linkedin.com/company/blockchain-the-node/";
    window.open(linkedin, '_blank');
}


  window.onscroll = function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add("fixed-top");
    } else {
      navbar.classList.remove("fixed-top");
    }
  };
