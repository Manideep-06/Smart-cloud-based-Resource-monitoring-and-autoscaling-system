import { useEffect, useState } from "react";
import ActivityChart from "./components/ActivityChart";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

function App() {

  const UPPER_LIMIT = 70;
  const LOWER_LIMIT = 30;

  const [history, setHistory] = useState([]);

  const [instances, setInstances] = useState([
    { id: "i-101", status: "Running", work: "Handling API", load: 20, memory: 40 }
  ]);

  const [metrics, setMetrics] = useState({
    cpu: 45,
    memory: 55
  });

  const [events, setEvents] = useState([]);
  const [toast, setToast] = useState(null);

  // ---------- Show Toast Alert ----------
  const showToast = (msg) => {
    setToast({ msg, time: new Date().toLocaleTimeString() });
    setTimeout(() => setToast(null), 3000);
  };

  // ---------- Generate Random Metrics ----------
  const generateMetric = () => {

    const cpu = Math.floor(Math.random() * 90) + 5;
    const memory = Math.floor(Math.random() * 70) + 20;

    setMetrics({ cpu, memory });

    setHistory((prev) => {
      const updated = [...prev, { cpu_usage: cpu, memory_usage: memory }];
      return updated.slice(-20);
    });

    handleScaling(cpu, memory);
  };

  // ---------- Auto Scaling Logic ----------
  const handleScaling = (cpu, memory) => {

    // SCALE UP
    if (cpu > UPPER_LIMIT || memory > 75) {

      const newId = `i-${Math.floor(Math.random() * 900) + 100}`;

      const newInstance = {
        id: newId,
        status: "Newly Created",
        work: "Syncing Cache",
        load: Math.floor(Math.random() * 30) + 10,
        memory: Math.floor(Math.random() * 50) + 20
      };

      setInstances((prev) => [...prev, newInstance]);

      showToast("High resource usage detected. Scaling Up triggered.");

      setEvents((prev) => [
        { message: `${newId} launched successfully`, time: new Date().toLocaleTimeString() },
        ...prev
      ]);

      setTimeout(() => {
        setInstances((prev) =>
          prev.map((i) =>
            i.id === newId ? { ...i, status: "Running" } : i
          )
        );
      }, 2000);
    }

    // SCALE DOWN
    if ((cpu < LOWER_LIMIT && memory < 40) && instances.length > 1) {

      const removed = instances[instances.length - 1];

      setInstances((prev) => prev.slice(0, -1));

      showToast("Low resource usage detected. Scaling Down triggered.");

      setEvents((prev) => [
        { message: `${removed.id} terminated to reduce cost`, time: new Date().toLocaleTimeString() },
        ...prev
      ]);
    }
  };

  // ---------- Run Metric Generator Every 5 Seconds ----------
  useEffect(() => {
    const interval = setInterval(generateMetric, 5000);
    return () => clearInterval(interval);
  }, []);

  const simulateTraffic = () => generateMetric();

  // ---------- UI Card Style ----------
  const cardStyle = {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "10px",
    flex: 1,
    color: "white"
  };

  return (
    <div style={{ background: "#020617", minHeight: "100vh", padding: "30px" }}>

      {/* TOAST ALERT */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "#7f1d1d",
            padding: "15px",
            color: "#fff",
            borderRadius: "10px"
          }}
        >
          ⚠ {toast.msg}
          <div style={{ fontSize: "12px" }}>{toast.time}</div>
        </div>
      )}

      <h1 style={{ color: "white" }}>
        ☁ CloudOps Auto-Scaling Control Center
      </h1>

      {/* METRIC CARDS */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>

        <div style={cardStyle}>
          <h3>CPU Usage</h3>
          <h2>{metrics.cpu}%</h2>
        </div>

        <div style={cardStyle}>
          <h3>Memory Usage</h3>
          <h2>{metrics.memory}%</h2>
        </div>

        <div style={cardStyle}>
          <h3>Active Instances</h3>
          <h2>{instances.length}</h2>
        </div>

        <div style={cardStyle}>
          <h3>Scaling Decision</h3>
          <h2>
            {(metrics.cpu > 70 || metrics.memory > 75)
              ? "Scaling Up"
              : (metrics.cpu < 30 && metrics.memory < 40)
              ? "Scaling Down"
              : "Stable"}
          </h2>
        </div>

      </div>

      {/* TRAFFIC BUTTON */}
      <button
        onClick={simulateTraffic}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          background: "#fb923c",
          border: "none",
          borderRadius: "8px"
        }}
      >
        ⚡ Simulate Traffic Load
      </button>

      {/* THRESHOLD INFO */}
      <div style={{ marginTop: "30px", color: "#94a3b8" }}>
        Upper Threshold: <b>70%</b> | Lower Threshold: <b>30%</b>
      </div>

      {/* ACTIVITY CHART */}
      <div style={{ marginTop: "30px" }}>
        <ActivityChart data={history} />
      </div>

      {/* INSTANCE SCALING TREND */}
      <h3 style={{ color: "white", marginTop: "40px" }}>
        Instance Scaling Trend
      </h3>

      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={history.slice(-6)}>
          <Bar dataKey="cpu_usage" fill="#38bdf8" />
          <XAxis dataKey="cpu_usage" />
        </BarChart>
      </ResponsiveContainer>

      {/* EVENTS */}
      <h3 style={{ color: "white", marginTop: "40px" }}>
        Recent Scaling Events
      </h3>

      {events.map((e, i) => (
        <div key={i} style={{ color: "#cbd5e1", marginBottom: "6px" }}>
          {e.time} — {e.message}
        </div>
      ))}

      {/* INSTANCE CARDS */}
      <h3 style={{ color: "white", marginTop: "40px" }}>
        Instance Workload Monitor
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "16px"
        }}
      >

        {instances.map((inst) => {

          const statusColor =
            inst.status === "Running"
              ? "#22c55e"
              : inst.status === "Newly Created"
              ? "#facc15"
              : "#ef4444";

          return (
            <div
              key={inst.id}
              style={{
                background: "#0f172a",
                padding: "18px",
                borderRadius: "10px",
                color: "white"
              }}
            >
              <h3 style={{ color: statusColor }}>
                {inst.id} — {inst.status}
              </h3>

              <p>Workload: {inst.work}</p>
              <p>CPU Share: {inst.load}%</p>
              <p>Memory Usage: {inst.memory}%</p>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default App;