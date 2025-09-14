import React from "react";
import Link from "next/link";
import { DollarSign, Globe } from "lucide-react";
import { Button } from "../ui/button";
import { getTranslations } from "next-intl/server";

type FooterLink = {
	map(
		arg0: (section: FooterLink, index: number) => React.JSX.Element
	): React.ReactNode;
	title: string;
	links: string[];
};

export default async function Footer() {
	const t = await getTranslations();
	const footerLinks = t.raw("FooterLinks") as FooterLink;
	return (
		<footer className="px-5 lg:px-12">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10">
				{footerLinks.map((section, index) => (
					<div key={index} className="space-y-4">
						<h6 className="font-semibold">{section.title}</h6>
						<ul className="space-y-2">
							{section.links.map((link: string, i: number) => (
								<li key={i}>
									<Link href="#" className="hover:underline">
										{link}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className="hidden xl:flex items-center justify-between py-3 ">
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
						<span>USD</span>
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
