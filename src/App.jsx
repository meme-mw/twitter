import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import Nav from './components/Nav'
import LogIn from './components/Login'
import Trends from './components/Trends'

import './App.css'

function App() {
  const[logIn,setLogIn]=useState(false)
  const[uId,setuId]=useState("")
  const[uName,setuName]=useState("")
  const[tweet,setTweet]=useState("")
  const[tweets,setTweets]=useState([])
  function addTweet(tweet1){
    fetch(`https://66ea7db455ad32cda47915a6.mockapi.io/exam/scores`, {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify({
          userId:uId,
            tweet:tweet1
        })
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(score => {
        tweets1()
      }).catch(error => {
        // handle error
      })
    
  }
  useEffect(() => {
    console.log(uId)
    fetch(`https://66ea7db455ad32cda47915a6.mockapi.io/exam/users/${uId}`, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(user => {
     
      setuName(user.name);
       
    
      // Do something with the list of tasks
    }).catch(error => {
      // handle error
    })},[])
function tweets1(){
    useEffect(() => {
      fetch(`https://66ea7db455ad32cda47915a6.mockapi.io/exam/scores`, {
          method: 'GET',
          headers: {'content-type':'application/json'},
        }).then(res => {
          if (res.ok) {
              return res.json();
          }
          // handle error
        }).then(scores => {
          setTweets(scores)
        
        
        }).catch(error => {
          // handle error
        })
      },[])}
      tweets1()
  return (
    <>
{!logIn?<LogIn log={setLogIn} uId={setuId}/>:(
    <section className="app flex justify-around w-full h-full">
    
<Nav/>
<section className='w-2/4  main'>

 <div className="tweet flex p-3 ">
 <div className="chat-image avatar pr-3" style={{alignSelf:"start"}}>
  <div className='w-10 rounded-full'>
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" /></div>
    </div>
    {console.log(uName)}
    <div className='w-full'>
  <textarea name=""  placeholder="What's happening?" className='w-full' onChange={(e)=>setTweet(e.target.value)}></textarea>
  <div className='flex justify-end'>
  <button className="button-18 "   onClick={()=>addTweet(tweet)} >Post</button>
  </div>
  
  </div>
 </div>
{tweets!=[]?
 tweets.map(el=>(
 
 <div className=" flex p-3">
 <Link to={`/profile/${el.userId}`} >
 <div className="chat-image avatar pr-3" style={{alignSelf:"start"}}>
  <div className='w-10 rounded-full'>
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" /></div>
    </div>
    </Link>
    <div className='w-full text-[12px]'>
    <Link to={`/profile/${el.userId}`} >
      <div className="user flex flex-start p-2 py-0">
         <span className="font-bold"> {uName} </span> <span className="text-[#536471]">@{uName}</span>
         
      </div>
      </Link>
  <div className='w-full text-left p-2'>
   {el.tweet}
  </div>

  
  </div>
 </div>
 ))
 :""}
</section>
<Trends/>
</section>
)}
    </>
  )
}

export default App
