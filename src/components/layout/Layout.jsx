import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const _Main = styled.main`
  overflow-x: clip;
`;

const Layout = () => {
  const [pathname, setPathname] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <>
      <Header pathname={pathname} />
      <_Main>
        <Outlet />
      </_Main>
      <Footer pathname={pathname} />
    </>
  );
};

export default Layout;
