import React from 'react';
import EditProfileForm from '../../forms/EditProfileForm';
import {useNavigate} from 'react-router-dom';

function Profile({user, setUser, teams}) {
    const navigate = useNavigate();
    if (localStorage.getItem('token') == null) {
        navigate('/home');
    }

    return (
        <div className="main-content">
            <p>Edit Profile</p>
            <EditProfileForm user={user} setUser={setUser} teams={teams} />
        </div>
    )
}

export default Profile;