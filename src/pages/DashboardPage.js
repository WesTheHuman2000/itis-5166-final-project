import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import { Link, useParams } from 'react-router-dom';


function DashboardPage() {
    const [extractedData, setExtractedData] = useState([]);
    
    const [budgetData, setBudgetData] = useState({
      labels: [],
      datasets: [
        {
          label: 'Budget Amount',
          data: [],
        },
      ],
    });
    const { budget_id } = useParams();
    const user_id = localStorage.getItem('user_id');
    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem('jwt'); // Retrieve token from local storage
          
          
          const response = await Axios.get('http://67.205.136.28:5000/budget', {
            headers: {
              Authorization: `Bearer ${token}`,
              user_id: user_id,
            },
          });
          const data = response.data;

          
          setExtractedData(data);
          
          const labels = data.map((data) => data.title);
          const budgetData = data.map((data) => data.budget_amt);
          const color = data.map((data)=> data.color);
          const expense = data.map((data)=> data.expense)
          const expensesColors = color.map(color => expenseColor(color));
          
          setBudgetData({
            labels: labels,
            datasets: [
              {
                label: 'Budget Data',
                data: budgetData,
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
    }, [user_id]); 
    
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
              <th>Budget ID</th>
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
                <td>{extractedData[index].budget_id}</td>
                <td>{title}</td>
                <td>{budgetData.datasets[0].data[index]}</td>
                <td>{budgetData.datasets[1].data[index]}</td>
                <td style={{ backgroundColor: budgetData.datasets[0].backgroundColor[index], width: '20px', height: '20px' }}></td>
                <td>
                    <Link to={`/budget/${user_id}/${extractedData[index].budget_id}`} className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></Link>
                    <Link to={`/delete/${user_id}/${extractedData[index].budget_id}`} className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></Link>
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