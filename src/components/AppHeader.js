import React from "react";

export default function AppHeader() {
    //custom header to prevent mobile hamburger menu
    return (
        <div className="app-header-container">
            <nav className="app-header-container-nav">
                <div className='nave-wrapper'>
                    <a className='app-content-container-brand brand-logo' href='/'>
                        I'm A Giraffe
                    </a>
                </div>
            </nav>
        </div>
    );
}
