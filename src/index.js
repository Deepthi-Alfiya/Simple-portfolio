import React from 'react';
import ReactDOM from 'react-dom/client';
import PersonalPortfolio from './PersonalPortfolio';
import './index.css'; // Ensure this path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <PersonalPortfolio />
    </React.StrictMode>
);
