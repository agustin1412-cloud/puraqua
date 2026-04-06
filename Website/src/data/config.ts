export const config = {
  whatsapp: {
    number: "59891410111",
    defaultMessage: "Hola, me interesa un equipo de ósmosis inversa",
  },
  email: "puraquauy@gmail.com",
  brand: "Puraqua",
  tagline: "Purificación por Ósmosis Inversa",
  formspreeId: "mykblqgz",
};

export function whatsappURL(message?: string): string {
  const msg = encodeURIComponent(message || config.whatsapp.defaultMessage);
  return `https://wa.me/${config.whatsapp.number}?text=${msg}`;
}
