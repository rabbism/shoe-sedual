import React from 'react';
import NavBar from '../NavBar/NavBar';
import Shows from '../Shows/Shows';

const Home = () => {
    return (
        <>
        <div>
            <NavBar></NavBar>
            
        </div>
        <div className='mt-5 w-50 mx-auto'>
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Enter Your Show" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
            <div className='mt-5'>
                <Shows></Shows>
            </div>
        </div>
        </>
    );
};

export default Home;