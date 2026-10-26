// WhatsApp Order Utility for Seemarh Scents
// Phone: 09025728209 (Nigeria international code: 2349025728209)

export const SEEMARH_WHATSAPP_NUMBER = '2349025728209';

export function getProductImageUrl(imagePath) {
  if (!imagePath) return '';
  if (imagePath.startsWith('http')) return imagePath;
  const filename = imagePath.split('/').pop();
  return `https://raw.githubusercontent.com/eashsultan/seemarh-scents/main/public/products/${filename}`;
}

export function createWhatsAppOrderLink({ title, subtitle, size, price, engraving, image }) {
  const imgUrl = getProductImageUrl(image);
  let msg = `✨ *SEEMARH SCENTS - NEW ORDER* ✨\n\n`;
  msg += `Hello Maison Seemarh! 🌸 I would like to order this fragrance:\n\n`;
  msg += `▫️ *Product:* ${title}\n`;
  if (subtitle) msg += `▫️ *Edition:* ${subtitle}\n`;
  if (size) msg += `▫️ *Volume:* ${size}\n`;
  if (price) msg += `▫️ *Price:* $${price}\n`;
  if (engraving) msg += `▫️ *Bespoke Engraving:* "${engraving}"\n`;
  if (imgUrl) msg += `▫️ *Product Photo Preview:* ${imgUrl}\n\n`;
  msg += `Kindly confirm availability and payment/delivery details. Thank you! 💖`;

  return `https://wa.me/${SEEMARH_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function createWhatsAppCartLink(cart, total) {
  let msg = `✨ *SEEMARH SCENTS - COMPLETE BAG ORDER* ✨\n\n`;
  msg += `Hello Maison Seemarh! 🌸 I want to place an order for the items in my luxury bag:\n\n`;

  cart.forEach((item, index) => {
    const imgUrl = getProductImageUrl(item.image);
    msg += `*${index + 1}. ${item.title}*\n`;
    msg += `   • Size / Volume: ${item.size || 'Standard'}\n`;
    msg += `   • Quantity: ${item.quantity}\n`;
    msg += `   • Subtotal: $${item.price * item.quantity}\n`;
    if (item.engraving) msg += `   • Engraving: "${item.engraving}"\n`;
    if (imgUrl) msg += `   • Photo: ${imgUrl}\n`;
    msg += `\n`;
  });

  msg += `💰 *Estimated Total:* $${total}\n`;
  msg += `🎁 *Packaging:* Official Seemarh Signature Blush Pink Gift Bag Included\n\n`;
  msg += `Please send payment and delivery confirmation. Thank you! 💖`;

  return `https://wa.me/${SEEMARH_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
