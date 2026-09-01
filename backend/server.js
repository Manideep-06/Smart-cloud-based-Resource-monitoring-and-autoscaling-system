const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let cpu = 45;
let memory = 50;

// ✅ Store instances as objects (not count)
let instances = [
  { id: 101, status: "Running" }
];

let nextId = 102;

// Simulate workload every 5 seconds
setInterval(() => {

  // CPU fluctuates between 30–80
  cpu = Math.floor(Math.random() * 50) + 30;

  // Memory fluctuates independently between 40–90
  memory = Math.floor(Math.random() * 50) + 40;

  const runningInstances = instances.filter(i => i.status === "Running");

  // 🔼 SCALE OUT
  if (cpu > 70 && runningInstances.length < 3) {
    instances.push({
      id: nextId++,
      status: "Running"
    });
    console.log("Scaling Out → New Instance Added");
  }

  // 🔽 SCALE IN (Terminate instance)
  if (cpu < 35 && runningInstances.length > 1) {
    // find one running instance
    let instanceToTerminate = instances.find(i => i.status === "Running");

    if (instanceToTerminate) {
      instanceToTerminate.status = "Terminated";
      console.log(`Instance ${instanceToTerminate.id} Terminated`);
    }
  }

  console.log(
    `CPU: ${cpu}% | Memory: ${memory}% | Running: ${
      instances.filter(i => i.status === "Running").length
    }`
  );

}, 5000);

// API endpoint for frontend
app.get("/metrics", (req, res) => {
  res.json({
    cpu,
    memory,
    instances, // ✅ send full list (important!)
    status:
      cpu > 70 ? "Scaling Out"
      : cpu < 35 ? "Scaling In"
      : "Stable",
  });
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});