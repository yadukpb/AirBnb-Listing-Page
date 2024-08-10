import React from 'react';
import Header from './components/Header/Header';

import ListingWrapper from './components/ListingWrapper';

import ImageGallery from './components/ImageGallery/ImageGallery';

const App = () => (
  <div>
    <Header />
    <ImageGallery/>
    <ListingWrapper />
  </div>
);

export default App;