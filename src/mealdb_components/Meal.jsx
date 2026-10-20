
import { useState } from "react";
import { Card, Spinner } from "flowbite-react";

const MEALS_PER_PAGE = 9;

const Meal = ({ error, loading, meals }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(meals.length / MEALS_PER_PAGE);
  const startIndex = (currentPage - 1) * MEALS_PER_PAGE;
  const currentMeals = meals.slice(startIndex, startIndex + MEALS_PER_PAGE);

  return (
    <>
      <h1 className="text-center text-3xl py-5 font-extrabold">Latest Meal Category</h1>
      {loading && !error && (
        <div className="flex justify-center py-10">
          <Spinner aria-label="Loading meals" size="xl" />
        </div>
      )}
      {!error && !loading && meals.length > 0 && (
        <div className="grid gap-2 px-5 py-10 bg-amber-50 grid-cols-3 justify-center">
          {currentMeals.map((meal) => (
            <Card
              key={meal.strIngredient}
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={meal.strThumb}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {meal.strIngredient}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {meal.strDescription}
              </p>
            </Card>
          ))}
        </div>
      )}
      {!error && !loading && totalPages > 1 && (
        <nav
          aria-label="Meal pagination"
          className="flex items-center justify-center gap-4 py-5"
        >
          <button
            type="button"
            onClick={() => setCurrentPage((page) => page - 1)}
            disabled={currentPage === 1}
            className="rounded bg-blue-700 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <span aria-live="polite">
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setCurrentPage((page) => page + 1)}
            disabled={currentPage === totalPages}
            className="rounded bg-blue-700 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </nav>
      )}
    </>
  );
};

export default Meal;