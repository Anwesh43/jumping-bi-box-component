import React from 'react';
import logo from './logo.svg';
import './App.css';
import BiBoxLine from './BiBoxComponent'
import {useAnimatedScale, useDimension} from './hooks'

function App() {
  const {w, h} = useDimension()
  const {scale, start} = useAnimatedScale(0.02, 30)
  return (
    <div className="App">
      <BiBoxLine w = {w} h = {h} scale = {scale} onClick = {start}>
      </BiBoxLine>
    </div>
  );
}

export default App;
