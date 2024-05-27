import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./colors.scss"

function profile({name, lastName, avatar}) {

    return (
        <>
            <h1>profile</h1>
            <div className="profile-margin">
            <div className="text-center p-2 mt-5">
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
