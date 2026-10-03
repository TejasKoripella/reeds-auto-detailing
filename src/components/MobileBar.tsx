import { sms, tel } from '../data/site'
import { PhoneIcon, QuoteIcon, TextIcon } from './Icons'

const cell = 'flex min-h-16 flex-1 flex-col items-center justify-center gap-1 font-display text-sm font-bold uppercase tracking-wider'

export default function MobileBar() {
  return (
    <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-50 flex border-t border-line bg-ink pb-[env(safe-area-inset-bottom)] md:hidden">
      <a href={tel} className={`${cell} bg-signal text-ink`}><PhoneIcon /> Call</a>
      <a href={sms} className={`${cell} border-x border-line`}><TextIcon /> Text</a>
      <a href="#contact" className={cell}><QuoteIcon /> Get Quote</a>
    </nav>
  )
}
