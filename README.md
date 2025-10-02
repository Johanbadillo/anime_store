# Anime Store - Tienda Temática de Anime

## FILTRO MONGO

En este proyecto consiste en hacer un script ejecutable e mongo para hacer las siguientes funcionalidades


- Agregar un dato nuevo

```bash
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
---

## Realizar diferentes actualizaciones en la base de datos y estas actualizaciones fueron las siguientes.

  - Producto con sku: A034, actualizar stock a 15.

  - Producto con sku: A018, cambiar el country del provider a "Colombia".
  - Producto con sku: A059, agregar un nuevo tag: "oferta".
  - Producto con sku: A012, agregar dos nuevos tags: "nuevo", "popular".
  - Producto con sku: A025, agregar los tags "descuento", "outlet".
  - Producto llamado "Camiseta Goku Ultra Instinct", cambiar el price a 45000.


### Importante

Aqui el producto A059 no se le pudo actualizar porque no existia ningun archivo son ese indentificador al cual hacerle la actualizacion 

---

## Crear y realizar consultas que fueron propuestas sobre los datos pedidos.

  - Mostrar los productos de la categoría "Mangas"
  - Mostrar los productos que tienen un precio mayor a 50000
  - Mostrar los productos que no son de la categoría "Figuras"
  - Mostrar el sku, name y tags de los productos que tienen calificación mayor a 4.5.
  - Mostrar sku, name, y price de los productos con stock menor a 5.

---

## Realizar eliminacion tanto de propiedades de todos los documentos, como elementos de productos especificos, eliminacion de producto o que no tenga stock en nuestras tiendas.

  - Eliminar la propiedad available de todos los documentos.
  - Eliminar el tag "descuento" del producto con sku: A025.
  - Eliminar los tags "nuevo" y "popular" del producto con sku: A012.
  - Eliminar el producto con sku: A043.
  - Eliminar todos los productos con stock igual a 0.

---

## La implementacion de propiedades a todos los productos de la collecion.

Lo agregado a los documentos de la coleccion debia ser lo siguiente

  - available: true
  - origin: "Importado"

---

## Renombrar propiedades.

Se fue solicitado tambien el renombrar la propiedad de origin por la de import_type, y cambiar el import_type a "Nacional" para los productos cuyo proveedor esté en Colombia.

