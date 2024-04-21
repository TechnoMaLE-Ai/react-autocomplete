import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
import getDisplayLabel from '../utils/getDisaplayLabel';


const AutoCompleteBox: React.FC<AutoBoxProps> =
  ({ data, handleItemSelect }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.SyntheticEvent<Element, Event>, value: string) => {
      setInputValue(value);
    };

    // Handle selection of an autocomplete option
    const handleSelect = (event: React.SyntheticEvent<Element, Event>, value: User | null) => {
      //call back to parent
      handleItemSelect(value);
    };

    // Function to render highlighted text in autocomplete options
    const renderHighlightedText = (option: User, state: { inputValue: string }) => {
      if (state.inputValue === "") {
        return (
          <div>
            {getDisplayLabel(option)}
          </div>
        )
      }
      if (option.name.replace(",", "").toLowerCase().includes(state.inputValue.toLowerCase())) {
        return (
          <div>
            <strong key={option.name}>{getDisplayLabel(option)}</strong>
          </div>
        );
      }
    };

    return (
      <Box sx={{ width: 300, marginTop: 2 }}>
        <Autocomplete
          options={data}
          getOptionLabel={option => option.name}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onChange={handleSelect}
          renderInput={(params) => <TextField {...params} label="Search Users" variant="outlined" />}
          renderOption={(props, option, state) => (
            <li {...props} style={{
                backgroundColor: state.inputValue === option.name ? '#dedede' : 'white',
                color: 'black'  // Ensures text is visible
            }}>
                {option.name}
            </li>
        )}        
        />
      </Box>
    );
  };

export default AutoCompleteBox;
