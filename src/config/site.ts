export const siteConfig = {
  name: "ஸ்ரீ இளந்தளிர்",
  nameEnglish: "Sri Elanthalir",
  fullName: "ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளை",
  fullNameEnglish: "Sri Elanthalir Women's Foundation",
  description:
    "பெண்களின் கனவுகளுக்கு சிறகுகள் தரும் நம்பிக்கையான துணை. கரூரில் மகளிர் கடன் வழிகாட்டுதல், சுயஉதவிக் குழு ஆதரவு, சிறு தொழில் வளர்ச்சி.",
  url: "https://elanthalir.org",
  phone: "+919500565775",
  phoneDisplay: "95005 65775",
  whatsappNumber: "919500565775",
  location: "கரூர், தமிழ்நாடு",
  locationEnglish: "Karur, Tamil Nadu",
  instagram: "https://www.instagram.com/sri_elanthalir/",
  instagramHandle: "@sri_elanthalir",
} as const;

export const whatsappMessages = {
  general:
    "வணக்கம், ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளையின் மகளிர் கடன் திட்டங்கள் மற்றும் கிடைக்கக்கூடிய வாய்ப்புகள் பற்றி தெரிந்துகொள்ள விரும்புகிறேன்.",
  shgLoan:
    "வணக்கம், எங்கள் மகளிர் சுயஉதவிக் குழுவிற்கான கடன் வாய்ப்புகள், தகுதி மற்றும் தேவையான ஆவணங்கள் குறித்து விவரங்களைத் தெரிவிக்கவும்.",
  smallBusiness:
    "வணக்கம், சிறு தொழில் தொடங்குவதற்கான அல்லது தொழிலை விரிவுபடுத்துவதற்கான கடன் வாய்ப்புகள் குறித்து தெரிந்துகொள்ள விரும்புகிறேன்.",
  selfEmployment:
    "வணக்கம், சுயதொழில் தொடங்குவதற்கான நிதி வழிகாட்டுதல் மற்றும் கடன் வாய்ப்புகள் பற்றி அறிய விரும்புகிறேன்.",
  businessGrowth:
    "வணக்கம், ஏற்கனவே செய்யும் தொழிலை விரிவுபடுத்துவதற்கான வாய்ப்புகள் குறித்து தெரிந்துகொள்ள விரும்புகிறேன்.",
  contact:
    "வணக்கம், ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளையைத் தொடர்புகொள்ள விரும்புகிறேன்.",
} as const;

export type WhatsAppMessageKey = keyof typeof whatsappMessages;
