import React from "react";
import FormLogin from "./components/FormLogin";
import FormCadastro from "./components/FormCadastro";
import Feed from "./components/Feed";
import Helmet from 'react-helmet'

function App() {
  return (
  <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
    </Helmet>
    <FormLogin/></div>
  );
}

export default App;