import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css';
import '/src/colors.scss';
import 'bootstrap/dist/js/bootstrap.js';

function Footer({ name, setName, lastName, setLastName, avatar, setAvatar,loggedIn,setLoggedIn }) {
    const [firstName, setFirstName] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastNameInput(event.target.value);
    };

    const handleAvatarChange = (event) => {
        setAvatar("avatardrip.png");
        setLoggedIn(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setName(firstName);
        setLastName(lastNameInput);
        console.log('Submitted name:', firstName, lastNameInput);
    };

    return (
        <>
            <section className="">
                <footer className="text-center text-black background-color-grey">
                    {!loggedIn &&
                        <div className="container p-4 pb-0">
                            <section className="">
                                <p className="d-flex justify-content-center align-items-center">
                                    <span className="me-3">Register for free</span>
                                    <button
                                        data-mdb-ripple-init
                                        type="button"
                                        className="border-black btn btn-outline-light btn-rounded text-black"
                                        data-bs-toggle="modal"
                                        data-bs-target="#enroll"
                                    >
                                        Sign up!
                                    </button>
                                </p>
                            </section>
                        </div>
                    }

                    {/* Modal */}
                    <div
                        className="modal fade"
                        id="enroll"
                        aria-labelledby="enrollLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="enrollLabel">Login</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <p className="lead">Please log in</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="first-name" className="col-form-label">
                                                First Name:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="first-name"
                                                value={firstName}
                                                onChange={handleFirstNameChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="last-name" className="col-form-label">Last Name:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="last-name"
                                                value={lastNameInput}
                                                onChange={handleLastNameChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="col-form-label">Email:</label>
                                            <input type="email" className="form-control" id="email" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="col-form-label">Phone:</label>
                                            <input type="tel" className="form-control" id="phone" />
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleAvatarChange}>
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center p-3 background-color-grey-dark">
                        © 2024 Copyright:
                        <a className="text-black" href="/"> CINET.com</a>
                    </div>
                </footer>
            </section>
        </>
    );
}

export default Footer;
