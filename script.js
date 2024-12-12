function openTab(event, tabName) {
    let tabcontent = document.querySelectorAll('.tabcontent');
    let tablinks = document.querySelectorAll('.tablinks'); 
    let i;
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
  }
  document.querySelectorAll(".tablinks").forEach(item => {
    item.addEventListener("click", (event) => {
        openTab(event, item.innerText.trim().replace(" ", "-"));
    });
  });





  document.addEventListener('DOMContentLoaded', function () {
    const img_1 = document.querySelector('.education__3');
    let position = 0;
    let direction = 1;

    setInterval(() => {
        position += direction * 0.5;

        if (position > 10) {
            direction = -1;
        } else if (position < -10) {
            direction = 1;
        }

        img_1.style.transform = `translateX(${position}px)`;
    }, 100);
    const img_2 = document.querySelector('.hero_shape3');
    let position1 = 0;
    let direction1 = 1;

    setInterval(() => {
        position1 += direction1 * 0.5;

        if (position1 > 10) {
            direction1 = -1;
        } else if (position1 < -10) {
            direction1 = 1;
        }

        img_2.style.transform = `translateX(${position1}px)`;
    }, 100);

    const img_3 = document.querySelector('.education__9');
    let position2 = 0;
    let direction2 = 1;

    setInterval(() => {
        position2 += direction2 * 1;

        if (position2 > 15) {
            direction2 = -1;
        } else if (position2 < -15) {
            direction2 = 1;
        }

        img_3.style.transform = `translateY(${position2}px)`;
    }, 100);
    const img_4 = document.querySelector('.hero_shape2');
    let position3 = 0;
    let direction3 = 1;

    setInterval(() => {
        position3 += direction3 * 0.5;

        if (position3 > 15) {
            direction3 = -1;
        } else if (position3 < -15) {
            direction3 = 1;
        }

        img_4.style.transform = `translateY(${position3}px)`;
    }, 100);

    const img_5 = document.querySelector('.hero_shape4 img');
    let rotation = 0;
    setInterval(() => {
        rotation += 10;
        img_5.style.transform = `rotate(${rotation}deg)`;
    }, 100);

    const img_6 = document.querySelector('.hero_shape5 img');
    let rotation1 = 0;
    setInterval(() => {
        rotation1 += 10;
        img_6.style.transform = `rotate(${rotation1}deg)`;
    }, 100);



    const edu = document.querySelector('.edu');
    const educations = document.querySelectorAll('.edu div');
    edu.addEventListener('mouseover', () => {
        educations.forEach((item, index) => {

            if (index === 0) {
                item.style.transform = 'translateX(0)';
            } else {
                item.style.transform = `translateX(${(index) * 10}px)`;
            }
        });
    });

    edu.addEventListener('mouseout', () => {
        educations.forEach(item => {
            item.style.transform = 'translateX(0)';
        });
    });



const container = document.querySelector('.edus');

container.addEventListener('mousemove', (event) => {
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const centerX = container.offsetLeft + width / 2;
    const centerY = container.offsetTop + height / 2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    const rotateX = (mouseY / height) * 15; 
    const rotateY = (mouseX / width) * -15; 

    container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});


container.addEventListener('mouseleave', () => {
    container.style.transform = 'rotateX(0) rotateY(0)';
});



const div = document.querySelector('.abouts');
div.addEventListener('mousemove', (event) => {
    const width = div.offsetWidth;
    const height = div.offsetHeight;
    const centerX = div.offsetLeft + width /2;
    const centerY = div.offsetTop + height /2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    const rotateX = (mouseY / height) * 7; 
    const rotateY = (mouseX / width) * -7; 

    div.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});


div.addEventListener('mouseleave', () => {
    div.style.transform = 'rotateX(0) rotateY(0)';
});

const courses = document.querySelectorAll('.courses');
courses.forEach(course => {

    course.style.transition = 'transform 0.3s ease';

    course.addEventListener('mouseover', (event) => {
        course.style.transform = `translateY(-10px)`;
    });

    course.addEventListener('mouseout', (event) => {
        course.style.transform = `translateY(0)`;
    });
});
const img = document.querySelector('.img-1');
let  pos = 0;
let dir = 1;

setInterval(() => {
    pos += dir * 1;

    if (pos > 10) {
        dir= -1;
    } else if ( pos < -10) {
        dir = 1;
    }

    img.style.transform = `translateX(${ pos}px)`;
}, 100);


const image2 = document.querySelector('.img-2');
let rot = 0;

setInterval(() => {
    rot += 10;
    image2.style.transform = `rotate(${rot}deg)`; 
}, 100);

const image3 = document.querySelector('.img-3');
let pos1 = 0;
let dir1 = 1; 

setInterval(() => {
  
    pos1 += dir1 * 1;

    
    if ( pos1 > 10) {
        dir1 = -1; 
    } else if ( pos1 < -10) {
        dir1= 1; 
    }

  
    image3.style.transform = `translateY(${pos1}px)`;
}, 100); 

const playBtn = document.querySelector('.play-btn i');
function createRipple() {
  const ripple = document.createElement('div');
  ripple.classList.add('ripple');
  ripple.style.left = '0px';
  ripple.style.top = '0px';
  playBtn.appendChild(ripple);
}

setInterval(createRipple, 800);


});


//  دالة العد التدريجي
 function animateCounter(id, start, end, duration) {
    const element = document.getElementById(id);
    let startTime = null;

    function step(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = end + "+"; //  "+" عند النهاية
      }
    }

    window.requestAnimationFrame(step);
  }

  // تشغيل العد للعناصر الأربعة
  document.addEventListener("DOMContentLoaded", function () {

    animateCounter("achievement-counter", 0, 27, 3000); // 2000ms = 2 ثوانٍ
    animateCounter("students-counter", 0, 27, 3000);
    animateCounter("instructors-counter", 0, 27, 3000);
    animateCounter("world-counter", 0, 27, 3000);
  });

  // LOADER

  window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');

    loader.classList.add('loader-hidden');

    loader.addEventListener('transitionend', () => {
      document.body.removeChild(loader);
    });
  });



  function Dark() {
   
    let bodyId = document.querySelector('#bodyId');
   
    bodyId.style.backgroundColor = '#170F2F'
    bodyId.style.color = '#fff'
    bodyId.style.transition = '0.5s'
  
  }
function zy(){
let nzy = document.getElementById('nzy');
nzy.style.color = 'white'

}
  function White() {
    let bodyId = document.getElementById('bodyId');
    bodyId.style.backgroundColor = 'white '
    bodyId.style.color = 'black'
    bodyId.style.transition = '0.5s'
    // let nzy = document.getElementById('nzy');
    // nzy.style.backgroundColor = 'white '
    // nzy.style.color = 'black'
    // nzy.style.transition = '0.5s'
  }

  AOS.init();

