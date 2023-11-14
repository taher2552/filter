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
