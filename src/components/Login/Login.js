import React, { useState } from "react"
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../../firebase-config"
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth"

const Login = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const signIn = async (e) => {
		e.preventDefault()
		// firebase login
		try {
			const user = await signInWithEmailAndPassword(auth, email, password)
			if (user) navigate("/")
		} catch (error) {
			alert(error.message)
		}
	}

	const register = async (e) => {
		e.preventDefault()
		// firebase register
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password)
			if (user) navigate("/")
		} catch (error) {
			alert(error.message)
		}
	}

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
					alt="Amazon logo"
				/>
			</Link>

			<div className="login__container">
				<h1>Sign-in</h1>
				<form action="">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						className="login__signinButton"
						onClick={signIn}
						type="submit"
					>
						Sign In
					</button>
				</form>

				<p>
					By signing-in you agree to Amazon's Clone Conditions of Use & Sale.
					Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>
			</div>

			<div className="login__register">
				<h5>New to Amazon?</h5>
				<button className="login__registerButton" onClick={register}>
					Create your Amazon account
				</button>
			</div>
		</div>
	)
}

export default Login
