import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './dropdown.css';
import { CloseIcon, SearchIcon, CircleXIcon, ArrowIcon } from './icons/index.jsx';

export const Dropdown = ({
  options = [],
  multiple = false,
  searchable = false,
  portal = false,
  renderOption,
  placeholder = 'Select...',
  onChange,
  backgroundColor = null,
}) => {
  const [selected, setSelected] = useState(multiple ? [] : null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const containerRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (multiple && !Array.isArray(selected)) {
      setSelected([]);
    } else if (!multiple && Array.isArray(selected)) {
      setSelected(null);
    }
  }, [multiple, selected]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && containerRef.current && portal) {
      const rect = containerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [isOpen, portal]);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    let newSelected;
    if (multiple) {
      if (Array.isArray(selected) && selected.some((sel) => sel.value === option.value)) {
        newSelected = selected.filter((sel) => sel.value !== option.value);
      } else {
        newSelected = [...(Array.isArray(selected) ? selected : []), option];
      }
    } else {
      newSelected = option;
      setIsOpen(false);
    }
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  const handleRemoveOption = (optionToRemove) => {
    if (multiple) {
      const newSelected = selected.filter((sel) => sel.value !== optionToRemove.value);
      setSelected(newSelected);
      onChange?.(newSelected);
    } else {
      setSelected(null);
      onChange?.(null);
    }
  };

  const isManySelected = Array.isArray(selected) && selected.length >= 3;
  const selectedTagsClass = isManySelected
    ? 'dropdown__selected-tags--scroll'
    : 'dropdown__selected-tags--no-scroll';

  const renderSelected = () => {
    if (multiple) {
      if (!selected || selected.length === 0) {
        return placeholder;
      }
      return (
        <div className={`dropdown__selected-tags ${selectedTagsClass}`}>
          {selected.map((sel) => (
            <div key={sel.value} className="dropdown__selected-tag">
              {sel.label}
              <button
                type="button"
                className="dropdown__tag-remove"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveOption(sel);
                }}
              >
                <CloseIcon fill="#ccc" />
              </button>
            </div>
          ))}
        </div>
      );
    }
    if (selected) {
      return (
        <div className="dropdown__selected-tag">
          {selected.label}
          <button
            type="button"
            className="dropdown__tag-remove"
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveOption(selected);
            }}
          >
            <CloseIcon fill="#aaa" />
          </button>
        </div>
      );
    }
    return placeholder;
  };

  const highlightMatch = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: '#00776e', color: 'white' }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const toggleButtonClasses = ['dropdown__toggle', 'button'].join(' ');

  const dropdownMenuContent = (
    <div>
      {searchable && (
        <div className="dropdown__search-container">
          <div className="dropdown__search-wrapper">
            <SearchIcon className="dropdown__search-icon" />
            <input
              type="text"
              className="dropdown__search focus:border-[#999] focus:outline-none"
              placeholder=""
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                className="dropdown__clear-button"
                onClick={() => setSearchTerm('')}
              >
                <CircleXIcon fill="#ccc" />
              </button>
            )}
          </div>
        </div>
      )}
      <ul className="dropdown__menu-list">
        {filteredOptions.map((option) => {
          const isSelected = multiple
            ? Array.isArray(selected) && selected.some((sel) => sel.value === option.value)
            : selected && selected.value === option.value;
          const itemClass = `dropdown__menu-item ${
            isSelected ? 'dropdown__menu-item--selected' : ''
          }`;
          return (
            <li key={option.value} className={itemClass} onClick={() => handleOptionClick(option)}>
              {renderOption
                ? renderOption(option)
                : searchable
                ? highlightMatch(option.label, searchTerm)
                : option.label}
            </li>
          );
        })}
        {filteredOptions.length === 0 && (
          <li className="dropdown__menu-item dropdown__menu-item--disabled">No options found</li>
        )}
      </ul>
    </div>
  );

  const dropdownMenu = (
    <div
      ref={dropdownRef}
      className={`dropdown__menu ${portal ? '' : 'dropdown__menu--inline'}`}
      style={
        portal
          ? {
              position: 'absolute',
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              width: dropdownPosition.width,
            }
          : {}
      }
    >
      {dropdownMenuContent}
    </div>
  );

  const portalContainer = document.getElementById('dropdown-portal') || document.body;

  return (
    <div className="dropdown" ref={containerRef}>
      <button
        type="button"
        className={toggleButtonClasses}
        style={backgroundColor ? { backgroundColor } : {}}
        onClick={toggleDropdown}
      >
        <span>{renderSelected()}</span>
        <ArrowIcon className="dropdown__icon" isOpen={isOpen} />
      </button>
      {isOpen && (portal ? ReactDOM.createPortal(dropdownMenu, portalContainer) : dropdownMenu)}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  multiple: PropTypes.bool,
  searchable: PropTypes.bool,
  portal: PropTypes.bool,
  renderOption: PropTypes.func,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  backgroundColor: PropTypes.string,
};

export default Dropdown;
