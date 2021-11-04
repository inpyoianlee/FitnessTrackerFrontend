import React from 'react';

const Users = ({ userName }) => {
  return (
    <div className='profile-outer'>
      <h2>{userName}'s Profile</h2>
    </div>
  )
}

import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

const UserPosts = ({ userPosts, userName }) => {
    const { userPostId } = useParams();
    const history = useHistory();

    const handleClick = () => {
        history.push('/profile/userposts');
    }

    return (
        <div className="user-posts-main">
            <h2>{userName}'s Posts</h2>
            <div className="user-posts-posts">
                {
                    userPosts
                        ? userPosts.map(e => {
                            return (

                                <div key={e._id}>

                                    { e.active
                                        ? <div
                                            className="user-posts">
                                            <h3 className="post-title">{e.title} </h3>
                                            <p className="post-description">{e.description}</p>
                                            <p><span className="post-des-info">Price:</span> {e.price} </p>
                                            <p><span className="post-des-info">Location:</span> {e.location} </p>
                                            <p><span className="post-des-info">Willing to Deliver?:</span> {e.willDeliver ? "Yes" : "No"} </p>

                                            {
                                                userPostId === e._id
                                                    ? <>
                                                        <button
                                                            className="edit-post-button"
                                                            onClick={() => handleClick()}>
                                                            Back
                                                    </button>
                                                    </>
                                                    : <Link to={`/profile/userposts/${e._id}`}>
                                                        <button className="edit-post-button">View Post</button>
                                                    </Link>
                                            }
                                        </div>
                                        : null}
                                </div>
                            )
                        })
                        : <h2>You have not created any posts</h2>
                }
            </div>
        </div>
    )
}

export default Users;