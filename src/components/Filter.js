import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const price = [
  { key: '2to3', text: '2000-3000', value: '2to3' },
  { key: '3to4', text: '3000-4000', value: '3to4' },
  { key: '4to5', text: '4000-5000', value: '4to5' },
  { key: '5to6', text: '5000-6000', value: '5to6' },
  { key: '6to7', text: '6000-7000', value: '6to7' },
  { key: '7to8', text: '7000-8000', value: '7to8' }
];

export const PriceDropdown = () => (
  <Dropdown upward floating options={price} text="Price" />
);

const size = [
  { key: 'new', text: 'New', value: 'new' },
  { key: 'save', text: 'Save as...', value: 'save' },
  { key: 'edit', text: 'Edit', value: 'edit' }
];

export const SizeDropdown = () => (
  <Dropdown upward floating options={size} text="Size" />
);

const room = [
  { key: 'new', text: 'New', value: 'new' },
  { key: 'save', text: 'Save as...', value: 'save' },
  { key: 'edit', text: 'Edit', value: 'edit' }
];

export const RoomDropDown = () => (
  <Dropdown upward floating options={room} text="Room" />
);
