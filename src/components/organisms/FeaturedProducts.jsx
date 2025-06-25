import ProductCard from '../molecules/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const products = [
    {
        id: 1,
        name: 'Remera estampada',
        price: 4999,
        image: 'https://raw.githubusercontent.com/Oliver-92/images/refs/heads/main/assets/clothes/H-Remera-nice-good.webp',
    },
    {
        id: 2,
        name: 'Campera jean',
        price: 9999,
        image: 'https://raw.githubusercontent.com/Oliver-92/images/refs/heads/main/assets/clothes/H-Remera-nice-good.webp',
    },
    {
        id: 3,
        name: 'Pantalón cargo',
        price: 7999,
        image: 'https://raw.githubusercontent.com/Oliver-92/images/refs/heads/main/assets/clothes/H-Remera-nice-good.webp',
    },
    {
        id: 4,
        name: 'Buzo oversize',
        price: 5999,
        image: 'https://raw.githubusercontent.com/Oliver-92/images/refs/heads/main/assets/clothes/H-Remera-nice-good.webp',
    },
    {
        id: 5,
        name: 'Camisa cuadros',
        price: 5499,
        image: 'https://raw.githubusercontent.com/Oliver-92/images/refs/heads/main/assets/clothes/H-Remera-nice-good.webp',
    },
];

const FeaturedProducts = () => (
    <section className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-6">Productos destacados</h2>

        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000, // 3 segundos entre slides
                disableOnInteraction: false, // sigue auto-scroll aunque el usuario interactúe
            }}
            navigation
            breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            }}
        >
            {products.map((product) => (
                <SwiperSlide key={product.id}>
                    <ProductCard {...product} />
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
);

export default FeaturedProducts;