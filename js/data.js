var PRODUCTS = [
  { id: 1, title: 'Minimal Chair',  price: '$129', tag: 'New',  image: 'https://picsum.photos/400/400?1' },
  { id: 2, title: 'Wood Desk',      price: '$299', tag: 'Hot',  image: 'https://picsum.photos/400/400?2' },
  { id: 3, title: 'Modern Lamp',    price: '$89',  tag: 'New',  image: 'https://picsum.photos/400/400?3' },
  { id: 4, title: 'Simple Sofa',    price: '$599', tag: 'Sale', image: 'https://picsum.photos/400/400?4' },
  { id: 5, title: 'Coffee Table',   price: '$199', tag: 'Hot',  image: 'https://picsum.photos/400/400?5' },
  { id: 6, title: 'Floor Light',    price: '$159', tag: 'New',  image: 'https://picsum.photos/400/400?6' }
];

var productMap = {};
PRODUCTS.forEach(function (p) { productMap[p.id] = p; });
