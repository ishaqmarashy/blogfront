import React,{useState,useEffect} from 'react'

function Comments({selectedPost,user,commentsURL}) {
    const [comments,setComments]=useState([]);
    const handleCreateComment=async(e)=>{
        e.preventDefault();
        const {postid,text}=e.target;
        if(!postid.value || !text.value)
            return;
        const data={userid:user,postid:postid.value,text:text.value,date:new Date()};
        const response = await fetch(`${commentsURL}/${postid.value}/comment`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + user
            },
            body:JSON.stringify(data)
          });
          const resRes=response;
          const result=await response.json();
          if (resRes.status===200)
            setComments([result,...comments]);
    }
    const commentForm=<form className="create-post" onSubmit={handleCreateComment}>
        <label htmlFor="postid">Post ID</label>
        <input readOnly type="text" name="postid" id='postid' value={selectedPost._id}/>
        <label htmlFor="userid">User</label>
        <input readOnly type="text" name="userid" id='userid' value={selectedPost.userid}/>
        <label htmlFor="title">Title</label>
        <input readOnly type="text" name="title" id='title' value={selectedPost.title}/>
        <label htmlFor="date">Date</label>
        <input readOnly type="text" name="date" id='title' value={selectedPost.date}/>
        <label htmlFor="text">Comment</label>
        <textarea name="text" id='text' />
        <button type="submit">Add Comment</button>
    </form>;
    const commentsList=comments?comments.map(comment=><div className="comment"key={comment._id}>
        <div>Created By: {comment.userid}</div>
        <div>Comment: {comment.text}</div>
        <div>Date: {comment.date}</div>
    </div>)
    :null;
    useEffect(()=>{
        const getComments=async()=>{
            const response = await fetch(`${commentsURL}/${selectedPost._id}/comment`, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + user
                },
              });
              const result=await response.json();
              setComments(result.reverse());
            }
        getComments()
    },[selectedPost,user,commentsURL])
    return (<>
    {commentForm}
    {commentsList}
    </>)
}

export default Comments
