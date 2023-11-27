import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={'pt-5 pb-5 bg-dark'}>
            <div className={'container'}>
                <div className={'d-flex gap-4 justify-content-between'}>
                    <Link to={'/'} className='btn btn-outline-light'>Home</Link>
                    <Link to={'/search'} className='btn btn-outline-light'>Search</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;