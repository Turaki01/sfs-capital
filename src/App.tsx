import Layout from "layout/Layout";
import * as React from "react";

function App() {
  return (
    <>
      <React.Suspense fallback={<p>App Loader</p>}>
        <Layout />
      </React.Suspense>
    </>
  );
}

export default App;
