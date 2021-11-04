import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { deletePost } from '../api';
import { getToken } from '../auth';

const DeleteButton = ({ userPosts, setUserPosts, highlightedPost }) => {
    const { userPostId } = useParams();
    const history = useHistory();
    const deletePostId = highlightedPost[0]._id;
    const handleClick = () => {
        history.push('/profile/userposts');
    };

    return (
        <>
            <button
                className="delete-post-button"
                onClick={async () => {
                    try {
                        const userToken = getToken();
                        const post_ID = userPostId;
                        const emptyPostObj = await deletePost(userToken, post_ID);
                        const filteredPosts = userPosts.filter(post => {
                            if (post._id !== deletePostId) {
                                return post
                            }
                        });
                        setUserPosts(filteredPosts);
                        handleClick();
                    } catch (err) {
                        console.log(err);
                    }
                }}>
                <span className="material-icons">delete</span>  Delete Post
    </button>
        </>
    )
}

export default DeleteButton;