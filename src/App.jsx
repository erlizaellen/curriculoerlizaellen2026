import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Users,
  GraduationCap,
  Code2,
  Sparkles,
  MapPin,
  ChevronRight,
  FileDown,
  FileText,
  MessageCircle,
} from 'lucide-react';

// Se o arquivo de gerar Word existir na mesma pasta, descomente a linha abaixo:
// import { generateWordResume } from './generateDocx';

// ─── DADOS DO CURRÍCULO ─────────────────────────────────────────────────────
const SKILLS = [
  'Java', 'JavaScript', 'Python', 'React', 'Node.js', 'PostgreSQL',
  'SQL', 'DevOps', 'N8n', 'Supabase',
];
const SKILLS_SUPORTE = [
  'Suporte N1/N2', 'Google Workspace',
  'Manutenção de Hardware', 'Linux/Windows', 'DevOps', 'N8n Automations'
];
const SKILLS_SOFT = [
  'Comunicação Assertiva', 'Resolução de Problemas', 'Liderança',
  'Trabalho em Equipe', 'Visão Sistêmica', 'Proatividade', 'Entrega de resultados', 'Visão de Negócios', 'Rápido aprendizado', 'Resiliência',
];

const PROJECTS = [
  {
    title: 'Bem Pet',
    role: 'Tech Lead',
    description:
      'Plataforma web para clinicas pets parceiras e cupons de descontos , desenvolvida em equipe com foco em UX e segurança. Implementação de autenticação JWT, banco de dados Supabase e API REST com Node.js.',
    tech: ['React', 'Node.js', 'JWT', 'Supabase'],
    color: 'indigo',
    emoji: '🐾',
    link: 'https://projetobempet.vercel.app',
  },
  {
    title: 'Automação n8n',
    role: 'Desenvolvedora',
    description:
      'Pipeline de automação que gera relatórios climáticos personalizados combinando dados da OpenWeatherMap API com uma LLM (Basic LLM Chain / Groq) para sumário em linguagem natural.',
    tech: ['n8n', 'OpenWeatherMap', 'Groq', 'LLM Chain'],
    color: 'violet',
    emoji: '⚡',

  },
  {
    title: 'Bamboloo',
    role: 'Desenvolvedora',
    description:
      'Jogo lógico interativo desenvolvido com foco em lógica de programação e manipulação do DOM. Design responsivo com Bootstrap para garantir experiência fluida em qualquer dispositivo.',
    tech: ['HTML', 'JavaScript', 'Bootstrap'],
    color: 'purple',
    emoji: '🎮',
    link: 'https://erlizaellen.github.io/bamboloo/',
  },
  {
    title: 'Memory House',
    role: 'Desenvolvedora',
    description:
      'Jogo de memória criado para o Recruiting Day, demonstrando habilidades em desenvolvimento web com JavaScript puro, CSS animações e manipulação de eventos do DOM.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: 'blue',
    emoji: '🏠',
    link: 'https://erlizaellen.github.io/memory-game-housejs/',
  },
];

const COMMUNITIES = [
  {
    name: 'Arretadas do PHP',
    role: 'Líder de Comunidade',
    description: 'Comunidade que une mulheres desenvolvedoras PHP no Nordeste.',
    emoji: '🚀',
    link: 'https://www.instagram.com/arretadasdophp?igsh=YWpqdnoxZzIyN2R0',
  },
  {
    name: 'Comunidade HouseJs',
    role: 'Líder Feminina',
    description: 'Comunidade de desenvolvimento JavaScript com foco em inclusão feminina.',
    emoji: '💛',
    link: 'https://www.instagram.com/comunidadehousejs?igsh=MWx5Z3V6eW14eW94aw==',
  },
  {
    name: 'Técnicas Brasil',
    role: 'Fundadora',
    description: 'Comunidade nacional que conecta mulheres da área de manutenção e tecnologia.',
    emoji: '🌐',
    link: 'https://www.instagram.com/tecnicasbrasil_?igsh=cXFyNXp5czRvZnQ1',
  },
];

const FORMATION = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Wyden',
    status: 'Concluído',
    statusColor: 'emerald',
    icon: '🎓',
  },
];

