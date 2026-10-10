import { siteConfig, whatsappMessages, type WhatsAppMessageKey } from "@/config/site";

/**
 * Generate a WhatsApp click-to-chat URL with an encoded Tamil message.
 */
export function getWhatsAppUrl(messageKey: WhatsAppMessageKey = "general"): string {
  const message = whatsappMessages[messageKey];
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a WhatsApp URL with a custom message.
 */
export function getWhatsAppUrlCustom(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a tel: link for phone calls.
 */
export function getPhoneUrl(): string {
  return `tel:${siteConfig.phone}`;
}
