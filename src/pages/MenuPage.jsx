import { menu } from '../api/mockData.js'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Card from '../components/ui/Card.jsx'

export default function MenuPage() {
  return (
    <div className="pt-16">
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="☕ Café Menu"
          title="What's brewing at Bloom"
          subtitle="Freshly roasted coffee, morning bakes, and paint-and-eat sessions to start your day in color."
        />

        <div className="space-y-16">
          {menu.categories.map((cat) => (
            <div key={cat.id}>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="text-3xl">{cat.emoji}</span> {cat.name}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {cat.items.map((item) => (
                  <Card key={item.name} className="p-5 flex justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.desc}</p>
                    </div>
                    <span className="font-bold text-orange-600 dark:text-orange-400 whitespace-nowrap">{item.price}</span>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-sm text-gray-500 dark:text-gray-500">
          Prices may vary. Ask our team about seasonal specials & dietary options.
        </p>
      </section>
    </div>
  )
}
