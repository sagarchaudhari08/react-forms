import React from "react";
import FranchiseeNameStatus from "./components/franchiseenamestatus"
import FranchiseeState from "./components/franchiseestate"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  "./App.css"
import { useForm} from "react-hook-form";

const App = () => {
 
  const {handleSubmit} = useForm();
  const onSubmit = (data) => console.log(data);

  return (
   
    <div className="forms">
       <div >
        <span className="top">
    <h1>Add Location</h1>
      <button>Save</button>
      </span>
      <div className="box-primary">
      </div>
      <div className="box-secondary">
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="textfield">
        <TextField 
        type="text" size='normal'
          error
          id="outlined-error"
          label="LOCATION NAME"
          defaultValue="Alex Christopher"
          helperText="This Location Name is not correct"
        />
        <TextField
          color='primary'
          id="Outlined"
          label="UNIT#"
          defaultValue="ZR#3201"
          
        />
      </div>
      <div >
        <TextField
          color='primary'
          id="Outlined"
          label="LOCATION PHONE NUMBER"
          defaultValue="800-375-283"
         
        />
         <TextField
          id="filled-multiline-static"
          label="LOCATION DESCRIPTION"
          multiline
          rows={4}
          defaultValue="Notes here..."
          variant="filled"
        />
       
      </div>
     
      <div className="email">
        <TextField
          
          id="Outlined"
          label="LOCATION EMAIL"
          defaultValue="Abc@zoomroom.Com"
         
        />
      </div>
     
      <div className="textfield">
        <TextField
          
          id="Outlined"
          label="ASSIGN MANAGER"
          defaultValue="James Philips"
         
        />
        <TextField
          error
          id="outlined-error"
          label="OPENING DATE"
          defaultValue="28/04/2023"
          helperText="This date type is not correct"

        />
      </div>
      <div className="textfield">
      <FranchiseeNameStatus/>
    
      </div>
      <div className="textfield">
        <TextField
          
          id="outlined-basic"
          label="ADDRESS"
          defaultValue=""
         
        />
        <TextField
          
          id="Outlined"
          label="ADDRESS2"
          defaultValue="Apartments, Suite Etc."
        />
      </div>
      <div className="textfield">
      
          
          <FranchiseeState/>
       
        <TextField
          
          id="Outlined"
          label="CITY"
          defaultValue="City"
          
        />
      </div>
      <div className="textfield">
        <TextField
          error
          id="outlined-error"
          label="ZIPCODE*"
          defaultValue="444444"
          helperText="Zip Code is required"

        />
        <TextField
          
          id="Outlined"
          label="TAX ID"
          defaultValue="302012"
          
        />
      </div>
    </Box>
        </form>
      </div>
    </div>
    </div>
  );
};

export default App;