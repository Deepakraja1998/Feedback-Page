import React, { useState } from 'react'; 
import FeedbackForm from './FeedbackForm';
import { TextField,Button } from '@mui/material';

function LoginPage() {

    
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [submit, setSubmit] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleGuest = () =>{
    let storeData = {'user':'guest'}
    setSubmit(true);
    localStorage.setItem('storeData',JSON.stringify(storeData));
  }

  const handleSubmit = (e) => {
    const apiData = [{username:'deepak@gmail.com',password:'12345'},
                    {username:'gnanesh@gmail.com',password:'kutta'},
                    {username:'subha@gmail.com',password:'simplywaste'}];
    const matchData = apiData.filter((vals,i) =>  vals.username.indexOf(formData.username) != -1 && vals.password.indexOf(formData.password) != -1);

    e.preventDefault();
    console.log(formData,matchData);

    let  storeData = {
        ...formData
        , user:'loginUser'
    }

    localStorage.setItem('storeData',JSON.stringify(storeData));
    if(matchData.length > 0){
        setFormData({
            username: '',
            password: ''
          
          });
          setSubmit(true)
    }else{
        setSubmit(false);
    }
  }


if(submit=== true){
    alert(`Welcome ${formData.username}`);
    return (<FeedbackForm/>)
}
else{
 
return (
    <>
    <div>

    <h2 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Login</h2>
    
    <div  style={{backgroundColor:'#eee',border:'1px solid #000',borderRadius:'5px',margin:'5vh 30%',height:'55vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
     
     <form onSubmit={handleSubmit}>
       <div>
         <TextField
           type="text"
           id="username"
           name="username"
           label='Username'
           style={{margin:10}}
           value={formData.username}
           onChange={handleChange}
           required
         />
       </div>
       <div>
         <TextField
           type="password"
           id="password"
           name="password"
           style={{margin:10}}
           label='Password'
           value={formData.password}
           onChange={handleChange}
           required
         />
       </div>
       <div style={{display:'flex', justifyContent:'center'}}>

       <Button style={{margin:'0 5'}} type="submit" variant="contained">Login</Button>
       <Button style={{marginLeft:5}} type="submit" onClick={handleGuest} variant="outlined">Guest User</Button>
       </div>
     </form>
   </div>
    </div>
    </>
  );}
}


export default LoginPage;
