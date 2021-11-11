import React from 'react';

const styles = {
    borders: {
        border: 'solid'
    }
}

const mainPage = () => {
    return (
        <div >
            <div className='mainPage text-5xl m-6'>Hello!</div>
            <div style={styles.borders} className='m-6 p-8'>I love my FAMILY!!!!</div>
            <div style={styles.borders} className='m-6 p-8'>What is it?</div>
            <div style={styles.borders} className='m-6 p-8'>Urgent Nuerodivergence</div>
        </div>
        
    )
}

export default mainPage;

