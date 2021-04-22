import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Nav />
      </header>
      {children}
    </div>
  );
}
