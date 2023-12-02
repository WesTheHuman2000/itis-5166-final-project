import React, { useEffect } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



function Delete(){   
    const navigate = useNavigate();
    const { user_id, budget_id } = useParams();

    
    // handle the deletion api
    useEffect(()=>{
        console.log('Effect triggered with budget_id:', budget_id);
        const deleteBudget = async() =>{
            try{
                await Axios.delete(`http://localhost:5000/delete/${user_id}/${budget_id}`);
                console.log('Budget item is deleted: ');
                navigate('/dashboard');
            } catch(error){
                console.error('Error deleting budget item:', error);
            }
        };
        deleteBudget(); 
    },[navigate, user_id, budget_id]);
    return(
        <div>
            Delete budget
        </div>
    );

};

export default Delete;