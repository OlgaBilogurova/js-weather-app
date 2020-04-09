
let modal = document.getElementById('modal');
let modalBtn = document.getElementById('w-modal-btn');

// Hide modal
modal.style.display = "none";

// Show/Hide modal
modalBtn.addEventListener('click', function (e) {
    modal.style.display === "none" ? modal.style.display = "block" : modal.style.display = "none";
});
