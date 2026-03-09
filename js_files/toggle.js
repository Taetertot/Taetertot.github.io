document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".collapsible-header");
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  }); // ← this was missing

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const publication = header.closest(".publication-card");
      const content = publication.querySelector(".publication-content");
      const icon = header.querySelector(".toggle-icon");
      const isExpanded = content.classList.contains("expanded");

      // Close all other expanded sections
      document.querySelectorAll(".publication-content.expanded").forEach(openContent => {
        if (openContent !== content) {
          openContent.classList.remove("expanded");
          openContent.style.maxHeight = null;
          const openIcon = openContent.closest(".publication-card").querySelector(".toggle-icon");
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
  }); // ← this was also missing
});
