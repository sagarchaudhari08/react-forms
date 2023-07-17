import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FranchiseeNameStatus() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-autowidth-label">FRANCHISEE NAME</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={handleChange}
          autoWidth
          label="name"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}>Zoom Room Belmont</MenuItem>
          <MenuItem value={21}>Zoom Room Paradise</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={handleChange}
          autoWidth
          label="status"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}>Opening Soon</MenuItem>
          <MenuItem value={21}>Open</MenuItem>

        </Select>
      </FormControl>

      
    </div>
  );
}