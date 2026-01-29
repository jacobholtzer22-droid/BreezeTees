export const products = [
  {
    id: '1',
    name: 'Chill Vibes',
    description: 'Stylized character tee with purple hair and a relaxed companion. Soft glow, laid-back energy.',
    price: 34.99,
    image: '/images/chill-vibes.png',
    colors: ['Charcoal', 'Black'],
    collection: 'Album Covers',
  },
  {
    id: '2',
    name: 'Boogie Da Hoodie',
    description: 'Jeweled hand with string puppets — bold graphic on washed black. Statement piece.',
    price: 34.99,
    image: '/images/puppeteer.png',
    colors: ['Black', 'Charcoal'],
    collection: 'Album Covers',
  },
  {
    id: '3',
    name: 'X-Wing Pilot',
    description: 'LEGO Rebel pilot in a vibrant blue circle. Pop culture meets vintage wash.',
    price: 34.99,
    image: '/images/x-wing.png',
    colors: ['Charcoal', 'Grey'],
    collection: 'TV Shows',
  },
  {
    id: '4',
    name: 'Leaf Village',
    description: 'Metallic Konoha symbol with studded badge style. Anime classic on black.',
    price: 34.99,
    image: '/images/leaf-village.png',
    colors: ['Black', 'Charcoal'],
    collection: 'TV Shows',
  },
  {
    id: '5',
    name: 'Robin',
    description: 'Stylized Robin with glowing yellow emblem. Hero vibes on dark tee.',
    price: 34.99,
    image: '/images/robin.png',
    colors: ['Charcoal', 'Black'],
    collection: 'TV Shows',
  },
  {
    id: '6',
    name: 'Bikini Bottom',
    description: 'Patrick’s rock, Squidward’s moai, and SpongeBob’s pineapple — neon glow on black.',
    price: 34.99,
    image: '/images/bikini-bottom.png',
    colors: ['Black', 'Charcoal'],
    collection: 'TV Shows',
  },
  {
    id: '7',
    name: 'Throne',
    description: 'Fantasy throne scene with purple robes and bold character art. Vintage wash.',
    price: 34.99,
    image: '/images/throne.png',
    colors: ['Charcoal', 'Black'],
    collection: 'Album Covers',
  },
]

export const featuredProduct = products[0]

export const collections = [...new Set(products.map((p) => p.collection))]
export const allColors = [...new Set(products.flatMap((p) => p.colors))]
