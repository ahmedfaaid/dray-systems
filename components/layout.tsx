import Seo from './seo';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <div style={{ position: 'relative' }}>
        <header>
          <Nav />
        </header>
        {children}
        <Footer />
      </div>
    </>
  );
}
