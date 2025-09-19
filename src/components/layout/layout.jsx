import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

const Layout = ({ children }) => {
    // logout function
    const navigate = useNavigate();

    useEffect(() => {
        // Check if token exists, otherwise redirect to login
        const token = sessionStorage.getItem("token");
        console.log(token)
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    const logout = () => {
        localStorage.clear();
        navigate("/");          // redirect to login
    };

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const location = window.location.pathname;

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer variant="permanent" open={open}>
                {/* Show open button only when drawer is closed */}
                {!open && (
                     <DrawerHeader>
                        <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="end"
                        sx={{ margin: "auto" }}
                    >
                        <MenuIcon />
                    </IconButton>
                     </DrawerHeader>
                    
                )}
                {/* Show close button only when drawer is open */}
                {open && (
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                )}
                <Divider />
                <List>

                    <ListItem sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => navigate('/dashboard')}
                            selected={window.location.pathname === '/dashboard'}
                            sx={[{
                                 minWidth: 48,
                                 minHeight: 48,
                                marginLeft: "-16px",
                                padding: "10px 0px 10px 15px !important",
                                px: 2.5,
                                ...(window.location.pathname === '/dashboard' && { backgroundColor: theme.palette.action.selected }),
                            },
                            open
                                ? {
                                    justifyContent: 'initial',
                                }
                                : {
                                    justifyContent: 'center',
                                },
                            ]}
                        >
                            <ListItemIcon >
                                {<DashboardIcon />}
                            </ListItemIcon>
                            <ListItemText
                                primary="Dashboard"
                                sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={() => navigate('/home')}
                            selected={window.location.pathname === '/home'}
                            sx={[{
                                minWidth: 48,
                                minHeight: 48,
                                marginLeft: "-16px",
                                padding: "10px 0px 10px 15px !important",
                                px: 2.5,
                                ...(window.location.pathname === '/home' && { backgroundColor: theme.palette.action.selected }),
                            },
                            open
                                ? {
                                    justifyContent: 'initial',
                                }
                                : {
                                    justifyContent: 'center',
                                },
                            ]}
                        >
                            <ListItemIcon >
                                {<MailIcon />}
                            </ListItemIcon>
                            <ListItemText
                                primary="Home"
                                sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                            />
                        </ListItemButton>
                    </ListItem>

                </List>
                <Divider />
                <List>

                    <ListItem sx={{ display: 'block' }}>
                        <ListItemButton
                            onClick={logout}
                            sx={[
                                {
                                    minHeight: 48,
                                    px: 2.5,
                                },
                                open
                                    ? {
                                        justifyContent: 'initial',
                                    }
                                    : {
                                        justifyContent: 'center',
                                    },
                            ]}
                        >
                            <ListItemIcon
                                sx={[
                                    {
                                        minWidth: 0,
                                        justifyContent: 'center',
                                    },
                                    open
                                        ? {
                                            mr: 3,
                                        }
                                        : {
                                            mr: 'auto',
                                        },
                                ]}
                            >
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={"Logout"}
                                sx={[
                                    open
                                        ? {
                                            opacity: 1,
                                            m: 0,
                                        }
                                        : {
                                            opacity: 0,
                                             m: 0,
                                        },
                                ]}
                            />
                        </ListItemButton>
                    </ListItem>

                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
