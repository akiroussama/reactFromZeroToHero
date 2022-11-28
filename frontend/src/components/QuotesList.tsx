import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const QuotesList = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.quotes);
        setQuotes(data.quotes);
        setIsLoading(false); // Hide loading screen
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false); // Hide loading screen
      });
  }, []);

  return (
    <div className="bg-white">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Quotes
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">
            {quotes.map(({ id, quote, author }) => (
              <div key={id} className="group relative">
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {quote}
                    </h3>
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-900">{author}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotesList;
