import React, { useEffect } from 'react';
import Navigator from './routes/drawer';
import { db } from './src/config';
import database from '@react-native-firebase/database';

export default function App() {
  
  // useEffect(() => {
  //   db.ref('/todos').push({
  //     done: false,
      
  //   });
  // })

  return (
       <Navigator />
      
  )
}

