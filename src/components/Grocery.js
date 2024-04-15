import REDUX from "../../utils/REDUX.png"
import play from "../../utils/play.png"


const myfunction = () => {
  console.log("CLICKED");
}

const Grocery = () => {
 
   return (
    <>
    <h1>Online Grocery Store with other child Component inside this page</h1>
    <div className="d-flex">
          <img src={REDUX} alt="img"></img>
          <img src={play} className="m-2 p-2 w-64 h-80 cursor-pointer" onClick={myfunction} alt="click Me"></img>
        </div>
    </>
   
  );
};

export default Grocery;
