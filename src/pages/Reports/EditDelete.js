import React, {useState} from 'react';
import Form from "react-bootstrap/Form";

const EditDelete = (props) =>{

    const [changeContent, setChangeContent] = useState("");
    //used to display edit form when user clicks edit button
    const [editClick, setEditClick] = useState(false);

    //what happens when user hits save button after editing
    function submitChanges(event) {
        event.preventDefault();
        
        props.posts.map(post => {
            if(post.id === props.postId){
                post.postContent = changeContent;
                const tempoPosts = props.posts;
                props.setPosts([...tempoPosts]);
                setEditClick(!editClick);
            }
        })
        
        setChangeContent("");
    }

    //if delete button is clicked
    const onDeleteClick = (event) => {
        event.preventDefault();
     
        props.posts.map(post => {
            if(post.id === props.postId){
                const tempoPosts = props.posts;
                tempoPosts.splice(props.posts.indexOf(post), 1);
                props.setPosts([...tempoPosts]);
            }
        })
    }

    //what happens when edit button is clicked
    const editing = props.posts.map(post => {
            if(post.id === props.postId){
                return (
                    <div>
                        {/*Edit form*/}
                        <Form>
                            <textarea  
                                value={changeContent} 
                                onChange={(e) => setChangeContent(e.target.value)} 
                                className="form-control"
                                placeholder={post.postContent}
                            >   
                            </textarea>

                            <button type="button" onClick={submitChanges}>
                                Save
                            </button>
                        </Form>
                    </div>
                )
            }
        })

    return(
        <div>
            <div>
                <button onClick={() => setEditClick(!editClick)}type="button">Edit</button>
                <button onClick={onDeleteClick}type="button">Delete</button>
            </div>
            <div>
                {editClick && editing}
            </div>
        </div>
    )
}

export default EditDelete;