import React from 'react';
import spinner from '../../../static/spinner.jpg';

const Spinner = () => {
    const speed = 5;

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
            <div style={{height: '150px', marginTop: '30px'}}>
                <img style={{height: '100%', animation: `spin ${speed}s linear infinite`}} src={spinner} alt="img"/>
            </div>
        </div>
    );
};

export default Spinner;