
    // Quantity
    let addbtn = document.querySelector('#plus');
    let minbtn = document.querySelector('#minus');
    let btn = document.querySelector('#qytBox');

    addbtn.addEventListener('click', () => {
      btn.value = parseInt(btn.value) + 1;
    })

    minbtn.addEventListener('click', () => {
      if (btn.value <= 0) {
        btn.value = 0;
      }
      else {
        btn.value = parseInt(btn.value) - 1;
      }
    })


    //CountDown Timer
    let countDownDate = new Date("Jul 25, 2025 00:00:00").getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();
      let result = countDownDate - now;

      var days = Math.floor(result / (1000 * 60 * 60 * 24));
      var hours = Math.floor(result % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      var minutes = Math.floor(result % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(result % (1000 * 60) / 1000);

      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
      }
    }, 1000);



    filterSelection("all")
    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("column");
      if (c == "all") c = "";
      for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
      }
    }

    function w3AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
      }
    }

    function w3RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }


    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }


     // LOADER

     window.addEventListener('load', () => {
      const loader = document.querySelector('.loader');

      loader.classList.add('loader-hidden');

      loader.addEventListener('transitionend', () => {
        document.body.removeChild(loader);
      });
    });



    function Dark() {

      let bodyId = document.getElementById('bodyId');
      bodyId.style.backgroundColor = '#170F2F'
      bodyId.style.color = 'White'
      bodyId.style.transition = '0.5s'

    }


    function White() {
      let bodyId = document.getElementById('bodyId');
      bodyId.style.backgroundColor = 'white'
      bodyId.style.color = 'black'
      bodyId.style.transition = '0.5s'
    }


    AOS.init();
