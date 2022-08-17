// Innovation Lab Apply
const open_application = document.getElementById('open_apply');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close_apply');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.add('close');
})