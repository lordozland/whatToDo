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
        </div>
        
    )
}

export default mainPage;

