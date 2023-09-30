import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Products from "./Products";

const Home = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  return (
    <div className="container mx-auto px-10">
      <div className="grid md:grid-cols-1 gap-10 mt-10 ">
        {products.map((product) => (
          <Products key={product._id} product={product} products={products} setProducts={setProducts}></Products>
        ))}
      </div>
    </div>
  );
};

export default Home;
