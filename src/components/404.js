import React from 'react';
import '../stylesheets/components/Home.css';
import { Link } from 'react-router-dom';

const FourOhFour = () => {
    return (
        <div className="FourOhFour main-content">
            <div>
                <h3>He shoots he..</h3>
                <p>...couldn't find that page.</p>
                <Link to={'..'}>Go Back</Link>
                <div>
                    <video autoPlay="autoplay" loop="true" muted>
                        <source src="https://cdn.videvo.net/videvo_files/video/premium/video0122/large_watermarked/56%20Gator_preview.mp4" type="video/mp4" />
                    </video>    
                </div>
            </div>
        </div>
    )
}

export default FourOhFour;