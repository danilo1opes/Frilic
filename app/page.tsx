import Company from '@/components/Company';
import Consequences from '@/components/Consequences';
import CtaStrip from '@/ui/CtaStrip';
import Header from '@/components/Header';
import Navbar from '@/components/landing/Navbar';
import Phases from '@/components/Phases';
import Presentation from '@/components/Presentation';
import Problem from '@/components/Problem';
import HowStart from '@/components/HowStart';
import Audience from '@/components/Audience';
import Authority from '@/components/Authority';
import Risk from '@/components/Risk';
import NextStep from '@/components/NextStep';
import Footer from '@/components/landing/Footer';
import StickyBar from '@/components/StickyBar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <StickyBar />
      <main>
        <Header />
        <Company />
        <Problem />
        <Consequences />
        <CtaStrip
          title="Isso parece familiar?"
          description="Se você se reconheceu em algum desses pontos, vale uma conversa. Sem compromisso, sem pitch de vendas."
          buttonText="Quero sair desse ciclo"
        />
        <Presentation />
        <Phases />
        <CtaStrip
          title="Pronto para começar pela Fase 1?"
          description="A primeira fase tem escopo definido, prazo claro e investimento fechado antes de iniciar."
          buttonText="Agendar diagnóstico gratuito"
        />
        <HowStart />
        <Audience />
        <Authority />
        <Risk />
        <CtaStrip
          title="Uma conversa. Sem compromisso."
          description="30 minutos para entender se o Growth System faz sentido para o seu negócio agora."
          buttonText="Agendar conversa"
        />
        <NextStep />
      </main>
      <Footer />
    </div>
  );
}
