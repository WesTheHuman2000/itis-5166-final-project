import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import BarChart from '../components/BarChart';


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
  
          setBudgetData({
            labels: labels,
            datasets: [
              {
                label: 'Budget Amount',
                data: data,
              },
            ],
          });
        } catch (error) {
          console.error('Error fetching budget data:', error);
        }
      };
  
      fetchData();
    }, []); 
  
    return <BarChart chartData={budgetData} />;
  }
  
  export default DashboardPage;