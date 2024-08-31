import React from 'react';
import {Routes, Route, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSetting from './ProfileSetting'

function Profile () {
    return (
        <div>
            <h1>Profile</h1>
            <nav>
                <ul>
                    <li><Link to="details">Details</Link></li>
                    <li><Link to="settings">Settings</Link></li>
                </ul>
            </nav>
        </div>
    );
}


export default Profile;