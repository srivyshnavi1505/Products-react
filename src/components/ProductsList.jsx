import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // navigate to product component
  const gotoProduct = (product) => {
    navigate("/product", { state: { productt: product } });
  };

  
  const searchbar = () => {
    const result = products.filter((product) =>
      product.category.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(result);
  };

  useEffect(() => {
    async function getProducts() {
      setLoading(true);

      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();

        setProducts(data);
        setFilteredProducts(data); 
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  if (loading)
    return <p className="text-center text-2xl">Loading...</p>;

  if (error)
    return (
      <p className="text-center text-red-500">{error.message}</p>
    );

  return (
    <div>
     
      <div className="mx-6 mt-4">
        <input
          type="text"
          placeholder="Search by category..."
          className="border p-2 rounded-lg w-64 mr-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={searchbar}
          className="text-xl bg-blue-500 rounded-2xl text-white p-2"
        >
          Search
        </button>
      </div>

      {/* Products Grid */}
      <div
        className="grid
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-5
        p-6"
      >
        {filteredProducts.map((product) => (
          <div
            onClick={() => gotoProduct(product)}
            key={product.id}
            className="shadow-lg p-4 rounded-3xl border-red-400 cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain"
            />

            <h2 className="font-bold mt-3">{product.title}</h2>

            <p className="text-blue-600 font-semibold">
              $ {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;