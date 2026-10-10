import type { WhatsAppMessageKey } from "@/config/site";

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  whatsappKey: WhatsAppMessageKey;
}

export const serviceHighlights: ServiceItem[] = [
  {
    id: "loan-guidance",
    icon: "HandCoins",
    title: "மகளிர் கடன் வழிகாட்டுதல்",
    description:
      "பெண்களுக்கான கடன் வாய்ப்புகள் மற்றும் திட்டங்கள் குறித்த வழிகாட்டுதல் பெறுங்கள்.",
    whatsappKey: "general",
  },
  {
    id: "shg-support",
    icon: "Users",
    title: "சுயஉதவிக் குழுக்களுக்கான ஆதரவு",
    description:
      "மகளிர் சுயஉதவிக் குழுக்களுக்கான கடன் வாய்ப்புகள் மற்றும் ஆதரவு.",
    whatsappKey: "shgLoan",
  },
  {
    id: "small-business",
    icon: "Store",
    title: "சிறு தொழில் வளர்ச்சி",
    description:
      "சிறு தொழில் தொடங்க அல்லது வளர்க்க தேவையான நிதி வழிகாட்டுதல்.",
    whatsappKey: "smallBusiness",
  },
  {
    id: "self-employment",
    icon: "Sparkles",
    title: "சுயதொழில் முன்னேற்றம்",
    description:
      "சுயதொழில் தொடங்குவதற்கான வாய்ப்புகள் மற்றும் ஆலோசனை பெறுங்கள்.",
    whatsappKey: "selfEmployment",
  },
];

export interface LoanCategory {
  id: string;
  title: string;
  description: string;
  features: string[];
  whatsappKey: WhatsAppMessageKey;
  icon: string;
}

export const loanCategories: LoanCategory[] = [
  {
    id: "shg-loan",
    title: "மகளிர் சுயஉதவிக் குழுக் கடன்",
    description:
      "சுயஉதவிக் குழுவாக இணைந்து செயல்படும் பெண்களுக்கான கடன் வாய்ப்புகள் குறித்து அறிந்துகொள்ளுங்கள்.",
    features: [
      "குழுவாக இணைந்து விண்ணப்பிக்கும் வாய்ப்பு",
      "குழு உறுப்பினர்களுக்கான ஆதரவு",
      "நிபந்தனைகளை முன்கூட்டியே அறியும் வசதி",
    ],
    whatsappKey: "shgLoan",
    icon: "UsersRound",
  },
  {
    id: "small-business-loan",
    title: "சிறு தொழில் கடன் வாய்ப்புகள்",
    description:
      "சிறு தொழில் தொடங்க அல்லது விரிவுபடுத்த கிடைக்கக்கூடிய கடன் வாய்ப்புகளை அறிந்துகொள்ளுங்கள்.",
    features: [
      "தொழில் தொடங்குவோருக்கான வழிகாட்டுதல்",
      "ஏற்கனவே தொழில் செய்வோருக்கான ஆதரவு",
      "தேவையான ஆவணங்கள் குறித்த தகவல்",
    ],
    whatsappKey: "smallBusiness",
    icon: "Store",
  },
  {
    id: "self-employment",
    title: "சுயதொழில் நிதி வழிகாட்டுதல்",
    description:
      "சுயதொழில் தொடங்குவதற்கான நிதி ஆதரவு மற்றும் வாய்ப்புகள் குறித்த தகவல்களைப் பெறுங்கள்.",
    features: [
      "சுயதொழில் திட்டமிடலுக்கான ஆலோசனை",
      "கிடைக்கக்கூடிய நிதி திட்டங்கள் பற்றிய தகவல்",
      "விண்ணப்ப செயல்முறை வழிகாட்டுதல்",
    ],
    whatsappKey: "selfEmployment",
    icon: "Lightbulb",
  },
  {
    id: "business-growth",
    title: "தொழில் வளர்ச்சி வாய்ப்புகள்",
    description:
      "ஏற்கனவே தொழில் செய்பவர்களுக்கான வளர்ச்சி வாய்ப்புகள் மற்றும் கூடுதல் நிதி ஆதரவு குறித்து அறியுங்கள்.",
    features: [
      "தொழில் விரிவாக்கத்திற்கான வழிகாட்டுதல்",
      "கூடுதல் முதலீட்டு வாய்ப்புகள்",
      "வளர்ச்சி திட்டமிடலுக்கான ஆதரவு",
    ],
    whatsappKey: "businessGrowth",
    icon: "TrendingUp",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "தொடர்புகொள்ளுங்கள்",
    description: "உங்கள் தேவையை எங்களிடம் தெரிவியுங்கள்.",
    icon: "MessageCircle",
  },
  {
    step: 2,
    title: "விவரங்களை அறியுங்கள்",
    description:
      "கிடைக்கக்கூடிய கடன் வாய்ப்புகள் மற்றும் நிபந்தனைகளைப் புரிந்துகொள்ளுங்கள்.",
    icon: "FileSearch",
  },
  {
    step: 3,
    title: "தகுதியை உறுதிப்படுத்துங்கள்",
    description:
      "தேவையான ஆவணங்கள் மற்றும் தகுதி விவரங்களைச் சரிபாருங்கள்.",
    icon: "CheckCircle",
  },
  {
    step: 4,
    title: "அடுத்தகட்ட நடவடிக்கை",
    description: "உறுதிப்படுத்தப்பட்ட வழிமுறைகளின்படி செயல்படுங்கள்.",
    icon: "ArrowRight",
  },
];
