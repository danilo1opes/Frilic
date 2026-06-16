export type ProblemItem = {
  number: string;
  title: string;
  description: string;
};

export const problemItems: ProblemItem[] = [
  {
    number: '01',
    title: 'Clientes vêm de indicação e só',
    description:
      'Quando alguém para de indicar, você não tem outro canal. Fica na dependência do boca a boca.',
  },
  {
    number: '02',
    title: 'Mês bom, mês ruim, sem explicação',
    description:
      'Você não sabe o que fez um mês ser melhor. Então não consegue repetir. Nem planejar.',
  },
  {
    number: '03',
    title: 'Site e redes existem, mas não trazem cliente',
    description:
      'Está tudo no ar, mas ninguém chega por lá. Virou só cartão de visita digital.',
  },
  {
    number: '04',
    title: 'Você mesmo é o maior canal de vendas',
    description:
      'O negócio depende de você para trazer cliente. Se você para, para tudo.',
  },
  {
    number: '05',
    title: 'Já investiu em marketing sem ver retorno claro',
    description:
      'Pagou agência, freelancer, impulsionamento, mas nunca ficou claro quanto cliente cada real trouxe.',
  },
];
