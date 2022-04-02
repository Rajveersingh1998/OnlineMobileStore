
import img1 from '../homeimgs/store1.jpg'
import img2 from '../homeimgs/store2.jpg'
// import img3 from '../homeimgs/store3.jpg' 
import img4 from '../homeimgs/store4.jpg'
import img5 from '../homeimgs/store5.jpg'

import FacultyInfoCard from "./FacultyInfoCard";
import Footer from "./Footer";
import "./Home.css";

// Add by me - recharts
import "./CountStdInfo.css";
import "./Count.js";

import "./styles.css";
import React, { PureComponent } from 'react';
import * as Recharts from 'recharts';
import { LineChart,Area,ComposedChart, Line, data, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data1 = [
  {
    name: 'Nov 2021',
    Expenses: 4000,
    sales: 2900,
    Profit: 1100,
  },
  {
    name: 'Dec 2022',
    Expenses: 3000,
    sales: 2500,
    Profit: 1300,
  },
  {
    name: 'Jan 2022',
    Expenses: 2000,
    sales: 5500,
    Profit: 3500,
  },
  {
    name: 'Feb 2022',
    Expenses: 2780,
    sales: 9800,
    Profit: 6500,
  },
  {
    name: 'Mar 2022',
    Expenses: 1890,
    sales: 7580,
    Profit: 5000,
  },
  {
    name: 'April 2022',
    Expenses: 2390,
    sales: 9100,
    Profit: 6800,
  },
  {
    name: 'May 2022',
    Expenses: 3490,
    sales: 6700,
    Profit: 8600,
  },
];


const Home = () => {

  return (
    <div>

      <div><link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="jumbotron ">
          <legend className="text-center">Current Status</legend>
          <legend className="text-center">           </legend>
          <div className="container">
            <div className="row mt-3">
              <div className="col-md-3 col-sm-6">
                <div className="counter">
                  <div className="counter-icon">
                    <i className="fa fa-users"></i>
                  </div>
                  <h3>Users</h3>
                  <span className="counter-value">28.03k</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="counter blue">
                  <div className="counter-icon">
                    <i className="fa fa-chain-broken"></i>
                  </div>
                  <h3>Bounce rate</h3>
                  <span className="counter-value">33.48%</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="counter green">
                  <div className="counter-icon">
                    <i className="fa fa-sellsy"></i>
                  </div>
                  <h3>Today's Sale</h3>
                  <span className="counter-value">$1.04k</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="counter black">
                  <div className="counter-icon">

                    <i className="fa fa-gg-circle"></i>
                  </div>
                  <h3>Annual Profit</h3>
                  <span className="counter-value">$489.4k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container1">
        <div className="row mt-3">
        <legend className="text-left">Monthly Sales value</legend><br></br>
          <div className="col-md-4 col-sm-6">
            <ComposedChart width={730} height={250} data={data1}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Area type="monotone" dataKey="Profit" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="sales" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="Expenses" stroke="#ff7300" />
            </ComposedChart>
          </div>
        </div>
      </div>


      <div className="row mt-4">
        <div className="col-md-12">
          <FacultyInfoCard />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <Footer />
        </div>
      </div>


    </div>
  );
}


export default Home;

// {/* <div className="container">
//         <div className="row mt-3">
//           <div className="col-md-4 col-sm-6">
//             <BarChart width={350} height={200} data={data1}>
//               <CartesianGrid strokeDasharray="4 4" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               {/* <Bar dataKey="Users" fill="#8884d8" /> */}
//               <Bar dataKey="Employees" fill="#8884d8" />
//             </BarChart>
//           </div>

      //      <div className="col-md-4 col-sm-6">
      //       <BarChart width={350} height={200} data={data1}>
      //         <CartesianGrid strokeDasharray="3 3" />
      //         <XAxis dataKey="name" />
      //         <YAxis />
      //         <Tooltip />
      //         <Legend />
      //         <Bar dataKey="Users" fill="#82ca9d" />
      //         {/* <Bar dataKey="Employees" fill="#8884d8" /> */}
      //       </BarChart>
      //     </div>
      //   </div>
      // </div> */}