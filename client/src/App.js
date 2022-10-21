import {useEffect, useState} from "react";
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

// ----------------------------------------------------------------------

export default function App() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => {
                setData(data.message)
            });
    }, []);
  return (
    <ThemeProvider >
      <ScrollToTop />
        { /* <p>{!data ? "Loading..." : data}</p> */ }
      <BaseOptionChartStyle />
      <Router />
    </ThemeProvider>
  );
}
