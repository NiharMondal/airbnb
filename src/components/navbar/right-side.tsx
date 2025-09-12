import React from "react";
import { CustomModal } from "../common/custom-modal";
import { Button } from "../ui/button";
import ChoosingHost from "./choosing-host";
import { Globe } from "lucide-react";
import HelpPopover from "./help-popover";

export default function RightSide() {
	return (
		<div className="flex items-center gap-x-3">
			<div className="hidden xl:block">
				<CustomModal
					trigger={
						<Button
							variant="ghost"
							className="rounded-full px-4 cursor-pointer"
						>
							Became a host
						</Button>
					}
					className="md:max-w-5xl min-h-[500px]"
				>
					<ChoosingHost />
				</CustomModal>
			</div>

			<CustomModal
				trigger={
					<Button
						variant="secondary"
						className="rounded-full cursor-pointer size-10"
					>
						<Globe />
					</Button>
				}
				className="md:max-w-5xl min-h-[500px]"
			>
				<ChoosingHost />
			</CustomModal>

			<HelpPopover />
		</div>
	);
}
