import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import {getUsers,deletUserData} from "../service/api";
import {Link} from 'react-router-dom';

const useStyle = makeStyles({
    table : {
        width : "90%",
        margin : "50px 0 0 50px",
    },
    thead : {
        '& > *' :{
            background : "#000000",
            color : "white",
            fontSize : "20",
        }
    }
})

function AllUsers() {

    const [users,setUsers]= useState([]);
    const classes = useStyle();

   useEffect(()=>{
       getAllUsers();
   },[])

    const getAllUsers = async()=>{
      const responce = await getUsers();
      console.log(responce.data);
      setUsers(responce.data);
    }

    const deleteUser = async(id)=>{
        await deletUserData(id);
        getAllUsers();
    } 
    return (
       <Table className={classes.table}>
           <TableHead>
               <TableRow className={classes.thead}>
                   <TableCell>Id</TableCell>
                   <TableCell>Name</TableCell>
                   <TableCell>Username</TableCell>
                   <TableCell>Email</TableCell>
                   <TableCell>Mobile</TableCell>
                   <TableCell>Action</TableCell>
               </TableRow>
           </TableHead>
           <TableBody>
               {
                   users.map(user => (
                       <TableRow>
                           <TableCell>{user.id}</TableCell>
                           <TableCell>{user.name}</TableCell>
                           <TableCell>{user.username}</TableCell>
                           <TableCell>{user.email}</TableCell>
                           <TableCell>{user.phone}</TableCell>
                           <TableCell>
                               <Button variant="contained" color="primary" style={{marginRight: "10px"}} component={Link} to={`/edit/${user.id}`} >Edit</Button>
                               <Button variant="contained" color="secondary" onClick={() => deleteUser(user.id)}>Delete</Button>
                           </TableCell>
                       </TableRow>
                   ))
               }
           </TableBody>
       </Table>
           
        
    )
}



export default AllUsers;

