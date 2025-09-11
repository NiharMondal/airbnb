import React from "react";
import Link from "next/link";
import { DollarSign, Globe } from "lucide-react";
import { Button } from "../ui/button";
export default function Footer() {
	return (
		<footer className="px-5 lg:px-12">
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10 border-b">
				<div className="space-y-3.5 ">
					<p className="font-medium">Support</p>
					<ul className="space-y-2">
						<li>
							<Link href="/" className="hover:underline">
								Help Center
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Get help with as safety issue
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								AirCover
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Anti-discrimination
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Cancellation options
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Disability support
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Report neighborhood
							</Link>
						</li>
					</ul>
				</div>
				<div className="space-y-3.5 ">
					<p className="font-medium">Hosting</p>
					<ul className="space-y-2">
						<li>
							<Link href="/" className="hover:underline">
								Help Center
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Get help with as safety issue
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								AirCover
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Anti-discrimination
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Cancellation options
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Disability support
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Report neighborhood
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Cancellation options
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Disability support
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Report neighborhood
							</Link>
						</li>
					</ul>
				</div>
				<div className="space-y-3.5 ">
					<p className="font-medium">Airbnb</p>
					<ul className="space-y-2">
						<li>
							<Link href="/" className="hover:underline">
								Help Center
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Get help with as safety issue
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								AirCover
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Anti-discrimination
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Cancellation options
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Disability support
							</Link>
						</li>
						<li>
							<Link href="/" className="hover:underline">
								Report neighborhood
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="flex items-center justify-between py-3 ">
				<div className="flex items-center gap-x-6">
					<span>&copy; 2025 Airbnb, Inc</span>
					<ul className="list-disc flex gap-x-8 items-center ">
						<li>Terms</li>
						<li>Sitemap</li>
						<li>Privacy</li>
						<li className="text-gray-400">Your Privacy Choices</li>
					</ul>
				</div>
				<div className="flex items-center ">
					<Button
						variant={"link"}
						className="hover:no-underline text-secondary-foreground cursor-pointer flex items-center p-0"
					>
						<Globe className="mt-0.5" />
						<span>English (US)</span>
					</Button>
					<Button
						variant={"link"}
						className="hover:no-underline text-secondary-foreground cursor-pointer flex items-center "
					>
						<DollarSign className="mt-0.5" />
						<span>English (US)</span>
					</Button>
					<div className="flex gap-x-3">
						<Button className="bg-transparent hover:bg-accent text-gray-800 size-8 rounded-full">
							F
						</Button>
						<Button className="bg-transparent hover:bg-accent text-gray-800 size-8 rounded-full">
							X
						</Button>
						<Button className="bg-transparent hover:bg-accent text-gray-800 size-8 rounded-full">
							In
						</Button>
					</div>
				</div>
			</div>
		</footer>
	);
}
