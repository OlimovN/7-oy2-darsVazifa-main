import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import PaginatedItems from "./components/Pagination";

function App() {
  const [cars, setCars] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/machines?page=${currentPage}&limit=${limit}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCars(data.results);
        setPageCount(Math.ceil(data.total / limit));
      });
  }, [currentPage, limit]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.length > 0 &&
            cars.map((car, index) => (
              <Card
                key={index}
                image={car.image}
                title={car.title}
                year={car.start_production}
                description={car.class}
              />
            ))}
        </div>
        <PaginatedItems
          itemsPerPage={limit}
          pageCount={pageCount}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
