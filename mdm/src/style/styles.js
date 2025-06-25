import { makeStyles } from '@mui/styles';
 
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    height: '100vh',
  },
  appBar: {
    backgroundColor: theme?.palette?.primary?.main || '#3f51b5',
  },
  navBar: {
    width: '80px',
    height: '100vh',
    backgroundColor: '#333',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
    transition: 'width 0.3s',
    '&:hover': {
      width: '140px',
    },
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: '40px',
    height: '40px',
    marginBottom: '20px',
  },
  iconButton: {
    color: '#fff',
    marginBottom: '20px',
    transition: 'color 0.3s',
    '&:hover': {
      color: theme?.palette?.primary?.main || '#3f51b5',
    },
  },
  bottomIcons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainContent: {
    flexGrow: 1,
    padding: '40px',
  },
  greeting: {
    marginBottom: '10px',
    color: ' #006AF2',
  },
  letsGetStarted: {
    fontSize: '1.5rem',
    color: 'grey',
    marginBottom: '30px',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  searchInput: {
    flexGrow: 1,
    marginRight: '15px',
  },
  createButton: {
    backgroundColor: theme?.palette?.primary?.main || '#3f51b5',
    color: '#fff',
    '&:hover': {
      backgroundColor: theme?.palette?.primary?.dark || '#303f9f',
    },
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
}));
 
 
 
export default useStyles;