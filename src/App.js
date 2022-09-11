import React, { useEffect, useContext } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Checkout from "./components/Checkout/Checkout"
import Login from "./components/Login/Login"
import Payment from "./components/Payment/Payment"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { auth } from "./firebase-config"
import BasketContext from "./Context/Basket"
import Orders from "./components/Orders/Orders"
import Prime from "./components/Prime/Prime"

function App() {
	const { updateUser } = useContext(BasketContext)

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			// console.log("THE USER IS >>> ", authUser)
			if (authUser) {
				// the user just logged in or was logged in
				updateUser(authUser, "USER_LOGIN")
			} else {
				// the user is logged out
			}
		})
	}, [])

	return (
		//BEM
		<div className="app">
			<Router>
				<Routes>
					<Route
						path="/checkout"
						element={
							<>
								<Header />
								<Checkout />
							</>
						}
					/>
					<Route
						path="/"
						element={
							<>
								<Header />
								<Home />
							</>
						}
					/>
					<Route path="/login" element={<Login />} />
					<Route
						path="/payment"
						element={
							<>
								<Header />
								<Payment />
							</>
						}
					/>
					<Route
						path="/orders"
						element={
							<>
								<Header />
								<Orders />
							</>
						}
					/>
					<Route
						path="/prime"
						element={
							<>
								<Header />
								<Prime />
							</>
						}
					/>
				</Routes>
				{/* <Home /> */}
			</Router>
		</div>
	)
}

export default App
