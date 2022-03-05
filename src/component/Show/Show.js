import React from 'react';
import { Link } from 'react-router-dom';

const Show = (props) => {
    const {name ,type,language,id} =props.show.show
    return (
        <div class="col-6">
        <div class="p-3 border bg-light">
            <h3>Name : {name}</h3>
            <h4>Language : {language}</h4>
            <Link to={`/show/${id}`}>
            <button className='btn btn-primary p-3 mt-2'>Details</button>
            </Link>
            
            </div>
      </div>
    );
};

export default Show;