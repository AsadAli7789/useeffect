import { useState } from "react"
import { useEffect } from "react"
import './App.css'

function App() {

  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");


useEffect(()=>{
  fetch("https://fakestoreapi.com/products").then((res)=> res.json()).then((data)=> setProduct(data))
}, [])

let filteredArr = product.filter((data) => {
  return (
    data.title.toLowerCase().includes(search.toLowerCase()) &&
    data.category.toLowerCase().includes(category.toLowerCase()) &&
    (price === "" || data.price <= parseFloat(price))
  );
});



  return (
    <div>
      <h1 className="text-center my-5 text-3xl font-semibold underline">
        Products
      </h1>
      <div className="w-3/4 mx-auto">
      
        <input
          placeholder="Search"
          type="search"
          className="w-full border-2  p-3 font-bold  text-black"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-3/4 mx-auto">
        <input
          placeholder="Category"
          type="category"
          className="w-full border-2  p-3 font-bold  text-black"
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="w-3/4 mx-auto">
        <input
          placeholder="Price"
          type="number"
          className="w-full border-2  p-3 font-bold  text-black"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      





<div className="flex flex-wrap justify-center	">
  {
    filteredArr.map((data)=>(
      <div>
        <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-3 my-3 jus">
  <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
    src={data.image}
    alt={data.title}
      class="h-full w-full object-cover"
    />
  </div>
  <div class="p-6">
    <div class="mb-2 flex items-center justify-between">
      <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
      {data.title}
      </p>
      <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
      {data.price}
      </p>
    </div>
    <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
    {data.description}
    </p>
  </div>
  <div class="p-6 pt-0">
    <button
      class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Add to Cart
    </button>
  </div>
</div>
      </div>
    ))
  }





</div>












    </div>
  );
}

export default App
