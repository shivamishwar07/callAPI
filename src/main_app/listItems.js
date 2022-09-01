import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Avatar from '@mui/material/Avatar';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
export const mainListItems = (
    <React.Fragment>
    <ListItemButton >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Discover" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CircleOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="SmartUp" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <Avatar   sx={{ width: 27, height: 27 }}
 alt="Remy Sharp" src="https://picsum.photos/200/300" />
      </ListItemIcon>
      <ListItemText primary="Main Community" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <Avatar sx={{ width: 27, height: 27 }} alt="Remy Sharp" src="https://picsum.photos/200/400" />
      </ListItemIcon>
      <ListItemText primary="Fun Community" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <Avatar sx={{ width: 27, height: 27 }} alt="Remy Sharp" src="https://picsum.photos/200/500" />
      </ListItemIcon>
      <ListItemText primary="Tech Community" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <Avatar sx={{ width: 27, height: 27 }} alt="Remy Sharp" src="https://picsum.photos/200/600" />
      </ListItemIcon>
      <ListItemText primary="Lead Community" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PersonOutlineOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Personal" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="In Progress" />168
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="Completed" />40
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
    
      </ListItemIcon>
      <ListItemText primary="Read Later" />24
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);