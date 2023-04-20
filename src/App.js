import './App.css';
import { useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import { UserData } from "./assets/Data";
import PieChart from "./components/PieChart";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js/auto';



function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        "blue",
        "yellow",
        "green",
        "red",
        "purple"
      ],
      borderColor:
        "black",
      tension: 0.4,
      borderWidth: 2,
      link: ['https://www.google.com', 'https://www.amazon.ca', 'https://www.lego.ca', 'https://www.google.com', 'https://www.google.com']
    },
    ]
  });

  return (
    <div className="App">
      <div class="bar" >
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 400, padding: "100px" }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 200 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
