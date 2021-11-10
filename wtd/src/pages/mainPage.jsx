import React from 'react';

const styles = {
    borders: {
        border: 'solid'
    }
}

const mainPage = () => {
    return (
        <div >
            <div className='mainPage text-5xl'>Hello!</div>
            <div style={styles.borders} className='m-6'>What to put here?</div>
        </div>
        
    )
}

export default mainPage;