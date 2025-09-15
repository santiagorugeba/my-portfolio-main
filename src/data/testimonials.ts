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
    id: "melina",
    name: "Melina Lopez",
    role: "Founder",
    company: "Circooles",
    avatar: "/avatars/melina.webp",
    quote: "Gran partner de producto: claridad, velocidad y alto nivel visual.",
    stars: 5,
  },
  {
    id: "andres",
    name: "Andrés Pérez",
    role: "Head of Product",
    company: "Fintech LATAM",
    avatar: "/avatars/andres.webp",
    quote: "Lideró research y diseño end-to-end. Entregables impecables y a tiempo.",
    stars: 5,
  },
  {
    id: "valeria-ux",
    name: "Valeria Torres",
    role: "UX Lead",
    company: "SaaS HR",
    avatar: "/avatars/valeria.webp",
    quote: "Eleva el craft del equipo y baja a tierra decisiones con métricas.",
    stars: 5,
  },
];

// 👇 Agregamos default export para poder hacer `import testimonials from "..."`
export default testimonials;
