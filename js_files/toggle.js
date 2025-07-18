document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".collapsible-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling; // use nextElementSibling here
      const icon = header.querySelector(".toggle-icon");
      const isExpanded = content.classList.contains("expanded");

      // Close all other expanded sections
      document.querySelectorAll(".publication-content.expanded").forEach(openContent => {
        if (openContent !== content) {
          openContent.classList.remove("expanded");
          openContent.style.maxHeight = null;
          const openIcon = openContent.previousElementSibling.querySelector(".toggle-icon");
          if (openIcon) openIcon.classList.remove("rotate-up");
        }
      });

      if (!isExpanded) {
        content.classList.add("expanded");
        content.style.maxHeight = content.scrollHeight + "px";
        if (icon) icon.classList.add("rotate-up");
      } else {
        content.classList.remove("expanded");
        content.style.maxHeight = null;
        if (icon) icon.classList.remove("rotate-up");
      }
    });
  });
});
