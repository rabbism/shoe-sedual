import React from 'react';

const Show = (props) => {
    const {name ,type} =props.show.show
    return (
        <div class="col-6">
        <div class="p-3 border bg-light">
            <h3>Name : {name}</h3>
            <button className='btn btn-primary p-3 mt-2'>Details</button>
            
            </div>
      </div>
    );
};

export default Show;