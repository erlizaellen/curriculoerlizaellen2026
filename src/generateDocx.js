import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    HeadingLevel,
    AlignmentType,
    BorderStyle,
    ShadingType,
    Table,
    TableRow,
    TableCell,
    WidthType,
    VerticalAlign,
} from 'docx';
import { saveAs } from 'file-saver';

// ─── HELPERS ────────────────────────────────────────────────────────────────

const INDIGO = '4338CA'; // indigo-700
const SLATE_DARK = '1E293B'; // slate-800
const SLATE_MID = '475569'; // slate-600
const SLATE_LIGHT = '94A3B8'; // slate-400
const WHITE = 'FFFFFF';
const INDIGO_BG = 'EEF2FF'; // indigo-50

function heading(text) {
    return new Paragraph({
        text,
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 240, after: 80 },
        border: {
            bottom: { style: BorderStyle.SINGLE, size: 4, color: INDIGO },
        },
        run: {
            color: SLATE_DARK,
            font: 'Calibri',
        },
    });
}

function subHeading(text) {
    return new Paragraph({
        children: [
            new TextRun({
                text,
                bold: true,
                size: 24, // 12pt
                color: INDIGO,
                font: 'Calibri',
            }),
        ],
        spacing: { before: 160, after: 40 },
    });
}

function body(text, options = {}) {
    return new Paragraph({
        children: [
            new TextRun({
                text,
                size: 22, // 11pt
                color: options.color || SLATE_MID,
                bold: options.bold || false,
                italics: options.italic || false,
                font: 'Calibri',
            }),
        ],
        spacing: { after: 60 },
        alignment: options.align || AlignmentType.LEFT,
    });
}

function bullet(text) {
    return new Paragraph({
        children: [
            new TextRun({
                text: `• ${text}`,
                size: 22,
                color: SLATE_MID,
                font: 'Calibri',
            }),
        ],
        spacing: { after: 40 },
        indent: { left: 360 },
    });
}

function divider() {
    return new Paragraph({
        text: '',
        spacing: { before: 80, after: 80 },
    });
}

function label(text) {
    return new Paragraph({
        children: [
            new TextRun({
                text,
                size: 18, // 9pt
                color: SLATE_LIGHT,
                allCaps: true,
                bold: true,
                font: 'Calibri',
            }),
        ],
        spacing: { before: 200, after: 60 },
    });
}

// ─── GERADOR PRINCIPAL ───────────────────────────────────────────────────────

