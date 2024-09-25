import {useContext, useRef} from 'React'
import {PostList} from '../store/post-list-store'
const CreatePost=()=>{
    const {addPost} = useContext(PostList);

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit=(event)=>{
      event.preventDefault();
      const userId=userIdElement.current.value;
      const postTitle=postTitleElement.current.value;
      const postBody=postBodyElement.current.value;
      const reactions=reactionsElement.current.value;
      const tags=tagsElement.current.value.split(" ");

      userIdElement.current.value=" ";
      postTitleElement.current.value=" ";
      postBodyElement.current.value=" ";
      reactionsElement.current.value=" ";
      tagsElement.current.value=" ";

      addPost(userId,postTitle,postBody,reactions,tags);

    }
    return <>
    <form className="create-post" onSubmit={handleSubmit}> 
    <div className="mb-3">
    <label htmlFor="userId" className="form-label">User Id</label>
    <input type="text" ref={userIdElement} className="form-control" id="userId" aria-describedby="emailHelp" placeholder="Enter your user id here" />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" aria-describedby="emailHelp" placeholder="How are you feeling today" />
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content </label>
    <textarea type="text" ref={postBodyElement} rows="4" className="form-control" id="body" aria-describedby="emailHelp" placeholder="How are you feeling today" />
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Number Of Reactions</label>
    <input type="text" ref={reactionsElement} className="form-control" id="reaction" aria-describedby="emailHelp" placeholder="How many People reacted to this post" />
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter Your Tags</label>
    <input type="text" ref={tagsElement} className="form-control" id="tags" aria-describedby="emailHelp" placeholder="Please Enter Your Tags Using Spaces" />
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    </>
}

export default CreatePost;