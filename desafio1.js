let deDia = true;

function atualizarPeriodo() { <!-- aqui eu crio a função para atualizar para o período de dia -->
    let periodo = document.getElementById("periodo");
    let lampada = document.getElementById("lampada");

    if (deDia) {
        document.body.className = "dia";
        periodo.textContent = "É dia 🌞 Luz OFF";
        lampada.textContent = "💡";

    } else {
        document.body.className = "noite";
        lampada.textContent = "💡";
        periodo.textContent = "É noite 🌙 Luz ON";
    }
}

function mudarPeriodo() { <!-- quando clico no botão, a função vai mudar o período para noite e atualizar o período -->
    deDia = !deDia;
    atualizarPeriodo(); <!--aí atualiza o novo período-->
}

atualizarPeriodo();
<!-- Isso faz com que, logo que a página abre, já apareça o texto inicial (dia ou noite). Sem isso, o parágrafo ficaria vazio até clicar no botão. -->