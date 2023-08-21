import React,{useState,useEffect} from 'react'
import Comments from './Comments';

const Posts=({user,postsURL})=>{
  const [posts,setPosts]=useState([]);
  const [selectedPost,setSelectedPost]=useState('');
  const [showPosts,setShowPosts]=useState(true);
  const [newPost,setNewPost]=useState(true);
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
   const handleNewPost=()=>{
    setNewPost(!newPost);
  }
  const handleBack=(e)=>{
    e.preventDefault();
    setSelectedPost('');
    setShowPosts(true);
  }

  const postsList=posts?posts.map((post,index)=>
  <div onClick={()=>handleCreateComment(post)}   className="post" key={post._id}>
    <header className='post-header'><div className="author">By: {post.userid}</div>    <h3>Title: {post.title}</h3>     <div>Date: {post.date}</div></header>
    <div  className='post-body'> {post.text}</div>
  </div>)
    :null;
  const createPost=<form className="post" onSubmit={handleCreatePost}>
    <header className='create-post-header'> 
      <div>
      <h3 htmlFor="title">Title: 
      <input type="text" className="title" placeholder="Title text here"  name="title"></input>
      </h3>

      </div>
    </header>
    <textarea className='post-body'  placeholder="Describe text here" name="text"></textarea>
    <button id="post-button" type="submit">Create Post</button>
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
          <div className="posts-wrapper-header">
            <h1 className="post-title"> {newPost? <>Create a post</>:<>Latest Post</>} </h1>
            <button onClick={handleNewPost}className="new-post">{newPost? <>Back</>:<>New Post</>}</button>
          </div>
          {newPost&&createPost}
          {postsList}
          </>
        :<>
          <Comments selectedPost={selectedPost} handleBack={handleBack} user={user} commentsURL={`${postsURL}`}/>
          </>}
        </>    
)}

export default Posts
