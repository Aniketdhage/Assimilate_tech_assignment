import { Button, FormControl, Input, InputLabel,FormGroup, makeStyles, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import {addUser} from '../service/api';
import {useNavigate} from 'react-router-dom';

const useStyle = makeStyles({
    container : {
        width : "50%",
        margin : "5% 0 0 25%",
        '& > *' : {
            margin : "20"
        }
    }
});

    const initialValue = {
        name : '',
        username : '',
        email : '',
        phone : '',
    }


function AddUsers() {

    const classes = useStyle();
    const [user, setUser] = useState(initialValue);
    const {name, username, email, phone} = user;
    const navigate = useNavigate();

    function onValueChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }

    return (
      
          <FormGroup className={classes.container}>
              <Typography variant="h4">Add User</Typography>
              <FormControl>
                  <InputLabel>Name</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name = 'name' value={name}/>
              </FormControl>
              <FormControl>
                  <InputLabel>Username</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name = 'username' value={username}/>
              </FormControl>
              <FormControl>
                  <InputLabel>Email</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name = 'email' value={email}/>
              </FormControl>
              <FormControl>
                  <InputLabel>Mobile</InputLabel>
                    <Input onChange={(e)=> onValueChange(e)} name = 'phone' value={phone}/>
              </FormControl>
             <Button variant="contained" onClick={()=>addUserDetails()} color="primary">Add User</Button>
          </FormGroup>
        
    )
}



export default AddUsers;

