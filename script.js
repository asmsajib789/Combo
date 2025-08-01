// Function to get a random daily joined number (2-6) and save for the day
function getTodayJoinCount() {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const saved = JSON.parse(localStorage.getItem('todayJoinData'));

  if (saved && saved.date === today) {
    return saved.count;
  } else {
    const randomCount = Math.floor(Math.random() * 5) + 2; // 2 to 6
    localStorage.setItem('todayJoinData', JSON.stringify({ date: today, count: randomCount }));
    return randomCount;
  }
}

// Set the today's join count
document.getElementById('todayJoined').innerText = getTodayJoinCount();
