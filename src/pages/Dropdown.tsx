import React, { useState } from 'react';

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (selectedValue: any) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="relative">
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
        >
          <span className="block truncate">{options.find(option => option.value === value)?.label || 'Select an option'}</span>
          <svg
            className="-mr-1 ml-2 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <ul
          className="absolute z-10 w-full mt-1 bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelectOption(option.value)}
              className="cursor-pointer select-none relative py-2 pl-3 pr-9"
              id="listbox-option-0"
              role="option"
            >
              <div className="flex items-center">
                <span className="ml-3 block font-normal truncate">{option.label}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;