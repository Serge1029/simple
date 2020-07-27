import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const PostAddition = (props) => {
    const personUsername = localStorage.getItem('token'); 
    //console.log('This is the username: ' + personUsername);

    //state that will be changing based on the user input
    const [userName, setUserName] = useState("");
    const [userPost, setUserPost] = useState("");
   
    //posts a comment
    function submitPost(event) {
        event.preventDefault();
        //call method that sets the postContent of a post to the value of the user input
        props.addPost(userPost, userName);
        props.setShowPostForm(!props.showPostForm);
        //clear userPost
        resetValues();
    }

    function resetValues() {
        setUserName("");
        setUserPost("");
    }

    return (
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
                            value={userPost} 
                            onChange={(e) => setUserPost(e.target.value)} 
                            placeholder="Write a comment"
                            className="form-control"
                        >
                        </textarea>
                        {userPost.trim() && <button type="button" onClick={submitPost} className="btn btn-primary post-button">
                            Post ➤
                        </button>}
                        {!userPost.trim() && <button style={{cursor:"not-allowed"}} type="button" className="btn btn-secondary post-button" disabled>
                            Post ➤
                        </button>}
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PostAddition;