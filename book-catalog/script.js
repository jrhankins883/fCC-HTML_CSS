const button = document.getElementById("show-btn");
const table = document.getElementById("my-table");

button.addEventListener("click", () => {
    const isHidden = table.classList.toggle("hidden");
    button.textContent = isHidden ? "Show Table" : "Hide Table";
});