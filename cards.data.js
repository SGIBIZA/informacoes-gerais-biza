// Fallback local para rodar via file:// sem servidor
window.CARDS = [
  {
    id: "catalogo-ideias",
    title: "Catálogo de Ideias BIZA",
    description: "Portal com status e filtros das ideias de todos os colaboradores.",
    category: "Programas",
    area: "Melhoria Contínua",
    keywords: ["ideias","kaizen","kaizaen","programa"],
    image: "ideias.png",
    links: [{ label: "Abrir catálogo", href: "https://sgibiza.github.io/Catalogo-BIZA/" }]
  },
  {
    id: "metas-biza",
    title: "Painel de Metas BIZA",
    description: "Metas salariais, N3, rotina e PLR com filtros por mês/ano.",
    category: "Dashboards",
    area: "SGI/Adm",
    keywords: ["metas","salariais","painel","PLR"],
    image: "metas.png",
    links: [{ label: "Abrir painel", href: "https://sgibiza.github.io/Painel-de-Metas-BIZA/index.html" }]
  },
  {
    id: "rastreio-compras",
    title: "Rastreio de Compras (FLOW)",
    description: "Tela oficial do SPR para rastreio de solicitações/ordens de compra.",
    category: "Operações",
    area: "Compras",
    keywords: ["SPR","compras","rastreio","ordem"],
    image: "rastreio.png",
    links: [{ label: "Abrir rastreio", href: "https://spr.hidrautorque.com.br/44357085000569/Biza/RastreioOrdemCompra" }]
  },
  {
    id: "ofs-kanban",
    title: "OFS Kanban (FLOW)",
    description: "Quadro Kanban das Ordens de Fabricação.",
    category: "Produção",
    area: "PCP",
    keywords: ["kanban","ofs","pcp"],
    image: "kanban.png",
    links: [{ label: "Abrir Kanban", href: "https://spr.hidrautorque.com.br/44357085000569/Kanban/IndexKanban" }]
  },
  {
    id: "politica-missao",
    title: "Política & Missão BIZA",
    description: "Política do SGI, missão, visão e valores para auditorias.",
    category: "Institucional",
    area: "Diretoria",
    keywords: ["política","missão","visão","valores"],
    image: "politica.png",
    links: [{ label: "Ver conteúdo", href: "https://biza.sigols.com.br/v2/qrcode_arquivo.php?id_registro=1470&documento=42ffcf057e133f94c1b7b5cf543ef3bd" }]
  },
  {
    id: "brigada-incendio",
    title: "Time da Brigada de Incêndio",
    description: "Brigadistas, setores, turnos, contatos e pontos de encontro.",
    category: "SST",
    area: "Segurança",
    keywords: ["brigada","emergência","contatos"],
    image: "brigada.png",
    links: [{ label: "Ver lista", href: "https://biza.sigols.com.br/v2/qrcode_arquivo.php?id_registro=1467&documento=0245952ecff55018e2a459517fdb40e3" }]
  },
  {
    id: "cipa",
    title: "CIPA – Comissão Interna de Prevenção de Acidentes",
    description: "Composição, atas e calendário de reuniões.",
    category: "SST",
    area: "Segurança",
    keywords: ["CIPA","atas","reuniões","SST"],
    image: "cipa.png",
    links: [{ label: "Abrir página", href: "https://biza.sigols.com.br/v2/qrcode_arquivo.php?id_registro=1468&documento=cec6f62cfb44b1be110b7bf70c8362d8" }]
  },
  {
  id: "solicitacao-epi",
  title: "Solicitação de EPI",
  description: "Portal oficial para requisitar EPIs (Equipamentos de Proteção Individual).",
  category: "SST",
  area: "Segurança",
  keywords: ["EPI", "segurança", "SST", "requisitar", "portal"],
  image: "EPI.png",              // opcional; se não existir, aparece o fallback
  links: [{ label: "Requisitar EPI", href: "https://hidrautorque.duapiepi.com/requisitar_produtos" }]
},
{
  id: "fispq-biza",
  title: "Fichas de Segurança dos Produtos Químicos (FISPQ / FDS)",
  description: "Acesso às Fichas de Segurança (FISPQ / FDS) dos produtos químicos utilizados na unidade BIZA, conforme NBR 14725.",
  category: "SGI / Meio Ambiente",
  area: "Segurança / Gestão de materiais",
  keywords: ["FISPQ", "FDS", "produtos químicos", "segurança", "meio ambiente", "NBR 14725", "fichas"],
  image: "fds.png",
  links: [
    {label: "Abrir pasta no Drive", href: "https://drive.google.com/drive/folders/1Lv_60F7YuPqtc8FGxiI-Z4X4t62qMurU"}]
},

{
  id: "aspectos-impactos",
  title: "Levantamento dos Aspectos e Impactos Ambientais - LAIA BIZA",
  description: "Visualize os aspectos e impactos ambientais por setor, diretamente pelo painel Power BI.",
  category: "SGA",
  area: "Meio Ambiente",
  keywords: ["aspectos", "impactos", "LAIA", "ambiental", "setores", "SGA", "BIZA"],
  image: "laia.png",
  links: [
    {
      label: "Abrir painel",
      href: "https://app.powerbi.com/view?r=eyJrIjoiNjBlZmNkNzgtOGNhNy00OTczLWE4ZjMtZTliZDg0NWQ3NzhhIiwidCI6ImJhZDBlMWEwLTdmNDctNDZkYS05MGI0LTMzOTc3ZGMzOTlmYSJ9",
    }
  ]
},

{
  id: "quebra-ferramenta",
  title: "Formulário de Quebra de Ferramenta",
  description: "Registro oficial de quebras de inserto e ferramentas utilizadas no CNC.",
  category: "Ferramentas",
  area: "Central de ferramentas",
  keywords: ["inserto", "ferramenta", "quebra", "CNC", "usinagem"],
  image: "ferramenta.png",
  links: [
    {
      label: "Abrir formulário",
      href: "https://forms.office.com/r/GtxJGyjxJr"
    }
  ]
},

{
    id: "folhas-processo-cnc",
    title: "Folhas de Processo – CNC",
    description: "Acesso às folhas de processo e relatórios do setor CNC via Edgecam.",
    category: "CNC",
    area: "Produção",
    keywords: ["programas", "edgecam", "CNC", "usinagem", "processo"],
    image: "folha-processo.png",
    links: [
        { label: "Abrir sistema", href: "http://10.10.7.158:50162/Reports/Pages/JobReports.aspx" }
    ]
},

{
  id: "pdi",
  title: "PDI – Plano de Desenvolvimento Individual",
  description: "Acompanhe seu plano de desenvolvimento, treinamentos, carreira e avaliações diretamente pelo Portal Pessoas (LG).",
  category: "RH / DHO",
  area: "Recursos Humanos",
  keywords: ["treinamento", "avaliação", "desempenho", "carreira", "portal pessoas", "PDI", "desenvolvimento"],
  image: "pdi.png",
  links: [
    {
      label: "Acessar Portal Pessoas",
      href: "https://login.lg.com.br/autenticacao/Produtos/SAAA/Principal2.aspx?c=ght"
    }
  ]
},

{
  id: "portal-amil",
  title: "Portal AMIL – Pesquisa de Atendimento",
  description: "Pesquisa oficial da rede credenciada AMIL para consultas, exames e atendimentos.",
  category: "RH",
  area: "Plano e Convênio",
  keywords: ["saúde", "amil", "agendamento", "pesquisa", "rede credenciada", "convênio"],
  image: "amil.png",
  links: [
    {
      label: "Abrir Portal AMIL",
      href: "https://www.amil.com.br/institucional/?gad_source=1&gad_campaignid=9652988586&gbraid=0AAAAAC6hRBr-I2hqFuyzRfedtPmuQWE9d&gclid=Cj0KCQiArOvIBhDLARIsAPwJXOZvt0fVMRdp81wQH8duf8ThxNCdXC4gmtkSWssaTpO288UnHQPyVt4aAnebEALw_wcB#/servicos/saude/rede-credenciada/amil/busca-avancada/?utm_source=google&utm_medium=CPC&utm_campaign=amil-saude_performance&utm_term=sitelink"
    }
  ]
},
 
{
  id: "agentes-ia",
  title: "Agentes Inteligentes – IA BIZA",
  description: "Projeto: valores que movem - Acesse a página com todos os agentes inteligentes da BIZA para acelerar processos e análises do dia a dia.",
  category: "Programas / Transformação digital",
  area: "Melhoria Contínua",
  keywords: ["IA", "inteligência artificial", "agentes", "automatização", "processos", "eficiência", "digital", "sgi", "pcp", "manutenção", "ferramentas"],
  image: "agentes-ia.png",
  links: [
    {
      "label": "Abrir Agentes IA",
      "href": "agentes-ia.html"
    }
  ]
}

]