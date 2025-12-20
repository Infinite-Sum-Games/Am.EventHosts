export interface TableData {
  teamName: string;
  studentName: string;
  email: string;
  college: string;
  city: string;
  amritaCBEStudent: boolean;
}

export const tableData: TableData[] = [
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
  {
    teamName: "Iota Innovators",
    studentName: "Benjamin Harris",
    email: "benjamin@example.com",
    college: "VIT Vellore",
    city: "Vellore",
    amritaCBEStudent: false,
  },
  {
    teamName: "Kappa Knights",
    studentName: "Olivia Brown",
    email: "olivia@example.com",
    college: "PSG College",
    city: "Coimbatore",
    amritaCBEStudent: false,
  },
  {
    teamName: "Lambda Legends",
    studentName: "Michael Clark",
    email: "michael@example.com",
    college: "Amrita Vishwa Vidyapeetham",
    city: "Coimbatore",
    amritaCBEStudent: true,
  },
  {
    teamName: "Mu Mavericks",
    studentName: "Ava Wilson",
    email: "ava@example.com",
    college: "BITS Pilani",
    city: "Pilani",
    amritaCBEStudent: false,
  },
  {
    teamName: "Nu Navigators",
    studentName: "David Young",
    email: "david@example.com",
    college: "Amrita Vishwa Vidyapeetham",
    city: "Coimbatore",
    amritaCBEStudent: true,
  },
  {
    teamName: "Xi Explorers",
    studentName: "Ethan Moore",
    email: "ethan@example.com",
    college: "IIIT Hyderabad",
    city: "Hyderabad",
    amritaCBEStudent: false,
  },
  {
    teamName: "Omicron Operators",
    studentName: "Mia Taylor",
    email: "mia@example.com",
    college: "Amrita Vishwa Vidyapeetham",
    city: "Coimbatore",
    amritaCBEStudent: true,
  },
  {
    teamName: "Pi Pioneers",
    studentName: "Noah Anderson",
    email: "noah@example.com",
    college: "SRM Institute of Science and Technology",
    city: "Chennai",
    amritaCBEStudent: false,
  },
  {
    teamName: "Rho Rebels",
    studentName: "Charlotte Thomas",
    email: "charlotte@example.com",
    college: "Amrita Vishwa Vidyapeetham",
    city: "Coimbatore",
    amritaCBEStudent: true,
  },
  {
    teamName: "Sigma Spartans",
    studentName: "Liam Martinez",
    email: "liam@example.com",
    college: "NIT Surathkal",
    city: "Surathkal",
    amritaCBEStudent: false,
  },
  {
    teamName: "Tau Titans",
    studentName: "Amelia White",
    email: "amelia@example.com",
    college: "Amrita Vishwa Vidyapeetham",
    city: "Coimbatore",
    amritaCBEStudent: true,
  },
  {
    teamName: "Upsilon United",
    studentName: "William Harris",
    email: "william@example.com",
    college: "IIT Hyderabad",
    city: "Hyderabad",
    amritaCBEStudent: false,
  },
  {
    teamName: "Phi Phantoms",
    studentName: "Sofia Lopez",
    email: "sofia@example.com",
    college: "Amrita Vishwa Vidyapeetham",
    city: "Coimbatore",
    amritaCBEStudent: true,
  },
  {
    teamName: "Chi Champions",
    studentName: "Daniel King",
    email: "daniel@example.com",
    college: "Amrita School of Engineering",
    city: "Bengaluru",
    amritaCBEStudent: true,
  },
  {
    teamName: "Psi Predators",
    studentName: "Grace Scott",
    email: "grace@example.com",
    college: "Christ University",
    city: "Bengaluru",
    amritaCBEStudent: false,
  },
  {
    teamName: "Omega Olympians",
    studentName: "Henry Adams",
    email: "henry@example.com",
    college: "Amrita Vishwa Vidyapeetham",
    city: "Coimbatore",
    amritaCBEStudent: true,
  },
];

// Mock event data
export interface EventData {
  id: string;
  name: string;
  date: string;
  status: "upcoming" | "ongoing" | "completed";
  description: string;
}

export const eventsData: EventData[] = [
  {
    id: "event-1",
    name: "Tech Hackathon 2024",
    date: "2024-03-15",
    status: "upcoming",
    description: "Annual tech hackathon event",
  },
  {
    id: "event-2",
    name: "AI Workshop",
    date: "2024-02-20",
    status: "ongoing",
    description: "Hands-on AI and ML workshop",
  },
  {
    id: "event-3",
    name: "Web Dev Bootcamp",
    date: "2024-01-10",
    status: "completed",
    description: "Full-stack web development bootcamp",
  },
  {
    id: "event-4",
    name: "Data Science Summit",
    date: "2024-04-05",
    status: "upcoming",
    description: "Industry experts sharing insights",
  },
  {
    id: "event-5",
    name: "Cybersecurity Training",
    date: "2024-02-28",
    status: "ongoing",
    description: "Security best practices training",
  },
];
