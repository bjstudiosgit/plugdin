export const CAR_MAKES = [
  'Audi', 'BMW', 'Citroen', 'Fiat', 'Ford', 'Honda', 'Hyundai',
  'Jaguar', 'Kia', 'Land Rover', 'Lexus', 'Mazda', 'Mercedes-Benz',
  'MG', 'Mini', 'Nissan', 'Peugeot', 'Porsche', 'Renault', 'SEAT',
  'Skoda', 'Smart', 'Tesla', 'Toyota', 'Vauxhall', 'Volkswagen',
  'Volvo', 'Other',
];

export interface PropertyType { value: string; label: string; icon: string; }
export const PROPERTY_TYPES: PropertyType[] = [
  { value: 'detached',    label: 'Detached',    icon: '🏡' },
  { value: 'semi',        label: 'Semi-Det.',   icon: '🏘️' },
  { value: 'terraced',    label: 'Terraced',    icon: '🏠' },
  { value: 'flat',        label: 'Flat / Apt',  icon: '🏢' },
  { value: 'commercial',  label: 'Commercial',  icon: '🏪' },
];

export interface ParkingType { value: string; label: string; icon: string; }
export const PARKING_TYPES: ParkingType[] = [
  { value: 'driveway', label: 'Driveway',      icon: '🚗' },
  { value: 'garage',   label: 'Garage',        icon: '🏗️' },
  { value: 'offstreet', label: 'Off-street',   icon: '🅿️' },
];
