import { useProductsContext } from "../../contexts/ProductsContext";
import Button from "../atoms/Button";
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

   const handleClick = (id) => {
        navigate(`/productos/${id}`);
    };

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
              <h3 className="text-lg font-semibold m-3 text-center truncate">{product.name}</h3>
              <img
                src={product.image}
                alt={`Imagen de ${product.name}`}
                className="w-full aspect-square object-cover rounded-md"
              />
              <p className="text-xl font-bold mt-2 text-green-600 text-center">${product.price}</p>
              <div className="flex items-center justify-center mt-4 gap-3 text-sm font-sans">
                <Button
                  textButton="Ver detalles"
                  className="bg-white text-gray-950 border border-gray-950 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-xl w-full"
                  onClick={() => handleClick(product.id)}
                />
              </div>
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