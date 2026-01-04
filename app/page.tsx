import Hero from '@/components/Hero';
import Product from '@/components/Product';
import Details from '@/components/Details';
import OrderForm from '@/components/OrderForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Product />
      <Details />
      <OrderForm />
      <Footer />
    </main>
  );
}
