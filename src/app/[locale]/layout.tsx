import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import React from "react";
import { routing } from "@/i18n/routing";

import { Poppins, Inter } from "next/font/google";

type Props = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

const poppins = Poppins({
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});
const inter = Inter({
	variable: "--font-inter",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export default async function LocaleLayout({ children, params }: Props) {
	// Wait for params
	const { locale } = await params;

	// Validate locale
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale}>
			<body
				className={`${poppins.variable} ${inter.variable} antialiased`}
			>
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
			</body>
		</html>
	);
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}
