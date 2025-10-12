// ==================== NETWORK GRAPH: CONTAINER 7 ====================

Highcharts.addEvent(Highcharts.Series, "afterSetOptions", function (e) {
  const nodes = {};
  const baseUrl = "arquivo.html?action=sintra";

  if (this instanceof Highcharts.seriesTypes.networkgraph && e.options.id === "lang-tree") {
    e.options.data.forEach(function (link) {
      const mainNodes = [
        "Street Art", "Arte Pública", "Graffiti", "Mural", "Tag", "Throw-up", "Lettering",
        "Piece", "Poster", "Stencil", "Sticker", "Mosaico", "Instalações", "Wildstyle",
        "Narrativa Individual", "Narrativa Coletiva", "Narrativa Sociopolítica", "Narrativa Espacial"
      ];

      if (mainNodes.includes(link[0])) {

        nodes["Street Art"] = {
          id: "Street Art",
          url: baseUrl,
          text: "Street Art é um fenómeno artístico, expressivo e social à escala global que deu espaço a uma infindável possibilidade de linguagens criadas ou inspiradas no espaço público.",
          dataLabels: { style: { fontSize: "15px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 7 }
        };

        nodes["Arte Pública"] = {
          id: "Arte Pública",
          url: baseUrl,
          text: "Arte Pública é uma variante inócua, comissionada, institucional e legal da Street Art.",
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
          text: "O Mural distingue-se pelas pinturas e desenhos de grandes dimensões, elaborados e, geralmente, executados de forma legal, diretamente sobre as paredes e edifícios.",
          dataLabels: { style: { fontSize: "13px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 7 }
        };

        nodes["Tag"] = {
          id: "Tag",
          url: baseUrl,
          text: "O Tag é conhecido e caracterizado como a forma mais básica do graffiti.",
          dataLabels: { style: { fontSize: "14px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 6 }
        };

        nodes["Throw-up"] = {
          id: "Throw-up",
          url: baseUrl,
          text: "O Throw-up é uma versão mais complexa e elaborada de um Tag.",
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
          text: "O Piece é uma obra grande, complexa e demorada, geralmente feita por writers experientes e habilidosos.",
          dataLabels: { style: { fontSize: "10px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 5 }
        };

        nodes["Poster"] = {
          id: "Poster",
          url: baseUrl,
          text: "O Poster é uma tipologia da Street Art baseada na disseminação visual de informação através de imagens e textos apelativos.",
          dataLabels: { style: { fontSize: "9px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 3 }
        };

        nodes["Stencil"] = {
          id: "Stencil",
          url: baseUrl,
          text: "O Stencil envolve a utilização de um molde pré-recortado para criar um ou vários desenhos através de tintas spray.",
          dataLabels: { style: { fontSize: "9px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 3 }
        };

        nodes["Sticker"] = {
          id: "Sticker",
          url: baseUrl,
          text: "O Sticker, ou autocolante, surge do princípio básico do graffiti: espalhar o nome pelo máximo de locais possíveis.",
          dataLabels: { style: { fontSize: "9px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 3 }
        };

        nodes["Mosaico"] = {
          id: "Mosaico",
          url: baseUrl,
          text: "O Mosaico resulta da colagem de pequenos quadrados de vidro, pedra ou azulejo, formando uma imagem.",
          dataLabels: { style: { fontSize: "9px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 3 }
        };

        nodes["Instalações"] = {
          id: "Instalações",
          url: baseUrl,
          text: "As Instalações são obras artísticas instaladas no espaço público, acessíveis de forma gratuita ao público.",
          dataLabels: { style: { fontSize: "10px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 5 }
        };

        nodes["Wildstyle"] = {
          id: "Wildstyle",
          url: baseUrl,
          text: "O Wildstyle é a forma mais complexa de um Piece, composto por letras e formas intrincadas e sobrepostas.",
          dataLabels: { style: { fontSize: "10px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 5 }
        };

        nodes["Narrativa Individual"] = {
          id: "Narrativa Individual",
          url: baseUrl,
          text: "As narrativas individuais têm um carácter pessoal e íntimo, tornando-se menos óbvias para o público em geral.",
          dataLabels: { style: { fontSize: "12px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 6 }
        };

        nodes["Narrativa Coletiva"] = {
          id: "Narrativa Coletiva",
          url: baseUrl,
          text: "As narrativas coletivas abordam questões conhecidas globalmente, com foco na justiça e na inclusão social.",
          dataLabels: { style: { fontSize: "10px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 5 }
        };

        nodes["Narrativa Sociopolítica"] = {
          id: "Narrativa Sociopolítica",
          url: baseUrl,
          text: "As narrativas sociopolíticas desafiam estruturas de poder, amplificando vozes marginalizadas e incentivando o diálogo.",
          dataLabels: { style: { fontSize: "9px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 3 }
        };

        nodes["Narrativa Espacial"] = {
          id: "Narrativa Espacial",
          url: baseUrl,
          text: "As narrativas espaciais estão ligadas à contestação local, à gentrificação e a preocupações políticas visíveis no espaço físico.",
          dataLabels: { style: { fontSize: "9px", fontFamily: "ocr-aregular", color: "#fff" } },
          marker: { radius: 3 }
        };
      }
    });
    e.options.nodes = Object.values(nodes);
  }
});

Highcharts.chart("container7", {
  chart: {
    type: "networkgraph",
    backgroundColor: "transparent",
    height: "100%",
    events: {
      load: function () {
        const chart = this;
        const series = chart.series[0];
        setInterval(() => series.layout.restartSimulation(), 600);
      }
    }
  },
  title: { text: "" },
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
},
  plotOptions: {
    series: {
      cursor: "pointer",
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
      keys: ["from", "to"],
      layoutAlgorithm: {
        enableSimulation: true,
        integration: "verlet",
        initialPositions: "random",
        gravitationalConstant: 25
      },
      link: { width: 2, color: "#ffffff" },
      dataLabels: {
        enabled: true,
        linkFormat: "",
        allowOverlap: true,
        style: { fontSize: "14px", textOutline: "none", color: "#fff", fontFamily: "ocr-aregular" }
      }
    }
  },
  credits: { enabled: false },
  series: [{
    id: "lang-tree",
    data: window.netdata7
  }]
});
