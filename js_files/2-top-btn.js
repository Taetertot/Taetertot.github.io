<script>
  const backToTop = document.getElementById("backToTop");

 window.addEventListener('scroll', function () {
  const button = document.getElementById('backToTop');
  if (window.scrollY > 10) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});
</script>
