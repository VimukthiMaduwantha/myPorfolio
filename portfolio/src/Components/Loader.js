import React from 'react'
import '../Styles/loader.css'

function Loader() {
    return (
        <div className='loader'>
            <div className='loader__circle'></div>
            <div className='loader__circle'></div>
            <div className='loader__circle'></div>
            <div className='loader__circle'></div>
        </div>

    )
}

export default Loader