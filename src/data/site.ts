// Single source of truth: edit business info, pricing, photos and reviews here.

export const business = {
  name: "Reed's Auto Detailing",
  city: 'Van Meter, Iowa',
  street: '29204 Hickory Lodge Dr.',
  cityStateZip: 'Van Meter, IA',
  phoneDisplay: '(515) 371-7049',
  phoneDigits: '5153717049',
  email: 'reedsdetailing4u@gmail.com',
  // Link to the business Facebook page; replace with the exact page URL.
  facebookUrl: "https://www.facebook.com/search/top?q=Reed%27s%20Auto%20Detailing%20-%20Van%20Meter",
  facebookName: "Reed's Auto Detailing - Van Meter",
  hours: '[Business hours]',
  serviceArea: '[Service area]',
}

export const tel = `tel:+1${business.phoneDigits}`
export const sms = `sms:+1${business.phoneDigits}`
export const mailto = `mailto:${business.email}`

export const services = [
  {
    id: 'interior',
    name: 'Interior Detail',
    description: '[Short description]',
    price: '[Starting at $XX]',
    includes: '[Package details]',
  },
  {
    id: 'exterior',
    name: 'Exterior Detail',
    description: '[Short description]',
    price: '[Starting at $XX]',
    includes: '[Package details]',
  },
  {
    id: 'full',
    name: 'Full Detail',
    description: '[Short description]',
    price: '[Starting at $XX]',
    includes: '[Package details]',
  },
]

// Add real photos by dropping files in /public/results and setting before/after paths.
export const results: { id: string; label: string; vehicle: string; before?: string; after?: string }[] = [
  { id: 'interior', label: 'Interiors', vehicle: '[Vehicle · Interior detail]' },
  { id: 'seats', label: 'Seats', vehicle: '[Vehicle · Seat cleaning]' },
  { id: 'carpets', label: 'Carpets', vehicle: '[Vehicle · Carpet cleaning]' },
  { id: 'dash', label: 'Dashboards', vehicle: '[Vehicle · Dashboard]' },
  { id: 'paint', label: 'Exterior paint', vehicle: '[Vehicle · Exterior paint]' },
  { id: 'wheels', label: 'Wheels', vehicle: '[Vehicle · Wheels]' },
  { id: 'full', label: 'Full vehicle', vehicle: '[Vehicle · Full detail]' },
]

export const reviews = [
  { id: 1, text: '[Insert verified Facebook review]', author: '[Reviewer name]' },
  { id: 2, text: '[Insert verified Facebook review]', author: '[Reviewer name]' },
  { id: 3, text: '[Insert verified Facebook review]', author: '[Reviewer name]' },
]

// Stock photos are mood imagery only, not Reed's work. Replace with his own.
const u = (id: string, w: number) => `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=75`
export const images = {
  hero: (w = 1800) => u('1608506375591-b90e1f955e4b', w),
  cta: (w = 1800) => u('1708805282706-f44730b7e527', w),
  about: (w = 1000) => u('1708805282676-0c15476eb8a2', w),
}
