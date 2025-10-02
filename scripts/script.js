// Usamos o creamos la base de datos si no existe se crea si ya existe se usa
USE anime_store;

// En este punto se importo la data ya existente desde la interfaz de mongo Compass o 
// se inserta con un insertMany 
//Aqui como ingresamos directamente data se crea la collecion si no existe si ya existe se le añade
//Aqui ingresamos toda la data que nos fue proporcionada por la Tienda Temática de Anime
db.products.insertMany(
    [
        {
            "sku": "A001",
            "name": "Figura Luffy Gear 5",
            "category": "Figuras",
            "price": 135000,
            "stock": 5,
            "anime": "One Piece",
            "rating": 4.9,
            "tags": ["coleccionable", "resina"],
            "provider": { "name": "ToeiExpress", "country": "Japón" }
        },
        {
            "sku": "A002",
            "name": "Camiseta Goku Ultra Instinct",
            "category": "Ropa",
            "price": 38000,
            "stock": 12,
            "anime": "Dragon Ball Super",
            "rating": 4.4,
            "tags": ["algodón", "unisex"],
            "provider": { "name": "OtakuDistribuciones", "country": "Colombia" }
        },
        {
            "sku": "A003",
            "name": "Taza Tanjiro Kamado",
            "category": "Accesorios",
            "price": 22000,
            "stock": 0,
            "anime": "Demon Slayer",
            "rating": 4.2,
            "tags": ["cerámica", "color"],
            "provider": { "name": "AnimeGear", "country": "México" }
        },
        {
            "sku": "A004",
            "name": "Póster Levi Ackerman",
            "category": "Pósters",
            "price": 15000,
            "stock": 8,
            "anime": "Attack on Titan",
            "rating": 4.5,
            "tags": ["vinilo", "A3"],
            "provider": { "name": "AnimePosters", "country": "EEUU" }
        },
        {
            "sku": "A005",
            "name": "Manga Jujutsu Kaisen Vol. 1",
            "category": "Mangas",
            "price": 28000,
            "stock": 4,
            "anime": "Jujutsu Kaisen",
            "rating": 4.7,
            "tags": ["impreso", "español"],
            "provider": { "name": "ShueishaLatino", "country": "Colombia" }
        },
        {
            "sku": "A006",
            "name": "Llaveros My Hero Academia Pack",
            "category": "Accesorios",
            "price": 30000,
            "stock": 6,
            "anime": "My Hero Academia",
            "rating": 4.3,
            "tags": ["metal", "pack"],
            "provider": { "name": "OtakuDistribuciones", "country": "Colombia" }
        },
        {
            "sku": "A007",
            "name": "Figura Gojo Satoru",
            "category": "Figuras",
            "price": 150000,
            "stock": 3,
            "anime": "Jujutsu Kaisen",
            "rating": 4.9,
            "tags": ["edición especial"],
            "provider": { "name": "ToeiExpress", "country": "Japón" }
        },
        {
            "sku": "A008",
            "name": "Camiseta Nezuko Chan",
            "category": "Ropa",
            "price": 36000,
            "stock": 10,
            "anime": "Demon Slayer",
            "rating": 4.6,
            "tags": ["manga", "unisex"],
            "provider": { "name": "OtakuDistribuciones", "country": "Colombia" }
        },
        {
            "sku": "A009",
            "name": "Póster Kakashi Hatake",
            "category": "Pósters",
            "price": 18000,
            "stock": 7,
            "anime": "Naruto",
            "rating": 4.4,
            "tags": ["vinilo", "color"],
            "provider": { "name": "AnimePosters", "country": "EEUU" }
        },
        {
            "sku": "A010",
            "name": "Manga One Piece Vol. 100",
            "category": "Mangas",
            "price": 32000,
            "stock": 5,
            "anime": "One Piece",
            "rating": 4.8,
            "tags": ["colección", "impreso"],
            "provider": { "name": "ShueishaLatino", "country": "Colombia" }
        },
        {
            "sku": "A011",
            "name": "Mousepad Anime Variado",
            "category": "Accesorios",
            "price": 25000,
            "stock": 9,
            "anime": "Varios",
            "rating": 4.1,
            "tags": ["gaming", "antideslizante"],
            "provider": { "name": "OtakuDistribuciones", "country": "Colombia" }
        },
        {
            "sku": "A012",
            "name": "Camiseta Ichigo Kurosaki",
            "category": "Ropa",
            "price": 40000,
            "stock": 5,
            "anime": "Bleach",
            "rating": 4.5,
            "tags": ["algodón", "edición limitada"],
            "provider": { "name": "AnimeRopa", "country": "Colombia" }
        },
        {
            "sku": "A013",
            "name": "Llavero Doraemon",
            "category": "Accesorios",
            "price": 12000,
            "stock": 2,
            "anime": "Doraemon",
            "rating": 4.0,
            "tags": ["plástico", "azul"],
            "provider": { "name": "JapanImports", "country": "Japón" }
        },
        {
            "sku": "A014",
            "name": "Figura Sailor Moon",
            "category": "Figuras",
            "price": 98000,
            "stock": 4,
            "anime": "Sailor Moon",
            "rating": 4.3,
            "tags": ["clásico", "colección"],
            "provider": { "name": "OtakuDistribuciones", "country": "Colombia" }
        },
        {
            "sku": "A015",
            "name": "Manga Death Note Vol. 1",
            "category": "Mangas",
            "price": 27000,
            "stock": 6,
            "anime": "Death Note",
            "rating": 4.9,
            "tags": ["español", "clásico"],
            "provider": { "name": "ShueishaLatino", "country": "Colombia" }
        },
        {
            "sku": "A016",
            "name": "Taza Totoro",
            "category": "Accesorios",
            "price": 25000,
            "stock": 1,
            "anime": "My Neighbor Totoro",
            "rating": 4.7,
            "tags": ["cerámica", "cute"],
            "provider": { "name": "GhibliImports", "country": "Japón" }
        },
        {
            "sku": "A017",
            "name": "Camiseta Tokyo Revengers",
            "category": "Ropa",
            "price": 39000,
            "stock": 8,
            "anime": "Tokyo Revengers",
            "rating": 4.4,
            "tags": ["algodón", "negra"],
            "provider": { "name": "OtakuDistribuciones", "country": "Colombia" }
        },
        {
            "sku": "A018",
            "name": "Manga Chainsaw Man Vol. 1",
            "category": "Mangas",
            "price": 30000,
            "stock": 7,
            "anime": "Chainsaw Man",
            "rating": 4.6,
            "tags": ["sangriento", "nuevo"],
            "provider": { "name": "ShueishaLatino", "country": "Japón" }
        },
        {
            "sku": "A025",
            "name": "Camiseta Pikachu Vintage",
            "category": "Ropa",
            "price": 34000,
            "stock": 3,
            "anime": "Pokémon",
            "rating": 4.2,
            "tags": ["retro", "amarilla"],
            "provider": { "name": "AnimeRopa", "country": "Colombia" }
        },
        {
            "sku": "A034",
            "name": "Figura Mikasa Ackerman",
            "category": "Figuras",
            "price": 112000,
            "stock": 9,
            "anime": "Attack on Titan",
            "rating": 4.7,
            "tags": ["colección", "resina"],
            "provider": { "name": "ToeiExpress", "country": "Japón" }
        },
        {
            "sku": "A043",
            "name": "Póster Akatsuki",
            "category": "Pósters",
            "price": 18000,
            "stock": 0,
            "anime": "Naruto",
            "rating": 4.3,
            "tags": ["negro", "vinilo"],
            "provider": { "name": "AnimePosters", "country": "EEUU" }
        }
    ]);
