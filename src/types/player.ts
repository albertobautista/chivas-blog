export interface PlayerStats {
  appearances: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  minutesPlayed: number;
}

export interface Player {
  name: string;
  position: string;
  number: number;
  image: string;
  stats?: PlayerStats;
}

export interface PlayersByPosition {
  position: string;
  players: Player[];
}
