import React, { useReducer, useState } from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "../ui/calendar";
import { CounterSection } from "./counter-section";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
type SecondRowProps = {
	isScrolled: boolean;
	isExpanded: boolean;
};
type GuestState = {
	adults: number;
	children: number;
	infants: number;
	pets: number;
};

type Action =
	| { type: "INCREMENT"; payload: keyof GuestState }
	| { type: "DECREMENT"; payload: keyof GuestState };

const initialState: GuestState = {
	adults: 1,
	children: 0,
	infants: 0,
	pets: 0,
};

function reducer(state: GuestState, action: Action): GuestState {
	switch (action.type) {
		case "INCREMENT":
			return { ...state, [action.payload]: state[action.payload] + 1 };
		case "DECREMENT":
			return {
				...state,
				[action.payload]: Math.max(state[action.payload] - 1, 0),
			};
		default:
			return state;
	}
}

type PopoverKey = "where" | "checkIn" | "checkOut" | "guests" | null;

export default function SecondRow() {
	const [date, setDate] = React.useState<Date | undefined>(new Date());
	const [state, dispatch] = useReducer(reducer, initialState);
	const [openPopover, setOpenPopover] = useState<PopoverKey>(null);

	const handleOpenChange = (key: PopoverKey, isOpen: boolean) => {
		setOpenPopover(isOpen ? key : null);
	};

	const handleSearch = () => {
		console.log("clicked");
	};
	return (
		<div
			className={cn(
				"h-16 rounded-full shadow-sm relative",
				openPopover ? "bg-accent" : "bg-white"
			)}
		>
			<div className="flex items-center justify-between text-sm  lg:text-base font-medium h-full relative">
				<Popover
					open={openPopover === "where"}
					onOpenChange={(isOpen) => handleOpenChange("where", isOpen)}
				>
					<PopoverTrigger
						className={cn(
							"text-left h-full px-5 lg:px-10 rounded-full transition-colors ",
							openPopover === "where"
								? "bg-white shadow"
								: "hover:bg-accent"
						)}
					>
						<p className="text-sm font-medium">Where</p>
						<input
							type="text"
							placeholder="Search your destination"
							className="outline-0 border-0 py-1 w-[130px] lg:w-auto placeholder:font-normal lg:placeholder:font-extralight "
						/>
					</PopoverTrigger>
					<PopoverContent
						className="w-md bg-white rounded-2xl p-10"
						align="start"
					>
						<div className="min-h-20"></div>
					</PopoverContent>
				</Popover>

				<Popover
					open={openPopover === "checkIn"}
					onOpenChange={(isOpen) =>
						handleOpenChange("checkIn", isOpen)
					}
				>
					<PopoverTrigger
						className={cn(
							"text-left h-full px-10 rounded-full transition-colors",
							openPopover === "checkIn"
								? "bg-white shadow"
								: "hover:bg-accent"
						)}
					>
						<p className="text-sm font-medium">Check in</p>
						<span className="text-gray-500 font-normal">
							Add dates
						</span>
					</PopoverTrigger>
					<PopoverContent
						className="bg-white p-10 rounded-2xl sm:w-lg md:w-xl "
						align="center"
					>
						<Tabs defaultValue="account" className="w-full">
							<TabsList
								defaultValue="dates"
								className="w-fit mx-auto"
							>
								<TabsTrigger value="dates">Dates</TabsTrigger>
								<TabsTrigger value="months">Months</TabsTrigger>
								<TabsTrigger value="flexible">
									Flexible
								</TabsTrigger>
							</TabsList>

							<TabsContent value="dates">
								<Calendar
									mode="single"
									selected={date}
									onSelect={setDate}
									defaultMonth={date}
									numberOfMonths={2}
								/>
							</TabsContent>
							<TabsContent value="months">
								Change your password here.
							</TabsContent>
							<TabsContent value="flexible">
								Change your password here.
							</TabsContent>
						</Tabs>
					</PopoverContent>
				</Popover>
				<Popover
					open={openPopover === "checkOut"}
					onOpenChange={(isOpen) =>
						handleOpenChange("checkOut", isOpen)
					}
				>
					<PopoverTrigger
						className={cn(
							"text-left h-full px-10 rounded-full transition-colors",
							openPopover === "checkOut"
								? "bg-white shadow"
								: "hover:bg-accent"
						)}
					>
						<p className="text-sm font-medium">Check out</p>
						<span className="text-gray-500 font-normal">
							Add dates
						</span>
					</PopoverTrigger>
					<PopoverContent
						className="bg-white p-10 rounded-2xl sm:w-lg md:w-xl "
						align="center"
					>
						<Tabs defaultValue="dates" className="w-full">
							<TabsList className="w-fit mx-auto">
								<TabsTrigger value="dates">Dates</TabsTrigger>
								<TabsTrigger value="months">Months</TabsTrigger>
								<TabsTrigger value="flexible">
									Flexible
								</TabsTrigger>
							</TabsList>

							<TabsContent value="dates">
								<Calendar
									mode="single"
									selected={date}
									onSelect={setDate}
									defaultMonth={date}
									numberOfMonths={2}
								/>
							</TabsContent>
							<TabsContent value="months">
								Change your password here.
							</TabsContent>
							<TabsContent value="flexible">
								Change your password here.
							</TabsContent>
						</Tabs>
					</PopoverContent>
				</Popover>
				<Popover
					open={openPopover === "guests"}
					onOpenChange={(isOpen) =>
						handleOpenChange("guests", isOpen)
					}
				>
					<PopoverTrigger
						className={cn(
							"text-left h-full px-5 rounded-full transition-colors",
							openPopover === "guests"
								? "bg-white shadow"
								: "hover:bg-accent"
						)}
					>
						<div className="flex items-center gap-x-4">
							<div>
								<p className="text-sm font-medium">Who</p>
								<span className="text-gray-500 font-normal">
									Add guests
								</span>
							</div>
							<Button
								asChild
								className={cn(
									"duration-300",
									openPopover
										? "flex-1 h-12 rounded-full"
										: "size-12 rounded-full"
								)}
								onClick={handleSearch}
							>
								<span className="inline-flex items-center">
									<Search />
									{openPopover ? "Search" : ""}
								</span>
							</Button>
						</div>
					</PopoverTrigger>
					<PopoverContent
						className="w-md bg-white rounded-2xl p-10 shadow"
						align="end"
					>
						<div className="space-y-5 ">
							<CounterSection
								title="Adults"
								subtitle="Ages 13 or above"
								value={state.adults}
								onIncrement={() =>
									dispatch({
										type: "INCREMENT",
										payload: "adults",
									})
								}
								onDecrement={() =>
									dispatch({
										type: "DECREMENT",
										payload: "adults",
									})
								}
							/>
							<Separator />
							<CounterSection
								title="Children"
								subtitle="Ages 2 - 12"
								value={state.children}
								onIncrement={() =>
									dispatch({
										type: "INCREMENT",
										payload: "children",
									})
								}
								onDecrement={() =>
									dispatch({
										type: "DECREMENT",
										payload: "children",
									})
								}
							/>
							<Separator />
							<CounterSection
								title="Infants"
								subtitle="Under 2"
								value={state.infants}
								onIncrement={() =>
									dispatch({
										type: "INCREMENT",
										payload: "infants",
									})
								}
								onDecrement={() =>
									dispatch({
										type: "DECREMENT",
										payload: "infants",
									})
								}
							/>
							<Separator />
							<CounterSection
								title="Pets"
								subtitle="Bringing a service animal?"
								value={state.pets}
								onIncrement={() =>
									dispatch({
										type: "INCREMENT",
										payload: "pets",
									})
								}
								onDecrement={() =>
									dispatch({
										type: "DECREMENT",
										payload: "pets",
									})
								}
							/>
							<Separator />
						</div>
					</PopoverContent>
				</Popover>
			</div>
		</div>
	);
}
