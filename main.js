const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".trainer__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 2000, // Adjust the delay (in milliseconds) between each slide transition
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

function calculateBMI() {
  var height = parseFloat(document.getElementById('bmi_height').value);
  var weight = parseFloat(document.getElementById('bmi_weight').value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById('bmi_result').innerText = 'Please enter valid height and weight.';
    return;
  }

  var bmi = weight / ((height / 100) * (height / 100));
  var bmiCategory = '';

  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiCategory = 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    bmiCategory = 'Overweight';
  } else {
    bmiCategory = 'Obese';
  }

  document.getElementById('bmi_result').innerText = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory}).`;
}
function toggleText1() {
  var additionalText = document.getElementById("additionalText1");
  if (additionalText.style.display === "none") {
    additionalText.style.display = "block";
  } else {
    additionalText.style.display = "none";
  }
}
function toggleText2() {
  var additionalText = document.getElementById("additionalText2");
  if (additionalText.style.display === "none") {
    additionalText.style.display = "block";
  } else {
    additionalText.style.display = "none";
  }
}
function toggleText3() {
  var additionalText = document.getElementById("additionalText3");
  if (additionalText.style.display === "none") {
    additionalText.style.display = "block";
  } else {
    additionalText.style.display = "none";
  }
}
function toggleText4() {
  var additionalText = document.getElementById("additionalText4");
  if (additionalText.style.display === "none") {
    additionalText.style.display = "block";
  } else {
    additionalText.style.display = "none";
  }
}
function toggleExtra() {
    var blogGrid = document.getElementById("blogGrid");
    var btn = document.querySelector(".blog__btn button");
    
    if (blogGrid.children.length === 4) {
      // Add two more blogs
      var blog5 = document.createElement("div");
      blog5.className = "blog__card";
      blog5.innerHTML = `
        <img src="trainer-2.jpg" alt="blog" />
        <h4>"From Couch to Champion: Beginner's Guide to Fitness"</h4>`;
      
      var blog6 = document.createElement("div");
      blog6.className = "blog__card";
      blog6.innerHTML = `
        <img src="trainer-4.jpg" alt="blog" />
        <h4>"Recover Strong: The Importance of Rest and Restoration"</h4>`;

        
      var blog7 = document.createElement("div");
      blog7.className = "blog__card";
      blog7.innerHTML = `
        <img src="trainer-3.jpg" alt="blog" />
        <h4>"Sweat Smarter, Not Harder: Insider Fitness Hacks"</h4>`;

        
      var blog8 = document.createElement("div");
      blog8.className = "blog__card";
      blog8.innerHTML = `
        <img src="trainer-1.jpg" alt="blog" />
        <h4>""Fueling Your Fitness Journey: Nutrition Know-How""</h4>`;
      
      blogGrid.appendChild(blog5);
      blogGrid.appendChild(blog6);
      blogGrid.appendChild(blog7);
      blogGrid.appendChild(blog8);
      
      btn.textContent = "HIDE";
    } else {
      // Remove extra blogs
      blogGrid.removeChild(blogGrid.children[4]);
      blogGrid.removeChild(blogGrid.children[4]);
      blogGrid.removeChild(blogGrid.children[4]);
      blogGrid.removeChild(blogGrid.children[4]);
      
      btn.textContent = "VIEW ALL";
    }
  }
  function toggleSize(image) {
    image.classList.toggle('enlarge');
  }
  