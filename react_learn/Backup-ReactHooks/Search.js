import React,{useState} from 'react'
import data from'../src/MOCK_DATA (2).json'
const Search = () => {
  const [search,setSearch]=useState('')
  return (
    <div className='ui'>
    <form>
      <input type='text' value={search} onChange={e=>setSearch(e.target.value)} placeholder='search....'/>
    </form>
    {
      data.filter(user=>user.name.toLowerCase().includes(search.toLowerCase())).map((user)=><p>{user.name}</p>)
    }
    </div>
  )
}

export default Search