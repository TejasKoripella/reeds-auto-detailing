import { business, mailto, tel } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-coal pb-28 pt-16 md:pb-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="display text-3xl">Reed's Auto Detailing</p>
          <p className="mt-2 text-ash">{business.city}</p>
        </div>
        <div className="space-y-2">
          <p className="label text-ash">Contact</p>
          <a href={tel} className="block hover:text-signal">{business.phoneDisplay}</a>
          <a href={mailto} className="block break-all hover:text-signal">{business.email}</a>
          <a href={business.facebookUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-signal">Facebook</a>
        </div>
        <div className="space-y-2">
          <p className="label text-ash">Hours</p>
          <p>{business.hours}</p>
        </div>
        <div className="space-y-2">
          <p className="label text-ash">Service area</p>
          <p>{business.serviceArea}</p>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-7xl px-5 text-sm text-ash lg:px-8">© {new Date().getFullYear()} {business.name}</p>
    </footer>
  )
}