const COURSES = [
  {
    title: 'Formação DevOps',
    institution: 'Rocketseat',
    status: 'Em andamento',
    statusColor: 'indigo',
    icon: '⚙️',
    year: '',
  },
  {
    title: 'MySQL',
    institution: 'Curso em Vídeo',
    status: 'Em andamento',
    statusColor: 'indigo',
    icon: '🗄️',
    year: '',
  },
  {
    title: 'Geração Tech — Formação Full Stack',
    institution: 'IEL',
    status: 'Concluído',
    statusColor: 'emerald',
    icon: '💻',
    year: '2025',
  },
  {
    title: 'Primeiros Passos para Criação de Páginas Web',
    institution: 'Leão Tech',
    status: 'Concluído',
    statusColor: 'emerald',
    icon: '🌐',
    year: '2025',
  },
  {
    title: 'Curso Discover — Desenvolvimento Web',
    institution: 'Rocketseat',
    status: 'Concluído',
    statusColor: 'emerald',
    icon: '🚀',
    year: '2025',
  },
  {
    title: 'Git e GitHub',
    institution: 'Curso em Vídeo',
    status: 'Concluído',
    statusColor: 'emerald',
    icon: '🔀',
    year: '2025',
  },
  {
    title: 'SQL — Iniciante ao Avançado',
    institution: 'DevAprender',
    status: 'Concluído',
    statusColor: 'emerald',
    icon: '📊',
    year: '2025',
  },
  {
    title: 'Python para IoT e Indústria 4.0',
    institution: 'Faculdade',
    status: 'Concluído',
    statusColor: 'emerald',
    icon: '🐍',
    year: '2025',
  },
  {
    title: 'Programação Orientada a Objetos (POO)',
    institution: 'Bradesco',
    status: 'Concluído',
    statusColor: 'emerald',
    icon: '🧩',
    year: '2024',
  },
  {
    title: 'Algoritmos e Lógica de Programação',
    institution: 'Curso em Vídeo',
    status: 'Concluído',
    statusColor: 'emerald',
    icon: '🔢',
    year: '2026',
  },
  {
    title: 'Semana do Python',
    institution: 'EmpowerData',
    status: 'Concluído',
    statusColor: 'emerald',
    icon: '🐍',
    year: '2022',
  },
  {
    title: 'Programador Web',
    institution: 'UECE',
    status: 'Concluído',
    statusColor: 'emerald',
    icon: '🏛️',
    year: '2021',
  },
  {
    title: 'Portugol',
    institution: '',
    status: 'Concluído',
    statusColor: 'emerald',
    icon: '📐',
    year: '2021',
  },
];

// ─── PALETAS DE COR POR PROJETO ─────────────────────────────────────────────
const colorMap = {
  indigo: {
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    tag: 'bg-indigo-100 text-indigo-700',
    badge: 'bg-indigo-600',
    accent: 'text-indigo-600',
  },
  violet: {
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    tag: 'bg-violet-100 text-violet-700',
    badge: 'bg-violet-600',
    accent: 'text-violet-600',
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    tag: 'bg-purple-100 text-purple-700',
    badge: 'bg-purple-600',
    accent: 'text-purple-600',
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    tag: 'bg-blue-100 text-blue-700',
    badge: 'bg-blue-600',
    accent: 'text-blue-600',
  },
};

// ─── COMPONENTES ─────────────────────────────────────────────────────────────

function SectionTitle({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-indigo-100 rounded-xl">
        <Icon size={20} className="text-indigo-600" />
      </div>
      <h2 className="text-2xl font-bold text-slate-800">{children}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-indigo-200 to-transparent ml-2" />
    </div>
  );
}

function ProjectCard({ project }) {
  const c = colorMap[project.color];
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className={`card-hover rounded-2xl border ${c.border} ${c.bg} p-6 flex flex-col gap-4 block transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer`}
      title={`Ver projeto ${project.title}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{project.emoji}</span>
          <div>
            <h3 className="font-bold text-slate-800 text-lg leading-tight">{project.title}</h3>
            <span className={`text-xs font-semibold uppercase tracking-wider ${c.accent}`}>
              {project.role}
            </span>
          </div>
        </div>
        <ExternalLink size={16} className={`${c.accent} mt-1`} />
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.tech.map((t) => (
          <span key={t} className={`text-xs font-medium px-2.5 py-1 rounded-full ${c.tag}`}>
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

function CommunityCard({ community }) {
  return (
    <a
      href={community.link}
      target="_blank"
      rel="noreferrer"
      className="card-hover flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer block"
      title={`Acessar Instagram de ${community.name}`}
    >
      <div className="text-3xl w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-xl flex-shrink-0">
        {community.emoji}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-slate-800">{community.name}</h3>
        <p className="text-indigo-600 text-sm font-semibold">{community.role}</p>
        <p className="text-slate-500 text-sm mt-0.5 truncate">{community.description}</p>
      </div>
      <ChevronRight size={16} className="text-indigo-400 flex-shrink-0" />
    </a>
  );
}


function EducationItem({ item }) {
  const badgeColors = {
    indigo: 'bg-indigo-100 text-indigo-700',
    emerald: 'bg-emerald-100 text-emerald-700',
  };
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm card-hover">
      <span className="text-2xl w-10 h-10 flex items-center justify-center bg-slate-50 rounded-xl flex-shrink-0">
        {item.icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
        <p className="text-slate-500 text-sm">
          {[item.institution, item.year].filter(Boolean).join(' · ')}
        </p>
      </div>
      <span className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${badgeColors[item.statusColor]}`}>
        {item.status}
      </span>
    </div>
  );
}

// ─── APP PRINCIPAL ────────────────────────────────────────────────────────────

