import Nav from './nav';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main className='container mx-auto flex-1'>{children}</main>
      <Footer />
    </div>
  );
}