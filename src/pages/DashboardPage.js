import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';


/** 
function DashboardPage() {
    
    let extractedData =[];

    Axios.get('http://localhost:5000/budget').then((res)=>{
        extractedData = res.data
        console.log(extractedData)
    });
    
    const [budgetData, setBudgetData] = useState({
        labels: extractedData.map((data)=>data.title),
        datasets: [{
            label: "Budget Amount",
            data: extractedData.map((data)=> data.budget_amt)
        }]
        
      });
    
       
    
    

  return (
    <BarChart chartData={budgetData}/>
  );
}

export default DashboardPage;
*/
function DashboardPage() {
    const [budgetData, setBudgetData] = useState({
      labels: [],
      datasets: [
        {
          label: 'Budget Amount',
          data: [],
        },
      ],
    });
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await Axios.get('http://localhost:5000/budget');
          const extractedData = response.data;
  
          const labels = extractedData.map((data) => data.title);
          const data = extractedData.map((data) => data.budget_amt);
          const color = extractedData.map((data)=> data.color);
          const expense = extractedData.map((data)=> data.expense)
          const expensesColors = color.map(color => expenseColor(color));
          
          setBudgetData({
            labels: labels,
            datasets: [
              {
                label: 'Budget Data',
                data: data,
                backgroundColor: color
              },  {
                label: 'Expenses',
                data: expense,
                backgroundColor: expensesColors,
            }
            ],
          });
        } catch (error) {
          console.error('Error fetching budget data:', error);
        }
      };
  
      fetchData();
    }, []); 
  
    return (
      <div>
        <div>
          <BarChart chartData={budgetData} />
        </div>
        <div>
          <PieChart chartData={budgetData} />
        </div>
        <div>
        <h2>Budget Data Table</h2>
        <table className="table table-lg">
          <thead>
            <tr>
              <th>Title</th>
              <th>Budget</th>
              <th>Expenses</th>
              <th>Color</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {budgetData.labels.map((title, index) => (
              <tr key={index}>
                <td>{title}</td>
                <td>{budgetData.datasets[0].data[index]}</td>
                <td>{budgetData.datasets[1].data[index]}</td>
                <td style={{ backgroundColor: budgetData.datasets[0].backgroundColor[index], width: '20px', height: '20px' }}></td>
                <td>
                    <a href="" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                    <a href="" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      
    )
     
  }
  
  function expenseColor(color) {
    const percent = 35;
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, (num >> 16) - amt);
    const G = Math.max(0, (num >> 8 & 0x00FF) - amt);
    const B = Math.max(0, (num & 0x0000FF) - amt);

    return `#${(1 << 24 | R << 16 | G << 8 | B).toString(16).slice(1)}`;
  }

  export default DashboardPage;