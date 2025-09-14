import Footer from "@/components/common/footer";
import Hotels from "@/components/landing/hotels";
import Inspiration from "@/components/landing/inspiration";
import Navbar from "@/components/navbar/navbar";
import React from "react";

export default function Home() {
	return (
		<React.Fragment>
			<Navbar />
			<Hotels title="See hotels from Dhaka" />
			<Hotels title="Available next month is Korea" />
			<Hotels title="Stay in Bangkok" />
			<Hotels title="Homes in Toronto" />
			<Hotels title="Places to stay in Osaka" />
			<Hotels title="Checkout homes in Tokyo" />
			<Hotels title="Stay in Busan" />
			<Inspiration />
			<Footer />
		</React.Fragment>
	);
}
