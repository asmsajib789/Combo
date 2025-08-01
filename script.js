// Stat numbers change randomly each 10 seconds
function randomUpdate(id, base, range) {
  const el = document.getElementById(id);
  const newVal = base + Math.floor(Math.random() * range);
  el.textContent = newVal + "+";
}

setInterval(() => {
  randomUpdate("stat1-number", 1500, 50); // ইউজার
  randomUpdate("stat2-number", 3200, 100); // ডিপোজিট
  randomUpdate("stat3-number", 1000, 30); // ফ্রি বোনাস
}, 10000); // প্রতি ১০ সেকেন্ডে চেঞ্জ
