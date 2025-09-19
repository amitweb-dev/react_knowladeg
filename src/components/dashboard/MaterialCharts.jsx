import * as React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

const barData = [
  { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 300, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 200, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 278, pv: 3908, amt: 2000 },
  { name: "May", uv: 189, pv: 4800, amt: 2181 },
];

const lineData = [
  { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 300, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 200, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 278, pv: 3908, amt: 2000 },
  { name: "May", uv: 189, pv: 4800, amt: 2181 },
];

export default function MaterialCharts() {
  return (
    <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center", mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 2, width: "48%" }}>
        <Typography variant="h6" gutterBottom>
          Bar Chart
        </Typography>
        <BarChart
          series={[
            { data: barData.map(d => d.pv), label: 'pv', color: '#8884d8' },
            { data: barData.map(d => d.uv), label: 'uv', color: '#82ca9d' }
          ]}
          xAxis={[{ data: barData.map(d => d.name), scaleType: 'band' }]}
          height={300}
        />
      </Paper>
      <Paper elevation={3} sx={{ p: 2, width: "48%" }}>
        <Typography variant="h6" gutterBottom>
          Line Chart
        </Typography>
        <LineChart
          series={[
            { data: lineData.map(d => d.pv), label: 'pv', color: '#8884d8' },
            { data: lineData.map(d => d.uv), label: 'uv', color: '#82ca9d' }
          ]}
          xAxis={[{ data: lineData.map(d => d.name), scaleType: 'point' }]}
          height={300}
        />
      </Paper>
    </Box>
  );
}
