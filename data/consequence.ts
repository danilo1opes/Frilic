export type ConsequenceItem = {
  title: string;
  description: string;
};

export const consequences: ConsequenceItem[] = [
  {
    title: 'Faturamento que não cresce',
    description:
      'A empresa atende bem, mas o número de clientes novos por mês não aumenta. O teto do negócio é definido por quem indicou você essa semana.',
  },
  {
    title: 'Dinheiro gasto sem ver resultado',
    description:
      'Já pagou agência, já fez anúncio, já contratou freelancer. No final, não ficou claro se valeu. A sensação é que "marketing não funciona pra mim".',
  },
  {
    title: 'Concorrentes crescendo enquanto você estagna',
    description:
      'Outros negócios aparecem mais, são achados primeiro no Google, chegam antes no cliente. Não porque são melhores, porque têm um sistema.',
  },
  {
    title: 'Você no centro de tudo, inclusive de vendas',
    description:
      'Você entrega, gerencia e ainda precisa prospectar. Energia que deveria ir para o negócio vai para apagar incêndio no pipeline de clientes.',
  },
  {
    title: 'Impossível planejar o próximo trimestre',
    description:
      'Como contratar, expandir ou investir se você não sabe quantos clientes novos virão no próximo mês? O negócio opera no improviso permanente.',
  },
  {
    title: 'Cada mês começa do zero',
    description:
      'Não existe uma máquina rodando pra você. Cada cliente novo depende de um esforço manual, pontual. Sem acúmulo, sem composto, sem escala.',
  },
];
