import React, { FC } from 'react';
import "./style.css"

interface ComsProps{
  titre: string;
  description: string;
  image: any;
}

const UserHeaderComponent:FC<ComsProps> = ({titre, image, description}) => {
    return(
        <>
            <div className='com-container'>
                <img src={image} alt="Profil" width={40} height={40} style={{ borderRadius:"50%", objectFit:"cover" }} />
                <div style={{ marginLeft:"10px", justifyItems:"center" }}>
                    <h1 style={{fontSize:"12px",fontWeight:"bold", marginBottom:"-1px"}}>{titre}</h1>
                    <small>{description}</small>
                </div>
            </div>
        </>
    )
}

export default UserHeaderComponent