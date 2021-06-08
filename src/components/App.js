import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "./views/Header/Header";
import SignupPage from "./views/SignupPage/SignupPage";
import LandingPage from "./views/LandingPage/LandingPage";

function App() {
  return (
    //Suspense: fallback으로 로딩 상태일 때의 렌더링
    <Suspense fallback={(<div>Loading...</div>)}>
      {/*Header Bar*/}
      <Header /> 
      <div style = {{paddingTop: '50px', minHeight: 'calc(90vh - 100px)'}}>
        {/*Path에 따른 분기 */}
        <Switch>
          {/*Landing page */}
          <Route exact path="/" component={LandingPage} />
          {/*Sign-up page */}
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
