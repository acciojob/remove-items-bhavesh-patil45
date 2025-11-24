const select = document.querySelector('select');

select.addEventListener("change", () => {
    const selectedOption = select.options[select.selectedIndex];
    selectedOption.remove();   
});
