document.addEventListener('DOMContentLoaded', function() {
  const backToTop = document.getElementById("backToTop");
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
});
