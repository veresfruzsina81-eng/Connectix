// EN translations — dán az alap HTML
const t = {
  en: {
    nav_home:"Home", nav_case:"Case", nav_process:"Process", nav_contact:"Contact",
    hero_eyebrow:"Total solution • €6,250",
    hero_title:"Danish companies in Slovakia",
    hero_subtitle:"Legal, safe and simple incorporation — we handle A–Z so you can focus on business.",
    hero_cta:"Contact us", hero_more:"Read case",
    trust_1:"Lawyer-backed", trust_2:"Live in 72 hours", trust_3:"24/7 Danish/Slovak support",
    stat_cit:"Corporate tax in Slovakia", stat_employer:"Employer contributions",
    val_1_t:"Lower fixed costs", val_1_d:"Proven tax advantage and simpler administration.",
    val_2_t:"Fully legal", val_2_d:"EU & local compliance — assessed up-front.",
    val_3_t:"One fixed price", val_3_d:"€6,250 incl. fees, notary, flights & setup.",
    case_title:"Business case — Full package (€6,250)",
    case_intro:"Many Danish businesses are slowed by high taxes and admin. We legally incorporate in Slovakia to reduce fixed costs while keeping Danish clients.",
    case_concept_t:"Concept", case_concept_d:"We deliver A–Z: registration, accounting, addresses, flights and digital setup.",
    case_includes_t:"All included",
    inc_1:"Legal registration (lawyer/notary)", inc_2:"Accounting & tax setup", inc_3:"VAT & tax registration",
    inc_4:"Official documents in Danish", inc_5:"Round-trip flight & airport assistance",
    inc_6:"Registered office (optional residential)", inc_7:"Digital company setup", inc_8:"24/7 agent support",
    pkg_label:"Fixed price", pkg_cta:"Start now", pkg_note:"incl. fees, notary, flights",
    process_title:"Process — step by step",
    proc_1_t:"Contact", proc_1_d:"we call back within 24 hours",
    proc_2_t:"Documents", proc_2_d:"we gather and prepare everything",
    proc_3_t:"Travel & signing", proc_3_d:"notary & registration",
    proc_4_t:"Activation", proc_4_d:"live within 72 hours",
    proc_5_t:"Operations", proc_5_d:"digital setup, VAT & tax",
    contact_title:"Contact us", contact_gdpr:"I accept data processing (GDPR).",
    contact_submit:"Send message", contact_note:"We usually respond within 24 hours."
  }
};

const $ = s => document.querySelectorAll(s);
$("#lang-en")[0]?.addEventListener("click", ()=>setLang("en"));
$("#lang-da")[0]?.addEventListener("click", ()=>setLang("da"));

function setLang(lang){
  $("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(lang==="en" && t.en[key]) el.textContent = t.en[key];
    if(lang==="da") el.textContent = el.getAttribute("data-i18n-da") || el.getAttribute("data-i18n-default") || el.textContent;
  });
}
