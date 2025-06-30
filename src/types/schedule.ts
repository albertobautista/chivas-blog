export interface ScheduleMatch {
  varonil: Season[];
  femenil: Season[];
}

export interface Season {
  home: {
    name: string;
    logo: string;
  };
  away: {
    name: string;
    logo: string;
  };
  date: string;
  time: string;
  stadium: string;
  jornada: string;
}
