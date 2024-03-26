import { useState, useTransition } from "react"


export default function List(){
    const [input, setinput] = useState("");
    const [list, setlist] = useState([]);
    const [isPending, startTransition] = useTransition();

    const list_size = 15000;
    function handlechange(e){
        setinput(e.target.value)
       startTransition(()=>{
        const newlist = [];
       for(let i=0; i<list_size; i++){
          newlist.push(e.target.value);
       }
       setlist(newlist);
       })
       
    }

    return(
        <div>
            <input value={input} type="text" onChange={handlechange}/>
            <ul>
               { isPending?<div>...loading</div>:list.map((ele)=>{
                return <li>{ele}</li>
               })}
            </ul>
        </div>
    )
}