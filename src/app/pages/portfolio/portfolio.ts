import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Projeto {
  id: number;
  nome: string;
  categorias: string[];
  ano: string;
  descricao: string;
  ferramentas: string[];
  ficticio: boolean;
  aberto: boolean;
  imagens: string[];
}

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {

  projetos: Projeto[] = [
    {
      id: 1,
      nome: 'Villa Igará',
      ano: '2025–2026',
      categorias: ['identidade visual', 'direção de arte', 'branding', 'social media'],
      descricao: 'A pousada Villa Igará fica localizada em São Miguel dos Milagres – AL, um dos cartões postais do nordeste. A marca tem como princípio a experiência de conexão com a natureza, aconchego e descanso. A proposta foi a criação de uma identidade visual que representa o conceito de refúgio intimista do espaço físico e o clima paradisíaco da cidade de Milagres. A canoa presente na identidade remete à igará, embarcação tradicional local que atravessa rios e o mar.',
      ferramentas: ['Illustrator', 'Photoshop', 'Lightroom'],
      ficticio: false,
      aberto: false,
      imagens: [
        'portifolio/villaigara/01.jpg',
        'portifolio/villaigara/02.png',
        'portifolio/villaigara/03.png',
        'portifolio/villaigara/04.png'
      ]
    },
    {
      id: 2,
      nome: 'SECOMP 2025',
      ano: '2025',
      categorias: ['direção de arte', 'branding', 'social media', 'merch'],
      descricao: 'A SECOMP é um evento da Universidade Federal de Alagoas voltado à tecnologia e inovação. Na edição de 2025, atuei no desenvolvimento de sua comunicação visual, com a criação do Merch, peças impressas e digitais.',
      ferramentas: ['Illustrator', 'Photoshop', 'Figma', 'Canva'],
      ficticio: false,
      aberto: false,
      imagens: [
        'portifolio/secomp/01.png',
        'portifolio/secomp/02.png',
        'portifolio/secomp/03.png',
        'portifolio/secomp/04.png'
      ]
    },
    {
      id: 3,
      nome: 'Ana Paula Pereira',
      ano: '2026',
      categorias: ['identidade visual', 'branding'],
      descricao: 'A identidade visual desenvolvida para a psicóloga Ana Paula materializa os pilares de sua prática: feminilidade, proteção, experiência e humanização. A marca foi projetada para transmitir segurança e acolhimento, comunicando visualmente a essência do cuidado e do suporte terapêutico.',
      ferramentas: ['Illustrator', 'Photoshop'],
      ficticio: false,
      aberto: false,
      imagens: [
        'portifolio/anapaula/01.png',
        'portifolio/anapaula/02.png',
        'portifolio/anapaula/03.png',
        'portifolio/anapaula/04.png',
        'portifolio/anapaula/05.png',
        'portifolio/anapaula/06.png'
      ]
    },
    {
      id: 4,
      nome: 'Arca Construções',
      ano: '2026',
      categorias: ['user interface'],
      descricao: 'UI desenvolvida para uma construtora de alto padrão, com foco em clareza e estética contemporânea. A navegação foi pensada para oferecer uma experiência intuitiva, equilibrando conteúdo institucional e apelo visual de forma objetiva e refinada.',
      ferramentas: ['Illustrator', 'Figma'],
      ficticio: true,
      aberto: false,
      imagens: [
        'portifolio/arca/01.png'
      ]
    },
    {
      id: 5,
      nome: 'Isla E-commerce',
      ano: '2026',
      categorias: ['user interface'],
      descricao: 'UI desenvolvida para um e-commerce de moda feminina com foco em uma experiência de compra leve, intuitiva e visualmente sofisticada. O projeto apresenta uma composição limpa, paleta neutra, pensado para valorizar as coleções e facilitar a jornada do usuário.',
      ferramentas: ['Illustrator', 'Figma'],
      ficticio: true,
      aberto: false,
      imagens: [
        'portifolio/isla/01.png',
        'portifolio/isla/02.png'
      ]
    }
  ];

  toggle(projeto: Projeto): void {
    projeto.aberto = !projeto.aberto;
  }

  getToolIconPath(tool: string): string {
    const paths: Record<string, string> = {
      'Illustrator': 'icones/ilustrator.png',
      'Photoshop': 'icones/photoshop.png',
      'Figma': 'icones/figma.png',
      'Canva': 'icones/canva.png',
      'Lightroom': 'icones/lightroom.png'
    };
    return paths[tool] || '';
  }

  hasToolIcon(tool: string): boolean {
    return !!this.getToolIconPath(tool);
  }

  getToolIcon(tool: string): string {
    const icons: Record<string, string> = {
      'Illustrator': 'Ai',
      'Photoshop': 'Ps',
      'Figma': 'Fg',
      'Canva': 'Cv',
      'Lightroom': 'Lr'
    };
    return icons[tool] || tool.substring(0, 2);
  }
}
