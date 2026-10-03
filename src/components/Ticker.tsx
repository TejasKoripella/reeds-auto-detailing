const items = ['Interior Detail', 'Exterior Detail', 'Full Detail', 'Van Meter, Iowa', 'Call or text Reed']

export default function Ticker() {
  const row = [...items, ...items, ...items]
  return (
    <div className="overflow-hidden border-b border-line bg-signal py-3 text-ink" aria-hidden>
      <div className="ticker">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            {row.map((t, i) => (
              <span key={i} className="display flex items-center whitespace-nowrap text-xl">
                {t}<span className="mx-6 inline-block h-2 w-2 rotate-45 bg-ink" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
