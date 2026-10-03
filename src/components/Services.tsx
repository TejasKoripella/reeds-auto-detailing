import { services } from '../data/site'
import { ArrowIcon } from './Icons'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" className="bg-bone py-20 text-ink lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="label mb-4 text-ink/60">01 — Services</p>
            <h2 className="display text-[clamp(2.8rem,7vw,5.5rem)]">Detailing that fits<br />your vehicle</h2>
          </div>
          <p className="max-w-xs text-ink/70">Interior and exterior detailing without the hassle. Not sure which one you need? Ask Reed.</p>
        </div>
        <ul className="mt-14 grid border-t-2 border-ink lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.id} className="svc flex flex-col border-b border-ink/25 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
              <Reveal delay={i * 0.12}><span className="label text-ink/50">0{i + 1}</span>
              <h3 className="display mt-3 text-4xl">{s.name}</h3>
              <p className="mt-4 text-ink/75">{s.description}</p>
              <p className="mt-2 text-sm text-ink/55">{s.includes}</p>
              <p className="mt-8 font-display text-3xl font-bold" style={{ fontStretch: '80%' }}>{s.price}</p>
              <a href={`#contact`} data-service={s.name} className="btn mt-6 self-start bg-ink text-bone hover:bg-signal hover:text-ink" onClick={() => window.dispatchEvent(new CustomEvent('select-service', { detail: s.name }))}>
                Request Quote <ArrowIcon />
              </a></Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
