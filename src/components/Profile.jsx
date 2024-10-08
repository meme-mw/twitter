import { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Nav from './Nav'
function Profile() {

    let { id } = useParams();
    const[tweets,setTweets]=useState([])
    const[uName,setuName]=useState("")
    function tweets1(){
        useEffect(() => {
          fetch(`https://66ea7db455ad32cda47915a6.mockapi.io/exam/users/${1}/scores`, {
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
          tweets1()
    return (
      <>
    <section className="app flex justify-around w-full h-full">
<Nav/>
<section className='w-2/4  main '>

 <div className="profile flex w-full h-44 p-3">
 <div className="chat-image avatar pr-3 " >
  <div className='w-20 rounded-full prof'>
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" /></div>
    </div>
 </div>
 <div className='flex justify-end p-3'>
  <button className="button-18 "  role="button">Follow</button>
  </div>
  {tweets!=[]?
 tweets.map(el=>(
 
 <div className=" flex p-3">

 <div className="chat-image avatar pr-3" style={{alignSelf:"start"}}>
  <div className='w-10 rounded-full'>
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" /></div>
    </div>
  
    <div className='w-full text-[12px]'>
   
      <div className="user flex flex-start p-2 py-0">
      <span className="font-bold"> {uName} </span> <span className="text-[#536471]">@{uName}</span>
         
      </div>
     
  <div className='w-full text-left p-2'>
   {el.tweet}
  </div>

  
  </div>
 </div>
 ))
 :""}
</section>
<section className='w-1/4 p-4 trends'>
<h1 className="text-[20px] font-bold"> What's happening</h1>

<ul className='overflow-auto h-[100vh] text-left' >
    <li  className='p-1 flex-col'>
      <h2 >#mmmmmmm</h2>
      <div className='text-[#536471] text-[13px]' >47.999 posts</div>
    </li>
    <li className='p-1 flex-col '>
    <h2 >#mmmmmmm</h2>
    <div className='text-[#536471] text-[13px]' >47.999 posts</div>
     </li>
    <li className='p-1 flex-col'>
    <h2 >#mmmmmmm</h2>
    <div className='text-[#536471] text-[13px]' >47.999 posts</div>
   </li>
    <li className='p-1 flex-col'>
    <h2 >#mmmmmmm</h2>
    <div className='text-[#536471] text-[13px]' >47.999 posts</div>
      </li>

    <li className='p-1 flex-col'>
    <h2 >#mmmmmmm</h2>
    <div className='text-[#536471] text-[13px]' >47.999 posts</div>
     </li>
    

  </ul>
</section>
</section>
</>
  )
}

export default Profile
