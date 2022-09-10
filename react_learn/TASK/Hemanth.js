import React,{useState} from 'react'
const products = [
 {category:'Sporting Goods',
  items:[
   { name: "Football", price: "$49.99",stock:9 },
  { name: "Baseball", price: "$9.99"  ,stock:8},
  { name: "Basketball", price: "$29.99",stock:0 }
 ]
},
{category:'Electronics Goods',
items:[
 { name: "Ipod Touch", price: "$99.99",stock:9 },
 { name: "Iphone 5", price: "$399.99",stock:0 },
 { name: "Nexus 7", price: "$199.99",stock:9 }
]
}
];
const Hemanth = () => {
 const[search,setSearch]=useState('')
 const[stock,setStock]=useState(false)
 const [list,setList] = useState(products)
 const searchhandler=(e)=>{
  setSearch(e.target.value)
  const{ value } = e.target;
  let cloneList = [...products];
  cloneList = cloneList.filter((item) => item.category.toLowerCase().includes(value.toLowerCase()));
  setList(cloneList);
 }
 const checkboxhandler=(e)=>{
  const {checked} = e.target;
  setStock(checked)
  let cloneList =JSON.parse(JSON.stringify(products));
  if(checked && search.length > 0){
    cloneList = cloneList.filter((item) => {
      item.items = item.items.filter(i => i.stock !== 0);
      return item.category.toLowerCase().includes(search.toLowerCase())
    });
  }
  if(checked){
    
    cloneList = cloneList.filter((item) => {
      item.items = item.items.filter(i => i.stock !== 0);
      return item
    });
   
  }
 if(search.length > 0){
     cloneList = cloneList.filter((item) => item.category.toLowerCase().includes(search.toLowerCase()));
  }
  setList(cloneList);
 }
  return (
    <div className='container mt-5'>
     <pre>{JSON.stringify(products)}</pre>
      <form>
          <input type="text" value={search} placeholder="Search..." onChange={searchhandler}/>
          <p>
            <input type="checkbox" checked={stock} onChange={checkboxhandler}/> Only show products in stock
          </p>
        </form>
        <table>
         <thead className='table table'>
          <tr>
           <th>Name</th>
           <th>Price</th>
           <th>Stock</th>
          </tr>
         </thead>
         <tbody>
          {
             list.map((index)=>{
              return(
                  <>
                 <tr><td>{index.category}</td></tr>
                 <tr className='table table'>{
                  index.items.map((goods)=>{
                   return(
                   <tr>
                   <td style={{color:goods.stock===0?'red':'black'}}>{goods.name}</td>
                   <td>{goods.price}</td>
                   <td>{goods.stock}</td>
                </tr>
                   )
                  })
                  }</tr>
              
             </>
              )
             })
          }
         </tbody>
        </table>
    </div>
  )
}

export default Hemanth