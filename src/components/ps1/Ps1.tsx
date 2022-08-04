import React, { useEffect, useState } from 'react';
import { useTheme } from '../../utils/themeProvider';

export const Ps1 = () => {
  const [hostname, setHostname] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== undefined) {
      setHostname(window.location.hostname);
    }
  }, []);

  return (
    <div>
      <span
        style={{
          color: theme.brightRed,
        }}
      >
        guest
      </span>
      <span
        style={{
          color: theme.brightWhite,
        }}
      >
        @
      </span>
      <span
        className={hostname.length >= 12 ? 'truncate' : ''}
        style={{
          color: theme.green,
        }}
      >
        {hostname.slice(0, 12)}
      </span>
      <span
        style={{
          color: theme.white,
        }}
      >
        :$ ~
      </span>
    </div>
  );
};

export default Ps1;
