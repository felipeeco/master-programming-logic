// Función para agrupar objetos por una propiedad específica
function groupBy(arr, property) {
  return arr.reduce(function (accumulator, currentValue) {
    
      const key = currentValue[property];
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(currentValue);
      return accumulator;
  }, {});
}

const productos = [
  {
      customerId: "Cust-001",
      productId: "Prod-001",
      nombre: "Producto 1",
      precio: 19.99,
  },
  {
      customerId: "Cust-002",
      productId: "Prod-002",
      nombre: "Producto 2",
      precio: 29.99,
  },
  {
      customerId: "Cust-001",
      productId: "Prod-003",
      nombre: "Producto 3",
      precio: 14.99,
  },
  {
      customerId: "Cust-003",
      productId: "Prod-004",
      nombre: "Producto 4",
      precio: 24.99,
  },
  {
      customerId: "Cust-002",
      productId: "Prod-005",
      nombre: "Producto 5",
      precio: 34.99,
  }
];

const productosAgrupados = groupBy(productos, 'customerId');

console.log(productosAgrupados);
