import { business, reviews } from '../data/site'
import { ArrowIcon } from './Icons'
import Reveal from './Reveal'

export default function Reviews() {
  return (
    <section id="reviews" className="bg-bone py-20 text-ink lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="label mb-4 text-ink/60">04 — Reviews</p>
            <h2 className="display text-[clamp(2.8rem,7vw,5.5rem)]">Local drivers<br />recommend Reed's</h2>
          </div>
          <div className="flex items-baseline gap-5 border-l-4 border-signal pl-5">
            <span className="display text-6xl">100%</span>
            <p className="leading-tight">
              <strong className="block text-lg">recommended on Facebook</strong>
              <span className="text-ink/65">10 Facebook reviews</span>
            </p>
          </div>
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.id}><Reveal delay={r.id * 0.1} className="h-full">
              <figure className="h-full border border-ink/20 bg-white/40 p-7">
                <blockquote className="min-h-24 text-xl leading-snug">"{r.text}"</blockquote>
                <figcaption className="label mt-8 text-ink/55">— {r.author}</figcaption>
              </figure></Reveal>
            </li>
          ))}
        </ul>
        <a href={business.facebookUrl} target="_blank" rel="noopener noreferrer" className="btn mt-10 bg-ink text-bone hover:bg-signal hover:text-ink">
          See Reviews on Facebook <ArrowIcon />
        </a>
      </div>
    </section>
  )
}
