export interface Blog {
  title: string;
  description: string;
  image: string;
  slug?: string;
  date?: string;
  type?: "noticias" | "partidos" | "jugadores" | "historia";
}
