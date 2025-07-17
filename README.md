# Electro Hogar — Tienda de electrodomésticos online

*Electro Hogar* es una plataforma de comercio electrónico desarrollada con React, Vite y TailwindCSS, orientada a la venta de productos para el hogar: desde cocinas, heladeras, colchones y lavadoras hasta televisores y pequeños electrodomésticos. Brinda una experiencia moderna, responsiva y funcional tanto para usuarios comunes como para el administrador de la tienda.

Repositorio: [https://github.com/anthonybanion/Electro-Hogar.git](https://github.com/anthonybanion/Electro-Hogar.git)

Demostración: [ecommerce-electrohogar.netlify.app](https://ecommerce-electrohogar.netlify.app/)

## Contextos globales y dependencias

Electro Hogar utiliza **React Context API** para el manejo centralizado del estado de la aplicación. Los principales contextos son:

* **Autenticación**: Permite iniciar sesión mediante email y Google. Se controla el acceso del usuario administrador a través del correo `electrohogar@gmail.com`.
* **Productos**: Gestiona la obtención, edición, creación y eliminación de productos, sincronizados con una API REST (MockAPI).
* **Carrito de compras**: Administra los productos agregados al carrito y los mantiene persistentes en `localStorage`.

Entre las principales librerías utilizadas:

* `sweetalert2`: Ventanas modales elegantes y personalizadas.
* `framer-motion`: Animaciones fluidas y profesionales.
* `swiper`: Carruseles de imágenes para productos destacados.
* `bootstrap-icons`: Iconografía moderna.
* `firebase`: Autenticación de usuarios.

## Características destacadas

* Navegación intuitiva por categorías y productos.
* Carrito de compras funcional y persistente.
* Registro e inicio de sesión mediante email o Google.
* Sección de administrador con funciones completas de gestión de productos.
* Interfaz adaptativa para dispositivos móviles, tabletas y escritorios.
* Interacciones modernas gracias a animaciones y alertas visuales.

## Instalación

1. Cloná el repositorio:

```bash
git clone https://github.com/anthonybanion/Electro-Hogar.git
cd Electro-Hogar
```

2. Instalá las dependencias:

```bash
npm install
```

3. Configurá las variables de entorno (Firebase):

Crea un archivo `.env` en la raíz con la siguiente estructura:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

4. Ejecutá el entorno de desarrollo:

```bash
npm run dev
```

## Datos de acceso del administrador

Para acceder al panel de administración:

* **Correo:** `electrohogar@gmail.com`
* **Contraseña:** puede ser cualquiera. El sistema valida sólo el correo.

## Fuente de datos

* Los productos se obtienen y gestionan a través de [MockAPI](https://mockapi.io/).
* El carrito de compras y la sesión de usuario se almacenan de forma local en el navegador mediante `localStorage`.

## Tecnologías utilizadas

* React
* Vite
* TailwindCSS
* Firebase Auth
* SweetAlert2
* Framer Motion
* Swiper.js
* Bootstrap Icons

## Licencia

MIT

---

¡Se agradecen comentarios, mejoras y contribuciones para seguir desarrollando esta tienda online!
