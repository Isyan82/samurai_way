import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({state, addPost, updateNewPostText}) => {
    let postsElements = state.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>);
    let newPostText = state.newPostText

    let onAddPost = () => {
        addPost()
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                    value={newPostText} />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;