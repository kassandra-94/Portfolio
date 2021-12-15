let button = document.getElementById('button');
let menu =  document.getElementById("menu_dropdown");
let closingButton = document.getElementById("close");

      function hideAndShow() {
        if (menu.style.display === "none" && closingButton.style.display === "none") {
          menu.style.display = "block";
          button.style.display= "none";
          closingButton.style.display ="block";
        } else {
          menu.style.display = "none";
          closingButton.style.display ="none";
        }
      };

      function backToMenu() {
        if (menu.style.display === "block") {
          menu.style.display = "none";
          closingButton.style.display ="none";
          button.style.display= "block";
        }
      };

     