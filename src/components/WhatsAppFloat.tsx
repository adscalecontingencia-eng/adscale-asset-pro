import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-foreground" fill="currentColor" />
    </a>
  );
};

export default WhatsAppFloat;
