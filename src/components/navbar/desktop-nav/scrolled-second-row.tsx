import { imageHelper } from "@/assets/images/images";
import Image from "next/image";
import React from "react";
import { Button } from "../../ui/button";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ScrolledSecondRow() {
	const t = useTranslations("SecondScrolledRow");
	return (
		<div className=" shadow-md rounded-full pl-2 py-1 pr-1 flex items-center justify-between bg-white text-sm font-semibold w-sm cursor-pointer">
			<div className="flex items-center gap-x-1">
				<Image
					src={imageHelper.home}
					height={20}
					width={20}
					alt="home-icon"
				/>
				<span>{t("anywhere")}</span>
			</div>
			<span className="px-4 border-x-2"> {t("anytime")}</span>
			<div className="flex items-center gap-x-2">
				<span>{t("add-guests")}</span>
				<Button className="size-10 rounded-full">
					<Search />
				</Button>
			</div>
		</div>
	);
}
