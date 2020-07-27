import React, {useState} from "react";
import TimeAgo from "react-time-ago";
import EditDelete from "./EditDelete";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Post = (props) => {
    const [userName, setUserName] = useState("");
    const [showPostForm, setShowPostForm] = useState(false);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [likeClick, setLikeClick] = useState(false);
    const [dislikeClick, setDislikeClick] = useState(false);
    const [userReply, setUserReply ] = useState("");

    function submitPost(event) {
        event.preventDefault();
        //call method that sets the postContent of a post to the value of the user input
        props.addPost(userReply, userName);
        //clear userPost
        setUserName("");
        setUserReply("");
        setShowPostForm(!showPostForm);
    }

    //if like button is clicked
    const onLikeClicked = () => {
        if(!likeClick) {
            setLikeClick(true);
            setLikes(likes + 1);

            if(dislikeClick) {
                setDislikeClick(false);
                setDislikes(dislikes - 1);
            }
        }
        else {
            setLikeClick(false);
            setLikes(likes - 1);
        }
    }

    //if dislike button is clicked
    const onDislikeClicked = () => {
        if(!dislikeClick) {
            setDislikeClick(true);
            setDislikes(dislikes + 1);

            if(likeClick) {
                setLikeClick(false);
                setLikes(likes - 1);
            }
        }
        else {
            setDislikeClick(false);
            setDislikes(dislikes - 1);
        }
    }

    //gets the current date
    var d = Date(Date.now());
    let a = d.toString();
    
    return (
        <div>
            <Card>
                <Card.Header>
                    {props.post.userName}
                    {/*Component to render how much time ago a comment was posted*/}
                    <TimeAgo date={a} className="current-date"/>
                </Card.Header>
                <Card.Body>
                     {/*Renders post content*/}
                    {props.post.postContent}
                </Card.Body>
                    <Card.Footer>
                        <div className="footer-buttons">
                            <div>
                                <button type="button" onClick={() => setShowPostForm(!showPostForm)} className="reply-button">
                                    Reply
                                </button>   
                            </div>
                            <div>
                                <button type="button" onClick={onLikeClicked} className="like-button">
                                    Like  {likes !== 0 && likes}
                                </button>
                            </div>
                            <div>
                                <button type="button" onClick={onDislikeClicked} className="dislike-button">
                                    Dislike {dislikes !== 0 && dislikes}
                                </button>
                            </div>
                            <div className="personal-buttons">
                                {/*this functionality (editing and deleting posts) should only be available to the comments created by the current user */}
                                <EditDelete posts={props.posts} postId={props.post.id} setPosts={props.setPosts} addPost={props.addPost}/>
                            </div>
                        </div>
                    </Card.Footer>
            </Card>
            <div>
                 {/*Reply form*/}
                {showPostForm && 
                    <div>
                    <Card className="post-editor">
                        <Card.Body>
                            <Form>
                                <input 
                                    type="form"
                                    value={userName} 
                                    onChange={(e) => setUserName(e.target.value)} 
                                    placeholder="Name"
                                >
                                </input>
                                <textarea  
                                    value={userReply} 
                                    onChange={(e) => setUserReply(e.target.value)} 
                                    className="form-control"
                                    placeholder={"Replying to @"+props.post.userName}
                                >
                                </textarea>
                                <button type="button" onClick={submitPost} className="btn btn-primary post-button">
                                    Reply ➤
                                </button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
                }
            </div>
        </div>
    )
}

export default Post;