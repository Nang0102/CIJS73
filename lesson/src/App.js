
import Content from "./component/HomeWorkSs9/Content";
import Footer from "./component/HomeWorkSs9/Footer";
import Header from "./component/HomeWorkSs9/Header";
import ThemeContext from "./component/HomeWorkSs9/ThemeContext";

// import Content from "./component/Context/content";
// import Footer from "./component/Context/Footer";
// import "./component/Context/Header"
// import Header from "./component/Context/Header";
// import SideBar from "./component/Context/SideBar";
// import ThemeContext from "./component/Context/ThemeContext";
function App() {
  return (
    <ThemeContext.Provider value={{theme:"change"}}>
    <div>
    {/* <ThemeContext.Provider value ={{ theme:"Light"}}>
  
    <div style={{ height:"100vh", display:"flex", flexDirection:"column"}}>
      <Header/>
    <div style={{ display:"flex", flex:1, alignItems:"stretch"}}>
    <Content/>
    <SideBar/>

    </div>
    </div>
   <Footer/>
    </ThemeContext.Provider> */}
    <div  >
      <Header/>
      </div>
    <div >
    <Content/>
    </div>
    <div  >
    <Footer/>
    </div>
    </div>
    </ThemeContext.Provider>
 
  ) };



export default App;
