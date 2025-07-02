import { useProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "../organisms/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

const FeaturedProducts = () => {
  const { products, fetchProducts } = useProductsContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, []);

  // Usamos los primeros 6 productos como destacados
  const featured = products.slice(0, 6);

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Productos destacados</h2>

      {featured.length > 0 ? (
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {featured.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                variant="featured"
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                description={product.description}
                onViewDetails={() => navigate(`/product/${product.id}`)
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-gray-500 text-center">No hay productos destacados disponibles.</p>
      )}
    </section>
  );
};

export default FeaturedProducts;