import Footer from './Footer';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { valueToPercent } from '@mui/material';
const App = () => {
const [addItem,setAddItem]=useState([]);
const addNote=(change)=>
{
    setAddItem((prevdata)=>{
        return [
            ...prevdata,change]
    }
    );
}
const onDelete=(id)=>{
    setAddItem((olddata)=>{
       return( olddata.filter((currdeta,ind)=>
        {
            return ind!== id;
        })
       )
    });
};
    return ( 
        <>
        <Header/>
        <CreateNote passNote={addNote}/>
       { addItem.map((val,index)=>{
         return <Note   key={index}
            id={index}
            title={val.title}
            content={val.content}
            onSelect={onDelete}
            
         />
        })}
        <Footer/>
        </>
     );
}
export default App;