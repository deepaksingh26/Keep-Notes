
import Button from '@mui/material/Button';
import { useState } from 'react';
const CreateNote = (props) =>
{const[change,setchange]=useState({
    title:"",
    content:"",
});
const funChange=(e)=>{
    const{name,value}=e.target;
    setchange((olddata)=>{
       return  { ...olddata,
         [name]:value,
        };
    });
};
const addEvent=()=>
{
   props.passNote(change);
   setchange
({                        
    title:"",
    content:"",
});
}
    return ( 
        <>
        <div className="main_div">
            <div className="center_div">
                <form>
                    <input onChange={funChange} name="title" value={change.title} className="inp" type="text" placeholder='Title'  />
                    <textarea onChange={funChange} name="content" value={change.content} className="ta" cols="" rows="" placeholder='write a note'></textarea>
                    <Button onClick={addEvent} variant="contained" disableElevation>
                     Add Note 
                     </Button>
                    <br/>
                </form>
            </div>
        </div>
        </>
     );
}
export default CreateNote;