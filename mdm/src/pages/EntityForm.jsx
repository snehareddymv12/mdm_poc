import React, { useState } from 'react';
import { Grid, TextField, Typography, Button, Divider, MenuItem, Select, InputAdornment } from '@mui/material';
import csvIcon from '../assets/csv.svg';
import excelIcon from '../assets/excel.svg';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
 
const EntityForm = ({ handleFormSubmit }) => {
  const [labelName, setLabelName] = useState('');
  const [description, setDescription] = useState('');
  const [dataSource, setDataSource] = useState('');
 
  const handleSubmit = () => {
    const formData = { labelName, description, dataSource };
    handleFormSubmit(formData); // Pass data to parent
    setLabelName('');
    setDescription('');
    setDataSource('');
  };
 
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sx={{ padding: 3, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          <b>Entity Details</b>
        </Typography>
 
        <Typography variant="subtitle1" align="left">
          Label Name
        </Typography>
        <TextField
          fullWidth
          placeholder="Enter label name"
          value={labelName}
          onChange={(e) => setLabelName(e.target.value)}
          variant="outlined"
          margin="normal"
          sx={{
            backgroundColor: '#f0f0f0',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            border: 'none',
            '& fieldset': { border: 'none' },
          }}
        />
 
        <Typography variant="subtitle1" align="left" sx={{ marginTop: 2 }}>
          Description
        </Typography>
        <TextField
          fullWidth
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          sx={{
            backgroundColor: '#f0f0f0',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            border: 'none',
            '& fieldset': { border: 'none' },
          }}
        />
 
        <Divider sx={{ marginY: 2, backgroundColor: '#e0e0e0' }} />
        <Typography variant="h6" sx={{ marginY: 1, fontWeight: 'bold', textAlign: 'left' }}>
          Data Source
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: 'left', marginBottom: 2 }}>
          Choose your Data Source
        </Typography>
 
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={7}>
            <Select
              fullWidth
              value={dataSource}
              onChange={(e) => setDataSource(e.target.value)}
              displayEmpty
              sx={{
                backgroundColor: '#f0f0f0',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                marginLeft: '10px',
              }}
              IconComponent={KeyboardArrowDownIcon}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            >
              <MenuItem value="" disabled>
                Search Data Source
              </MenuItem>
              <MenuItem value="csv">
                <img src={csvIcon} alt="CSV Icon" style={{ width: 24, height: 24, marginRight: 8 }} /> CSV
              </MenuItem>
              <MenuItem value="excel">
                <img src={excelIcon} alt="Excel Icon" style={{ width: 24, height: 24, marginRight: 8 }} /> Excel
              </MenuItem>
            </Select>
          </Grid>
          <Grid item xs={5}>
            <Button variant="outlined" color="primary" onClick={handleSubmit}>
              Finish
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
 
export default EntityForm;