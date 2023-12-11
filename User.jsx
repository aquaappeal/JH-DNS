import './User.css'
import './App.css';
import iconImg from './icon.jpg'
import UserAbout from './UserAbout';
import UserComments from './UserComments';
import UserPosts from './UserPosts';
import { React, useState } from 'react';

function User( userApi ) {
    const [ btnNo,setBtnNo] = useState(0)
    function handleABtn(){
        setBtnNo(n => 0)
    }

    function handlePBtn(){
        setBtnNo(n=> 1)
    }

    function handleCBtn(){
        setBtnNo(n=> 2)
    }

  return (
    <div class="userBDiv">
        <div class="bgimg">
            <div class="up">
                123
            </div>

            <div class="down">

            </div>

            <div class="icon">
                <img src={iconImg}/>
            </div>
        </div>
        <div class="aboutPC">
            <button class="aboutBtn" type="button" onClick={handleABtn} ><svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"/></svg>About</button>
            <button class="aboutBtn" type="button" onClick={handlePBtn} ><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>Posts</button>
            <button class="aboutBtn" type="button" onClick={handleCBtn}><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>Comments</button>
        </div>
        {btnNo === 0 && <UserAbout/>}
        {btnNo === 1 && <UserPosts/>}
        {btnNo === 2 && <UserComments/>}
        
        
    </div>
    

  );
}

export default User;
