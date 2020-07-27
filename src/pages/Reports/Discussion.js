import React, {useState} from "react";
import PostAddition from "./PostAddition";
import Post from "./Post";
import Reply from "./Reply"

const Discussion = () => {
    const [showPostForm, setShowPostForm] = useState(false);
    const [posts, setPosts] = useState([]);

    //passing user post content
    function addPost(post, username) {
        //console.log("this post Content from POdt addition: " + post);

        //push post to posts array
        const previousPosts = posts;
       
        //dont really want to push a post this way, change code to deal with database
        previousPosts.push({id: previousPosts.length + 1, postContent: post, userName: username });

        setPosts([...previousPosts]);
    }

    return(
        <div>
            <div className="post-component">
                {
                    posts.map((post) => (
                   
                            <Post post={post} key={post.id} addPost={addPost} posts={posts} setPosts={setPosts}/>
                
                        )
                    )
                }
            </div>
            <div>
                {showPostForm && <PostAddition addPost={addPost} showPostForm={showPostForm} setShowPostForm={setShowPostForm}/>}
            </div>
            <div className="Footer">
                <button className="btn btn-primary thread-button" onClick= {() => setShowPostForm(!showPostForm)}>
                    Start new thread
                </button>
            </div>
        </div>
    )
}

export default Discussion;