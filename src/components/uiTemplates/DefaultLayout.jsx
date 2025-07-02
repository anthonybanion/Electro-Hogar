import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
