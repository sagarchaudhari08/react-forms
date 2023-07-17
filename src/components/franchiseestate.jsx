import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FranchiseeState() {
  const [state, setState] = React.useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-autowidth-label">SELECT STATE</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={state}
          onChange={handleChange}
          autoWidth
          label="State"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}>State</MenuItem>
          <MenuItem value={21}>Maharashtra</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}