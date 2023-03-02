import React from 'react'
import { useRouter } from 'next/router'


const Find = () => {
  const router = useRouter()
// const userName = JSON.parse(localStorage.getItem('user'))
  const handleLogout = ()=>{
    
    localStorage.removeItem("loggedIn")
    router.push("/Login")
  }
  return (
 <div className='h-full w-full mt-5 flex items-center justify-center flex-col gap-3 ' >
  <h1>After Redirect Next Page then Submit Page</h1>
   <h2>welcome to Aryan Kumar</h2>
  <button className='bg-blue-500 rounded px-3 py-1 cursor-pointer '
  
  onClick={handleLogout}
  >Logout</button>
 </div>
  )
}

export default Find