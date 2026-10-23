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
  {slug:'mindvault', title:'M9000', type:'Product design + UX engineering', summary:'A flexible workspace for visual thinkers.', detail:'Brand, marketing website, design system and a collaborative notes app.', image:'mindvault.jpg', alt:'M9000 collaborative workspace project', color:'blue'},
  {slug:'xprize', title:'XPRIZE', type:'UI engineering + design systems', summary:'Making ambitious ideas easier to manage.', detail:'Website UI, the Prize Operations Portal and a coded design system.', image:'xprize.jpg', alt:'XPRIZE design system showing typography and interface components', color:'sand'},
  {slug:'yarden', title:'Yarden', type:'Product leadership + development', summary:'Connecting gardens, customers and operations.', detail:'Product design and frontend work across customer and business tools.', image:'yarden.jpg', alt:'Yarden customer dashboard showing account settings, payment methods and plan details', color:'green'},
  {slug:'comett', title:'Comett', type:'Product development with Tunabear', summary:'Multilingual chat and live video calls with translated captions.', detail:'A multilingual communication product with quick invite rooms, translated chat, live video captions, and account-based conversations, developed with Tunabear.', image:null, alt:'Comett, a multilingual communication product developed with Tunabear', color:'lilac'},
  {slug:'fxxkup', title:'Rock Bar FxxK Up', type:'Website · Sapporo hospitality', summary:'A multilingual first stop for a night in Susukino.', detail:'A customer website that brings together the bar’s atmosphere, menu, access and visitor information.', image:'case-study/neon-sign-1108.webp', alt:'The real red FxxK Up neon sign inside the Susukino bar', color:'red'},
  {slug:'barticket', title:'BarTicket', type:'Internal operations app', summary:'Daily bar operations, recorded and ready to explore.', detail:'An internal tool for recording tickets, orders, payments and shifts, then drilling into business analytics.', image:'case-study/barticket-analytics.webp', alt:'Actual BarTicket monthly analytics screen showing sales by night', color:'blue'},
];
// The workbench and top of the work page feature a focused set of projects.
// XPRIZE remains in the portfolio archive so it is easy to find without leading the page.
export const featuredProjects = ['mindvault','yarden','comett','fxxkup','barticket']
  .map((slug) => projects.find((project) => project.slug === slug));
export const archive = [
  ['xprize','XPRIZE','UI engineering · Prize Operations Portal · Design system'],
  ['crigenetics','CRI Genetics','Product design lead · Frontend development'],
  ['nucleotide','Nucleotide','Design system · Documentation'],
  ['foundry','Foundry','UI engineering · Data-rich products'],
  ['clicktool','Clicktool','Creative direction · B2B product design'],
];
