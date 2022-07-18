import React, { useState, useEffect } from 'react';
import API from '../services/api';

import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function BookList() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    API.get("/books")
      .then((response) => setBooks(response.data))
      .catch((err) => console.log(err))
  }, []);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {console.log(books)}
      {books.map(book => {
        return (
          <ListItem
            alignItems="flex-start"
            key={book.id}
          >
            <ListItemButton
            >
              <ListItemAvatar>
                <Avatar>
                  <MenuBookIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={book.name}
                secondary={book.author}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
