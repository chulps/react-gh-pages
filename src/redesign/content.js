// Facts come from the existing portfolio and case studies, plus the current live Sapporo content.
// No invented clients, outcomes, testimonials, availability promises, or performance metrics.
export const site = {
  name: 'Chuck Howard',
  email: 'charles.howard.jp@google.com',
  url: 'https://chulps.github.io/react-gh-pages/',
  description: 'Website improvements, PHP troubleshooting, SEO, AI integration and custom business software in Sapporo. Chuck Howard connects product design with hands-on development.',
};
export const email = (subject) => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
export const image = (name) => `${process.env.PUBLIC_URL}/images/${name}`;
export const projects = [
  {slug:'mindvault', title:'MindVault', type:'Product design + UX engineering', summary:'A flexible workspace for visual thinkers.', detail:'Brand, marketing website, design system and a collaborative notes app.', image:'mindvault.jpg', alt:'MindVault notes app with checklist and workspace navigation', color:'blue'},
  {slug:'xprize', title:'XPRIZE', type:'UI engineering + design systems', summary:'Making ambitious ideas easier to manage.', detail:'Website UI, the Prize Operations Portal and a coded design system.', image:'xprize.jpg', alt:'XPRIZE design system showing typography and interface components', color:'sand'},
  {slug:'yarden', title:'Yarden', type:'Product leadership + development', summary:'Connecting gardens, customers and operations.', detail:'Product design and frontend work across customer and business tools.', image:'yarden.jpg', alt:'Yarden customer dashboard showing account settings, payment methods and plan details', color:'green'},
  {slug:'comett', title:'Comett', type:'Product development with Tunabear', summary:'Multilingual chat and live video calls with translated captions.', detail:'A multilingual communication product with quick invite rooms, translated chat, live video captions, and account-based conversations, developed with Tunabear.', image:null, alt:'Comett, a multilingual communication product developed with Tunabear', color:'lilac'},
];
export const archive = [
  ['crigenetics','CRI Genetics','Product design lead · Frontend development'],
  ['nucleotide','Nucleotide','Design system · Documentation'],
  ['foundry','Foundry','UI engineering · Data-rich products'],
  ['clicktool','Clicktool','Creative direction · B2B product design'],
];
