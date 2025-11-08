# 🏪 Anime Store - Tienda Temática de Anime

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

> Proyecto académico para la gestión de una tienda de productos de anime utilizando **MongoDB** con operaciones de inserción, actualización, consulta, eliminación y transformación de datos.

---

## 📌 Objetivo del Proyecto

Implementar un **script ejecutable en MongoDB** que permita:

- Inserción de nuevos productos
- Actualización de datos existentes
- Consultas avanzadas con filtros
- Eliminación selectiva de propiedades, tags y productos
- Transformación masiva de documentos

---

## 🗂️ Estructura del Proyecto
```
📁 anime_store/
├── script.js           # Script principal en MongoDB
├── data/               # Datos de ejemplo (opcional)
├── README.md           # Este archivo
└── LICENSE             # Licencia MIT
```


---

## 📦 Datos de Ejemplo (Producto Insertado)

```json
{
  "sku": "A101",
  "name": "Figura Naruto Uzumaki",
  "category": "Figuras",
  "price": 120000,
  "stock": 10,
  "anime": "Naruto",
  "rating": 4.8,
  "tags": ["coleccionable", "resina", "edición especial"],
  "provider": {
    "name": "OtakuDistribuciones",
    "country": "Japón"
  }
}
```
# ⚙️ Operaciones Realizadas en Anime Store

> Resumen completo de todas las operaciones realizadas en la base de datos MongoDB  
> **Proyecto:** [Anime Store](https://github.com/Johanbadillo/anime_store)  
> **Autor:** Johan Badillo

---

## 1. Actualizaciones Específicas

| SKU | Acción |
|-----|--------|
| `A034` | `stock` → **15** |
| `A018` | `provider.country` → **"Colombia"** |
| `A059` | ➤ **No existe** → No se actualizó |
| `A012` | Agregar tags: `"nuevo"`, `"popular"` |
| `A025` | Agregar tags: `"descuento"`, `"outlet"` |
| *"Camiseta Goku Ultra Instinct"* | `price` → **45000** |

---

## 2. Consultas Realizadas

| Consulta | Descripción |
|---------|-------------|
| `category: "Mangas"` | Productos de la categoría **Mangas** |
| `price > 50000` | Productos con precio **mayor a 50.000** |
| `category != "Figuras"` | Todos los productos que **NO son figuras** |
| `rating > 4.5` | `sku`, `name`, `tags` de productos con **alta calificación** |
| `stock < 5` | `sku`, `name`, `price` de productos con **bajo inventario** |

---

## 3. Eliminaciones

| Acción | Detalle |
|-------|--------|
| Propiedad `available` | Eliminada de **todos los documentos** |
| Tag `"descuento"` | Eliminado del producto **`A025`** |
| Tags `"nuevo"`, `"popular"` | Eliminados del producto **`A012`** |
| Producto `A043` | **Eliminado completamente** |
| `stock === 0` | Eliminados **todos los productos sin stock** |

---

## 4. Transformaciones Globales

| Operación | Resultado |
|---------|----------|
| Agregar a **todos** los productos | `available: true`<br>`origin: "Importado"` |
| Renombrar `origin` → `import_type` | En **toda la colección** |
| `provider.country === "Colombia"` | `import_type` → **"Nacional"** |

---

