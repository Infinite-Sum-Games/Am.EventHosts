export interface TableData {
	teamName?: string;
	studentName: string;
	email: string;
	college: string;
	city: string;
	amritaCBEStudent: boolean;
}

// Mock event data
export interface EventData {
	id: string;
	name: string;
	date: string;
	type: "group" | "solo";
	description: string;
}

export const eventsData: EventData[] = [
	{
		id: "event-1",
		name: "Tech Hackathon 2024",
		date: "2024-03-15",
		type: "group",
		description: "Annual tech hackathon event",
	},
	{
		id: "event-2",
		name: "AI Workshop",
		date: "2024-02-20",
		type: "solo",
		description: "Hands-on AI and ML workshop",
	},
	{
		id: "event-3",
		name: "Web Dev Bootcamp",
		date: "2024-01-10",
		type: "group",
		description: "Full-stack web development bootcamp",
	},
	{
		id: "event-4",
		name: "Data Science Summit",
		date: "2024-04-05",
		type: "group",
		description: "Industry experts sharing insights",
	},
	{
		id: "event-5",
		name: "Cybersecurity Training",
		date: "2024-02-28",
		type: "solo", // is_group
		description: "Security best practices training",
	},
];

export const eventParticipants: Record<string, TableData[]> = {
	"event-1": [
		{
			teamName: "Alpha Squad",
			studentName: "Kathryn Campbell",
			email: "kathryn@example.com",
			college: "Amrita Vishwa Vidyapeetham",
			city: "Coimbatore",
			amritaCBEStudent: true,
		},
		{
			teamName: "Beta Team",
			studentName: "Robert Smith",
			email: "robert@example.com",
			college: "IIT Madras",
			city: "Chennai",
			amritaCBEStudent: false,
		},
		{
			teamName: "Gamma Force",
			studentName: "Sophia Johnson",
			email: "sophia@example.com",
			college: "Amrita Vishwa Vidyapeetham",
			city: "Coimbatore",
			amritaCBEStudent: true,
		},
	],
	"event-2": [
		{
			teamName: "Delta Warriors",
			studentName: "Lucas Walker",
			email: "lucas@example.com",
			college: "NIT Trichy",
			city: "Tiruchirappalli",
			amritaCBEStudent: false,
		},
		{
			teamName: "Epsilon Elite",
			studentName: "Emily Davis",
			email: "emily@example.com",
			college: "Amrita Vishwa Vidyapeetham",
			city: "Coimbatore",
			amritaCBEStudent: true,
		},
		{
			teamName: "Zeta Crew",
			studentName: "James Lee",
			email: "james@example.com",
			college: "Anna University",
			city: "Chennai",
			amritaCBEStudent: false,
		},
		{
			teamName: "Theta Heroes",
			studentName: "Isabella Martinez",
			email: "isabella@example.com",
			college: "Amrita Vishwa Vidyapeetham",
			city: "Coimbatore",
			amritaCBEStudent: true,
		},
	],
	"event-3": [],
	"event-4": [
		{
			teamName: "Xi Experts",
			studentName: "Emma Anderson",
			email: "emma@example.com",
			college: "NIT Trichy",
			city: "Tiruchirappalli",
			amritaCBEStudent: false,
		},
		{
			teamName: "Omicron Ops",
			studentName: "Liam Taylor",
			email: "liam@example.com",
			college: "Amrita Vishwa Vidyapeetham",
			city: "Coimbatore",
			amritaCBEStudent: true,
		},
		{
			teamName: "Pi Pioneers",
			studentName: "Mia Thomas",
			email: "mia@example.com",
			college: "Anna University",
			city: "Chennai",
			amritaCBEStudent: false,
		},
	],
	"event-5": [
		{
			teamName: "Rho Rangers",
			studentName: "Ethan Jackson",
			email: "ethan@example.com",
			college: "VIT Vellore",
			city: "Vellore",
			amritaCBEStudent: false,
		},
		{
			teamName: "Sigma Squad",
			studentName: "Charlotte White",
			email: "charlotte@example.com",
			college: "Amrita Vishwa Vidyapeetham",
			city: "Coimbatore",
			amritaCBEStudent: true,
		},
		{
			teamName: "Tau Titans",
			studentName: "William Harris",
			email: "william@example.com",
			college: "PSG College",
			city: "Coimbatore",
			amritaCBEStudent: false,
		},
		{
			teamName: "Upsilon United",
			studentName: "Amelia Martin",
			email: "amelia@example.com",
			college: "Amrita Vishwa Vidyapeetham",
			city: "Coimbatore",
			amritaCBEStudent: true,
		},
		{
			teamName: "Phi Phoenix",
			studentName: "Arjun Mehta",
			email: "arjun.mehta@example.com",
			college: "IIT Madras",
			city: "Chennai",
			amritaCBEStudent: false,
		},
		{
			teamName: "Omega Orbit",
			studentName: "Sneha Iyer",
			email: "sneha.iyer@example.com",
			college: "Amrita Vishwa Vidyapeetham",
			city: "Coimbatore",
			amritaCBEStudent: true,
		},
		{
			teamName: "Delta Dynamos",
			studentName: "Rahul Verma",
			email: "rahul.verma@example.com",
			college: "NIT Trichy",
			city: "Tiruchirappalli",
			amritaCBEStudent: false,
		},
		{
			teamName: "Lambda Legends",
			studentName: "Kavya Nair",
			email: "kavya.nair@example.com",
			college: "Amrita Vishwa Vidyapeetham",
			city: "Coimbatore",
			amritaCBEStudent: true,
		},
		{
			teamName: "Epsilon Elite",
			studentName: "Mohammed Faizal",
			email: "faizal@example.com",
			college: "SRM University",
			city: "Chennai",
			amritaCBEStudent: false,
		},
		{
			teamName: "Zeta Zephyrs",
			studentName: "Ananya Sharma",
			email: "ananya.sharma@example.com",
			college: "VIT Chennai",
			city: "Chennai",
			amritaCBEStudent: false,
		},
		{
			teamName: "Kappa Knights",
			studentName: "Rohit Kulkarni",
			email: "rohit.k@example.com",
			college: "COEP Pune",
			city: "Pune",
			amritaCBEStudent: false,
		},
		{
			teamName: "Iota Innovators",
			studentName: "Priya Menon",
			email: "priya.menon@example.com",
			college: "Amrita Vishwa Vidyapeetham",
			city: "Coimbatore",
			amritaCBEStudent: true,
		},
		{
			teamName: "Mu Mavericks",
			studentName: "Siddharth Rao",
			email: "siddharth.rao@example.com",
			college: "Manipal Institute of Technology",
			city: "Manipal",
			amritaCBEStudent: false,
		},
		{
			teamName: "Nu Nexus",
			studentName: "Aditi Chawla",
			email: "aditi.chawla@example.com",
			college: "BITS Pilani",
			city: "Pilani",
			amritaCBEStudent: false,
		},
	],
};
