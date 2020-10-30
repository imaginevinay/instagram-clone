import React from 'react'
import './Navbar.css'
import { Button } from '@material-ui/core';
import ImageUpload from './ImageUpload';

function Navbar({ auth, user, signIn, signUp }) {
    return (
        <div className="nav">
            <img className="logo" src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />

            {user?.displayName ? (
                <ImageUpload username={user.displayName} />
            ):(
                <p className="loginText">You need to login to upload posts.</p>
            )}
            {user ? (
                <Button onClick={() => auth.signOut()} >Logout</Button>
            ) : (
                    <div className="app_loginContainer">
                        <Button onClick={() => signIn(true)} >Sign In</Button>
                        <Button onClick={() => signUp(true)} >Sign Up</Button>
                    </div>)}
        </div>
    )
}

export default Navbar
