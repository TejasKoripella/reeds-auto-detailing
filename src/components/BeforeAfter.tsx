import { useEffect, useRef, useState } from 'react'
import { results } from '../data/site'
import { CameraIcon } from './Icons'

type Item = (typeof results)[number]

function Pane({ src, tag, alt }: { src?: string; tag: string; alt: string }) {
  if (src) return <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" draggable={false} />
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-ash" style={{ background: 'repeating-linear-gradient(135deg,#1b1c1e 0 14px,#202225 14px 28px)' }}>
      <CameraIcon />
      <span className="label">{tag} photo</span>
      <span className="text-xs">Replace in data/site.ts</span>
    </div>
  )
}

function Slider({ item }: { item: Item }) {
  const [pos, setPos] = useState(50)
  const box = useRef<HTMLDivElement>(null)
  const touched = useRef(false)
  useEffect(() => {
    const el = box.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t: number) => {
        const k = Math.min((t - t0) / 1800, 1)
        if (touched.current) return
        setPos(50 + Math.sin(k * Math.PI * 2) * 28 * (1 - k * 0.3))
        if (k < 1) raf = requestAnimationFrame(tick); else setPos(50)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [])
  return (
    <div ref={box} className="relative aspect-[4/3] w-full select-none overflow-hidden border border-line bg-steel sm:aspect-[16/9]">
      <div className="absolute inset-0"><Pane src={item.after} tag="After" alt={`${item.label} after detailing`} /></div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}><Pane src={item.before} tag="Before" alt={`${item.label} before detailing`} /></div>
      <span className="label absolute left-3 top-3 bg-ink px-2.5 py-1.5">Before</span>
      <span className="label absolute right-3 top-3 bg-signal px-2.5 py-1.5 text-ink">After</span>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-bone" style={{ left: `${pos}%` }}>
        <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bone text-ink">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="m9 7-5 5 5 5M15 7l5 5-5 5" /></svg>
        </div>
      </div>
      <input
        type="range" min={0} max={100} value={pos}
        onChange={(e) => { touched.current = true; setPos(Number(e.target.value)) }}
        onPointerDown={() => { touched.current = true }}
        aria-label={`Compare before and after: ${item.label}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  )
}

export default function BeforeAfter() {
  const [active, setActive] = useState(results[0].id)
  const item = results.find((r) => r.id === active)!
  return (
    <section id="results" className="border-b border-line bg-coal py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="label mb-4 text-signal">02 — Results</p>
        <h2 className="display text-[clamp(3rem,8vw,6.5rem)]">See the difference</h2>
        <div role="tablist" aria-label="Result categories" className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-wrap lg:px-0">
          {results.map((r) => (
            <button
              key={r.id} role="tab" aria-selected={r.id === active} onClick={() => setActive(r.id)}
              className={`shrink-0 border px-4 py-2.5 text-sm font-medium transition-colors ${r.id === active ? 'border-bone bg-bone text-ink' : 'border-line text-ash hover:border-ash hover:text-bone'}`}
            >{r.label}</button>
          ))}
        </div>
        <div className="mt-6" role="tabpanel">
          <Slider key={item.id} item={item} />
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-ash">
            <span className="label">{item.vehicle}</span>
            <span>Drag the slider to compare. Photos coming from Reed's own jobs.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
