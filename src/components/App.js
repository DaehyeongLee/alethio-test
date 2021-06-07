import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "./views/Header/Header";

function App() {
  return (
    //Suspense: fallback으로 로딩 상태에 따른 렌더링
    <Suspense fallback={(<div>Loading...</div>)}>
      {/*Header Bar*/}
      <Header /> 
    </Suspense>
  );
}

export default App;
