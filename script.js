const select = document.getElementById("colorSelect");
const btn = document.querySelector('input[type="button"][value="Select and Remove"]');

btn.addEventListener("click", () => {
    const selectedOption = select.options[select.selectedIndex];
    selectedOption.remove();  
});
