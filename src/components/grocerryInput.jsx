import { useState } from "react"

export const GroceryInput = (props)=>{
    const [item, setItem] = useState("");
    return (
        <div>
            <input type="text" onChange={(e) =>{
                setItem(e.target.value);
            }} />
            <button onClick={()=>{
                props.handleClick(item);
            }}>
                Add Item
            </button>
            <button onClick={()=>{
                props.deleteItem();
            }} >Remove Item</button>
        </div>
    )
}