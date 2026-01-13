# 📱 Gifs App - Angular

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Giphy API](https://img.shields.io/badge/API-Giphy-lightgrey?style=for-the-badge)

Una aplicación web interactiva desarrollada en Angular para la búsqueda y visualización de Gifs animados. Este proyecto demuestra la implementación de una arquitectura modular y el manejo eficiente de datos externos.

## 🎯 Objetivos del Proyecto

El propósito principal es consolidar conocimientos avanzados de Angular, enfocándose en:

* **Consumo de APIs:** Conexión con servicios externos (Giphy API) mediante `HttpClient`.
* **Persistencia de Datos:** Uso de `localStorage` para mantener el historial de búsquedas del usuario.
* **Arquitectura Limpia:** Implementación del patrón **Mapper** para transformar la data de la API a interfaces propias.
* **Estructura Modular:** Organización profesional de directorios y componentes.

## 📂 Estructura de Directorios

El proyecto sigue una estructura semántica donde la lógica de negocio está separada de la presentación:


```text
src/
├── app/
│   ├── gifs/
│   │   ├── components/
│   │   │   ├── gifs-side-menu/       # Menú lateral de navegación
│   │   │   ├── gifs-side-menu-header # Cabecera del menú
│   │   │   ├── gifs-side-menu-options# Opciones de navegación
│   │   │   └── gif-list/             # Listado y tarjetas de gifs
│   │   ├── pages/
│   │   │   ├── dashboard-page/       # Página principal
│   │   │   ├── gif-history/          # Historial de búsquedas
│   │   │   ├── search-page/          # Buscador principal
│   │   │   └── trending-page/        # Gifs en tendencia
│   │   ├── services/                 # Lógica de llamadas HTTP
│   │   ├── interfaces/               # Tipado estricto de datos
│   │   └── mapper/                   # Transformación de datos API -> App
│   └── shared/
└── environments/                     # Variables de entorno (API Keys)
```
## 🚀 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio

```bash
git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)
cd nombre-del-repo
```
### 2. Instalar dependencias
Instala las librerías necesarias de Node.js:
```bash
npm install
```
### 3. Configurar Variables de Entorno (API Key)

Este proyecto consume la API de Giphy. Necesitas obtener una API Key gratuita en Giphy Developers y configurarla.

Abre el archivo src/environments/environments.development.ts y agrega tu llave:
```TypeScript
export const environment = {
  production: false,
  giphyApiKey: 'PEGA_TU_API_KEY_AQUI'
};
```
### 4. Ejecutar el servidor de desarrollo
Inicia la aplicación y abre el navegador automáticamente:
```Bash
ng serve -o
```
La aplicación correrá en http://localhost:4200/.
⌨️ con ❤️ por Fernando Vidal
