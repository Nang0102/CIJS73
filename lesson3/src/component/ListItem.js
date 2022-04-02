import ListItem from "./Form";

const ListItem=(props)=>{
    const [done,setDone]=useState(false);
    const handleClick=()=>{
        setDone(true);

    };
    if(done){
        return <div style= {{ textDecoration:""}}></div>
    }
    return <div onClick={handleClick}>{props.value}</div>;

};
export default ListItem;