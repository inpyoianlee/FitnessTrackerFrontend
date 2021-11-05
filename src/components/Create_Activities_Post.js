import React, { useState } from 'react';
import { CreateActivity } from '../api';
import { getToken } from '../auth';

const Create_Activities_Post = ({ activityId, name, description, token }) => {
    const [id, setid] = useState('');
    const [name, setname] = useState('');
    const [description, setDescription] = useState('');
    const [SaveActivity, setSaveActivity] = useState(false);

    return (
        <div className="create-post">
            <h2>Add a New Activity</h2>
            <form
                className="create-post-form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const userToken = getToken();
                    try {
                        !id ? alert('All ids are required. Please enter your id') : null;
                        !name ? alert('Naming Activities are required. Please enter the name of Activity') : null;
                        !description ? alert('Please enter a description') : null;
                
                        const results = await createPost(id, name, description, SaveActivity, userToken);
                        setid('');
                        setname('');
                        setDescription('');
                        setSaveActivity(false);

                        const allPostsCopy = allPosts.slice();
                        allPostsCopy.unshift(results.data.post);
                        setAllPosts(allPostsCopy);
                        const newUserPost = allPostsCopy.filter(e => {
                            if (e.author._id === userId) {
                                return e
                            }
                        });
                        setUserPosts(newUserPost);
                    } catch (err) {
                        console.log(err);
                    } finally {

                    }
                }}>

                <input
                    type="text"
                    id="Id"
                    value={title}
                    onChange={(e) => setid(e.target.value)}
                    placeholder="Id" />
                <input
                    type="text"
                    id="activity-name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder="Name" />
                <textarea
                    id="activity-description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    rows={8} />
                <label className="post-checkbox">
                    <input
                        type="checkbox"
                        id="save-activity"
                        value={SaveActivity}
                        onChange={(e) => setSaveActivity(true)}
                    />
                    <p>Willing to Save?</p>
                </label>
                <button>Create Activity Post</button>
            </form>
        </div>
    )
}

export default Create_Activities_Post;