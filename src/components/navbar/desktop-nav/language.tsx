import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Globe } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Language() {
	const pathname = usePathname();
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="secondary"
					className="rounded-full cursor-pointer size-10"
				>
					<Globe />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="flex flex-col space-y-1 p-0">
				<Link
					href={`/en${pathname.replace(/^\/(en|bn)/, "")}`}
					className="w-full hover:bg-primary/10 p-2"
				>
					English - US
				</Link>

				<Link
					href={`/bn${pathname.replace(/^\/(en|bn)/, "")}`}
					className="w-full hover:bg-primary/10 p-2"
				>
					Bengali - বাংলা
				</Link>
			</PopoverContent>
		</Popover>
	);
}
