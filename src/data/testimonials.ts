export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string; // Ruta en /public/avatars/
  quote: string;   // Texto del reverso
  stars?: number; // 0–5
};

export const testimonials: Testimonial[] = [
  {
    id: "edinson",
    name: "Edinson Gutierrez",
    role: "Developer Backend",
    company: "Empresa Privada",
    avatar: "/avatars/edinson.webp",
    quote: "Responsabilidad, iniciativa, puntualidad, soluciones alternas, son algunas de las cualidades que fueron muy notorias en las jornadas laborales compartidas con Santiago muy buen trabajador y excelente compañero.",
    stars: 5,
  },
  {
    id: "meliangel",
    name: "Meliangel Salazar",
    role: "QA Mid",
    company: "Bti Lab",
    avatar: "/avatars/meliangel.webp",
    quote: "I had the pleasure of working at the same company as Santi, and even though we were on different teams, his talent and professionalism were always evident. He's a designer with a clear and updated product vision, always thinking beyond visuals to how each design decision impacts the user experience.",
    stars: 5,
  },
  {
    id: "victor",
    name: "Victor Gelvis",
    role: "Dev Frontend",
    company: "Bti Lab",
    avatar: "/avatars/victor.webp",
    quote: "Tuve la fortuna de trabajar con Santiago, donde demostró ser un diseñador talentoso, proactivo y siempre orientado al detalle. Su capacidad para transformar ideas en soluciones visuales claras y atractivas fue clave en varios de nuestros proyectos.",
    stars: 5,
  },
];

// 👇 Agregamos default export para poder hacer `import testimonials from "..."`
export default testimonials;
