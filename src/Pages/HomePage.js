import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Users from '../Components/Users.js';

const HomePage = () => {
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState(null);


    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => setUsers(data))
    }, [])

    const deleteUser = (userId) => {
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
    };

    const editUser = (user) => {
        setSelectedUser(user);
    };

    return (
        <>
            <div className='container'>
                <h1 className={'text-center pt-5'}><b>USERS</b></h1>
                <div className="row mt-4">
                    <Users users={users} deleteUser={deleteUser} editUser={editUser} editUser={editUser} setUsers={setUsers}/>
                </div>
            </div>
        </>
    );
}

export default HomePage;

