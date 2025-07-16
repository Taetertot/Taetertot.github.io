 document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".collapsible-header");

    headers.forEach(header => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector(".toggle-icon");

        const isVisible = content.style.display === "block";

        // Toggle content
        content.style.display = isVisible ? "none" : "block";

        // Toggle icon direction
        if (icon) {
          icon.classList.toggle("rotate-up", !isVisible);
        }
      });
    });
  });
