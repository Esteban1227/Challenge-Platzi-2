const modalHidden = document.getElementById("hiddenModal");
const clickModalOpen = document.getElementById("clickModalOpen");
const clickModalClose = document.getElementById("clickModalClose");


function modal(){
    modalHidden.style.display = "flex";
    clickModalOpen.style.display = "none";
    clickModalClose.style.display = "flex";
}

function modalClose(){
    modalHidden.style.display = "none";
    clickModalOpen.style.display = "flex";
    clickModalClose.style.display = "none";
}
