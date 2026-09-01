export const WHATSAPP_PHONE = '16823960543';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}`;

export const DEFAULT_WHATSAPP_MESSAGE = 'Hi, I would like to schedule a solar site survey in Texas.';

export function getWhatsAppLink(customMessage?: string): string {
  const msg = customMessage || DEFAULT_WHATSAPP_MESSAGE;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(msg)}`;
}
