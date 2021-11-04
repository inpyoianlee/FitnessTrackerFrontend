import React, { useState } from 'react';
import { createPost } from '../api';
import { getToken } from '../auth';

const CreatePost = ({ setAllPosts, allPosts, setUserPosts, userId }) => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    return (
        <div className="create-post">
            <h2>Add a New Listing </h2>
            <form
                className="create-post-form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const userToken = getToken();
                    try {
                        !title ? alert('Post titles are required. Please enter a title') : null;
                        !description ? alert('Please enter a description') : null;
                        const userLocation = location ? location : "[On Request]";
                        const userPrice = price ? price : "Free";
                        const results = await createPost(title, description, userPrice, userLocation, willDeliver, userToken);
                        setTitle('');
                        setDescription('');
                        setPrice('');
                        setLocation('');
                        setWillDeliver(false);

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
                    id="post-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title" />

                <textarea
                    id="post-description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    rows={8} />
                <input
                    type="text"
                    id="post-price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price" />
                <input
                    type="text"
                    id="post-location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location" />

                <label className="post-checkbox">
                    <input
                        type="checkbox"
                        id="post-deliver"
                        value={willDeliver}
                        onChange={(e) => setWillDeliver(true)}
                    />
                    <p>Willing to Deliver?</p>
                </label>
                <button>Create Post</button>
            </form>
        </div>
    )
}

export default CreatePost;