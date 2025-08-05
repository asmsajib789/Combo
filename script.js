function showPopup(type) {
  const popup = document.getElementById('popup');
  const title = document.getElementById('popup-title');
  if (type === 'deposit') {
    title.innerText = '💳 ডিপোজিট সার্ভিস';
  } else {
    title.innerText = '🏧 উইথড্র সার্ভিস';
  }
  popup.style.display = 'block';
}

function hidePopup() {
  document.getElementById('popup').style.display = 'none';
}
<!-- JS to show popup on page load -->
<script>
  window.onload = function() {
    setTimeout(function() {
      document.getElementById('popup').style.display = 'block';
    }, 1500); // 1.5 সেকেন্ড পর পপআপ দেখাবে
  }
</script>
