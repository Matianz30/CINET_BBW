import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./colors.scss"

function profile({name, lastName, avatar, loggedIn}) {

    let profileText = "Not logged in"
    if (loggedIn) {
        profileText = ""  
    }
    

    return (
        <>
            <h1 className='d-flex justify-content-center mt-5'>{profileText}</h1>

            <div className="profile-margin">
            <div className="text-center p-2">
                <img src={avatar} alt="" className="avatar"/>
            </div>
            <div className="container name">
                <div className="row">
                    <div className="col text-center">
                        {name} {lastName}
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default profile
