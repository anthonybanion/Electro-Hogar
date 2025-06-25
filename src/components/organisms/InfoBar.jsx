import InfoBlock from '../molecules/InfoBlock';

const InfoBar = () => (
    <section className="bg-gray-100 py-6 px-4 my-6">
        
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
                    description="Podés revisar nuestro perfil como vendedores en MercadoLibre haciendo click acá."
                />
                <InfoBlock
                    icon="whatsapp"
                    title="WhatsApp"
                    description="Escribinos a nuestro WhatsApp. Respondemos tus consultas rapidamente. Click acá."
                />
            </div>
       
    </section>
);

export default InfoBar;