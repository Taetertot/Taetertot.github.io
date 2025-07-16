document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".collapsible-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector(".toggle-icon");
      const isExpanded = content.classList.contains("expanded");

      // Close all other expanded sections
      document.querySelectorAll(".publication-content.expanded").forEach(openContent => {
        if (openContent !== content) {
          openContent.classList.remove("expanded");
          const openIcon = openContent.previousElementSibling.querySelector(".toggle-icon");
          if (openIcon) openIcon.classList.remove("rotate-up");
        }
      });

      // Toggle clicked section
      content.classList.toggle("expanded", !isExpanded);
      if (icon) icon.classList.toggle("rotate-up", !isExpanded);
    });
  });
});
