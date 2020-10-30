import React, { useState, useEffect } from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar';
import { db } from './firebase';
import firebase from 'firebase';
import TimeAgo from 'react-timeago'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

var strings = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: 'ago',
    suffixFromNow: 'from now',
    seconds: '%d sec',
    minute: '1 m',
    minutes: '%d m',
    hour: '1 h',
    hours: '%d h',
    day: '1 d',
    days: '%d d',
    month: '1 mo',
    months: '%d mos',
    year: '1 y',
    years: '%d ys',
    wordSeparator: ' '
};

const formatter = buildFormatter(strings)

function Post({ user, postId, userName, caption, imageUrl, timeStamp }) {
    const [comments, setcomments] = useState([]);
    const [comment, setcomment] = useState('');
    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db
                .collection('posts')
                .doc(postId)
                .collection('comments')
                .orderBy('timestamp', 'desc')
                .onSnapshot(snapshot => {
                    setcomments(snapshot.docs.map(doc => doc.data()))
                })
        }

        return () => {
            unsubscribe();
        }
    }, [postId])
    const postComment = (e) => {
        e.preventDefault();
        db.collection('posts').doc(postId).collection('comments').add({
            text: comment,
            userName: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setcomment('')
    }
    return (
        <div className="post">
            <div className="post_header">
                <div className="header_text">
                    <Avatar className="post_avatar" alt={userName} src="/static/images/avatar/1.jpg" />
                    <h3 className="heading">{userName}</h3>
                </div>
                <div>
                    {timeStamp ? (
                        <span className="time_stamp postTimeStamp">
                            <TimeAgo date={timeStamp.toDate()} formatter={formatter} minPeriod={60} maxPeriod={60} />
                        </span>
                    ) : (
                            <span></span>
                        )}
                </div>
            </div>
            <img className="post_image" alt="" src={imageUrl} />
            <h4 className="post_caption"><strong>{userName} :</strong> {caption}</h4>
            <div className="commentSection">
                {comments.map(comment => (
                    <div className="commentBoxMain">
                        <div className="commentBox_avatar">
                            <Avatar className="post_avatar" alt={comment.userName} src="/static/images/avatar/1.jpg" />
                        </div>
                        <div className="commentTextSection">
                            <div className="commentContainer">
                                <strong>{comment.userName}</strong><p className="user_comment">{comment.text}</p>
                            </div>
                            {comment?.timestamp ? (<span className="time_stamp"><TimeAgo date={comment.timestamp.toDate()} formatter={formatter} minPeriod={60} maxPeriod={60} /></span>) : (
                                <span></span>
                            )}

                        </div>
                    </div>
                ))}
            </div>
            {user?.displayName ? (
                <form className="comments_box">
                    <input className="post_comments" type="text" placeholder="Add comments ..." value={comment} onChange={(e) => { setcomment(e.target.value) }} />
                    <button className="post_button" type="submit" onClick={postComment} disabled={!comment}>Post</button>
                </form>

            ) : (
                    <span></span>
                )}

        </div>
    )
}

export default Post
