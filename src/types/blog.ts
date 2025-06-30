export interface Blog {
  title: string;
  description: string;
  image: string;
  slug?: string;
  date?: string;
  type?: "noticias" | "partidos" | "jugadores" | "historia";
  typePosition?: "bottom-2 left-2" | "top-2 right-2";
}
