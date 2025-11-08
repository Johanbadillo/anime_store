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
