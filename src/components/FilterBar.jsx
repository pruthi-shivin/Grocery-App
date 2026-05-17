function FilterBar({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="filter-bar">
      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category
              ? "active-filter"
              : ""
          }
          onClick={() =>
            setSelectedCategory(category)
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;