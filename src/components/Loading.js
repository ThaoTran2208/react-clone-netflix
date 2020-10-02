import React from 'react';

import '../css/Loading.css';

function Loading({src}) {
    return (
        <div className="spinner">
            <img src={`/images/users/${src}.png`} alt="Spinner" data-testid="loading-picture" className="picture"/>
        </div>
    );
}

export default Loading;