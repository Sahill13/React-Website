const WelcomeMessage=({onGetPostsClick})=>{
    return <center className="welcome-message"><h1 >There are no posts</h1>
    <button onClick={onGetPostsClick} type="button" className="btn btn-primary">Get Post From Server</button></center>
}

export default WelcomeMessage;