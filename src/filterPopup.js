import React, { useState, useEffect } from 'react';
import './FilterPopup.css'; // Create a CSS file for styling

function FilterPopup({ onApplyFilter, onClose, onClearFilters, initialFilters }) {
  const [filters, setFilters] = useState(initialFilters || {});
  const [minPrice, setMinPrice] = useState(filters.minPrice || '');
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice || '');
  const [minBeds, setMinBeds] = useState(filters.minBeds || '');
  const [maxBeds, setMaxBeds] = useState(filters.maxBeds || '');

  useEffect(() => {
    setFilters({
      minPrice: parseFloat(minPrice),
      maxPrice: parseFloat(maxPrice),
      minBeds: parseInt(minBeds),
      maxBeds: parseInt(maxBeds),
    });
  }, [minPrice, maxPrice, minBeds, maxBeds]);

  const handleApplyFilter = () => {
    onApplyFilter(filters);
    onClose();
  };

  const handleClearFilters = () => {
    setFilters({});
    setMinPrice('');
    setMaxPrice('');
    setMinBeds('');
    setMaxBeds('');
    onClearFilters(); // Notify the parent component to clear filters
    onClose(); // Close the popup
  };

  return (
    <div className="filter-popup">
      <div className="filter-content">
      <h2>Filter Properties</h2>
      <label>
        Min Price:
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </label>
      <label>
        Max Price:
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </label>
      <label>
        Min Beds:
        <input
          type="number"
          value={minBeds}
          onChange={(e) => setMinBeds(e.target.value)}
        />
      </label>
      <label>
        Max Beds:
        <input
          type="number"
          value={maxBeds}
          onChange={(e) => setMaxBeds(e.target.value)}
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
