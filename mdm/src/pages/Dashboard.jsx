import React, { useEffect, useState } from 'react';
import { AppBar, TextField, Button, InputAdornment, Grid, Box, Typography, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import useStyles from '../style/styles';
import NavBar from '../pages/NavBar';
import EntityForm from '../pages/EntityForm';
import Upload from '../pages/Upload';
import ViewEntity from '../pages/ViewEntity';
import csvIcon from '../assets/csv.svg';
import excelIcon from '../assets/excel.svg';
 
const Dashboard = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [username, setUsername] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [createdEntities, setCreatedEntities] = useState([]);
  const [formData, setFormData] = useState({ labelName: '', description: '', dataSource: '' });
  const [selectedEntity, setSelectedEntity] = useState(null);
 
  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
 
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
 
  const handleFormSubmit = (formData) => {
    setFormData(formData);
    setIsFormOpen(false);
    setIsUploadOpen(true);
  };
 
  const handleUploadSubmit = () => {
    setIsUploadOpen(false);
    setCreatedEntities((prevEntities) => [...prevEntities, formData]);
  };
 
  const getDataSourceIcon = (dataSource) => {
    switch (dataSource) {
      case 'csv':
        return <img src={csvIcon} alt="CSV Icon" style={{ width: 24, height: 24, marginRight: 8 }} />;
      case 'excel':
        return <img src={excelIcon} alt="Excel Icon" style={{ width: 24, height: 24, marginRight: 8 }} />;
      default:
        return null;
    }
  };
 
  const handleCardClick = (entity) => {
    setSelectedEntity(entity);
  };
 
  const handleCloseViewEntity = () => {
    setSelectedEntity(null);
  };
 
  return (
    <div className={classes.container}>
      <AppBar className={classes.appBar} />
      <Grid container>
        <Grid>
          <NavBar />
        </Grid>
        <Grid item xs={10.5}>
          <div className={classes.mainContent}>
            <Typography variant="h4" className={classes.greeting} sx={{ mb: 1, textAlign: 'left' }}>
              Good Morning, {username}
            </Typography>
            <Typography variant="h5" className={classes.letsGetStarted} sx={{ textAlign: 'left' }}>
              Let's get started!
            </Typography>
            {!isFormOpen && !selectedEntity && (
              <div className={classes.searchContainer}>
                <TextField
                  variant="outlined"
                  placeholder="Search Entities"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={classes.searchInput}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button variant="contained" className={classes.createButton} onClick={() => setIsFormOpen(true)}>
                  Create Entity
                </Button>
              </div>
            )}
            {isFormOpen && (
              <Box mt={4} sx={{ width: '70%', height: '70%' }}>
                <EntityForm handleFormSubmit={handleFormSubmit} />
              </Box>
            )}
            <Upload
              open={isUploadOpen}
              handleClose={() => setIsUploadOpen(false)}
              labelName={formData.labelName}
              description={formData.description}
              handleUploadSubmit={handleUploadSubmit}
            />
 
            {selectedEntity ? (
             
              <Box mt={4} sx={{ width: '70%', height: 'auto' }}>
                <ViewEntity entity={selectedEntity} onClose={handleCloseViewEntity} />
              </Box>
            ) : (
              !isFormOpen && (
                <Grid container spacing={1} sx={{ marginTop: 4, gap: '10px' }}>
                  {createdEntities.map((entity, index) => (
                    <Grid item xs={12} sm={6} md={3} mt={4} mr={4} key={index}>
                      <Paper
                        sx={{
                          padding: 2,
                          backgroundColor: '#f0f0f0',
                          height: '100%',
                          width:'100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                        onClick={() => handleCardClick(entity)}
                      >
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{entity.labelName}</Typography>
                        <Typography variant="body2" sx={{ marginTop: 1 }}>{entity.description}</Typography>
 
                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                          {getDataSourceIcon(entity.dataSource)}
                          <Typography variant="body2">{entity.dataSource.toUpperCase()}</Typography>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              )
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
 
export default Dashboard;