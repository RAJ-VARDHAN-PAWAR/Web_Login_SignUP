import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router'
function Login() {
    let navigate = useNavigate()
  let [email, setEmail] = React.useState("")
  let [password, setPassword] = React.useState("")

  function submitForm(e) {
        e.preventDefault()
        if(true){
            navigate("/")
        }
        alert(`Name: ${email}, Password: ${password}`)
    }
  return (
    <div>
            <form onSubmit={(e) => submitForm(e)}>
                <div>
                    <input type="text" placeholder='Username' />
                </div>
                <div>
                    <span>Name: </span>
                    <input type="text" placeholder='Name'
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <span>Password: </span>
                    <input type="password" placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                    <button>submit</button></div>
            </form>
        </div>
  )
}

export default Login