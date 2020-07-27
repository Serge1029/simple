import React, {useState} from "react";
import Post from "./Post";

const Reply = (props) => {

    let replyNumber = 0;
    props.postsList.map((post, index) => {
        if(post.parentPostId === props.parentPostId) {
            replyNumber++;
        }
        console.log("there exists " + replyNumber + " replies for comment " + index );
    })


    const renderReply = (parentPostId) => {
        props.postsList.map((post) => (
            <div>
                {
                    post.parentPostId === parentPostId && 
                    <Post posts={props.postsList}/>
                }
                {
                    post.parentPostId === parentPostId && 
                    <Reply postsList={props.postsList} parentPostId={post.parentPostId} />
                }
            </div>
        ))
    }

        return (
            <div>
                {
                    renderReply(props.parentPostId)
                }
            </div>

        )
}

export default Reply