document.querySelector(".new-list-box__primary--text").addEventListener('focus',() => {
    document.querySelector(".new-list-box__options").style.opacity = "1";
});
document.getElementById("btn-add").addEventListener('click',() => {
    document.querySelector(".new-list-box__options").style.opacity = "0";
});

