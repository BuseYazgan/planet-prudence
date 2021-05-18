import React from 'react'
import './Patreon.scss'
import patreonPic from '../../images/patreon-1536x864.jpg'

const Patreon = () => {
    return (
        <div className={"patreonDiv"}>
            <div className={"patreonLeft"}>
                <h3>Support me on Patreon</h3>
                <ul className={"patreonList"}>
                    <li>Access to unique content</li>
                    <li>Weekly podcast</li>
                    <li>Drawings on demand</li>
                    <li>Access to my Art Club</li>
                    <li>10% off my shop</li>
                </ul>
                <a href="https://www.patreon.com/planetprudence">SUPPORT ME</a>
            </div>
            <div className={"patreonRight"}>
                <img src={patreonPic} alt="patreon"/>
            </div>
        </div>
    )
}

export default Patreon
