import React from 'react'

function UnderConstruction() {
    return (
        <>
            <div style={styles.container}>
                <h1 style={styles.title}>🚧 Portfolio Under Construction 🚧</h1>
                <p style={styles.text}>I'm working hard to launch soon. Stay tuned!</p>
            </div>
        </>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f2f2f2',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '1rem',
    },
    text: {
        fontSize: '1.2rem',
        color: '#666',
    },
};

export default UnderConstruction