import { useEffect } from 'react';
import { retrieveRawInitData } from '@telegram-apps/sdk';
import "@twa-dev/types";


declare global {
  interface Window {
    Telegram?: {
      WebApp?: import('@twa-dev/types').WebApp;
    };
  }
}

const App = () => {
  useEffect(() => {
    
    if (!window.Telegram?.WebApp) {
      console.warn('Telegram WebApp not detected');
      return;
    }
  
    const initDataRaw = retrieveRawInitData();
    if (!initDataRaw) {
      console.error('Telegram initData not available');
      return;
    }

    
    /* sendUserDataToBackend(initDataRaw);
 */
    
    try {
      window.Telegram.WebApp.expand();
    } catch (e) {
      console.error('Failed to expand WebApp:', e);
    }
  }, []);

 /*  const sendUserDataToBackend = async (initDataRaw: string) => {
    try {
      const response = await fetch('https://user-api.laang.mxcode.dev/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `tma ${initDataRaw}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('User data sent successfully:', data);
    } catch (error) {
      console.error('Error sending user data:', error);
    }
  }; */

  return <> <p>lknkll</p></>
};

export default App;