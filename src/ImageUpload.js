import React, { useState } from 'react'
import { Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { storage, db } from './firebase';
import firebase from 'firebase'
import './ImageUpload.css';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        width: '100%'
    },
    chooseFile_button: {
        backgroundColor: '#0095f6',
    }
    
}));

function ImageUpload({ username }) {
    const [caption, setcaption] = useState('');
    const [progress, setprogress] = useState(0);
    const [image, setimage] = useState(null);
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setimage(e.target.files[0])
        }
    }
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', (snapshot) => {
            // progess function
            const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setprogress(progress);
        }, err => {
            // error function
            console.log(err);
            alert(err.message)
        }, () => {
            // on complete
            storage.ref('images').child(image.name).getDownloadURL()
                .then(url => {
                    // post image in db
                    db.collection('posts').add({
                        caption: caption,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        imageUrl: url,
                        userName: username
                    })
                    setprogress(0);
                    setcaption('');
                    setimage(null);
                    handleClose();
                })
        })
    }
    return (
        <div className="image_upload">
            <Button variant="contained" size="small" color="primary" className={classes.chooseFile_button}  onClick={handleOpen}>Add a new post</Button>
            <Modal open={open} onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    <center>
                        <img src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" className="app_header_img" />
                    </center>
                    <Input className="caption" type="text" placeholder="Enter a caption..." onChange={e => setcaption(e.target.value)} value={caption} />
                    <div className="file_upload">
                        <Input classes={{root: classes.root}} type="file" onChange={handleChange} />
                        <progress className="progress_bar" value={progress} max="100" />
                    </div>
                    <div className="upload_button">
                        <Button variant="contained" size="small" color="primary" className={classes.chooseFile_button} onClick={handleUpload}>Upload</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ImageUpload
