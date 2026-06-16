export type HowStartStep = {
  step: string;
  title: string;
  description: string;
};

export const howStartSteps: HowStartStep[] = [
  {
    step: '01',
    title: 'Conversa de diagnóstico',
    description:
      'Uma reunião sem compromisso para entender a situação atual da sua empresa: canais, histórico de aquisição, objetivos e capacidade operacional.',
  },
  {
    step: '02',
    title: 'Proposta e plano de 12 meses',
    description:
      'Com base no diagnóstico, apresentamos a proposta personalizada com o mapeamento das 4 fases, investimentos por etapa e resultados esperados em cada ciclo.',
  },
  {
    step: '03',
    title: 'Início pela Fase 1',
    description:
      'A implementação começa pela base — com prazo, escopo e entregáveis definidos. Cada fase tem aprovação antes de avançar para a próxima.',
  },
];
