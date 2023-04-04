import React from 'react';
import EditProfileForm from '../../forms/EditProfileForm';

function Profile({user, setUser, teams}) {
    return (
        <div className="main-content">
            <p>Edit Profile</p>
            <EditProfileForm user={user} setUser={setUser} teams={teams} />
        </div>
    )
}

export default Profile;