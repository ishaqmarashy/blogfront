import React,{useState,useEffect} from 'react'
import Comments from './Comments';

const Posts=({user,postsURL})=>{
  const [posts,setPosts]=useState([]);
  const [selectedPost,setSelectedPost]=useState('');
  const [showPosts,setShowPosts]=useState(true);
  const handleCreatePost=async (e)=>{
    e.preventDefault();
    const {title,text}=e.target;
    if (!title.value || !text.value)
      return;
    const data={title:title.value,text:text.value}
    const response = await fetch(postsURL, {
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
      setPosts([result,...posts]);
  }
  const handleCreateComment=(post)=>{
    setSelectedPost(post);
    setShowPosts(false);
  }
  const handleBack=(e)=>{
    e.preventDefault();
    setSelectedPost('');
    setShowPosts(true);
  }

  const postsList=posts?posts.map((post,index)=>
  <div onClick={()=>handleCreateComment(post)}   className="post" key={post._id}>
    <div>Posted By: {post.userid}</div>
    <div>Date: {post.date}</div>
    <div>Title: {post.title}</div>
    <div>Contents: {post.text}</div>
  </div>)
    :null;
  const createPost=<form className="create-post" onSubmit={handleCreatePost}>
    <label htmlFor="title">Title</label>
    <input type="text" className="title" name="title"></input>
    <label htmlFor="text">Text</label>
    <textarea className="text" name="text"></textarea>
    <button type="submit">Create Post</button>
  </form>;
  useEffect(()=>{
    const getPost=async ()=>{
      try{
          const response = await fetch(postsURL, {
          method: 'GET',
          mode: 'cors', 
          cache: 'no-cache',
          credentials: 'same-origin', 
          headers: {
          'Content-Type': 'application/json',
          'Authorization':'Bearer ' + user
          },
      });
        const result=await response.json();
        setPosts(result.reverse());
      }
      catch(e){
        throw e;
      } 
    }
    getPost();
  },[user,postsURL]);
  return (
        <>
        {showPosts?<>
          {createPost}
          {postsList}
          </>
        :<>
          <button className='back' onClick={handleBack}>Back</button>
          <Comments selectedPost={selectedPost} user={user} commentsURL={`${postsURL}`}/>
          </>}
        </>    
)}

export default Posts
