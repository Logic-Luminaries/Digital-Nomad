import React, { useState, useEffect } from 'react';
import './filterPopup.css'; // Create a CSS file for styling

function FilterPopup({ onApplyFilter, onClose, onClearFilters, initialFilters }) {
  const [filters, setFilters] = useState(initialFilters || {});
  const [minPrice, setMinPrice] = useState(filters.minPrice || '');
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice || '');
  const [minBeds, setMinBeds] = useState(filters.minBeds || '');

  useEffect(() => {
    setFilters({
      minPrice: parseFloat(minPrice),
      maxPrice: parseFloat(maxPrice),
      minBeds: parseInt(minBeds),
    });
  }, [minPrice, maxPrice, minBeds]);

  const handleApplyFilter = () => {
    onApplyFilter(filters);
    onClose();
  };

  const handleClearFilters = () => {
    setFilters({});
    setMinPrice('');
    setMaxPrice('');
    setMinBeds('');
    onClearFilters(); // Notify the parent component to clear filters
    onClose(); // Close the popup
  };

  return (
    <div className="filter-popup">
      <div className="filter-content">
      <h2>Filter Properties</h2>
      <label className="min-price">
        Min Price:
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </label>
      <label className="max-price">
        Max Price:
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </label>
      <label className="min-beds">
        Min Beds:
        <input
          type="number"
          value={minBeds}
          onChange={(e) => setMinBeds(e.target.value)}
        />
      </label>
      <div className="filter-buttons">
        <button onClick={handleApplyFilter}>Apply Filter</button>
        <button onClick={handleClearFilters}>Clear All</button>
      </div>
    </div>
    </div>
  );
}

export default FilterPopup;
