function openPopup(type) {
  const popup = document.getElementById('popup-box');
  const title = document.getElementById('popup-title');
  const link = document.getElementById('popup-link');

  if (type === 'deposit') {
    title.textContent = 'ডিপোজিট';
    link.href = 'https://wa.me/8801826444505';
  } else if (type === 'withdraw') {
    title.textContent = 'উইথড্র';
    link.href = 'https://wa.me/8801826444505';
  }

  popup.classList.add('show');
}

function closePopup() {
  document.getElementById('popup-box').classList.remove('show');
}
