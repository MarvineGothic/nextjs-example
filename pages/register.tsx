import Link from 'next/link'
import React, { useState } from 'react'
import Meta from '../components/Meta'
import { Prisma } from '@prisma/client'

const InputField = {

}

export function Register() {
  const initialState = { firstName: '', lastName: '', email: '', password: '', cf_password: '' };
  const [userData, setUserData] = useState(initialState);
  const handleChangeInput = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const body: Prisma.UserCreateArgs = {
      data: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
      }
    }
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ user: body.data }),
      headers: {
        "Content-Type": 'application/json',
      }
    });
    console.log(await response.json())
  }

  return (
    <div>
      <Meta title="Register" />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstname"
            name="firstName" value={userData.firstName} onChange={handleChangeInput} />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastname"
            name="lastName" value={userData.lastName} onChange={handleChangeInput} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name="email" value={userData.email} onChange={handleChangeInput} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
            name="password" value={userData.password} onChange={handleChangeInput} />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmInputPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="confirmInputPassword"
            name="cf_password" value={userData.cf_password} onChange={handleChangeInput} />
        </div>
        <button type="submit" className="btn btn-dark">Register</button>

        <p className="my-2">Already have an account?
          <Link href="/login"><a style={{ color: 'crimson' }}> Log In</a></Link>
        </p>
      </form>
    </div>
  )
}

export default Register