import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [details,setDetails] =useState([])
    const {showId} =useParams();
    fetch(`https://api.tvmaze.com/shows/${showId}`)
    .then(res => res.json())
    .then(data => setDetails(data))
    return (
        <div>
            <h2>Details comming soon{details.name}</h2>
            <div>
            <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={details.image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{details.name}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Details;