import type { SpeechContent } from '../../../types';

export interface ColorEntry {
  name: string;
  french: string;
  hex: string;
  content: SpeechContent;
}

export const colors: ColorEntry[] = [
  {
    name: 'Red',
    french: 'Rouge',
    hex: '#e53935',
    content: {
      segments: [
        "La couleur rouge. R\u00E9p\u00E8te avec moi, Walter. Rouge !",
        "La coccinelle est rouge avec des petits points noirs. Elle vole dans le jardin !",
      ],
      lang: 'fr-FR',
      rate: 0.85,
    },
  },
  {
    name: 'Blue',
    french: 'Bleu',
    hex: '#1e88e5',
    content: {
      segments: [
        "La couleur bleu. R\u00E9p\u00E8te avec moi, Walter. Bleu !",
        "Le ciel est bleu aujourd'hui. Les oiseaux volent dans le grand ciel bleu !",
      ],
      lang: 'fr-FR',
      rate: 0.85,
    },
  },
  {
    name: 'Yellow',
    french: 'Jaune',
    hex: '#fdd835',
    content: {
      segments: [
        "La couleur jaune. R\u00E9p\u00E8te avec moi, Walter. Jaune !",
        "Le soleil est jaune et brillant. Il nous r\u00E9chauffe tous les jours !",
      ],
      lang: 'fr-FR',
      rate: 0.85,
    },
  },
  {
    name: 'Green',
    french: 'Vert',
    hex: '#43a047',
    content: {
      segments: [
        "La couleur vert. R\u00E9p\u00E8te avec moi, Walter. Vert !",
        "L'herbe est verte et douce. Les grenouilles vertes sautent dans la mare !",
      ],
      lang: 'fr-FR',
      rate: 0.85,
    },
  },
  {
    name: 'Pink',
    french: 'Rose',
    hex: '#ec407a',
    content: {
      segments: [
        "La couleur rose. R\u00E9p\u00E8te avec moi, Walter. Rose !",
        "Le flamant rose se tient sur une patte. Comme c'est dr\u00F4le, un oiseau tout rose !",
      ],
      lang: 'fr-FR',
      rate: 0.85,
    },
  },
  {
    name: 'Orange',
    french: 'Orange',
    hex: '#fb8c00',
    content: {
      segments: [
        "La couleur orange. R\u00E9p\u00E8te avec moi, Walter. Orange !",
        "Le poisson rouge est orange. Il nage en faisant des bulles dans son bocal !",
      ],
      lang: 'fr-FR',
      rate: 0.85,
    },
  },
  {
    name: 'Purple',
    french: 'Violet',
    hex: '#8e24aa',
    content: {
      segments: [
        "La couleur violet. R\u00E9p\u00E8te avec moi, Walter. Violet !",
        "Les raisins sont violets et sucr\u00E9s. Miam, comme c'est bon !",
      ],
      lang: 'fr-FR',
      rate: 0.85,
    },
  },
  {
    name: 'White',
    french: 'Blanc',
    hex: '#f5f5f5',
    content: {
      segments: [
        "La couleur blanc. R\u00E9p\u00E8te avec moi, Walter. Blanc !",
        "La neige est blanche et toute douce. On peut faire un bonhomme de neige tout blanc !",
      ],
      lang: 'fr-FR',
      rate: 0.85,
    },
  },
  {
    name: 'Black',
    french: 'Noir',
    hex: '#424242',
    content: {
      segments: [
        "La couleur noir. R\u00E9p\u00E8te avec moi, Walter. Noir !",
        "Le petit chat noir a des yeux brillants. Il ronronne quand on le caresse !",
      ],
      lang: 'fr-FR',
      rate: 0.85,
    },
  },
  {
    name: 'Brown',
    french: 'Marron',
    hex: '#795548',
    content: {
      segments: [
        "La couleur marron. R\u00E9p\u00E8te avec moi, Walter. Marron !",
        "L'ours est marron et tout doux. Il adore manger du miel dans la for\u00EAt !",
      ],
      lang: 'fr-FR',
      rate: 0.85,
    },
  },
  {
    name: 'Grey',
    french: 'Gris',
    hex: '#9e9e9e',
    content: {
      segments: [
        "La couleur gris. R\u00E9p\u00E8te avec moi, Walter. Gris !",
        "L'\u00E9l\u00E9phant est gris et tr\u00E8s grand. Il se douche avec sa trompe !",
      ],
      lang: 'fr-FR',
      rate: 0.85,
    },
  },
  {
    name: 'Gold',
    french: 'Dor\u00E9',
    hex: '#ffc107',
    content: {
      segments: [
        "La couleur dor\u00E9. R\u00E9p\u00E8te avec moi, Walter. Dor\u00E9 !",
        "Les \u00E9toiles sont dor\u00E9es dans le ciel de la nuit. Elles brillent juste pour toi, Walter !",
      ],
      lang: 'fr-FR',
      rate: 0.85,
    },
  },
];
