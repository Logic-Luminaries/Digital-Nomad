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
    <div className="filter-page">
     <div className="filter-popup">
     <header className="filter-header">
          <h2 className="filter-heading">Filter</h2>
          <button className="filterclose-button" onClick={onClose}>
            X
          </button>
        </header>
        <div className="filter-content">
          <div className="price-range"> 
          <h3 className="pricerange-heading">
            Price Range
            </h3>
            <div className="price-block">             
            <div className="min-block">
            <div className="min-label">Minimum</div>
            <div className="min-price">
            <span aria-hidden="true">R</span>
              <input
              aria-label="R"
                    className='min-price'
                    type="numeric"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </div>
            </div>
            <span>&#8212;</span>
            <div className="max-block">
            <div className="max-label">Maximum</div>
            <div className="max-price">
            <span aria-hidden="true">R</span>
              <input
              aria-label="R"
              className='max-price'
              type="numeric"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
            </div></div>

            </div>

            <div className="prop-type"> 
          <h3 className="propertytype-heading">
            Property Type
            </h3>
            <div className="price-block">             
            <div className="min-block">
            <div className="min-label">Minimum</div>
            <div className="min-price">
            <span aria-hidden="true">R</span>
              <input
              aria-label="R"
                    className='min-price'
                    type="numeric"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </div>
            </div>
            <span>&#8212;</span>
            <div className="max-block">
            <div className="max-label">Maximum</div>
            <div className="max-price">
            <span aria-hidden="true">R</span>
              <input
              aria-label="R"
              className='max-price'
              type="numeric"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
            </div></div>

            </div>
          
          <label className="min-beds">
            Min Beds:
            <input
              type="number"
              value={minBeds}
              onChange={(e) => setMinBeds(e.target.value)}
            />
          </label>
          </div>
          <footer className="filter-footer">
          <button className="apply-button" onClick={handleApplyFilter}>
            Apply Filter
          </button>
          <button className="clear-button" onClick={handleClearFilters}>
            Clear All
          </button>
        </footer>

      </div>
    </div>
  );
}

export default FilterPopup;
