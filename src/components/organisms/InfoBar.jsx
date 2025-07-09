import InfoBlock from '../molecules/InfoBlock';
import { motion } from 'framer-motion';
import { slideIn } from '../../utility/animation';

const InfoBar = () => (
    <motion.section className="bg-gray-100 py-6 px-4 my-6"
        variants={slideIn("down", 0.3)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}>

        <div
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6  text-left"
        >
            <InfoBlock
                icon="cart"
                title="ENVÍOS"
                description="Preparamos todas tus compras en 24hs. Realizamos envíos a todo el país."
            />
            <InfoBlock
                icon="shield-check"
                title="SEGURIDAD"
                description={
                    <>
                        Podés revisar nuestro perfil como vendedores en MercadoLibre haciendo{' '}
                        <a href="https://www.mercadolibre.com.ar/" target="_blank" rel="noopener noreferrer">
                            Click acá
                        </a>.
                    </>
                }
            />
            <InfoBlock
                icon="whatsapp"
                title="WhatsApp"
                description={
                    <>
                        Escribinos a nuestro WhatsApp. Respondemos tus consultas rápidamente.{' '}
                        <a href="https://wa.me/541122222222" target="_blank" rel="noopener noreferrer">
                            Click acá
                        </a>.
                    </>
                }
            />
        </div>
    </motion.section>
);

export default InfoBar;