/*
1. Crear la base de datos anime_store y la colección products.*/
//Aqui añadimos el producto que fue solicitado que añadamos
db.products.insertOne([{
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
}]);
/*
4. Realizar las siguientes actualizaciones: */
//Aqui comenzamos con las actualizacion y Agregacion de datos que fueron solicitadas

//Aqui actualizamos el stock para que pasara de 10 a 15 del sku A034
db.products.updateOne(
    { "sku": "A034" },
    {
        $set: {
            "stock": 15
        }
    });

//Aqui cambiamos el country del provider a "Colombia" del sku A018
db.products.updateOne(
    { "sku": "A018" },
    {
        $set: {
            "provider": { "name": "ShueishaLatino","country": "Colombia" }
        }
    });

// Aqui dos nuevos tags que estos fueron "nuevo" y "popular" al sku A012
db.products.updateOne(
    { "sku": "A012" },
    {
        $push: {
            tags: {
                $each: ["nuevo", "popular"]
            }
        }
    });

//Aqui le añadimosdos nuevos tags que son "descuento" y "outlet" al sku A025
db.products.updateOne(
    { sku: "A025" },
    {
        $push: {
            tags: {
                $each: ["descuento", "outlet"]
            }
        }
    });

// Aqui cambiamos el price a 45000 del producto llamado "Camiseta Goku Ultra Instinct"
db.products.updateOne(
    { "name": "Camiseta Goku Ultra Instinct" },
    {
        $set: {
            "price": 45000
        }
    });

/*
7. Crear las siguientes consultas: */
//En este punto hacemos las consultas que nos fueron solicitadas
db.products.find({ category: { $eq: "Mangas" } });

db.products.find({ price: { $gt: 50000 } });

db.products.find({ category: { $ne: "Figuras" } });

db.products.aggregate([
    { $match: { "rating": { $gt: 4.5 } } },
    { $group: { _id: "$sku", name: { $first: "$name"}, tags: { $first: "$tags"},rating: { $first: "$rating"} } }
]);

db.products.aggregate([
    { $match: { "stock": { $lt: 5 } } },
    { $group: { _id: "$sku", name: { $first: "$name"}, price: { $first: "$price"},stock: { $first: "$stock"} } }
]);



//En este punto presentamos las eliminaciones que fueron solicitados

//11. Eliminar el producto con sku: A043.
db.products.deleteOne({sku:A043});

//12. Eliminar todos los productos con stock igual a 0.
db.products.deleteMany({stock:0});