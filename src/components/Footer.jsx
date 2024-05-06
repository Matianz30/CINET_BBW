import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css';
import '/src/colors.scss';

function Footer() {
    return (
        <>
            <section className="">
                <footer className="text-center text-black background-color-grey" >
                    <div className="container p-4 pb-0">
                        <section className="">
                            <p className="d-flex justify-content-center align-items-center">
                                <span className="me-3">Register for free</span>
                                <button data-mdb-ripple-init type="button"
                                        className="border-black btn btn-outline-light btn-rounded text-black">
                                    Sign up!
                                </button>
                            </p>
                        </section>
                    </div>

                    <div className="text-center p-3 background-color-grey-dark" >
                        © 2024 Copyright:
                        <a className="text-black" href="/"> CINET.com</a>
                    </div>
                </footer>
            </section>
        </>
    );
}

export default Footer;
