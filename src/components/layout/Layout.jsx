import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout Component
 * Wrapper utama yang mengatur struktur halaman
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-body text-slate-100">
      <Navbar />
      <main className="pt-16 sm:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
