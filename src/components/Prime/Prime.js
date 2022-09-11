import React, { useContext } from "react"
import "./Prime.css"
import basketContext from "../../Context/Basket"

const Prime = () => {
	const { basket, updatePrime } = useContext(basketContext)
	const date = new Date()
	const nextMonth = date.getMonth() + 1 + "/" + date.getFullYear()
	return (
		<div className="prime">
			<div className="prime__container">
				<div className="prime__details">
					<div className="prime__section">
						<h4 className="prime__heading">{basket.username}</h4>
						<p className="prime__subheading">
							{basket.prime ? "Prime Member" : "Free Membership"}
						</p>
					</div>
					<div className="prime__section">
						<h4 className="prime__heading">Prime Plan</h4>
						<p className="prime__subheading">
							{basket.prime ? "Monthly £3.99" : "None"}
						</p>
					</div>
					<div className="prime__section">
						<h4 className="prime__heading">Renewal Date</h4>
						<p className="prime__subheading">
							{basket.prime ? nextMonth : "None"}
						</p>
					</div>
					<div className="prime__section">
						<h4 className="prime__heading">Manage</h4>
						<button className="prime__subheading" onClick={updatePrime}>
							{basket.prime ? "Cancel" : "Subscribe"}
						</button>
					</div>
				</div>
				<div className="prime__banner">
					<h3>Hello, {basket.username}!</h3>
					<p>Enjoy over 2 million songs ad free with Prime Music</p>
					<button>Explore Prime Music</button>
				</div>
				<img
					src="https://cdn.images.express.co.uk/img/dynamic/59/940x/secondary/amazon-prime-free-trial-uk-benefits-of-membership-4195395.jpg?r=1659520323271g"
					alt=""
					className="prime__image"
				/>
			</div>
		</div>
	)
}

export default Prime
