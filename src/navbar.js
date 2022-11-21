import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark ">
                <div className="container">

                    {/* <a classNameName="navbar-brand" href="Index1.html"><svg id="first-logo" width="75px" height="50px"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600">
                        <path
                            d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z" />
                    </svg> Ha<span style="color: red">S</span>aN</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <a className="nav-link active" aria-current="page" href="Index1.html">Home</a>
                            </li>
                            <li className="nav-item">

                                <a className="nav-link active" aria-current="page" href="Projects.html">Projects</a>
                            </li>
                            <li className="nav-item">

                                <a className="nav-link active" aria-current="page" href="Contact.html">Contact</a>
                            </li>
</ul>
                    </div>
                </div>
            </nav></div>
    )
}

export default Navbar