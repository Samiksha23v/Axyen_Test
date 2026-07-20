import Card from '../components/ui/Card.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { menu } from '../api/mockData.js'

function MenuGroup({ title, emoji, items }) {
  return (
    <Card className="p-8">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span>{emoji}</span> {title}
      </h3>
      <ul className="space-y-5">
        {items.map((item) => (
          <li key={item.name} className="flex justify-between gap-4">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
            <span className="font-semibold text-orange-600 dark:text-orange-400 whitespace-nowrap">{item.price}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default function MenuPage() {
  return (
    <div className="pt-24 pb-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
      <SectionHeading center eyebrow="☕ Café Menu" title="Fuel for the morning makers" subtitle="Freshly brewed, house-baked, and paired with paint." />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <MenuGroup title="Coffee" emoji="☕" items={menu.coffee} />
        <MenuGroup title="Tea & More" emoji="🍵" items={menu.tea} />
        <MenuGroup title="Pastries" emoji="🥐" items={menu.pastries} />
        <MenuGroup title="Paint Kits" emoji="🎨" items={menu.paintKits} />
      </div>
    </div>
  )
}
