import React from 'react'
import './Card.css'

const Card = ({judul, deskripsi, pov1, pov2, img}) => {
    return (
        <div className="card">
            <div className="cardHeader">
                <div className="cardLeft">
                    <h2>{judul}</h2>
                    <p>{deskripsi}</p>
                </div>


                <div className="cardRight">
                        <div className="text">
                            <h2>{pov1}</h2>
                            <h2>{pov2}</h2>
                        </div>
                    <div className="imageBackground">
                        <img src={img} alt="" className="imageContainer"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
