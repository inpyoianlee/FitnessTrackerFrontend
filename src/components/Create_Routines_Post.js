import React, { useState } from 'react';
import { createRoutine } from '../api';
import { getToken } from '../auth';

const createRoutine = ({ id, creatorId, isPublic, name, goal, token }) => {
    const [id, setid] = useState('');
    const [creatorId, setcreatorId] = useState('');
    const [name, setname] = useState('');
    const [goal, setgoal] = useState('');
    const [isPublic, setisPublic] = useState(false);
    const [SaveRoutine, setSaveRoutine] = useState(false);

    return (
        <div className="create-post">
            <h2>Add a New Routine</h2>
            <form
                className="create-post-form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const userToken = getToken();
                    try {
                        !id ? alert('All ids are required. Please enter your id') : null;
                        !creatorId ? alert('All creatorIds are required. Please enter your creator id') : null;
                        !name ? alert('Naming Activities are required. Please enter the name of Routine') : null;
                        !goal ? alert('Please enter a goal') : null;
                
                        const results = await createPost(id, name, goal, isPublic, SaveRoutine, userToken);
                        setid('');
                        setcreatorId('');
                        setname('');
                        setgoal('');
                        setisPublic(false);
                        setSaveRoutine(false);

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
                    id="creatorId"
                    value={title}
                    onChange={(e) => setcreatorId(e.target.value)}
                    placeholder="Id" />
                <input
                    type="text"
                    id="routine-name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder="Name" />
                <label className="post-checkbox">
                    <input
                        type="checkbox"
                        id="save-routine"
                        value={SaveRoutine}
                        onChange={(e) => setSaveRoutine(true)}
                    />
                    <p>Willing to Save?</p>
                </label>
                <button>Create Routine Post</button>
            </form>
        </div>
    )
}

export default createRoutine;