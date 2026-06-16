export type Phase = {
  number: string;
  period: string;
  badge?: string;
  title: string;
  description: string;
  items: string[];
};

export const phases: Phase[] = [
  {
    number: 'Fase 01',
    period: 'Meses 1 - 3',
    badge: 'Primeiros resultados aqui',
    title: 'Fundamento de Aquisição',
    description:
      'Construção da base digital que sustenta todo o sistema. Sem fundamento correto, as fases seguintes não entregam resultado.',
    items: [
      'Site profissional orientado à conversão',
      'Perfil no Google Maps otimizado',
      'Presença digital estruturada',
      'Identidade visual e posicionamento claros',
      'Configuração de rastreamento e analytics',
    ],
  },
  {
    number: 'Fase 02',
    period: 'Meses 4 - 6',
    title: 'Ativação de Demanda',
    description:
      'Com a base pronta, ativamos os primeiros canais de geração de demanda e testamos o que funciona para o seu mercado.',
    items: [
      'Estratégia editorial para Instagram',
      'Primeiras campanhas de tráfego pago',
      'Testes de segmentação e oferta',
      'Integração com WhatsApp Business',
      'Relatório de performance mensal',
    ],
  },
  {
    number: 'Fase 03',
    period: 'Meses 7 - 9',
    title: 'Escala de Aquisição',
    description:
      'Com dados reais dos testes da Fase 2, escalamos o que funciona e eliminamos o que não funciona. Volume com controle.',
    items: [
      'Funil de vendas otimizado',
      'Aumento de verba nos canais validados',
      'Automações de nutrição de leads',
      'Otimização de conversão no site',
      'Expansão para novos canais se indicado',
    ],
  },
  {
    number: 'Fase 04',
    period: 'Meses 10 - 12',
    title: 'Previsibilidade e Controle',
    description:
      'O sistema entra em regime de otimização contínua. O foco passa de implementação para performance e previsão de resultados.',
    items: [
      'Dashboard de ROI e custo por cliente',
      'Planejamento de crescimento baseado em dados',
      'Refinamento contínuo de campanhas',
      'Análise de LTV e retenção',
      'Plano de continuidade após os 12 meses',
    ],
  },
];
