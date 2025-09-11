import { cn } from "@/lib/utils";
import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
	return <div className={cn("px-5 lg:px-10 xl:px-20")}>{children}</div>;
}
