import React, { useState } from 'react';
import Show from '../Show/Show';

const Shows = () => {
    const [shows,setShows] = useState([])
    fetch('https://api.tvmaze.com/search/shows?q=all')
    .then(res => res.json())
    .then(data => setShows(data))
    return (
       
       <div class="container overflow-hidden">
            <div class="row gy-5">
            {
                    shows.map(show => <Show key={show.show.name} show ={show}></Show>)
            }
            </div>
<       /div>
    );
};

export default Shows;