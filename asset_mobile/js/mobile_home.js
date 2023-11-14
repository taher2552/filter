// progress js 

const mobile_academy_progressDone = document.querySelectorAll(".mobile_academy_progress_done");

mobile_academy_progressDone.forEach((mobile_academy_progress) => {
    mobile_academy_progress.style.width = mobile_academy_progress.getAttribute("data-done") + "%";
});

// progress js ends 


// caraousel js on home page 


document.addEventListener("DOMContentLoaded", function () {
    var currentIndex = 0;
    var items = document.querySelectorAll(".carousel-item");
    var dots = document.querySelectorAll(".dot");
    var touchStartX = 0;
    var touchEndX = 0;

    function showItem(index) {
        items.forEach(function (item) {
            item.style.display = "none";
        });
        dots.forEach(function (dot) {
            dot.classList.remove("active");
        });
        items[index].style.display = "block";
        dots[index].classList.add("active");
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    function handleTouchStart(event) {
        touchStartX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
        touchEndX = event.touches[0].clientX;
    }

    function handleTouchEnd() {
        var deltaX = touchEndX - touchStartX;
        if (deltaX > 50) {
            prevItem();
        } else if (deltaX < -50) {
            nextItem();
        }
    }

    dots.forEach(function (dot, index) {
        dot.addEventListener("click", function () {
            currentIndex = index;
            showItem(currentIndex);
        });
    });

    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);
    document.addEventListener("touchend", handleTouchEnd, false);

    setInterval(nextItem, 5000);
});

// caraousel js home page ends 



// slider range js 

function getVals(){
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat( slides[0].value );
      let slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
    
    let displayElement = parent.getElementsByClassName("rangeValues-1")[0];
    let displayElement2 = parent.getElementsByClassName("rangeValues-2")[0];
        displayElement.innerHTML = "₹" + slide1;
        displayElement2.innerHTML = "₹" + slide2;
  }
  
  window.onload = function(){
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("mob_filter_range_slider");
        for( let x = 0; x < sliderSections.length; x++ ){
          let sliders = sliderSections[x].getElementsByTagName("input");
          for( let y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
              sliders[y].oninput = getVals;
              // Manually trigger event first time to display values
              sliders[y].oninput();
            }
          }
        }
  }


// slider range js ends
