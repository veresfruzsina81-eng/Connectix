// Nyelvváltás (dán / angol)
const translations = {
  en: {
    nav_home: "Home",
    nav_case: "Case",
    nav_process: "Process",
    nav_contact: "Contact",
    hero_title: "Danish companies in Slovakia",
    hero_subtitle: "Complete solution from €6,250 – legal, safe and simple",
    hero_cta: "Contact us now",
    case_title: "Business Case – Full Package (€6,250)",
    case_text: "Many Danish businesses experience that high taxes and admin burden limit growth. Our solution lets you legally register in Slovakia and reduce costs while keeping your Danish clients – without risk.",
    case_included_title: "All included:",
    process_title: "Process – step by step",
    process_1: "Contact us through the website",
    process_2: "We prepare all required documents",
    process_3: "You travel to Slovakia and sign",
    process_4: "The company is active within 72 hours",
    process_5: "We assist with digital setup and VAT",
    contact_title: "Contact us",
    contact_gdpr: "I accept data processing according to GDPR.",
    contact_submit: "Send message",
  }
};

document.getElementById("lang-en").addEventListener("click", () => setLang("en"));
document.getElementById("lang-da").addEventListener("click", () => setLang("da"));

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = (lang === "da" || !translations[lang]?.[key])
      ? el.dataset.default || el.textContent
      : translations[lang][key];
  });
}
