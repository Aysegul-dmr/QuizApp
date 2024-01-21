import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/helper'
import { Link } from 'react-router-dom'

const AllResults = () => {
  const [data,setData]=useState([])
    useEffect(() => {
      getServerData(`${import.meta.env.VITE_SERVER_HOST}/api/result`,(res)=>{
        setData(res)
      }) 
    },[])
    
  return (
    <div className='all-results'>
        <div className='result-table'>
          <table>
              <thead className='table-header'>
                  <tr className='table-row'>
                      <td>Name</td>
                      <td>Attemps</td>
                      <td>Earn Points</td>
                      <td>Result</td>
                  </tr>
              </thead>
              <tbody>
                  {
                      !data && <div>No Data Found</div>
                  }
                  {
                      data && data.map((v,i)=>(
                          <tr className='table-body' key={i}>
                              <td>{v?.username || ""}</td>
                              <td>{v?.attempts || 0}</td>
                              <td>{v?.points || 0}</td>
                              <td>{v?.achived || ""}</td>
                          </tr>
                      ))
                  }
                  
              </tbody>
          </table>
          <div className="start">
            <Link className='btn' to={"/"}> Ana Sayfaya Dön</Link>
          </div>
        </div>
    </div>
  )
}

export default AllResults