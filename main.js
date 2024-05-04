let lastChildItem = Array.from(document.querySelectorAll('.slide_item'));
let btnContainer = document.querySelector('.btn-container');
let box = document.querySelector('#box-slider');
let numS = 1;
let scrollUp = document.querySelector('#scroll-up');
let scrollDown = document.querySelector('#scroll-down');
let boxSlider = document.querySelector("#box-slider");
scrollUp.onclick = () => {
    numS = 1;
    scrollDown.classList.remove("not-pointer");
    boxSlider.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
scrollDown.onclick = () => {
    boxSlider.scrollTo({
        top: lastChildItem[numS].offsetHeight * numS,
        behavior: "smooth",
    });
    numS === lastChildItem.length - 1 ? scrollDown.classList.add("not-pointer") : numS++;
};

window.onload = () => {
    setInterval(() => {
        numS === lastChildItem.length - 1 ? scrollUp.click() : scrollDown.click();

    }, 5000)
    btnContainer.style.right = (window.innerWidth / 2 - window.innerWidth / 10) + "px"
}
window.addEventListener("resize", () => {
    btnContainer.style.right = (window.innerWidth / 2 - window.innerWidth / 10) + "px"

})
