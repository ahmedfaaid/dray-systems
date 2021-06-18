import Seo from './seo';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <div>
        <header>
          <Nav />
        </header>
        {children}
      </div>
    </>
  );
}
