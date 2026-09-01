import React from "react";

const CpuGauge = ({ value }) => {
  const getColor = () => {
    if (value < 40) return "#22c55e"; // Green
    if (value < 70) return "#f59e0b"; // Orange
    return "#ef4444"; // Red
  };

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "25px",
        borderRadius: "12px",
        textAlign: "center",
        color: "white",
        marginTop: "20px"
      }}
    >
      <h3>CPU Load Meter</h3>

      <div
        style={{
          height: "20px",
          width: "100%",
          background: "#334155",
          borderRadius: "10px",
          overflow: "hidden",
          marginTop: "15px"
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${value}%`,
            background: getColor(),
            transition: "0.5s ease"
          }}
        />
      </div>

      <p style={{ marginTop: "10px", fontSize: "18px" }}>{value}% Utilization</p>
    </div>
  );
};

export default CpuGauge;
