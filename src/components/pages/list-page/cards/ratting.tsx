import { useState } from "react";
  
 export const Rating= () => {
    const [rating, setRating] = useState(0);
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((value) => {
          return (
            <button
              key={value}
              onClick={() => setRating(value)}
              className={`h-5 w-5 ${value <= rating ? "text-yellow-500" : "text-gray-300"}`}
            >
              ★
            </button>
          );
        })}
      </div>
    );
  };