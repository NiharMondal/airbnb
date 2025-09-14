import { create } from "zustand";
import moment from "moment";
type State = {
	location: string;
	checkIn: string;
	checkOut: string;

	adults: number;
	children: number;
	infants: number;
	pets: number;
};

type Action = {
	updateLocation: (location: State["location"]) => void;

	updateCheckIn: (checkIn: Date | string | undefined) => void;
	updateCheckOut: (checkOut: Date | string | undefined) => void;

	// guests
	incrementAdults: (adults: State["adults"]) => void;
	incrementChildren: (children: State["children"]) => void;
	incrementInfants: (infants: State["infants"]) => void;
	incrementPets: (pets: State["pets"]) => void;

	decrementAdults: (adults: State["adults"]) => void;
	decrementChildren: (children: State["children"]) => void;
	decrementInfants: (infants: State["infants"]) => void;
	decrementPets: (pets: State["pets"]) => void;
};

export const useQuery = create<State & Action>((set) => ({
	location: "",
	checkIn: "",
	checkOut: "",
	adults: 0,
	children: 0,
	infants: 0,
	pets: 0,
	updateLocation: (location) => set(() => ({ location: location })),
	incrementAdults: (adults) => set(() => ({ adults: adults + 1 })),
	incrementChildren: (children) => set(() => ({ children: children + 1 })),
	incrementInfants: (infants) => set(() => ({ infants: infants + 1 })),
	incrementPets: (pets) => set(() => ({ pets: pets + 1 })),

	decrementAdults: (adults) =>
		set(() => ({ adults: Math.max(0, adults - 1) })),
	decrementChildren: (children) =>
		set(() => ({ children: Math.max(0, children - 1) })),
	decrementInfants: (infants) =>
		set(() => ({ infants: Math.max(0, infants - 1) })),
	decrementPets: (pets) => set(() => ({ pets: Math.max(0, pets - 1) })),

	updateCheckIn: (checkIn) =>
		set(() => ({
			checkIn: checkIn
				? checkIn instanceof Date
					? moment(checkIn).format("M-D-YYYY")
					: checkIn
				: "", // empty string if undefined
		})),

	updateCheckOut: (checkOut) =>
		set(() => ({
			checkOut: checkOut
				? checkOut instanceof Date
					? moment(checkOut).format("M-D-YYYY")
					: checkOut
				: "", // empty string if undefined
		})),
}));
