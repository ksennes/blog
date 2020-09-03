import React from "react";
import {Link} from 'react-router-dom';

export const NotFoundLayout = () => {
  return (
    <div>
      <h1>Not found :(</h1>
      <p>Unfortunately, nothing was found at this address.</p>
      <Link to="/">
        <button type="button" class="btn btn-light">
          Back
        </button>
      </Link>
    </div>
  );
};
