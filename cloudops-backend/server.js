require("./db");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let cpu = 45;
let memory = 50;   // ✅ Added Memory
let instances = 1;

// Simulate workload every 5 seconds
setInterval(() => {

  // CPU fluctuates between 30–80
  cpu = Math.floor(Math.random() * 50) + 30;

  // Memory fluctuates independently between 40–90
  memory = Math.floor(Math.random() * 50) + 40;

  // 🔥 Scaling Logic (UNCHANGED — based only on CPU)
  if (cpu > 70 && instances < 3) {
    instances++;
    console.log("Scaling Out → New Instance Added");
  }

  if (cpu < 35 && instances > 1) {
    instances--;
    console.log("Scaling In → Instance Removed");
  }

  console.log(`CPU: ${cpu}% | Memory: ${memory}% | Instances: ${instances}`);

}, 5000);

// API endpoint for frontend
app.get("/metrics", (req, res) => {
  res.json({
    cpu,
    memory,          // ✅ Send Memory to frontend
    instances,
    status:
      cpu > 70 ? "Scaling Out"
      : cpu < 35 ? "Scaling In"
      : "Stable",
  });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});








