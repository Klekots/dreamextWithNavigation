import React, {useState} from 'react';
import TabNavigator from './src/navigation/AppNavigation';

export default function App() {
  const [authStatus, setAuthStatus] = useState(false);

  return (
    <TabNavigator screenProps={{
      setAuthStatus,
      authStatus
    }}/>
  );
}