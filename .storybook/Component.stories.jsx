import React, { useState } from 'react';
//import { Dropdown } from '../src/index'; 
import { Dropdown } from 'react-dropdown-lib'; 

const fruitOptions = [
  { value: 'apple', label: 'Apple', color: 'red' },
  { value: 'banana', label: 'Banana', color: 'yellow' },
  { value: 'orange', label: 'Orange', color: 'orange' },
  { value: 'grape', label: 'Grape', color: 'purple' },
  { value: 'mango', label: 'Mango', color: 'goldenrod' },
  { value: 'pineapple', label: 'Pineapple', color: 'brown' },
  { value: 'kiwi', label: 'Kiwi', color: 'green' },
  { value: 'strawberry', label: 'Strawberry', color: 'crimson' },
  { value: 'blueberry', label: 'Blueberry', color: 'blue' },
  { value: 'peach', label: 'Peach', color: 'peachpuff' },
];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export const SingleSelect = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Single Select</h2>
      <Dropdown
        options={fruitOptions}
        placeholder="Select a fruit"
        onChange={(option) => setSelectedFruit(option)}
      />
      {selectedFruit && (
        <p>
          <strong>Selected:</strong> {selectedFruit.label}
        </p>
      )}
    </div>
  );
};

export const MultipleSelect = () => {
  const [selectedFruits, setSelectedFruits] = useState([]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Multiple Select</h2>
      <Dropdown
        options={fruitOptions}
        multiple={true}
        placeholder="Select one or more fruits"
        onChange={(options) => setSelectedFruits(options)}
      />
      {selectedFruits.length > 0 && (
        <p>
          <strong>Selected:</strong> {selectedFruits.map((opt) => opt.label).join(', ')}
        </p>
      )}
    </div>
  );
};

export const SearchableDropdown = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Searchable Dropdown</h2>
      <Dropdown
        options={fruitOptions}
        searchable={true}
        placeholder="Search for a fruit"
        onChange={(option) => setSelectedFruit(option)}
      />
      {selectedFruit && (
        <p>
          <strong>Selected:</strong> {selectedFruit.label}
        </p>
      )}
    </div>
  );
};

export const PortalDropdown = () => {
  const [portalEnabled, setPortalEnabled] = useState(true);
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Portal Dropdown in Constrained Container</h2>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        <input
          type="checkbox"
          checked={portalEnabled}
          onChange={() => setPortalEnabled(!portalEnabled)}
          style={{ marginRight: '8px' }}
        />
        Enable Portal
      </label>
      <div
        style={{
          height: '150px',
          overflow: 'hidden',
          border: '1px solid #ccc',
          padding: '10px',
          position: 'relative',
        }}
      >
        <p style={{ marginBottom: '10px', fontSize: '0.9rem', color: '#555' }}>
          This container has overflow hidden. The dropdown below uses a portal to render outside
          this container.
        </p>
        <Dropdown
          options={fruitOptions}
          portal={portalEnabled}
          placeholder="Select a fruit (portal)"
          onChange={(option) => setSelectedFruit(option)}
        />
      </div>
      {selectedFruit && (
        <p>
          <strong>Selected:</strong> {selectedFruit.label}
        </p>
      )}
    </div>
  );
};

export const CustomRenderedDropdown = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  // A custom option renderer that displays a colored circle alongside the label
  const customRenderOption = (option) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: option.color,
          marginRight: '8px',
        }}
      />
      <span>{option.label}</span>
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Custom Rendered Dropdown</h2>
      <Dropdown
        options={fruitOptions}
        placeholder="Select a fruit with color"
        renderOption={customRenderOption}
        onChange={(option) => setSelectedFruit(option)}
      />
      {selectedFruit && (
        <p>
          <strong>Selected:</strong> {selectedFruit.label}
        </p>
      )}
    </div>
  );
};
