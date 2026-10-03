import Reveal from './Reveal'
import { business, images, sms, tel } from '../data/site'

export default function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden border-y border-line">
      <img src={images.cta()} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[6s] ease-out hover:scale-105" />
      <div className="absolute inset-0 -z-10 bg-ink/80" />
      <Reveal className="mx-auto max-w-7xl px-5 py-24 text-center lg:px-8 lg:py-36">
        <h2 className="display mx-auto max-w-4xl text-[clamp(3.2rem,10vw,8rem)]">Ready for a cleaner ride?</h2>
        <p className="mx-auto mt-6 max-w-md text-lg text-bone/85">Tell Reed what your vehicle needs and get a quote.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={tel} className="btn btn-primary">Call {business.phoneDisplay}</a>
          <a href={sms} className="btn btn-ghost">Text Reed</a>
          <a href="#contact" className="btn btn-ghost">Request a Quote</a>
        </div>
      </Reveal>
    </section>
  )
}
