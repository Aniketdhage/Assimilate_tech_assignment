import { Button, FormControl, Input, InputLabel,FormGroup, makeStyles, Typography } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import { getUsers, editUser} from '../service/api';
import {useNavigate, useParams} from 'react-router-dom';


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


function EditUsers() {

    const classes = useStyle();
    const [user, setUser] = useState(initialValue);
    const { id } = useParams();
    const {name, username, email, phone} = user;
    const navigate = useNavigate();

    useEffect(() => {
        loadUserData();
    }, [])

    const loadUserData = async () => {
       const responce = await getUsers(id);
       setUser(responce.data);
    }

    function onValueChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const editUserDetails = async () => {
        await editUser(id, user);
        navigate('/all');
    }

    return (
      
          <FormGroup className={classes.container}>
              <Typography variant="h4">Edit User</Typography>
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
             <Button variant="contained" onClick={()=>editUserDetails()} color="primary"> Edit User</Button>
          </FormGroup>
        
    )
}



export default EditUsers;

