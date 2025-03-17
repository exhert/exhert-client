import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import { LanguageProvider } from "./utils/LanguageContext";

// Lazy load all screens
const Home = lazy(() => import("./screens/Home"));
const Contact = lazy(() => import("./screens/Contact"));
const AboutUs = lazy(() => import("./screens/AboutUs"));
const NotFound = lazy(() => import("./screens/NotFound"));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '50%',
      borderTopColor: '#3772FF',
      animation: 'spin 1s ease-in-out infinite'
    }}></div>
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Page>
                  <Home />
                </Page>
              )}
            />
            <Route
              exact
              path="/contact"
              render={() => (
                <Page>
                  <Contact />
                </Page>
              )}
            />
            <Route
              exact
              path="/about-us"
              render={() => (
                <Page>
                  <AboutUs />
                </Page>
              )}
            />
            <Route
              path="*"
              render={() => (
                <Page>
                  <NotFound />
                </Page>
              )}
            />
          </Switch>
        </Suspense>
      </Router>
    </LanguageProvider>
  );
}

export default App;
