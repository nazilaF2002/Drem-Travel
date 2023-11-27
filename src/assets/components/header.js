import Parent from "./parent";
import './header.css';
import destinations from "./Array";
export default function Header (){
return(
    <Parent className="header">
        <img src={destinations[0].image} alt="Beach destination" />
           <h1 className="h1">Drem Travel Destinations</h1>
           <p className="p">Discover the best placese to visit and creat unforgetable memories</p>
    </Parent>
);   
}