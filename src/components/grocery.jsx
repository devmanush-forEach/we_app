import { useState } from "react";
import { GroceryInput } from "./grocerryInput";
import { GroceryItems } from "./groceryList";


export const Grocery = ()=>{

    const [items, setItems] = useState([]);

    const handleClick = (item)=>{
        setItems([...items, item]);
        // console.log(items);
    }
    const deleteItem = ()=>{
        setItems();
    }

    return (
        <div>
            <GroceryInput handleClick = {handleClick} deleteItem = {deleteItem}/>
            {
                items.map((ele) =>{
                    return <GroceryItems item = {ele}/>
                })
            }
        </div>
    )


}