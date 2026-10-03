import { CameraIcon } from './Icons'

export default function About() {
  return (
    <section id="about" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="order-2 lg:order-1">
          <p className="label mb-4 text-signal">05 — About</p>
          <h2 className="display text-[clamp(2.8rem,6vw,5rem)]">Local detailing,<br />personal service</h2>
          <div className="mt-8 max-w-md space-y-4 text-lg leading-relaxed text-bone/85">
            <p>Reed provides interior and exterior auto detailing in Van Meter and around the Des Moines metro.</p>
            <p>When you book, you deal with Reed from the first message to the finished car.</p>
          </div>
        </div>
        <figure className="order-1 lg:order-2">
          <div
            className="flex aspect-[4/5] w-full max-w-md flex-col items-center justify-center gap-3 border border-line text-ash lg:ml-auto"
            style={{ background: 'repeating-linear-gradient(135deg,#161718 0 14px,#1b1c1e 14px 28px)' }}
          >
            <CameraIcon />
            <span className="label">Owner photo</span>
          </div>
          <figcaption className="label mt-3 text-ash lg:text-right">Reed, owner</figcaption>
        </figure>
      </div>
    </section>
  )
}
