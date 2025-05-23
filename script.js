document.querySelectorAll(".section-spacing").forEach((section) => {
    section.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", event.target.id);
    });
});
