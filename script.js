// EN translations (Danish is default HTML)
const t = {
  en: {
    ts_phone:"Phone", ts_hours:"Mon–Fri", ts_office:"Office",
    nav_home:"Home", nav_services:"Services", nav_case:"Case", nav_process:"Process", nav_contact:"Contact",
    hero_title:"Slovak company formation for Danish businesses",
    hero_sub:"Turn-key solution €6,250 — legal, safe and simple. We handle A–Z.",
    hero_cta:"Contact us", hero_more:"See package",
    v1_t:"Lower corporate tax", v1_d:"10% in Slovakia vs. 22% in Denmark.",
    v2_t:"Simpler administration", v2_d:"VAT & bookkeeping are cheaper and easier.",
    v3_t:"All included", v3_d:"Lawyer, notary, fees, flights & setup.",
    v4_t:"24/7 support", v4_d:"Danish/Slovak point of contact.",
    s1:"Customer satisfaction", s2:"Active clients", s3:"Completed incorporations", s4:"Years of experience",
    case_title:"Business case — Full package (€6,250)",
    case_intro:"High taxes slow growth. We legally incorporate in Slovakia to reduce fixed costs while keeping Danish clients.",
    inc_title:"All included",
    inc_1:"Legal advisory & registration (lawyer/notary)",
    inc_2:"Accounting & tax setup",
    inc_3:"Government fees & notary",
    inc_4:"Official documents in Danish",
    inc_5:"Round-trip flights & airport assistance",
    inc_6:"Registered office (optional residential address)",
    inc_7:"VAT & tax registration",
    inc_8:"Digital company setup",
    inc_9:"24/7 agent support",
    price_fix:"Fixed price", price_note:"incl. fees, notary, flights", price_cta:"Start now",
    process_title:"Process — step by step",
    p1_t:"Contact", p1_d:"we call back within 24 hours",
    p2_t:"Documents", p2_d:"we gather and prepare everything",
    p3_t:"Travel & signing", p3_d:"notary & registration in Slovakia",
    p4_t:"Activation", p4_d:"operational within 72 hours",
    p5_t:"Operations", p5_d:"digital setup, VAT & tax",
    c_addr:"Address", c_phone:"Phone",
    gdpr:"I accept data processing (GDPR).", send:"Send message"
  }
};

const $ = (s)=>document.querySelectorAll(s);
$("#lang-en")[0]?.addEventListener("click", ()=>setLang("en"));
$("#lang-da")[0]?.addEventListener("click", ()=>setLang("da"));

function setLang(lang){
  $("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(lang==="en" && t.en[key]) el.textContent = t.en[key];
    if(lang==="da"){ /* vissza dánra: az eredeti HTML a dán */ }
  });
}
