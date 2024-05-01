import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {Box} from '@mui/material';
import{ChannelDetail,VideoDetail,SearchFeed,Navbar,Feed} from './components'

const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Feed/>}/>
        <Route exact path='/video/:id' element={<VideoDetail/>}/>
        <Route exact path='/channel/:id' element={<ChannelDetail/>}/>
        <Route exact path='/search/searchTerm' element={<SearchFeed/>}/>

      </Routes>
    </Box>
    
    
    </BrowserRouter>
  )
}

export default App