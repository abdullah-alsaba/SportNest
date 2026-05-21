import { WHY_CHOOSE } from '@/utils/mockData'

export default function WhyChooseSection() {
  return (
    <section className="py-16 md:py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Why Choose SportNest
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-3 rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item) => (
            <div
              key={item.title}
              className="card bg-base-100 shadow-md border border-base-300"
            >
              <div className="card-body items-center text-center">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="card-title text-secondary">{item.title}</h3>
                <p className="text-base-content/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
