import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import { useNavigate } from 'react-router-dom';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  // history --> navigate
  React.useEffect(() => {
    if(value === 0) navigate('/')
    else if(value === 1) navigate('/movies');
    else if(value === 2) navigate('/series');
    else if(value === 3) navigate('/search');
  }, [value, navigate]);

  return (
    <Box sx={{ width: '100%', position: 'fixed', zIndex: 100, bottom: 0, backgroundColor: '#2d313a' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{ backgroundColor: 'inherit' }}
      >      
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon/>} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
