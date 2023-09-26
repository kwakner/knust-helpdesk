// Toggle Tabs With Active Selection
 function openTab(event, acaName, thin) {
   var p, tabcontent, tablinks
   tabcontent = document.getElementsByClassName("tabcontent");
   for (p = 0; p < tabcontent.length; p++) {
     tabcontent[p].style.display = "none"

   }



  //  tablinks = document.getElementsByClassName("tablink")
  //  thin = document.getElementsByClassName("line")
  //  for(var k = 0; k <tablinks.length; k++){
  //    tablinks[k].addEventListener("click", function(){
  //      var current = document.getElementsByClassName("line")
  //      current[0].className = current[0].className.replace("line", "")
  //      this.className +="line"

  //   })
  // }
     tablinks = document.getElementsByClassName("tablink");
     for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");

  //     var line = document.querySelector(".line")
  //     line.style.width = event.target.offsetWidth + "px"
  //     line.style.left = event.target.offsetLeft + "px"
      }

    document.getElementById(acaName).style.display = "flex";
    event.currentTarget.className += " active";

    }



  




 

// Active selection for HelpDesk

// Add active class to the current button (highlight it)
var header = document.getElementById("myChoice");
var deks = header.getElementsByClassName("desk-item");
for (var i = 0; i < deks.length; i++) {
  deks[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//  Toggle HelpDesk
function toggleDesky(deskIndex) {
  let desks = document.getElementsByClassName("serve");
  for (let i = 0; i < desks.length; i++) {
    desks[i].style.display = "none";
  }
  desks[deskIndex].style.display = "flex";

  // REMOVE ACTIVE DESK-ITEM FROM ALL HELPDESK
  let list = document.getElementsByClassName("sub");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove("active");
  }

  // ADD THE ACTIVE CLASS TO THE CLICKED ITEM
  list[deskIndex].classList.add("active");
}

toggleDesky(0);
