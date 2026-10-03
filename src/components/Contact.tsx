import { FormEvent, useEffect, useState } from 'react'
import { business, services, sms, tel } from '../data/site'

const field = 'mt-2 w-full border border-line bg-coal px-4 py-3.5 text-bone placeholder:text-ash/70 focus:border-signal focus:outline-none'

export default function Contact() {
  const [service, setService] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const h = (e: Event) => setService((e as CustomEvent<string>).detail)
    window.addEventListener('select-service', h)
    return () => window.removeEventListener('select-service', h)
  }, [])

  // No backend is configured: the form opens the visitor's email app with the request filled in.
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    const body = `Name: ${d.name}\nPhone: ${d.phone}\nVehicle: ${d.vehicle}\nService: ${d.service}\nPreferred date: ${d.date}\n\n${d.message}`
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent('Quote request')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:px-8">
        <div>
          <p className="label mb-4 text-signal">06 — Contact</p>
          <h2 className="display text-[clamp(2.8rem,6vw,5rem)]">Get your quote</h2>
          <a href={tel} className="display mt-10 block text-[clamp(2.6rem,6vw,4.2rem)] text-signal hover:text-bone">{business.phoneDisplay}</a>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={tel} className="btn btn-primary">Call</a>
            <a href={sms} className="btn btn-ghost">Text</a>
          </div>
          <dl className="mt-10 space-y-5 border-t border-line pt-8">
            <div><dt className="label text-ash">Email</dt><dd className="mt-1"><a className="underline underline-offset-4 hover:text-signal" href={`mailto:${business.email}`}>{business.email}</a></dd></div>
            <div><dt className="label text-ash">Location</dt><dd className="mt-1">{business.street}<br />{business.cityStateZip}</dd></div>
          </dl>
        </div>
        <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
          <label className="block"><span className="label text-ash">Name</span><input required name="name" autoComplete="name" className={field} /></label>
          <label className="block"><span className="label text-ash">Phone</span><input required name="phone" type="tel" autoComplete="tel" className={field} /></label>
          <label className="block"><span className="label text-ash">Vehicle</span><input name="vehicle" placeholder="Year, make, model" className={field} /></label>
          <label className="block">
            <span className="label text-ash">Service needed</span>
            <select name="service" value={service} onChange={(e) => setService(e.target.value)} className={field}>
              <option value="">Not sure yet</option>
              {services.map((s) => <option key={s.id}>{s.name}</option>)}
            </select>
          </label>
          <label className="block sm:col-span-2"><span className="label text-ash">Preferred date</span><input name="date" type="date" className={`${field} [color-scheme:dark]`} /></label>
          <label className="block sm:col-span-2"><span className="label text-ash">Message</span><textarea name="message" rows={4} className={field} /></label>
          <div className="sm:col-span-2">
            <button type="submit" className="btn btn-primary w-full sm:w-auto">Request My Quote</button>
            <p className="mt-3 text-sm text-ash" aria-live="polite">
              {sent ? 'Your email app should open with your request ready to send. You can also call or text Reed.' : 'This opens your email app with your request filled in. Prefer to talk? Call or text.'}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
