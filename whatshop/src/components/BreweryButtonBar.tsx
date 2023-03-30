import * as React from 'react';

interface IBreweryButtonBarProps {
  onButtonClick: (city: string, state: string) => void;
}

export function BreweryButtonBar(props: IBreweryButtonBarProps) {
  const { onButtonClick } = props;

  const citiesAndStates = [
    { city: 'Grand Rapids', state: 'Michigan' },
    { city: 'Madison', state: 'Wisconsin' },
    { city: 'Indianapolis', state: 'Indiana' },
    { city: 'Milwaukee', state: 'Wisconsin' },
    { city: 'Philadelphia', state: 'Pennsylvania' },
    { city: 'Asheville', state: 'North Carolina' },
    { city: 'Portland', state: 'Maine' },
    { city: 'Portland', state: 'Oregon' },
    { city: 'Seattle', state: 'Washington' },
    { city: 'Denver', state: 'Colorado' },
  ];

  const handleButtonClick = (city: string, state: string) => {
    onButtonClick(city, state);
  };

  return (
    <div className='BreweryButtonBar'>
      {citiesAndStates.map((item, index) => (
        <button key={index} onClick={() => handleButtonClick(item.city, item.state)}>
          {item.city}, {item.state}
        </button>
      ))}
    </div>
  );
}
