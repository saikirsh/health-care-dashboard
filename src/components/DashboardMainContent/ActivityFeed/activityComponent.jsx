import { BarChart } from "@mui/x-charts/BarChart";

const ActivityChart = () => {
  return (
    <div style={{ width: "400px", height: "300px" }}>
      <BarChart
        xAxis={[{ data: ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"] }]}
        series={[
          { data: [1, 0, 0, 8, 9], colors: "aqua" },
          { data: [0, 5, 0, 9, 0, 9], color: "purple" },
          { data: [0, 0, 9, 0, 9, 0], color: "aqua" },
          { data: [0, 5, 0, 8, 9, 6], color: "aqua" },
          { data: [0, 0, 6, 4, 7, 8], data: [1, 0, 0, 3, 0], color: "red" },
          { data: [0, 5, 0], color: "green" },
          { data: [0, 0, 6], color: "#fdb462" },
        ]}
        height={300}
      />
    </div>
  );
};

export default ActivityChart;
