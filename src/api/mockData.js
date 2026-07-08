export const menu = {
  categories: [
    {
      id: 'sunrise-coffee',
      name: 'Sunrise Coffee',
      emoji: '☕',
      items: [
        { name: 'Bloom Espresso', desc: 'Bold, bright single origin pull', price: '$3.50' },
        { name: 'Golden Latte', desc: 'Turmeric, honey & steamed oat milk', price: '$5.25' },
        { name: 'Dawn Cappuccino', desc: 'Velvety foam, dusted with cocoa', price: '$4.50' },
        { name: 'Cold Brew Bloom', desc: 'Slow-steeped 18 hours, over ice', price: '$4.75' },
      ],
    },
    {
      id: 'tea-more',
      name: 'Tea & More',
      emoji: '🍵',
      items: [
        { name: 'Blossom Matcha', desc: 'Ceremonial grade, whisked fresh', price: '$5.00' },
        { name: 'Rise & Chai', desc: 'House-spiced chai latte', price: '$4.75' },
        { name: 'Citrus Green Tea', desc: 'Bright, zesty morning steep', price: '$3.75' },
        { name: 'Lavender Honey Tea', desc: 'Calming floral infusion', price: '$4.00' },
      ],
    },
    {
      id: 'fresh-bakes',
      name: 'Fresh Bakes',
      emoji: '🥐',
      items: [
        { name: 'Butter Croissant', desc: 'Baked at 5am, flaky & warm', price: '$3.75' },
        { name: 'Berry Bloom Muffin', desc: 'Bursting with seasonal berries', price: '$4.00' },
        { name: 'Cinnamon Swirl', desc: 'Soft roll, brown sugar glaze', price: '$4.50' },
        { name: 'Almond Danish', desc: 'Frangipane & toasted almonds', price: '$4.75' },
      ],
    },
    {
      id: 'paint-eat',
      name: 'Paint & Eat',
      emoji: '🎨',
      items: [
        { name: 'Canvas & Coffee', desc: 'Blank canvas, paints & a drink of choice', price: '$28.00' },
        { name: 'Sunrise Session', desc: '90-min guided painting + pastry & coffee', price: '$42.00' },
        { name: 'Brunch & Brush', desc: 'Painting kit + full brunch plate', price: '$48.00' },
        { name: 'Kids Canvas', desc: 'Little artist kit + juice & cookie', price: '$22.00' },
      ],
    },
  ],
}

export const values = [
  { title: 'Rise with Intention', desc: 'Mornings should feel like a fresh canvas. We open early so you can start creating before the world wakes up.', emoji: '🌅' },
  { title: 'Create Freely', desc: 'No experience needed. Every brushstroke is welcome, every mess is part of the process.', emoji: '🖌️' },
  { title: 'Community First', desc: 'A cafe is a gathering place. We build friendships one shared table at a time.', emoji: '🤝' },
  { title: 'Sourced with Care', desc: 'Ethically-sourced beans and local ingredients in every cup and plate.', emoji: '🌱' },
]

export const team = [
  { name: 'Maya Rivera', role: 'Founder & Head Barista', img: 'https://i.pravatar.cc/150?img=47' },
  { name: 'Theo Park', role: 'Resident Painting Guide', img: 'https://i.pravatar.cc/150?img=12' },
  { name: 'Ines Cardoso', role: 'Pastry Chef', img: 'https://i.pravatar.cc/150?img=32' },
  { name: 'Jonah Bell', role: 'Community Host', img: 'https://i.pravatar.cc/150?img=15' },
]

export const locationInfo = {
  address: '128 Marigold Lane, Sunnyside District, Portland, OR 97214',
  hours: [
    { day: 'Monday – Friday', time: '6:00 AM – 4:00 PM' },
    { day: 'Saturday', time: '6:30 AM – 5:00 PM' },
    { day: 'Sunday', time: '7:00 AM – 3:00 PM' },
  ],
  socials: [
    { label: 'Instagram', handle: '@bloompaintcafe', url: 'https://instagram.com' },
    { label: 'TikTok', handle: '@bloom.cafe', url: 'https://tiktok.com' },
    { label: 'Facebook', handle: '/bloompaintingcafe', url: 'https://facebook.com' },
  ],
  phone: '(503) 555-0182',
  email: 'hello@bloomcafe.com',
}
