import React, { useState } from "react";
import "./App.css";

const sliki = [
  "https://img.freepik.com/free-vector/hand-drawn-secret-santa-illustration_23-2149162315.jpg?w=2000",
  "https://spb.hse.ru/data/2019/12/20/1526045172/Webp.net-resizeimage%20(1).png",
  "https://media.smallbiztrends.com/2023/09/reindeer-pulling-present.png",
];
const tekst =[
 "Step 1 : Create your wish list",
 "Step 2 : We will send it to secret Santa",
 "Step 3 : Wait for your gift under the tree"
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleChekorNazad() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function handleChekorNapred() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  
 const[items,setItems]=useState([]);
 const[newItem,setnewItem]=useState("");

 function addItems(){
  if(newItem !== ""){
    setItems([...items,{name: newItem}])
    setnewItem("");
  }
 }

 function RemoveItems(i){
  setItems(
    (items)=>{
      const BrisiElement=[...items];
      BrisiElement.splice(i,1);
      return BrisiElement;
    }
  )

 }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        {"Exit"}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <img src={sliki[step - 1]} width={400} height={400}/>
          <div className="TextBox">{tekst[step-1]}</div>

          <div className="buttons" >
            <button onClick={handleChekorNazad}>Previous</button>
            <button onClick={handleChekorNapred}>Next</button>
          </div>

          <div className="wishlist">
            <h2>Here enter your wish list</h2>
          <label><input type="text"  className='addWish' value={newItem} onChange={(event)=>setnewItem(event.target.value)} placeholder="Add Wishes"></input><button className="addKopce" onClick={addItems}>Add Wish</button></label>

          <ul>
       {
  items.map((item,i) => (

    <div className="newItemsBox" key={i}>
       <input type="checkbox" className="checkbox" />{item.name}
      <button  className="brisiKopce" onClick={()=> RemoveItems(i)}>Remove Wish</button>
      </div>
      
  ))
       }

      </ul>

          </div>
        </div>
      )}
    </div>
  );
}
