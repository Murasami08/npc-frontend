import React from 'react';
import { Line } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
const Dashboard = ()=>{
    const lineChartData = {
        labels: ["October", "November", "December"],
        datasets: [
          {
            data: [8137119, 9431691, 10266674],
            label: "Граждане пришли",
            borderColor: "#3333ff",
            fill: true,
            lineTension: 0.5
          },
          {
            data: [1216410, 1371390, 1477380],
            label: "Граждане уволились",
            borderColor: "#ff3333",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
            lineTension: 0.5
          }
        ]
      };
      const barChartData = {
        labels: ["October", "November", "December"],
        datasets: [
          {
            data: [8137119, 9431691, 10266674],
            label: "Граждане пришли",
            borderColor: "#3333ff",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
            fill: true
          },
          {
            data: [1216410, 1371390, 1477380],
            label: "Граждане уволились",
            borderColor: "#ff3333",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true
          }
        ]
      };
      return (
        <div>
<Line
          type="line"
          width={160}
          height={60}
          options={{
            title: {
              display: true,
              text: "",
              fontSize: 20
            },
            legend: {
              display: true, 
              position: "top" 
            }
          }}
          data={lineChartData}
        />
        <br/>
        <Bar
        type="bar"
        width={130}
        height={50}
        options={{
          title: {
            display: true,
            text: "COVID-19 Cases of Last 3 Months",
            fontSize: 15
          },
          legend: {
            display: true, 
            position: "top" 
          }
        }}
        data={barChartData}
      />
        </div>
        
      );
 
    
   
};
export default Dashboard;