export async function generateWordResume() {
    const doc = new Document({
        styles: {
            default: {
                document: {
                    run: { font: 'Calibri', size: 22, color: SLATE_MID },
                },
            },
        },
        sections: [
            {
                properties: {
                    page: {
                        margin: { top: 720, right: 900, bottom: 720, left: 900 },
                    },
                },
                children: [
                    // ── NOME E TÍTULO ──────────────────────────────────────────────────
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: 'Erliza Ellen A. F. da Costa',
                                bold: true,
                                size: 52, // 26pt
                                color: SLATE_DARK,
                                font: 'Calibri',
                            }),
                        ],
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 60 },
                    }),

                    new Paragraph({
                        children: [
                            new TextRun({
                                text: 'Desenvolvedora Full Stack',
                                size: 28, // 14pt
                                color: INDIGO,
                                font: 'Calibri',
                            }),
                        ],
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 80 },
                    }),

                    // ── CONTATO ────────────────────────────────────────────────────────
                    new Paragraph({
                        children: [
                            new TextRun({ text: '📧 erlizaellen@gmail.com', size: 20, color: SLATE_MID, font: 'Calibri' }),
                            new TextRun({ text: '   |   ', size: 20, color: SLATE_LIGHT, font: 'Calibri' }),
                            new TextRun({ text: '🔗 linkedin.com/in/erliza-ellen-40a5661a3', size: 20, color: INDIGO, font: 'Calibri' }),
                            new TextRun({ text: '   |   ', size: 20, color: SLATE_LIGHT, font: 'Calibri' }),
                            new TextRun({ text: '💻 github.com/erlizaellen', size: 20, color: INDIGO, font: 'Calibri' }),
                        ],
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 60 },
                        border: {
                            bottom: { style: BorderStyle.SINGLE, size: 6, color: INDIGO_BG },
                        },
                    }),

                    divider(),

                    // ── SOBRE MIM ──────────────────────────────────────────────────────
                    heading('Sobre Mim'),
                    body(
                        'Atuar como Desenvolvedora Full Stack, aplicando conhecimentos em programação orientada a objetos, resolução de problemas e lógica de programação. Busco participar de projetos que desafiem minhas habilidades e contribuam para minha evolução técnica e profissional.'
                    ),

                    // ── HABILIDADES ────────────────────────────────────────────────────
                    heading('Habilidades'),
                    new Paragraph({
                        children: [
                            ...['Java', 'JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'DevOps', 'n8n', 'Supabase'].map(
                                (s, i, arr) =>
                                    new TextRun({
                                        text: i < arr.length - 1 ? `${s}  •  ` : s,
                                        size: 22,
                                        color: INDIGO,
                                        bold: true,
                                        font: 'Calibri',
                                    })
                            ),
                        ],
                        spacing: { after: 80 },
                    }),

                    // ── PROJETOS ───────────────────────────────────────────────────────
                    heading('Projetos em Destaque'),

                    subHeading('Bem Pet  —  Tech Lead'),
                    body('Plataforma web para adoção responsável de pets, desenvolvida em equipe. Autenticação JWT, banco Supabase e API REST com Node.js.'),
                    body('Tecnologias: React, Node.js, JWT, Supabase', { color: SLATE_LIGHT, italic: true }),

                    subHeading('Automação n8n  —  Desenvolvedora'),
                    body('Pipeline de automação que gera relatórios climáticos via OpenWeatherMap API combinados com LLM (Groq) para sumário em linguagem natural.'),
                    body('Tecnologias: n8n, OpenWeatherMap, Groq, LLM Chain', { color: SLATE_LIGHT, italic: true }),

                    subHeading('Bamboloo  —  Desenvolvedora'),
                    body('Jogo lógico interativo com foco em lógica de programação e manipulação do DOM. Design responsivo com Bootstrap.'),
                    body('Tecnologias: HTML, JavaScript, Bootstrap', { color: SLATE_LIGHT, italic: true }),

                    subHeading('Memory House  —  Desenvolvedora'),
                    body('Jogo de memória criado para o Recruiting Day, com JavaScript puro, CSS animações e manipulação de eventos do DOM.'),
                    body('Tecnologias: HTML, CSS, JavaScript', { color: SLATE_LIGHT, italic: true }),

                    // ── COMUNIDADES ────────────────────────────────────────────────────
                    heading('Liderança em Comunidades'),
                    bullet('Arretadas do PHP — Líder de Comunidade — Comunidade que une mulheres desenvolvedoras PHP no Nordeste.'),
                    bullet('HouseJs — Líder Feminina — Comunidade de desenvolvimento JavaScript com foco em inclusão feminina.'),
                    bullet('Técnicas Brasil — Fundadora — Comunidade nacional que conecta mulheres da área de tecnologia.'),

                    // ── FORMAÇÃO ───────────────────────────────────────────────────────
                    heading('Formação e Cursos'),

                    label('Graduação'),
                    bullet('Análise e Desenvolvimento de Sistemas — Wyden (Concluído)'),

                    divider(),
                    label('Cursos na Área de Desenvolvimento'),
                    bullet('Formação DevOps — Rocketseat (Em andamento)'),
                    bullet('MySQL — Curso em Vídeo (Em andamento)'),
                    bullet('Geração Tech — Formação Full Stack — IEL (Concluído, 2025)'),
                    bullet('Primeiros Passos para Criação de Páginas Web — Leão Tech (Concluído, 2025)'),
                    bullet('Curso Discover — Desenvolvimento Web — Rocketseat (Concluído, 2025)'),
                    bullet('Git e GitHub — Curso em Vídeo (Concluído, 2025)'),
                    bullet('SQL — Iniciante ao Avançado — DevAprender (Concluído, 2025)'),
                    bullet('Python para IoT e Indústria 4.0 — Faculdade (Concluído, 2025)'),
                    bullet('Programação Orientada a Objetos (POO) (Concluído, 2024)'),
                    bullet('Algoritmos e Lógica de Programação — Curso em Vídeo (Concluído)'),
                    bullet('Semana do Python — EmpowerData (Concluído, 2022)'),
                    bullet('Programador Web — UECE (Concluído, 2021)'),
                    bullet('Portugol (Concluído, 2021)'),

                    divider(),

                    // ── RODAPÉ ─────────────────────────────────────────────────────────
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: 'Erliza Ellen A. F. da Costa — Desenvolvedora Full Stack — 2026',
                                size: 18,
                                color: SLATE_LIGHT,
                                italics: true,
                                font: 'Calibri',
                            }),
                        ],
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 200 },
                    }),
                ],
            },
        ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, 'Curriculo_Erliza_Ellen.docx');
}
