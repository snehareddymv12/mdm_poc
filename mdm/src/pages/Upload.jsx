import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Box,
  Button,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Upload = ({ open, handleClose, labelName, description, handleUploadSubmit }) => {
  const [file, setFile] = useState(null); // State for uploaded file
  const navigate = useNavigate(); // Initialize navigation

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]); // Set the uploaded file
      console.log(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.csv',
  });

  const handleSubmit = () => {
    if (file) {
      handleUploadSubmit(file); // Pass the selected file to the upload function
      // Navigate to the Standardization screen and pass the labelName
      navigate('/standard', { state: { labelName, description } }); // Pass description along
    } else {
      console.log('No file selected');
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <b>Upload File</b>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1" align="left">
          Label Name
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          value={labelName} // Use labelName prop from parent
          disabled // Make it read-only since it comes from the dashboard
          sx={{ marginBottom: 2 }}
        />

        <Typography variant="subtitle1" align="left">
          Description
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          value={description} // Use description prop from parent
          disabled // Make it read-only
          sx={{ marginBottom: 3 }}
        />

        <Box
          {...getRootProps()}
          sx={{
            border: '2px dashed #183B66',
            borderRadius: '5px',
            padding: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            backgroundColor: isDragActive ? '#f0f0f0' : '#fafafa',
          }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop a file here, or click to select a file</p>
          )}
          <CloudUploadIcon fontSize="large" color="action" />
        </Box>

        {file && (
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
            <b>Uploaded File:</b> {file.name}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ marginTop: 3 }}
        >
          Upload File
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Upload;
