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

