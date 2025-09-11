import Hotels from "@/components/common/hotels";
import Inspiration from "@/components/landing/inspiration";

export default function Home() {
	return (
		<div className="bg-white relative py-8">
			{/* <Hotels title="Popular homes in Dhaka district" /> */}
			<Inspiration />
		</div>
	);
}
