import { useState } from "react"

const ToDoNew = () => {
    const [valueInput, setValueInput] = useState("eric")
    const handleClick = () => {
        console.log(" >>> check valueInput: ", valueInput)
    }
    const handleOnChange = (name) => {
        setValueInput(name) // event.target trở tới input, value giá trị của ô input
    } // Mỗi 1 lần gõ vào là onChange đc kích hoạt
    return (
        <div className="todo-new">
            <input type="text" onChange={(event) => handleOnChange(event.target.value)} /> 
            <button style={{cursor: "pointer"}} onClick={handleClick}>Add</button>
        </div>
    )
}
export default ToDoNew;