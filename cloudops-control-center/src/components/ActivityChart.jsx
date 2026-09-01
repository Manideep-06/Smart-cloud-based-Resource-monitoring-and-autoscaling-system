import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, ReferenceLine
} from "recharts";

const ActivityChart = ({ data }) => {

  const chartData = data.map((d,i)=>({
    time:`T-${data.length-i}`,
    cpu:d.cpu_usage,
    memory:d.memory_usage
  }));

  return (
    <div style={{
      width:"100%",
      height:"320px",
      background:"#0f172a",
      padding:"20px",
      borderRadius:"12px"
    }}>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b"/>
          <XAxis dataKey="time" stroke="#94a3b8"/>
          <YAxis stroke="#94a3b8"/>
          <Tooltip/>

          {/* Threshold Lines */}
          <ReferenceLine y={70} stroke="red" strokeDasharray="5 5"/>
          <ReferenceLine y={30} stroke="#38bdf8" strokeDasharray="5 5"/>

          <Line type="monotone" dataKey="cpu" stroke="#f97316" strokeWidth={3}/>
          <Line type="monotone" dataKey="memory" stroke="grey" strokeWidth={3}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;