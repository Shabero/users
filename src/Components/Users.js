import React, { useState } from 'react';

const Users = ({ users, deleteUser, editUsers, setUsers }) => {
    const [editedUser, setEditedUser] = useState(null);
    const [updatedName, setUpdatedName] = useState('');
    const [updatedUsername, setUpdatedUsername] = useState('');
    const [updatedEmail, setUpdatedEmail] = useState('');


    const handleEditUser = (user) => {
        setEditedUser(user);
        setEditedUser(user);
        setUpdatedName(user.name);
        setUpdatedUsername(user.username);
        setUpdatedEmail(user.email);
    };

    const saveEditedUser = () => {
        const updatedUsers = users.map(user => {
            if (user.id === editedUser.id) {
                return {
                    ...user,
                    name: updatedName,
                    username: updatedUsername,
                    email: updatedEmail
                };
            }
            return user
        });
        setEditedUser(null)
        setUsers(updatedUsers)
    };

    const buttonDeleteUser = (userId) => {
        deleteUser(userId);
    };

    return (
        <>
            {users.map(user =>
                <div key={user.id} className='col-4 pb-4 pt-5 '>
                    <div className='box p-4'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mona_Lisa-restored.jpg/1200px-Mona_Lisa-restored.jpg" className={'rounded-3'} alt="" />
                        {editedUser === user ? (
                            <div className={'p-3'}>
                                <input type="text" className={'form-control form-control-dark'} value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} />
                                <input type="text" className={'form-control form-control-dark'} value={updatedUsername} onChange={(e) => setUpdatedUsername(e.target.value)} />
                                <input type="text" className={'form-control form-control-dark'} value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} />
                                <button className={'btn btn-outline-success'} onClick={saveEditedUser}>Save</button>
                            </div>
                        ) : (
                            <div>
                                <h4 className={'pt-4'}><b>Name:     </b>{user.name}</h4>
                                <p><b>Username: </b> {user.username}</p>
                                <p><b>E-mail:   </b> {user.email}</p>
                                <div className={'d-flex justify-content-between'}>
                                    <button className={'btn btn-outline-warning'} onClick={() => handleEditUser(user)}>Edit</button>
                                    <button className={'btn btn-danger'} onClick={() => buttonDeleteUser(user.id)}>Delete</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Users;
