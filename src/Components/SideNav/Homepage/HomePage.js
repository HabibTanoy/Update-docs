import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const HomePage = ({ toggleHandle, toggle }) => {
    return(
        <div>
            <h1 className="text-center bdocs">Barikoi Documentation</h1>
            <div className="text-center mt-5">
                <Link to="/intro" onClick={ () => toggleHandle("toggle", toggle) }>
                <Button className="text-uppercase mr-2" variant="outline-info">barikoi api</Button>
                </Link>
            <Link to="/library-intro" onClick={ () => toggleHandle("jsToggle", toggle) }>
            <Button className="text-uppercase mr-2" variant="outline-info">javascript api</Button>
            </Link>
            <Link to="/android-intro" onClick={ () => toggleHandle("AndApi", toggle) }>
            <Button className="text-uppercase mr-2" variant="outline-info">andriod sdk</Button>
            </Link>
            <Link to="/pricing-intro" onClick={ () => toggleHandle("pricing", toggle) }>
            <Button className="text-uppercase" variant="outline-info">pricing</Button>
            </Link>
            </div>
        </div>
    )
}

export default HomePage;
