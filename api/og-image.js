export default function handler(req, res) {
  // Crear una imagen simple usando canvas o devolver una imagen estática
  // Por ahora, vamos a redirigir a una imagen estática
  res.redirect(302, '/og-image.svg');
}
