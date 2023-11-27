import './destination.css'
export default function Destination(props){
return(
        <li className="destination" >
          <img src={props.image} alt="destination title" />
          <h2> {props.title}</h2>
          <p>{props.description}</p>
        </li>
);
}