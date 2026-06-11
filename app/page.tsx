import Company from '@/components/Company';
import Header from '@/components/Header';
import Navbar from '@/components/landing/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <Company />
      </main>
    </div>
  );
}
