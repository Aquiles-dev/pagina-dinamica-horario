const iconeRelogio = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
    <circle cx="12" cy="12" r="9.5"/>
    <path d="M12 7v5l3.2 2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

const iconeSol = `
  <svg viewBox="0 0 24 24" fill="none" stroke="#d99a2b" stroke-width="1.8">
    <circle cx="12" cy="12" r="4.2" fill="#f2b93b" stroke="none"/>
    <g stroke-linecap="round">
      <line x1="12" y1="1.5" x2="12" y2="4"/>
      <line x1="12" y1="20" x2="12" y2="22.5"/>
      <line x1="1.5" y1="12" x2="4" y2="12"/>
      <line x1="20" y1="12" x2="22.5" y2="12"/>
      <line x1="4.5" y1="4.5" x2="6.2" y2="6.2"/>
      <line x1="17.8" y1="17.8" x2="19.5" y2="19.5"/>
      <line x1="4.5" y1="19.5" x2="6.2" y2="17.8"/>
      <line x1="17.8" y1="6.2" x2="19.5" y2="4.5"/>
    </g>
  </svg>`;

const iconeSolNuvem = `
  <svg viewBox="0 0 24 24">
    <circle cx="9" cy="9" r="4" fill="#f2b93b"/>
    <path d="M6 18a4.2 4.2 0 0 1-.6-8.36A5.5 5.5 0 0 1 15.9 8a4 4 0 0 1-.4 8H6z" fill="#c98c5f" opacity="0.85"/>
  </svg>`;

const iconeLua = `
  <svg viewBox="0 0 24 24">
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5z" fill="#d9d9dc"/>
    <circle cx="16.2" cy="9.5" r="0.9" fill="#a9a9ae"/>
    <circle cx="13.6" cy="14" r="0.6" fill="#a9a9ae"/>
  </svg>`;

const configuracoes = {
  manha: {
    classe: "manha",
    corFundo: "#e2cd9f",
    periodo: "Manhã",
    subtitulo: "Comece o dia com energia.",
    icone: iconeSol
  },
  tarde: {
    classe: "tarde",
    corFundo: "#b9846f",
    periodo: "Tarde",
    subtitulo: "Continue o dia com energia.",
    icone: iconeSolNuvem
  },
  noite: {
    classe: "noite",
    corFundo: "#515154",
    periodo: "Noite",
    subtitulo: "Descanse e recarregue as energias.",
    icone: iconeLua
  }
};

function obterTurno(hora) {
  if (hora >= 5 && hora < 12) return "manha";
  if (hora >= 12 && hora < 18) return "tarde";
  return "noite";
}

function atualizarTela() {
  const agora = new Date();
  const hora = agora.getHours();
  const turno = obterTurno(hora);
  const config = configuracoes[turno];

  document.body.style.backgroundColor = config.corFundo;
  document.body.className = config.classe;

  document.getElementById("saudacao").textContent = `Olá. Agora são ${hora} horas!`;
  document.getElementById("periodo").textContent = config.periodo;
  document.getElementById("subtitulo").textContent = config.subtitulo;
  document.getElementById("avatar").innerHTML = config.icone;
  document.getElementById("icone-relogio").innerHTML =
    `<span style="color:${turno === "noite" ? "#f5f2ec" : "#2b2620"}">${iconeRelogio}</span>`;
}

atualizarTela();
setInterval(atualizarTela, 30000);
