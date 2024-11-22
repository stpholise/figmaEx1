import { useState } from 'react'

const PasswordChecker = () => {
    const [password, setPassword] = useState('')
    const [seePasword, setSeePassword] = useState(false)
  return (
    <div>
        
        <form action="">
            <label htmlFor="password">Password</label>
            <input 
                type={seePasword ? 'text' : 'password'} 
                id="password" name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password" 
                required 
            />
            <button type='button' onClick={() => setSeePassword(value => !value)}> seeText</button>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default PasswordChecker
