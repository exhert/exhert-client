import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import { LanguageProvider } from "./utils/LanguageContext";

// Lazy load all screens
const Home = lazy(() => import("./screens/Home"));
const Contact = lazy(() => import("./screens/Contact"));
// const Market = lazy(() => import("./screens/Market"));
// const LearnCrypto = lazy(() => import("./screens/LearnCrypto"));
// const LearnCryptoDetails = lazy(() => import("./screens/LearnCryptoDetails"));
// const Notifications = lazy(() => import("./screens/Notifications"));
// const Activity = lazy(() => import("./screens/Activity"));
// const Exchange = lazy(() => import("./screens/Exchange"));
// const WalletOverview = lazy(() => import("./screens/WalletOverview"));
// const WalletOverviewDetails = lazy(() => import("./screens/WalletOverviewDetails"));
// const WalletMargin = lazy(() => import("./screens/WalletMargin"));
// const FiatAndSpot = lazy(() => import("./screens/FiatAndSpot"));
// const DepositFiat = lazy(() => import("./screens/DepositFiat"));
// const BuyCrypto = lazy(() => import("./screens/BuyCrypto"));
// const SellCrypto = lazy(() => import("./screens/SellCrypto"));
// const ProfileInfo = lazy(() => import("./screens/ProfileInfo"));
// const Referrals = lazy(() => import("./screens/Referrals"));
// const ApiKeys = lazy(() => import("./screens/ApiKeys"));
// const SessionsAndLoginHistory = lazy(() => import("./screens/SessionsAndLoginHistory"));
// const TwoFa = lazy(() => import("./screens/TwoFa"));
// const ChangePassword = lazy(() => import("./screens/ChangePassword"));
// const SignIn = lazy(() => import("./screens/SignIn"));
// const SignUp = lazy(() => import("./screens/SignUp"));
// const ForgotPassword = lazy(() => import("./screens/ForgotPassword"));
// const PageList = lazy(() => import("./screens/PageList"));

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
            {/* Uncomment routes as needed */}
            {/* <Route
              exact
              path="/market"
              render={() => (
                <Page>
                  <Market />
                </Page>
              )}
            /> */}
            {/* Additional routes can be uncommented as needed */}
          </Switch>
        </Suspense>
      </Router>
    </LanguageProvider>
  );
}

export default App;
