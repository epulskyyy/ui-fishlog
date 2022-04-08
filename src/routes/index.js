import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { routeReguler } from "./listRoutes";
import NoMatchPage from "./NoMatchPage";

function BaseRoutes() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          {routeReguler.map((item, key) => (
            <Route key={key} element={item.component} path={item.path} />
          ))}
          <Route path="*" element={<NoMatchPage/>} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
export default BaseRoutes;
