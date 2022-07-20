import React, { useState, useEffect } from 'react';
import API from '../../services/api';

import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';

export default function ClientList() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    API.get("/clients")
      .then((response) => setClients(response.data))
      .catch((err) => console.log(err))
  }, []);

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {console.log(clients)}
      {clients.map(client => {
        return (
          <ListItem
            alignItems="flex-start"
            key={client.id}
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={client.name}
                secondary={client.phone}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
