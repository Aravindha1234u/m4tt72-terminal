import Head from 'next/head';
import React from 'react';
import { History } from '../components/history';
import { Input } from '../components/input';
import { useShell } from '../utils/shellProvider';
import { useTheme } from '../utils/themeProvider';
import config from '../../config.json';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const { history } = useShell();
  const { theme } = useTheme();
  const [loader,setLoader] = React.useState(true);

  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [history]);

  React.useEffect(()=>{
    setTimeout(()=>{
      setLoader(false);
    },2000);
  },[]);

  return (
    <>
      <Head>
        <title>Aravindha aka T3cH_W1z4rD</title>
      </Head>

      <div
        className="overflow-hidden h-full rounded"
        style={{
          borderColor: theme.brightGreen,
          padding: config.border ? 16 : 8,
          borderWidth: config.border ? 2 : 0,
        }}
      >
        {loader && (
          <div className="loader" style={{
            padding: '5rem',
          }}>
            <div className="loader__element"></div>
          </div>
        )}
        
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />

          <Input inputRef={inputRef} containerRef={containerRef} />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
