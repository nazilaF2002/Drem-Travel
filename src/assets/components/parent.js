export default function Parent(props){
    const className=props.className;
return(
    <div className={className}>
        {props.children}
    </div>
);
}