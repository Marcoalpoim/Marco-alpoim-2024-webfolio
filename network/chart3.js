// ==================== NETWORK GRAPH: CONTAINER 3 ====================

Highcharts.addEvent(Highcharts.Series, 'afterSetOptions', function (e) {
  const nodes = {};

  if (this instanceof Highcharts.seriesTypes.networkgraph && e.options.id === 'lang-tree') {
    e.options.data.forEach(function (link) {
      const mainNodes = [
        "Street Art", "Arte Pública", "Graffiti", "Mural", "Tag", "Throw-up",
        "Lettering", "Piece", "Stencil", "Mosaico", "Narrativa Individual",
        "Narrativa Coletiva", "Narrativa Sociopolítica", "Narrativa Espacial"
      ];

      if (mainNodes.includes(link[0])) {
        const baseUrl = "arquivo.html?action=montelavaralmargemperopinheiro";

        nodes["Street Art"] = {
          id: "Street Art",
          url: baseUrl,
          text: "Street Art é um fenómeno artístico, expressivo e social à escala global que deu espaço a uma infindável possibilidade de linguagens criadas ou inspiradas no espaço público",
          dataLabels: { style: { fontSize: "15px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 7 }
        };

        nodes["Arte Pública"] = {
          id: "Arte Pública",
          url: baseUrl,
          text: "Arte Pública é uma variante inócua, comissionada, institucional e legal da Street Art",
          dataLabels: { style: { fontSize: "10px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 5 }
        };

        nodes["Graffiti"] = {
          id: "Graffiti",
          url: baseUrl,
          text: "O graffiti é uma arte escrita, pintada ou desenhada sobre uma parede ou outra superfície, geralmente obscena, informativa, sem permissão e dentro da vista pública.",
          dataLabels: { style: { fontSize: "14px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 7 }
        };

        nodes["Mural"] = {
          id: "Mural",
          url: baseUrl,
          text: "O Mural distingue-se pelas pinturas e desenhos de grandes dimensões, elaborados e, geralmente, executados de forma legal, diretamente sobre as paredes, edifícios e muros do espaço público",
          dataLabels: { style: { fontSize: "12px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 6 }
        };

        nodes["Tag"] = {
          id: "Tag",
          url: baseUrl,
          text: "O Tag é conhecido e caracterizado como a forma mais básica do graffiti.",
          dataLabels: { style: { fontSize: "15px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 6 }
        };

        nodes["Throw-up"] = {
          id: "Throw-up",
          url: baseUrl,
          text: "O Throw-up, Throw ou Throwie é visto como uma versão mais complexa e elaborada de um Tag.",
          dataLabels: { style: { fontSize: "12px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 6 }
        };

        nodes["Lettering"] = {
          id: "Lettering",
          url: baseUrl,
          text: "O Lettering consiste num desenho personalizado de uma ou várias letras, em grandes dimensões.",
          dataLabels: { style: { fontSize: "12px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 6 }
        };

        nodes["Piece"] = {
          id: "Piece",
          url: baseUrl,
          text: "O Piece é uma obra grande, complexa e demorada, geralmente escrita e pintada por writers experientes e habilidosos.",
          dataLabels: { style: { fontSize: "10px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 5 }
        };

        nodes["Stencil"] = {
          id: "Stencil",
          url: baseUrl,
          text: "O Stencil envolve a utilização de um molde, geralmente pré-recortado, para criar desenhos sobre superfícies com tinta spray ou outros materiais.",
          dataLabels: { style: { fontSize: "10px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 5 }
        };

        nodes["Mosaico"] = {
          id: "Mosaico",
          url: baseUrl,
          text: "O Mosaico é uma técnica utilizada em alternativa à tinta, resultando da colagem de pequenos quadrados de vidro, pedra, plástico ou azulejo, formando uma imagem.",
          dataLabels: { style: { fontSize: "10px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 3 }
        };

        nodes["Narrativa Individual"] = {
          id: "Narrativa Individual",
          url: baseUrl,
          text: "As narrativas individuais têm um carácter pessoal e íntimo, tornando-se menos óbvias ou relacionáveis com o público geral.",
          dataLabels: { style: { fontSize: "12px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 6 }
        };

        nodes["Narrativa Coletiva"] = {
          id: "Narrativa Coletiva",
          url: baseUrl,
          text: "As narrativas coletivas abordam temas sociais e globais, com foco em justiça, transparência e inclusão.",
          dataLabels: { style: { fontSize: "10px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 5 }
        };

        nodes["Narrativa Sociopolítica"] = {
          id: "Narrativa Sociopolítica",
          url: baseUrl,
          text: "As narrativas sociopolíticas desafiam o poder, amplificam vozes marginalizadas e promovem mudanças sociais.",
          dataLabels: { style: { fontSize: "9px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 3 }
        };

        nodes["Narrativa Espacial"] = {
          id: "Narrativa Espacial",
          url: baseUrl,
          text: "As narrativas espaciais refletem preocupações locais ligadas à gentrificação, negligência e espaço urbano.",
          dataLabels: { style: { fontSize: "9px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 3 }
        };
      }
    });
    e.options.nodes = Object.values(nodes);
  }
});

Highcharts.chart("container3", {
  chart: {
    type: 'networkgraph',
    backgroundColor: 'transparent',
    height: '100%',
    events: {
      load: function () {
        const chart = this;
        const series = chart.series[0];
        setInterval(() => series.layout.restartSimulation(), 600);
      }
    }
  },
  title: { text: '' },
 tooltip: {
  enabled: true,
  useHTML: true,
  hideDelay: 0,
  backgroundColor: 'rgba(0,0,0,0.85)',
  borderColor: '#000',
  borderRadius: 6,
  shadow: false,
  outside: true,
  style: {
    color: '#fff',
    fontFamily: 'ocr-aregular',
    fontSize: '0.8rem',
    textAlign: 'center',
    whiteSpace: 'normal'
  },
 
  formatter: function () {
    const text = this.point?.options?.text || '';
    return `
      <div style="
        position: fixed;
        bottom: 130px;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        max-width: 1200px;
        background: rgba(0,0,0,0.85);
        border: 1px solid #000;
        border-radius: 8px;
        padding: 12px 16px;
        color: #fff;
        font-family: ocr-aregular;
        font-size: 0.8rem;
        line-height: 1.4;
        text-align: center;
        z-index: 9999;
        pointer-events: none;
      ">
        ${text}
      </div>`;
  }
}



,

  plotOptions: {
    series: {
      cursor: 'pointer',
      point: {
        events: {
          click: function () {
            this.series.chart.tooltip.refresh(this);
          },
          dblclick: function () {
            if (this.options.url) window.location.href = this.options.url;
          }
        }
      }
    },
    networkgraph: {
      keys: ['from', 'to'],
      layoutAlgorithm: {
        enableSimulation: true,
        integration: 'verlet',
        initialPositions: 'random',
        gravitationalConstant: 25
      },
      link: { width: 1, color: '#ffffff' },
      dataLabels: {
        enabled: true,
        linkFormat: '',
        allowOverlap: true,
        style: { fontSize: "14px", textOutline: "none", color: "#fff", fontFamily: "ocr-aregular" }
      }
    }
  },
  credits: { enabled: false },
  series: [{
    id: "lang-tree",
    data: window.netdata3
  }]
});
