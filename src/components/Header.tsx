import { business, tel } from '../data/site'
import { PhoneIcon } from './Icons'

const nav = [
  ['Services', '#services'],
  ['Results', '#results'],
  ['Reviews', '#reviews'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:h-[4.5rem] lg:px-8">
        <a href="#top" className="flex items-baseline gap-2 leading-none" aria-label={`${business.name} home`}>
          <span className="display text-[1.7rem]">Reed's</span>
          <span className="label hidden text-ash sm:inline">Auto Detailing</span>
        </a>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex gap-9">
            {nav.map(([l, h]) => (
              <li key={h}>
                <a href={h} className="text-[0.95rem] text-ash transition-colors hover:text-bone">{l}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href={tel} className="hidden items-center gap-2 font-display text-lg font-bold tracking-wide hover:text-signal md:flex" style={{ fontStretch: '90%' }}>
            <PhoneIcon /> {business.phoneDisplay}
          </a>
          <a href={tel} aria-label={`Call ${business.phoneDisplay}`} className="flex h-11 w-11 items-center justify-center border border-line md:hidden"><PhoneIcon /></a>
          <a href="#contact" className="btn btn-primary !min-h-11 !px-5 !text-base">Get a Quote</a>
        </div>
      </div>
    </header>
  )
}
