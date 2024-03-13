import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserQuestions from './pages/UserQuestions';
import UserDetails from './components/UserDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ReactApexChart from 'react-apexcharts';
import Sidebar from './components/Sidebar';
import Budget from './pages/Budget';
function App() {
  // Data for the bar graph
  const barData = {
    series: [{
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      yaxis: {
        title: {
          text: 'Revenue'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    },
  };

  // Data for the pie chart
  const pieData = {
    series: [50, 50],
    options: {
      labels: ['Credit', 'Debit']
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<UserQuestions />} />
          <Route path="/:username" element={<UserDetails />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Budget' element={<Budget/>}></Route>
          <Route
            path='/Charts'
            element={
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '80px' }}>
                <div style={{ width: '45%' }}>
                  <ReactApexChart options={barData.options} series={barData.series} type="bar" />
                </div>
                <div style={{ width: '45%' }}>
                  <ReactApexChart options={pieData.options} series={pieData.series} type="pie" />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
