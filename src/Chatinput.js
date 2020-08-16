import React,{useState} from 'react';
import './Chatinput.css';
import db from "./firebase";
import {useStatevalue} from './StateProvider';
import firebase from "firebase";


function Chatinput({channelName,channelId}) {
    const [input,setInput]=useState('');
    const [{user}]=useStatevalue();

    const sendMessage =(e)=>{
        e.preventDefault();
        if(channelId){
            db.collection("rooms").doc(channelId).collection("messages").add({
                message:input,
                timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                user:user.displayName,
                userimage:user.photoURL, 
            }) ;  
        }      
    };

console.log(input);
    return (
        
        <div className='chatInput'>
        <form>
            <input value={input}
            onChange={ (e) => setInput(e.target.value)}
            placeholder={`Message#${channelName?.toLowerCase()}`}/>
            <button type="submit" onClick={sendMessage}>SEND</button>
        </form>
            
        </div>
    )
}

export default Chatinput
