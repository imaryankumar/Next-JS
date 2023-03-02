import React, { useState } from 'react'
import { useRouter } from 'next/router'

const login = () => {
     const router = useRouter()
     const [mail,setMail]=useState("");
     const [pass,setPass]=useState("");
  
     const data = {
    mail,
    pass
     };



     const onloginHandler = (e)=>{
     e.preventDefault();

     const isLoggeduser = JSON.parse(localStorage.getItem("user"));
     if(data?.mail===isLoggeduser?.email && data?.pass===isLoggeduser?.password){
          localStorage.setItem("loggedIn",true);
          router.push("/Find")
     }
     else{
          alert("Error Find");
     }
     }
  return (
     <div className="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700">
        <form className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5" onSubmit={(e)=>onloginHandler(e)}>
            <h1 className="text-center text-3xl">Kinda Code</h1>
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-light" htmlFor="email">Email</label>
           <input className="w-96 px-3 py-2 rounded-md border border-slate-400" type="email" placeholder="Your Email"
                    name="email" id="email" onChange={(e)=>setMail(e.target.value)}/>
            </div>
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-light" htmlFor="password">Password</label>
                <input className="w-96 px-3 py-2 rounded-md border border-slate-400" type="password"
                    placeholder="Your Password" name="password" id="password" onChange={(e)=>setPass(e.target.value)} />
            </div>

            <div>
                <input type="checkbox" name="remember" id="remember" />
                <label className="text-sm font-light" htmlFor="remember">Remember me</label>
            </div>

            <button className="w-full px-10 py-2 bg-blue-600 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in" type="submit">
                Login
            </button>

            <p className="text-right"><a className="text-blue-600 text-sm font-light hover:underline"
                    href="/Signup">Signup</a></p>
        </form>
    </div>
  )
}

export default login