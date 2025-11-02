// EN fordítások
const t = {
  en:{
    nav_home:"Home", nav_case:"Case", nav_process:"Process", nav_contact:"Contact",
    hero_title:"Danish companies in Slovakia",
    hero_subtitle:"Complete solution from €6,250 — legal, safe and simple.",
    hero_cta:"Contact us now", hero_more:"View package",
    trust_1:"Lawyer-backed", trust_2:"Live in 72 hours", trust_3:"24/7 Danish/Slovak support",
    pkg_title:"Full service setup", pkg_sub:"All included — one fixed price",
    pkg_note:"incl. fees, notary, flights", pkg_cta:"Start now",
    inc_1:"Legal registration", inc_2:"Accounting & tax setup", inc_3:"VAT & tax registration",
    inc_4:"Official docs in Danish", inc_5:"Round-trip flight & airport assistance",
    inc_6:"Registered office (optional residential)", inc_7:"Digital company setup", inc_8:"24/7 agent support",
    val_1_t:"Lower corporate tax", val_1_d:"10% in Slovakia vs. 22% in Denmark — proven savings.",
    val_2_t:"Lower employer contributions", val_2_d:"Typically 1–2% vs. 8–12% in DK — stronger margins.",
    val_3_t:"Simpler administration", val_3_d:"VAT and bookkeeping are markedly easier and cheaper.",
    case_title:"Business case — Full package",
    case_intro:"We handle everything A–Z so you receive a fully operational Slovak company — legally, financially and administratively ready.",
    case_bg_t:"Background", case_bg_d:"High taxes and heavy admin limit growth. The legal solution is Slovak incorporation while keeping Danish clients.",
    case_concept_t:"Concept", case_concept_d:"One fixed-price package. Documents, registrations, addresses, flights and digital setup — all included.",
    case_includes_t:"Included",
    process_title:"Process — step by step",
    proc_1_t:"1) Contact", proc_1_d:"Submit the form — we call back within 24 hours.",
    proc_2_t:"2) Documents", proc_2_d:"We collect and prepare all requirements.",
    proc_3_t:"3) Travel & signing", proc_3_d:"You fly to Slovakia — notary and registration.",
    proc_4_t:"4) Activation", proc_4_d:"Company is live within 72 hours.",
    proc_5_t:"5) Operations", proc_5_d:"Digital setup, VAT & tax filings — ready to start.",
    contact_title:"Contact us", contact_gdpr:"I accept data processing (GDPR).",
    contact_submit:"Send message", contact_note:"We usually respond within 24 hours."
  }
};

// Nyelvváltó
const $ = s => document.querySelectorAll(s);
$("#lang-en")[0].addEventListener("click", ()=>setLang("en"));
$("#lang-da")[0].addEventListener("click", ()=>setLang("da"));

function setLang(lang){
  $("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(lang==="en" && t.en[key]) el.textContent = t.en[key];
    if(lang==="da" && t.en[key]) el.textContent = el.dataset.default || el.getAttribute("data-i18n-default") || el.textContent = el.textContent; // vissza dánra: az eredeti html a dán
  });
}
