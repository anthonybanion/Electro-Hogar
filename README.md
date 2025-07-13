# MiTienda - E-commerce con React + Vite

Este proyecto es una tienda online desarrollada con React, Vite y TailwindCSS. La arquitectura está basada en **Atomic Design**, lo que permite una organización escalable y reutilizable de los componentes en átomos, moléculas, organismos, páginas y templates. Permite a los usuarios navegar productos, agregarlos al carrito, realizar compras y gestionar la autenticación (incluyendo Google). Incluye un panel de administración para CRUD de productos.

## Arquitectura Atomic Design

La estructura del frontend sigue la metodología Atomic Design:

- **Atoms**: Componentes básicos y reutilizables como botones, inputs, iconos, etc. (`src/components/atoms/`)
- **Molecules**: Combinaciones simples de átomos, como formularios, grupos de iconos, filtros, etc. (`src/components/molecules/`)
- **Organisms**: Secciones completas y funcionales, como Header, Footer, Shop, ProductDetail, etc. (`src/components/organisms/`)
- **Pages**: Vistas completas que representan pantallas del sistema, como Home, Login, Cart, Admin, etc. (`src/components/pages/`)
- **uiTemplates**: Layouts reutilizables para estructurar las páginas. (`src/components/uiTemplates/`)

Esta organización facilita la escalabilidad, el mantenimiento y la reutilización de los componentes en el proyecto.

## Contextos globales y dependencias

El proyecto utiliza React Context para manejar el estado global de:

- **Autenticación**: `AuthContext` gestiona el login, registro, autenticación con Google y el estado del usuario (incluyendo el rol de admin).
- **Productos**: `ProductsContext` gestiona la obtención, creación, edición y eliminación de productos, así como la selección y refresco de la lista.
- **Carrito**: `CartContext` gestiona los productos agregados al carrito, su persistencia en localStorage y las operaciones de compra.
- **Búsqueda y filtros**: `SearchContext` permite filtrar y buscar productos por nombre, categoría y orden de precio.

Además, se utilizan librerías modernas como:

- **SweetAlert2** para alertas y confirmaciones.
- **Framer Motion** para animaciones.
- **Swiper** para carruseles de productos destacados.
- **Bootstrap Icons** y **TailwindCSS** para el diseño visual.
- **Firebase** para autenticación y gestión de usuarios.

El carrito y la sesión de usuario se guardan en `localStorage` para persistencia entre sesiones.

## Características

- Catálogo de productos con búsqueda, filtros y paginación.
- Carrito de compras persistente en localStorage.
- Autenticación de usuarios con Firebase (email/contraseña y Google).
- Panel de administración (solo para admin) para agregar, editar y eliminar productos.
- Animaciones con Framer Motion.
- Alertas y confirmaciones con SweetAlert2.
- Responsive y diseño moderno con TailwindCSS y Bootstrap Icons.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/Oliver-92/React-Ecommerce-TP-Final
   cd React-Ecommerce-TP-Final
   ```

2. Instala dependencias:
   ```sh
   npm install
   ```

3. Configura las variables de entorno en `.env` (Firebase):
   ```
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_STORAGE_BUCKET=...
   VITE_FIREBASE_MESSAGING_SENDER_ID=...
   VITE_FIREBASE_APP_ID=...
   VITE_FIREBASE_MEASUREMENT_ID=...
   ```

4. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```

## Scripts

- `npm run dev` - Inicia el servidor de desarrollo.
- `npm run build` - Compila la aplicación para producción.
- `npm run preview` - Previsualiza la build de producción.
- `npm run lint` - Ejecuta ESLint.

## Estructura del proyecto

```
src/
  components/
    atoms/
    molecules/
    organisms/
    pages/
    uiTemplates/
  contexts/
  auth/
  utility/
  assets/
public/
```

## Tecnologías

- React
- Vite
- TailwindCSS
- Bootstrap Icons
- Firebase Auth
- SweetAlert2
- Framer Motion
- Swiper

## Notas

- El usuario admin es: `admin@gmail.com`
- La contraseña es : `123456`
- Los productos se obtienen de [MockAPI](https://mockapi.io/).
- El carrito y la sesión se guardan en localStorage.

## Licencia

MIT

---

¡Contribuciones y sugerencias son bienvenidas!