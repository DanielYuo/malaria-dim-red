
/*****  Popup for lay summary and abstract *****/

// Open modal for lay summary
document.getElementById('lay-summary-button').addEventListener('click', function() {
    document.querySelector('.modal-bg-lay').style.display = 'flex';
});

// Close modal when x button or outside of the modal are clicked
document.querySelector('#close-lay').addEventListener('click', function() {
    document.querySelector('.modal-bg-lay').style.display = 'none';
});
window.addEventListener('mouseup', function() {
    document.querySelector('.modal-bg-lay').style.display = 'none';
});

// Open modal for abstract
document.getElementById('abstract-button').addEventListener('click', function() {
    document.querySelector('.modal-bg-abstract').style.display = 'flex';
});

// Close modal when x button or outside of the modal are clicked
document.querySelector('#close-abstract').addEventListener('click', function() {
    document.querySelector('.modal-bg-abstract').style.display = 'none';
})
window.addEventListener('mouseup', function() {
    document.querySelector('.modal-bg-abstract').style.display = 'none';
});