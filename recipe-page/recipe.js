function toggleSection(id) {
    let section = document.getElementById(id);
    section.style.display = (section.style.display === "none") ? "block" : "none";
}

    // Start with sections hidden
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("ingredients").style.display = "none";
        document.getElementById("instructions").style.display = "none";
    });
