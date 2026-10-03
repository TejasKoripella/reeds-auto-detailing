import { business, images, tel } from '../data/site'
import { PhoneIcon } from './Icons'

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-line">
      <img
        src={images.hero()}
        srcSet={`${images.hero(900)} 900w, ${images.hero(1800)} 1800w`}
        sizes="100vw"
        alt="Black sports car in a garage being covered in foam during a wash"
        fetchPriority="high"
        className="hero-img absolute inset-0 -z-10 h-full w-full object-cover object-[50%_60%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/20 max-lg:bg-ink/70" />
      <div className="mx-auto hero-in flex min-h-[calc(100svh-4rem-4.5rem)] max-w-7xl flex-col justify-end px-5 pb-16 pt-24 lg:min-h-[44rem] lg:px-8 lg:pb-24">
        <p className="label mb-6 text-signal">{business.city}</p>
        <h1 className="display max-w-4xl text-[clamp(4rem,13vw,10.5rem)]">
          Your car.<br />Clean again.
        </h1>
        <p className="mt-7 max-w-md text-lg leading-snug text-bone/85">
          Professional interior and exterior auto detailing in Van Meter and the surrounding area.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
          <a href={tel} className="btn btn-ghost"><PhoneIcon /> Call {business.phoneDisplay}</a>
        </div>
        <p className="label mt-8 text-ash">Local &nbsp;•&nbsp; Convenient &nbsp;•&nbsp; Professional</p>
      </div>
    </section>
  )
}
