import React from 'react';
import PropType from 'prop-types';
import { Label, Input } from './Filter.styled';


const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name:
      <br/>
      <Input type="text" value={value} onChange={onChange} placeholder='search...'/>
    </Label>
  );
};

Filter.propTypes = {
  value: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
};

export default Filter;