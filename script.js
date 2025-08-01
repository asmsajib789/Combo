// Fixed initial numbers (you can set to your base values)
let baseStats = {
  usersJoined: 8500,
  bonusGiven: 3400,
  todayJoined: 0,
};

// Daily variation generator
function getFakeGrowthByDay(day) {
  const variation = [0, 1, 2, 0, 3, 2, 1, 5, 0, 4, 3, 1, 2];
  return variation[day % variation.length];
}

// Calculate current day of the year
function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

// Generate numbers with randomness per day
function generateStats() {
  const day = getDayOfYear();
  const dailyGrowth = getFakeGrowthByDay(day) + Math.floor(Math.random() * 2); // variation + 0-1
  const bonusGrowth = Math.floor(dailyGrowth * (0.7 + Math.random() * 0.5));   // 70%-120% of growth

  baseStats.usersJoined += dailyGrowth;
  baseStats.bonusGiven += bonusGrowth;
  baseStats.todayJoined = dailyGrowth;
}

// Show on website
function updateUI() {
  document.getElementById("usersJoined").innerText = baseStats.usersJoined.toLocaleString();
  document.getElementById("bonusGiven").innerText = baseStats.bonusGiven.toLocaleString();
  document.getElementById("todayJoined").innerText = baseStats.todayJoined.toLocaleString();
}

// Run everything
generateStats();
updateUI();
