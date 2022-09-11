import React, { useContext } from "react"
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import { Link } from "react-router-dom"
import BasketContext from "../../Context/Basket"
import { auth } from "../../firebase-config"

const Header = () => {
	const { basket, updateUser } = useContext(BasketContext)

	const handleAuthentication = () => {
		if (basket.user) {
			auth.signOut()
			updateUser(null, "USER_LOGOUT")
		}
	}

	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
				/>
			</Link>
			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>

			<div className="header__nav">
				<Link to={!basket.user && "/login"}>
					<div className="header__option" onClick={handleAuthentication}>
						<span className="header__optionLineOne">
							Hello {basket.username}
						</span>
						<span className="header__optionLineTwo">
							{basket.user ? "Sign out" : "Sign in"}
						</span>
					</div>
				</Link>
				<Link to="/orders">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>
				<Link to="/prime">
					<div className="header__option">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
				</Link>
				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket?.items.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Header
