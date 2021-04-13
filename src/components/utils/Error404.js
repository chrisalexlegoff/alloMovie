import React from 'react';
import { useHistory } from 'react-router';

const ErrorSearch = () => {
    const history = useHistory();

    return (
        <div>           
            {setTimeout(() => {
                history.push('/')
            }, 1500)}
        </div>
    );

}
export default ErrorSearch;