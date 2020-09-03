import React from 'react';
import { Spinner } from 'react-bootstrap';

import './loader.scss';

export const Loader = () => {
    return(
        <div className='loader'>
          <Spinner animation="grow" />
        </div>
    )
};