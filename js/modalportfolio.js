const refs = {
openModalBtn: document.querySelector("[data-open-list]"),
closeModalBtn: document.querySelector("[data-close-list]"),
backdrop: document.querySelector("[data-overlaypf]"),
};
    
refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
refs.backdrop.addEventListener("click", logBackdropClick);
    
function toggleModal() {
refs.backdrop.classList.toggle("is-hidden");
}
    
function logBackdropClick() {
console.log("Це клік в бекдроп");
}