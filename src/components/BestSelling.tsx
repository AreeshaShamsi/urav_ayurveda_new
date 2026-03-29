import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  isSale?: boolean;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Herbal Cream", price: 280, rating: 4, image: "/products.png" },
  { id: 2, name: "CBD Chocklate", price: 180, originalPrice: 200, rating: 5, isSale: true, image: "/products.png" },
  { id: 3, name: "CBD Rollon Gel", price: 90, originalPrice: 200, rating: 4, isSale: true, image: "/products.png" },
  { id: 4, name: "CBD Cookies", price: 150, originalPrice: 200, rating: 4, isSale: true, image: "/products.png" },
  { id: 5, name: "CBD Chocklate", price: 180, originalPrice: 200, rating: 5, isSale: true, image: "/products.png" },
  { id: 6, name: "Herbal Cream", price: 280, rating: 4, image: "/products.png" },
  { id: 7, name: "CBD Rollon Gel", price: 90, originalPrice: 200, rating: 5, isSale: true, image: "/products.png" },
  { id: 8, name: "CBD Cookies", price: 150, originalPrice: 200, rating: 4, image: "/products.png" },
];

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "text-[#6abf69]" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative bg-white rounded-2xl p-4 flex flex-col items-center border border-gray-100 hover:border-[#6abf69] hover:shadow-lg hover:shadow-green-100 transition-all duration-300 group">

      {/* Sale badge */}
      {product.isSale && (
        <span className="absolute top-3 right-3 z-10 bg-[#6abf69] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          Sale
        </span>
      )}

      {/* Product Image */}
      <div className="w-full h-44 flex items-center justify-center mb-3 overflow-hidden rounded-xl bg-[#f3f7f0] group-hover:bg-[#eaf4e8] transition-colors duration-300">
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-2"
          />
        </div>
      </div>

      

      {/* Name */}
      <h3 className="mt-1.5 text-[14px] font-semibold text-gray-800 text-center group-hover:text-[#4a9e49] transition-colors duration-200">
        {product.name}
      </h3>

      {/* Price */}
      <div className="mt-1 flex items-center gap-2">
        <span className="text-[#4a9e49] text-sm font-semibold">
          Rs. {product.price.toFixed(2)}
        </span>
        {product.originalPrice && (
          <span className="text-gray-400 text-xs line-through">
            Rs. {product.originalPrice.toFixed(2)}
          </span>
        )}
      </div>

      {/* Add to cart on hover */}
      <button className="mt-2 w-full py-1.5 rounded-xl bg-[#6abf69] text-white text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
        Add to Cart
      </button>
    </div>
  );
}

export default function BestSelling() {
  return (
    <section className="relative w-full bg-[#f0f7eb] py-14 px-6 overflow-hidden">

      {/* Leaf — top left */}
      <div className="pointer-events-none select-none absolute top-0 left-0 z-0 w-28 md:w-40 opacity-80">
        <Image
          src="/green_leaves.png"
          alt=""
          width={180}
          height={200}
          className="w-full h-auto object-contain scale-x-[-1]"
        />
      </div>

      
     

      {/* Cannabis icon + header */}
      <div className="relative z-10 text-center mb-10">
        {/* Small cannabis icon */}
        <div className="flex justify-center mb-2">
          
        </div>

        <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-gray-900">
          Best Selling
        </h2>
        <p className="mt-3 text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
          In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Blandit massa enim
          nec dui nunc mattis enim.
        </p>
      </div>

      {/* Product Grid */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}