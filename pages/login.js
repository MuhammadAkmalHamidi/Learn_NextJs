import Cookies from "js-cookie"
import Link from "next/link"
import { useState } from "react"

export default function Login() {
  const [payload,setPayload] = useState({
    email:"",
    password:""
  })

  const handleLogin = () => {
    if (payload.email && payload.password) {
      Cookies.set('token', 'token')      
    }
  }
  return(
    <div className=" justify-center flex ">
      <div className=" rounded-lg border-2 p-5 mt-10">
        <div className=" flex justify-center">Learn NextJs</div>
        <div>
          <p>email</p>
          <input value={payload?.email} onChange={(e) => setPayload({...payload, email:e.target.value})} className=" border-2 rounded-md"/>
        </div>
        <div>
          <p>password</p>
          <input value={payload?.password} onChange={(e) => setPayload({...payload, password:e.target.value})} className=" border-2 rounded-md"/>
        </div>
        <div className=" flex justify-center mt-5">
          <Link href={'/'} onClick={handleLogin} className="p-2 bg-yellow-300 rounded-lg">Login</Link>
        </div>
      </div>
    </div>
  )
}