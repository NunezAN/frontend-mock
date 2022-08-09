import React from 'react';
import "../style/LoadingState.css"

const LoadingState = () => {
    return (
        <div className="skeleton-loading__container">
            <button className='skeleton-loading__square'></button>
            <button className="skeleton-loading__circle"></button>
        </div>
    );
}

export default LoadingState;
