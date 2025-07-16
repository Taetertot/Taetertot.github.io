document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".collapsible-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector(".toggle-icon");

      const isExpanded = content.classList.contains("expanded");

      // Toggle class for animation
      content.classList.toggle("expanded", !isExpanded);

      // Toggle icon direction
      if (icon) {
        icon.classList.toggle("rotate-up", !isExpanded);
      }
    });
  });
});