export default function App() {
  function handlePrint() {
    window.print();
  }

  // Função mockada caso o arquivo de geração do Docx não exista
  function handleWordGenerate() {
    alert("Função de gerar Word acionada! (Certifique-se de que o arquivo generateDocx.js existe e está descomentado no topo do código)");
    // generateWordResume();
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── HERO / HEADER ── */}
      <header className="relative overflow-hidden bg-white border-b border-slate-100">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-violet-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 py-16 sm:py-24 flex flex-col items-center text-center gap-5">

          {/* Avatar / Foto de Perfil */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-indigo-50 z-10 bg-slate-200">
            <img
              src="/erlizaperfil.jpg"
              alt="Foto de Erliza Ellen"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="animate-fade-in-up delay-100">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin size={14} className="text-indigo-400" />
              <span className="text-sm text-slate-400 font-medium">Fortaleza, Ceará</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Erliza Ellen{' '}
              <span className="gradient-text text-indigo-600">Alexsandra F. da Costa</span>
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-slate-500 font-medium">
              Desenvolvedora Full Stack Jr
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up delay-200">
            <a
              href="https://github.com/erlizaellen"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-700 transition-colors shadow-md shadow-slate-900/20"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/erliza-ellen-40a5661a3/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="mailto:erlizaellen@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-600/20"
            >
              <Mail size={16} />
              erlizaellen@gmail.com
            </a>
            <a
              href="https://wa.me/5585996506534"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-white text-sm font-semibold rounded-xl hover:bg-emerald-600 transition-colors shadow-md shadow-emerald-500/20"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="max-w-4xl mx-auto px-6 py-14 flex flex-col gap-16">

        {/* ── SOBRE MIM ── */}
        <section className="animate-fade-in-up delay-300">
          <SectionTitle icon={Sparkles}>Sobre Mim</SectionTitle>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
            <p className="text-slate-600 leading-relaxed text-base">
              Profissional de TI versátil, unindo sólida base em <span className="font-semibold text-indigo-600">Suporte Técnico</span> com habilidades práticas em <span className="font-semibold text-indigo-600">Desenvolvimento Full Stack Jr</span>.
              Vivência desde a manutenção de hardware e gestão de acessos Google Workspace e até a criação de APIs, possuo uma visão de ponta a ponta da tecnologia.
              Meu objetivo é aplicar essa capacidade de resolução de problemas e minha transição natural para a cultura DevOps em desafios complexos que exijam tanto a visão de suporte quanto a de engenharia de software.
            </p>
          </div>
        </section>

        {/* ── HABILIDADES ── */}
        <section className="animate-fade-in-up delay-400">
          <SectionTitle icon={Code2}>Habilidades Técnicas</SectionTitle>

          <div className="flex flex-col gap-6">
            {/* Bloco Desenvolvimento */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Desenvolvimento & Dados</p>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white border border-indigo-100 text-indigo-700 font-semibold text-sm rounded-xl shadow-sm hover:bg-indigo-50 hover:border-indigo-300 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bloco Suporte e Infraestrutura */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Suporte & Infraestrutura</p>
              <div className="flex flex-wrap gap-3">
                {SKILLS_SUPORTE.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl shadow-sm hover:bg-slate-100 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ── PROJETOS ── */}
        <section className="animate-fade-in-up delay-500">
          <SectionTitle icon={Code2}>Projetos em Destaque</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* ── COMUNIDADES ── */}
        <section>
          <SectionTitle icon={Users}>Liderança em Comunidades</SectionTitle>
          <div className="flex flex-col gap-4">
            {COMMUNITIES.map((community) => (
              <CommunityCard key={community.name} community={community} />
            ))}
          </div>
        </section>

        {/* ── FORMAÇÃO ── */}
        <section>
          <SectionTitle icon={GraduationCap}>Formação e Cursos</SectionTitle>

          {/* Graduação */}
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Graduação</p>
          <div className="flex flex-col gap-3 mb-8">
            {FORMATION.map((item) => (
              <EducationItem key={item.title} item={item} />
            ))}
          </div>

          {/* Cursos */}
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Cursos na Área de Desenvolvimento</p>
          <div className="flex flex-col gap-3">
            {COURSES.map((item) => (
              <EducationItem key={item.title} item={item} />
            ))}
          </div>
        </section>
      </main>

      {/* ── BOTÕES DE DOWNLOAD ── */}
      <div className="no-print max-w-4xl mx-auto px-6 pb-8 flex flex-wrap justify-center gap-4">
        {/* PDF */}
        <a
          href="/Curriculo_Erliza_Ellen2026.pdf"
          download="Curriculo_Erliza_Ellen2026.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 transition-all"
        >
          <FileDown size={18} />
          Baixar em PDF
        </a>

        {/* Word */}
        <button
          onClick={handleWordGenerate}
          className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 active:scale-95 text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-sm transition-all"
        >
          <FileText size={18} className="text-blue-600" />
          Baixar em Word (.docx)
        </button>
      </div>

      {/* ── FOOTER ── */}
      <footer className="no-print border-t border-slate-100 bg-white mt-2">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-sm">
            © 2026 Erliza Ellen A. F. da Costa
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/erlizaellen" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-700 transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/erliza-ellen-40a5661a3/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:erlizaellen@gmail.com" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <Mail size={18} />
            </a>
            <a href="https://wa.me/5585996506534" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-500 transition-colors">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}