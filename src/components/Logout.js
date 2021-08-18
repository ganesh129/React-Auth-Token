import {Link} from 'react-router-dom';

const Logout=()=>{
    localStorage.removeItem('token');
    return(
        <div>
            <h1 style={{color: "red"}}>You Have been Logged out SuccessFully</h1>
            <Link to='/'>Login Again</Link>
        </div>
    )
}
export default Logout;