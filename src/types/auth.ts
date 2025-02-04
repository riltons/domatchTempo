export type UserRole = "ADMIN" | "ORGANIZER" | "PLAYER";

export interface User {
  id: string;
  name: string;
  nickname?: string;
  phone: string;
  roles: UserRole[];
  email?: string;
}

export interface Community {
  id: string;
  name: string;
  adminId: string;
  whatsappGroupId?: string;
  memberCount: number;
  createdAt: string;
}

export interface Competition {
  id: string;
  name: string;
  communityId: string;
  status: "PENDING" | "ACTIVE" | "COMPLETED";
  participantCount: number;
  createdAt: string;
  organizerId: string;
}

export interface Game {
  id: string;
  competitionId: string;
  team1: string[];
  team2: string[];
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
  score1: number;
  score2: number;
  matches: Match[];
}

export interface Match {
  id: string;
  gameId: string;
  winningTeam: 1 | 2 | null;
  points: number;
  type: "SIMPLE" | "CARROCA" | "LA_E_LO" | "CRUZADA" | "POINTS" | "TIE";
  createdAt: string;
}
