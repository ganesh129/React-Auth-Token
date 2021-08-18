import {Link, Redirect} from 'react-router-dom';
import {useState} from 'react';


const Private=()=>{
    const token=localStorage.getItem('token');
    const[loggedin,setLoggedin]=useState(token==null?false:true);
   
   

    return(
        <div>
            {!loggedin && <Redirect to='/'/>}
            <h1 style={{color: "Wheat"}}>Private Content.only authorized users can access</h1>
            <Link to='/logout'>Logout</Link>
        </div>
    )
}
export default Private;