

const Content = () => {
  return (
    <div  className="content border" style={{height: 150,width:"40%",margin:"20%",textAlign:"center"}} >
      <div style={{margin:5,}}>Đăng nhập </div> 
      <hr/>

      <input style={{margin:10, height:25}} placeholder=" Username ..."/> 
      <br/>
      <button style={{backgroundColor:"rgb(76, 76, 235)", color:"white", height:25}}> Đăng nhập </button>
    </div>
  );
};

export default Content;
