import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        const filteredResults = users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    return (
        <div className={'search-page'}>
            <div className={'container d-flex justify-content-center mb-5'}>
                <div className={'pt-5 d-flex flex-direction-row'}>
                    <input
                        className={'form-control form-control-dark'}
                        type="text"
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    <button className={'btn btn-outline-info'} onClick={handleSearch}>
                        Submit
                    </button>
                </div>
            </div>
            {searchResults.length > 0 ? (
                <div className={'container mt-4'}>
                    {searchResults.map((result) => (
                        <div key={result.id} className="card mb-3">
                            <img src={`https://jsonplaceholder.typicode.com/${result.id}`} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{result.name}</h5>
                                <p className="card-text">Username: {result.username}</p>
                                <p className="card-text">Email: {result.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className={'text-center fs-2'}>Not Found!</p>
            )}
        </div>
    );
};

export default SearchPage;
