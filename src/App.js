import './App.css';
import Navbar from './Navbar';
import Post from './Post';
import { useState, useEffect } from 'react'
import { db, auth } from './firebase';
import { Modal, Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import InstagramEmbed from 'react-instagram-embed';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  margin: {
    backgroundColor: '#0095f6',
    margin: '10px auto',
    width: '50%',
    textAlign: 'center'
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


function App() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [modalStyle] = useState(getModalStyle);
  const [email, setEmail] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setuser] = useState(null);
  const [open, setOpen] = useState(false);
  const [openSignIn, setopenSignIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // user logged in...
        setuser(authUser);
      } else {
        setuser(null)
      }
      return () => {
        unsubscribe();
      }
    })
  }, [user, userName])

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
    })
    //onSnapshot -> every single time a change happens in firebase firestore db this query will fire
  }, [])

  const signUp = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        const updateUser = authUser.user.updateProfile({
          displayName: userName
        })

        console.log('updated user', updateUser);
        window.location.reload(false);
        return updateUser
      }).catch(err => alert(err.message));

    setOpen(false);
  }

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch(err => alert(err.message))
    setopenSignIn(false)
  }


  return (
    <div className="app">
      <Modal open={open} onClose={() => { setOpen(false) }}>
        <div style={modalStyle} className={classes.paper}>
         
            <center>
              <img src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" className="app_header_img" />
            </center>
            <form className="app_signUp">
            <Input placeholder="Username" type="text" value={userName} onChange={(e) => setUsername(e.target.value)} />

            <Input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

            <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <Button variant="contained" size="small" color="primary" className={classes.margin} type="submit" onClick={signUp} >Sign Up</Button>
          </form>
        </div>
      </Modal>
      <Modal open={openSignIn} onClose={() => { setopenSignIn(false) }}>
        <div style={modalStyle} className={classes.paper}>
          <center>
            <img src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" className="app_header_img" />
          </center>
          <form className="app_signUp">
            <Input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" size="small" color="primary" className={classes.margin}  type="submit" onClick={signIn} >Sign In</Button>
          </form>
        </div>
      </Modal>
      <Navbar auth={auth} user={user} signIn={setopenSignIn} signUp={setOpen}/>
      <div className="app_posts">
        <div className="app_posts_left">
          {
            posts.map(({ id, post }) => (
              <Post user={user} postId={id} key={id} imageUrl={post.imageUrl} userName={post.userName} caption={post.caption} timeStamp= {post.timestamp} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
