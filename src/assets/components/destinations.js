import Destination from "./destination";
import destinations from "./Array";
import './destinnations.css'
export default function Destinations(){
return(
    <ul id="destinations" >
        {destinations.map((value)=>{
            return  <Destination
                key={value.id} 
                image={value.image}
                title={value.title}
                description={value.description.en}/>
        })}
   
    </ul>
);
}