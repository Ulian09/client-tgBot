import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import "./HomePage.css"


const HomePage = () => {
    return (
        <main>
            <NavBar />
            <section>
                <div className='section-form'></div>
                <div className='section-img'></div>
            </section>
        </main>
    );
};

export default HomePage;