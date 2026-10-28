// Product Data - Edit this file to update products, prices, images, and availability
export interface Product {
  id: string;
  name: string;
  price: number;
  dimensions: string;
  category: string;
  categorySlug: string;
  status: "Available" | "Made to Order" | "Out of Stock";
  image: string;
  description: string;
  materials: string;
  colors: string[];
  fabrics: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Chesterfield 3-Seater Sofa",
    price: 450000,
    dimensions: "2.1m × 0.9m",
    category: "Sofas & Couches",
    categorySlug: "sofas",
    status: "Available",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=center",
    description: "A timeless Chesterfield sofa featuring deep diamond tufting, rolled arms, and premium velvet upholstery. This piece combines classic elegance with modern comfort, making it the perfect centerpiece for any living room.",
    materials: "Solid hardwood frame, high-density foam, premium velvet fabric",
    colors: ["Emerald Green", "Navy Blue", "Charcoal Grey", "Burgundy"],
    fabrics: ["Velvet", "Leather", "Linen"],
  },
  {
    id: "2",
    name: "Modern L-Shape Sofa",
    price: 650000,
    dimensions: "2.8m × 1.8m",
    category: "Sofas & Couches",
    categorySlug: "sofas",
    status: "Available",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&h=800&fit=crop&crop=center",
    description: "A contemporary L-shaped sectional sofa designed for maximum comfort and style. Features deep seating, plush cushions, and a modular design that adapts to your space.",
    materials: "Engineered hardwood frame, premium foam cushioning, stain-resistant fabric",
    colors: ["Warm Beige", "Light Grey", "Cream", "Taupe"],
    fabrics: ["Bouclé", "Chenille", "Performance Fabric"],
  },
  {
    id: "3",
    name: "Luxury Upholstered Bed",
    price: 380000,
    dimensions: "6ft × 6ft",
    category: "Beds & Headboards",
    categorySlug: "beds",
    status: "Made to Order",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop&crop=center",
    description: "An elegant upholstered bed with a tall padded headboard featuring button tufting. The soft fabric and clean lines create a serene, luxurious bedroom retreat.",
    materials: "Solid wood frame, premium padding, soft-touch fabric upholstery",
    colors: ["Soft Grey", "Ivory", "Blush Pink", "Navy"],
    fabrics: ["Velvet", "Linen", "Suede"],
  },
  {
    id: "4",
    name: "Premium Dining Set",
    price: 520000,
    dimensions: "6-Seater",
    category: "Dining Sets",
    categorySlug: "dining",
    status: "Available",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=800&fit=crop&crop=center",
    description: "A sophisticated 6-seater dining set featuring a solid walnut table with elegant tapered legs and upholstered dining chairs with high backs. Perfect for formal dining experiences.",
    materials: "Solid walnut wood, premium upholstery fabric, foam-padded seats",
    colors: ["Dark Walnut", "Natural Oak", "Espresso"],
    fabrics: ["Velvet", "Leather", "Linen"],
  },
  {
    id: "5",
    name: "Executive Office Chair",
    price: 180000,
    dimensions: "Standard",
    category: "Office Chairs",
    categorySlug: "office",
    status: "Available",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&fit=crop&crop=center",
    description: "A premium executive chair combining ergonomic design with luxurious materials. Features adjustable lumbar support, padded armrests, and premium leather upholstery.",
    materials: "Chrome base, premium leather, high-density foam, ergonomic mechanism",
    colors: ["Black", "Brown", "Tan"],
    fabrics: ["Full Grain Leather", "Bonded Leather", "Mesh"],
  },
  {
    id: "6",
    name: "Tufted Accent Chair",
    price: 145000,
    dimensions: "0.75m × 0.8m",
    category: "Sofas & Couches",
    categorySlug: "sofas",
    status: "Available",
    image: "https://images.unsplash.com/photo-1506439773679-9008eb03a424?w=800&h=800&fit=crop&crop=center",
    description: "A beautifully crafted accent chair with deep button tufting and solid wooden legs. Perfect for reading corners, bedrooms, or as a statement piece in any room.",
    materials: "Solid beech wood legs, premium foam, tufted fabric upholstery",
    colors: ["Mustard Yellow", "Teal", "Grey", "Blush"],
    fabrics: ["Velvet", "Cotton", "Linen"],
  },
];

export const categories = [
  {
    name: "Sofas & Couches",
    slug: "sofas",
    subtitle: "Comfort meets style for your living space",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&crop=center",
  },
  {
    name: "Beds & Headboards",
    slug: "beds",
    subtitle: "Rest in luxury every night",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop&crop=center",
  },
  {
    name: "Dining Sets",
    slug: "dining",
    subtitle: "Gather around beautifully crafted tables",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop&crop=center",
  },
  {
    name: "Office Chairs",
    slug: "office",
    subtitle: "Ergonomic design for your workspace",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&h=400&fit=crop&crop=center",
  },
];
