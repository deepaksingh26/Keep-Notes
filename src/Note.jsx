import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import Button from '@mui/material/Button';
const Note = (props) => {
    
    return ( 
        <>
        <div className="note">

        <h1>{props.title}</h1>
        <br />
        <span className='f'>
        <p>{props.content}</p>
            <Button  style={{marginLeft:"45%", marginBottom:"3px"} }onClick={()=>{
            props.onSelect(props.id);
            
        }}  variant="contained" disableElevation>
          <DeleteForeverIcon className='deleteI'/>       
           </Button>
        </span>
        </div>
        </>
     );
}
 
export default Note;