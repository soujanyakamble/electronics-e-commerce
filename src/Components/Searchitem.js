import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import { Product } from '../Pages/Product';

const Searchitem = () => {
  const {term} = useParams();
  const [filterdata, setfilterData] = useState([]);
  useEffect(()=>{
    const filtereddata = () => {
     const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
    //  console.log(data)
    setfilterData(data);
    }
    filtereddata();
  },[term])
  
  return (
   <Product items={filterdata}/>
  )
}

export default Searchitem
