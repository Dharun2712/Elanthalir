"use client";

import { useState } from "react";
import { MessageCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "மகளிர் கடன் வழிகாட்டுதல்",
    location: "கரூர்",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்.";
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/[\s\-+]/g, "").slice(-10);
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      newErrors.phone = "சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    if (!validate()) return;
    const text = `வணக்கம், ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளைக்கு எனது விசாரணை:\n\n👤 பெயர்: ${formData.name}\n📱 தொலைபேசி: ${formData.phone}\n📍 ஊர்: ${formData.location}\n📋 சேவை: ${formData.service}\n💬 செய்தி: ${formData.message || "விவரங்கள் அறிய விரும்புகிறேன்."}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-stone-200">
      {submitted ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 bg-[#E5F0E7] text-[#0a5232] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-serif-tamil text-2xl font-medium text-[#002617]">
            நன்றி! உங்கள் தகவல் பெறப்பட்டது.
          </h3>
          <p className="font-sans text-stone-600 max-w-md mx-auto text-sm md:text-base font-light">
            ஸ்ரீ இளந்தளிர் மகளிர் அறக்கட்டளையின் பிரதிநிதி விரைவில் உங்களைத் தொடர்புகொண்டு வழிகாட்டுவார்.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  phone: "",
                  service: "மகளிர் கடன் வழிகாட்டுதல்",
                  location: "கரூர்",
                  message: "",
                });
              }}
              className="px-6 py-3 rounded-full border border-stone-300 text-stone-700 font-semibold hover:bg-stone-50 transition-colors text-xs uppercase tracking-wider"
            >
              மற்றொரு விசாரணை அனுப்ப
            </button>
            <button
              onClick={handleWhatsAppDirect}
              className="px-6 py-3 rounded-full bg-[#0a5232] text-white border border-[#D4B36A] hover:bg-[#D4B36A] hover:text-[#0c291c] text-xs uppercase tracking-wider font-semibold transition-all inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>வாட்ஸ்அப்பிலும் தொடரவும்</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <h3 className="font-serif-tamil text-2xl font-medium text-[#002617] mb-1">
              எங்களுக்குத் தகவல் அனுப்புங்கள்
            </h3>
            <p className="font-sans text-stone-600 text-sm font-light">
              உங்கள் தேவையைப் பகிர்ந்தால், எங்கள் குழு உங்களைத் தொடர்புகொள்ளும்.
            </p>
          </div>

          {/* Name Field */}
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5"
            >
              உங்கள் பெயர் <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="எ.கா. கவிதா"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.name ? "border-rose-400 bg-rose-50/20" : "border-stone-300"
              } focus:border-[#123D2A] focus:ring-1 focus:ring-[#123D2A] outline-none transition-all text-sm`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="contact-phone"
              className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5"
            >
              தொலைபேசி / வாட்ஸ்அப் எண் <span className="text-rose-600">*</span>
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="98765 43210"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.phone ? "border-rose-400 bg-rose-50/20" : "border-stone-300"
              } focus:border-[#123D2A] focus:ring-1 focus:ring-[#123D2A] outline-none transition-all text-sm`}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Service Option */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contact-service"
                className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5"
              >
                விசாரணை வகை
              </label>
              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#123D2A] outline-none transition-all text-sm bg-white"
              >
                <option value="மகளிர் கடன் வழிகாட்டுதல்">மகளிர் கடன் வழிகாட்டுதல்</option>
                <option value="சுயஉதவிக் குழு கடன்">சுயஉதவிக் குழு கடன்</option>
                <option value="சிறு தொழில் கடன்">சிறு தொழில் கடன்</option>
                <option value="சுயதொழில் நிதி உதவி">சுயதொழில் நிதி உதவி</option>
                <option value="பொதுவான ஆலோசனை">பொதுவான ஆலோசனை</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-location"
                className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5"
              >
                உங்கள் ஊர் / பகுதி
              </label>
              <input
                type="text"
                id="contact-location"
                name="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="எ.கா. கரூர், புகழூர்"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#123D2A] outline-none transition-all text-sm"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5"
            >
              உங்கள் தேவை அல்லது செய்தி (விரும்பினால்)
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="உங்கள் தொழில் அல்லது கடன் தேவை குறித்த சிறிய குறிப்பு..."
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#123D2A] outline-none transition-all text-sm resize-none"
            />
          </div>

          {/* Submission Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-3.5 px-6 rounded-full bg-[#123D2A] text-white hover:bg-[#D4B36A] hover:text-[#0c291c] text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>விவரங்களைச் சமர்ப்பிக்க</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="flex-1 py-3.5 px-6 rounded-full bg-[#0a5232] text-white border border-[#D4B36A] hover:bg-[#D4B36A] hover:text-[#0c291c] text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>நேரடி வாட்ஸ்அப்</span>
            </button>
          </div>

          <p className="text-xs text-stone-500 text-center pt-1 font-light">
            🔒 உங்கள் தகவல்கள் பாதுகாப்பாக கையாளப்படும். மூன்றாம் தரப்பினருடன் பகிரப்படாது.
          </p>
        </form>
      )}
    </div>
  );
}
