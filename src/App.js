import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/search'} element={<SearchPage />} />
            </Routes>
        </>
    );
}

export default App;