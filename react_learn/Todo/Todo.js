import React,{useState} from 'react'

const Todo = () => {
  const [inputData,setInputData]=useState('')
    let [items,setItems]=useState([])
  const addItem=()=>{
    if(!inputData){
      return false
    }
    else{
      setItems([...items,inputData])
      setInputData('')
    }
    }
    //delete Item
 const deleteItem=(id)=>{
  const updateditems=items.filter((elem,index)=>id!==index)
  setItems(updateditems)
 }
    //delete All
 const deleteAll=()=>{
  setItems(items=[])
 }
  return (
    <>
    <div className='main-div'>
      <div className='child-div'>
           <figure>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE202mw3PKjNQo2yG0_2OwaVgFteWtoMv0lJxawjE4nRQLzFXHtwkoeDuWxVYUSNxuRew&usqp=CAU" width='193px' height='130px' alt=''/>
            <figcaption>ADD YOUR LIST HERE</figcaption> 
           </figure>
           <div className='addItems'>
           <input type='text' placeholder='Add Items.....'
           value={inputData} onChange={(e)=>{setInputData(e.target.value)}}
           />
           <i className='fa fa-plus add-btn' title='Add item'onClick={addItem}></i>
           </div>
             {
               items.map((elem,index)=>{
                 return(
                  <div className='eachItem' key={index}>
                  <h3>{elem}</h3>
                  <i className='far fa-trash-alt add-btn'  title='Delete Item'onClick={()=>deleteItem(index)}></i>
                </div>
                 )

                 
               })
             }
             
           <div className='showItems'>
           </div>
           {/* clear all button */}
           <div className='showItems'>
               <button  className='btn effect04' data-sm-link-text='Remove all'
               onClick={()=>deleteAll()}><span>CHECK LIST</span></button>
           </div>
        </div>
    </div>

    </>
  )
}

export default Todo