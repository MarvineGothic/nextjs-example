import Link from 'next/link'
import React from 'react'
import Meta from '../components/Meta'

export function Login() {
  return (
    <div>
      <Meta title="Log In" />
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-dark">Log In</button>

        <p className="my-2">You don&apos;t have an account?
        <Link href="/register"><a style={{color: 'crimson'}}> Register</a></Link>
        </p>
      </form>
    </div>
  )
}

export default Login