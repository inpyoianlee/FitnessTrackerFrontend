import React from 'react';
import { useParams } from 'react-router-dom';
import { UserPosts } from './';
import { SingleMessage } from './';
import { EditPost } from './';
import { getToken } from '../auth';
import DeleteButton from './DeleteButton';

const SingleUserPostPage = ({ userPosts, userName, messages, setUserPosts }) => {
    const { userPostId } = useParams();
    const auth = getToken();

    const highlightedPost = [userPosts.find((post) => {
        if (post._id === userPostId) {
            return true
        } else {
            false
        }
    })];

    const postMessages = messages.filter(e => {
        if (e.post._id && e.post._id === userPostId) {
            return e
        }
    });

    const myPost = userPosts.find((post) => {
        if (post._id === userPostId) {
            return true;
        } else {
            false;
        }
    });

    if (!myPost) {
        return (
            <div className="post-error">
                <h3> the post with id {userPostId} was not found</h3>
            </div>
        );
    } else {

        return <div className="single-user-post">
            {auth
                ? <><div className="single-user-post-top">
                    <div className="single-post">
                        <UserPosts
                            userPosts={highlightedPost}
                            userName={userName}
                            setUserPosts={setUserPosts} />

                        <DeleteButton
                            userPosts={userPosts}
                            setUserPosts={setUserPosts}
                            highlightedPost={highlightedPost} />

                    </div>
                    <div className="edit-post-comp">
                        <EditPost
                            userPosts={userPosts}
                            highlightedPost={highlightedPost}
                            setUserPosts={setUserPosts}
                            userPostId={userPostId}
                        />
                    </div>
                </div>
                    <div className="user-messages">
                        <h3>Messages</h3>
                        <SingleMessage messages={postMessages} />
                    </div>

                </>
                : null
            }
        </div>
    }
};
export default SingleUserPostPage;