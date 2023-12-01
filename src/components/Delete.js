import React, { useEffect } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



function Delete(){
    
    
    
    const navigate = useNavigate();
    const { budget_id } = useParams();
    console.log('Component rendered with budget_id:', budget_id);
    console.log('this is the budget id:' +budget_id);
    // handle the deletion api
    useEffect(()=>{
        console.log('Effect triggered with budget_id:', budget_id);
        const deleteBudget = async() =>{
            try{
                await Axios.delete(`http://localhost:5000/delete/${budget_id}`);
                console.log('Budget item is deleted: ');
                navigate('/dashboard');
            } catch(error){
                console.error('Error deleting budget item:', error);
            }
        };
        deleteBudget(); 
    },[navigate, budget_id]);
    return(
        <div>
            Delete budget
        </div>
    );

};

export default Delete;