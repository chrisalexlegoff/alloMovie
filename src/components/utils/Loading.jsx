import React from 'react';
import Style from './Loading.module.scss'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return  (
        <div className={ Style.container }>
            <div className="d-flex flex-row justify-content-center align-items-center w-100">
                <img src="https://cdn.dribbble.com/users/600626/screenshots/2944614/loading_12.gif" alt="loading-gif"/>
            </div>
        </div>   
    )
}