import React from 'react';
import { Grid, Typography, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import the Close icon
 
const ViewEntity = ({ entity, onClose }) => {
  if (!entity) {
    return <Typography variant="body1">No entity found.</Typography>;
  }
 
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sx={{ padding: 3, textAlign: 'center', position: 'relative' }}>
        <IconButton
          onClick={onClose} // Call the onClose function when clicked
          sx={{ position: 'absolute', top: 16, right: 16 }} // Position the close button
        >
          <CloseIcon />
        </IconButton>
 
        <Typography variant="h5" gutterBottom>
          <b>Entity Details</b>
        </Typography>
 
        <Typography variant="subtitle1" align="left" sx={{ marginTop: 2 }}>
          <b>Label Name</b>
        </Typography>
        <Typography variant="body1" align="left" sx={{ marginBottom: 2 }}>
          {entity.labelName}
        </Typography>
 
        <Typography variant="subtitle1" align="left" sx={{ marginTop: 2 }}>
          <b>Description</b>
        </Typography>
        <Typography variant="body1" align="left" sx={{ marginBottom: 2 }}>
          {entity.description}
        </Typography>
 
        <Divider sx={{ marginY: 2, backgroundColor: '#e0e0e0' }} />
        <Typography variant="h6" sx={{ marginY: 1, fontWeight: 'bold', textAlign: 'left' }}>
          Data Source
        </Typography>
        <Typography variant="body2" sx={{ textAlign: 'left', marginBottom: 2 }}>
          {entity.dataSource.toUpperCase()}
        </Typography>
      </Grid>
    </Grid>
  );
};
 
export default ViewEntity;
 