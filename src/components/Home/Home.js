import React from "react"
import "./Home.css"
import Product from "../Product/Product"

const Home = () => {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://store.stavkats.com/images/amazon_back.jpg"
					alt="banner"
				/>

				<div className="home__row">
					<Product
						id="A1"
						title="The Cottage"
						image="https://images-na.ssl-images-amazon.com/images/I/81yJzUrlLVL.jpg"
						price={4.99}
						rating={5}
					/>
					<Product
						id="A2"
						title="Amazon Ring"
						image="https://m.media-amazon.com/images/I/412yuVHY6OL.jpg"
						price={39.99}
						rating={4}
					/>
				</div>

				<div className="home__row">
					<Product
						id="A3"
						title="Fire TV 4K Ultra HD with Alexa Voice Remote"
						image="http://media.4rgos.it/s/Argos/9359422_R_SET?$Main768$&w=620&h=620"
						price={29.99}
						rating={5}
					/>
					<Product
						id="A4"
						title="Amazon Echo (4th Gen)"
						image="https://i.pcmag.com/imagery/reviews/00EU3U5rRoe9swRlkJE2yDa-1.fit_lim.size_1200x630.v1601052236.jpg"
						price={59.99}
						rating={3}
					/>
					<Product
						id="A5"
						title="The Last of Us Part I"
						image="https://m.media-amazon.com/images/I/81kHHHSrR4L._AC_SL1500_.jpg"
						price={64.99}
						rating={5}
					/>
				</div>

				<div className="home__row">
					<Product
						id="A6"
						title="Sony Playsatation 5"
						image="https://cdn.zochil.shop/8d3d4a8e-2fce-4ba0-ad24-d663256946eb.jpg"
						price={449.99}
						rating={4}
					/>
				</div>
			</div>
		</div>
	)
}

export default Home

/* 
Other banner images:
"https://m.media-amazon.com/images/I/81pXJW9qztL.jpg"

https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_HO_T1/89aa0cfb-43bf-4651-afd5-9ce43a831060._UR3000,600_.jpeg

https://m.media-amazon.com/images/S/sonata-images-prod/UK_Superhero_Acquisition_FT_April_2021_V2/ec12117a-ee48-453c-9a64-4453031d477a._UR3000,600_.jpeg

https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg

https://www.microsoft.com/en-us/p/prime-video-us-xbox/9nblggh4vgd7

https://store-images.s-microsoft.com/image/apps.24594.13510798887500496.393115ce-aadd-41b0-a06b-6de8b907aa10.b4898b91-921e-43ef-aedc-8a0e423c95d5?mode=scale&q=90&h=720&w=1280
*/
