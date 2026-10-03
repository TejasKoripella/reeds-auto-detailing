import { business, sms, tel } from '../data/site'
import { CheckIcon } from './Icons'
import Reveal from './Reveal'

const points = [
  ['Local Van Meter service', 'Based right here, serving the surrounding metro.'],
  ['Interior & exterior detailing', 'One person, both jobs, start to finish.'],
  ['Convenient scheduling', 'Pick a date that works and Reed confirms.'],
  ['Direct communication with Reed', 'No call center. You talk to the person doing the work.'],
]

export default function Why() {
  return (
    <section className="bg-ink py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:px-8">
        <div>
          <p className="label mb-4 text-signal">03 — Why Reed's</p>
          <h2 className="display text-[clamp(2.8rem,6vw,5rem)]">Simple, local,<br />straight talk</h2>
          <p className="mt-8 text-lg">Have questions? Text or call Reed directly.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={tel} className="btn btn-primary">Call {business.phoneDisplay}</a>
            <a href={sms} className="btn btn-ghost">Text Reed</a>
          </div>
        </div>
        <ul className="border-t border-line">
          {points.map(([t, d], i) => (
            <li key={t} className="group border-b border-line"><Reveal delay={i * 0.1} className="flex gap-4 py-6 transition-transform duration-300 group-hover:translate-x-2">
              <span className="mt-1 text-signal transition-transform duration-300 group-hover:scale-125"><CheckIcon /></span>
              <div>
                <h3 className="font-display text-2xl font-bold" style={{ fontStretch: '85%' }}>{t}</h3>
                <p className="mt-1 text-ash">{d}</p>
              </div></Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
