import Link from 'next/link'
import { HOW_IT_WORKS } from '@/utils/mockData'

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-20 bg-secondary text-secondary-content">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">How SportNest Works</h2>
        <p className="text-secondary-content/80 mb-12 max-w-2xl mx-auto">
          Search, book, and play — three simple steps to your perfect game day.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center text-xl font-bold text-primary-content mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-secondary-content/80 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        <Link href="/facilities" className="btn btn-primary btn-lg rounded-full">
          Start Your Search Now
        </Link>
      </div>
    </section>
  )
}
