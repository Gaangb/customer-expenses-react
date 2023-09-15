import './style.css'

export default function Button({ text, onClick}){
    return(
        <button type='button' className="link_button" onClick={onClick}> 
            {text}
        </button>
            
    )
}

