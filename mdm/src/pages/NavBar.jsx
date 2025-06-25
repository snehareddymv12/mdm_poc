import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CampaignIcon from '@mui/icons-material/Campaign';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import PostAddIcon from '@mui/icons-material/PostAdd';
import InsightsIcon from '@mui/icons-material/Insights';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PreviewIcon from '@mui/icons-material/Preview';
import { useNavigate } from 'react-router-dom';
import useStyles from '../style/styles';
import logo from '../assets/logo.png';

const NavBar = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Box className={classes.navBar}>
            <div className={classes.iconContainer}>
                <img src={logo} alt="Logo" className={classes.logo} />

                <Tooltip title="Home" arrow>
                    <IconButton className={classes.iconButton} onClick={() => navigate('/home')}>
                        <HomeIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Create Post" arrow>
                    <IconButton className={classes.iconButton} onClick={() => navigate('/create')}>
                        <PostAddIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="View" arrow>
                    <IconButton className={classes.iconButton} onClick={() => navigate('/Preview')}>
                        <PreviewIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Insights" arrow>
                    <IconButton className={classes.iconButton} onClick={() => navigate('/insights')}>
                        <InsightsIcon />
                    </IconButton>
                </Tooltip>
            </div>

            <div className={classes.bottomIcons}>
                <Tooltip title="Profile" arrow>
                    <IconButton className={classes.iconButton} onClick={() => navigate('/profile')}>
                        <AccountCircleIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Announcements" arrow>
                    <IconButton className={classes.iconButton} onClick={() => navigate('/announcements')}>
                        <CampaignIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Settings" arrow>
                    <IconButton className={classes.iconButton} onClick={() => navigate('/settings')}>
                        <SettingsIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Help" arrow>
                    <IconButton className={classes.iconButton} onClick={() => navigate('/help')}>
                        <HelpIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Logout" arrow>
                    <IconButton className={classes.iconButton} onClick={() => navigate('/logout')}>
                        <ExitToAppIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </Box>
    );
};

export default NavBar;