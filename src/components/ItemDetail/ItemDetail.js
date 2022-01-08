import './ItemDetail.css'
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Ubuntu',
        'sans-serif',
      ].join(','),
    },
    color: '#672A4E',
    fontSize: 18,
  });

export default function NestedList({details}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>  
        <List sx={{ width: '100%' }}>
        <ListItemButton onClick={handleClick}>
            <ListItemText disableTypography primary="Descripción..." style={{ fontSize: 18, fontFamily: 'Ubuntu', fontWeight: 400, color: '#672A4E'}} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{
                fontSize: 14,
                fontFamily: 'Ubuntu',
                fontWeight: 200,
                color: '#672A4E'
        }}>
                <span>{details}</span>
            </List>
        </Collapse>
        </List>
    </ThemeProvider>
  );
}