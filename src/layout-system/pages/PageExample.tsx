import { Layout, Header, Sidebar, Main, Footer } from "../components";

export const PageExample = () => (
  <Layout
    header={<Header />}
    sidebar={<Sidebar />}
    main={<Main />}
    footer={<Footer />}
  />
);
