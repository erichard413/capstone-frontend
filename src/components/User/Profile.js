import React from 'react';
import EditProfileForm from '../../forms/EditProfileForm';
import {useNavigate} from 'react-router-dom';
import '../../stylesheets/components/Profile.css';

function Profile({user, setUser, teams}) {
    const navigate = useNavigate();
    if (localStorage.getItem('token') == null) {
        navigate('/home');
    }

    return (
        <div className="Profile main-content">
            <h2>Edit Profile</h2>
            <EditProfileForm user={user} setUser={setUser} teams={teams} />
        </div>
    )
}

export default Profile;