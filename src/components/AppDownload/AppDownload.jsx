import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download<br />Feasto App</p>
            <div className="app-download-platforms">
                <a href="/">
                <img src={assets.play_store} alt="" />
                </a>
                <a href="/">
                <img src={assets.app_store} alt="" />
                </a>
            </div>
        </div>
    )
}

export default AppDownload