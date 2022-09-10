import React,{useState} from 'react';
//import './style.css';

const data = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

export default function App() {
  const [list,setList]=useState(data)
  const [search,setSearch]=useState('')
  const[stocked,setStocked]=useState()
  const searchhandler=(e)=>{
    setSearch(e.target.value)
    const {value}=e.target
    let newlist=[...data]
    newlist=newlist.filter((item)=>item.category.toLowerCase().includes(value.toLowerCase()))
    setList(newlist)
  }
  const checkhandler=(e)=>{
    const {checked}=e.target
     setStocked(e.target.checked) 
    let newlist=JSON.parse(JSON.stringify(data))
    if(checked){
   newlist=newlist.filter(i=>i.stocked!==false)
    } 
    setList(newlist)
  }  
  return <div>
   <form>
     <input type='text'value={search} placeholder='search...' onChange={searchhandler}/>
     <p>
       <input type='checkbox' checked={stocked} onChange={checkhandler}/> Only Show products in Stock
       </p>
   </form>
   <table>
     <thead>
       <tr>
         <th>Category</th>
         <th>Name</th>
         <th>Price</th>
        
       </tr>
     </thead>
     <tbody>
       {
         list.map((item)=>{
           return(
             <tr >
               <td>{item.category}</td>
               <td>{item.name}</td>
               <td>{item.price}</td>
             {/*   <td>{item.stocked.false}</td> */}
             </tr>
           )
         })
       }
     </tbody>
   </table>
  </div>;
}
