AOS.init();

const eventDate = new Date("Jul 09, 2024 00:00:59");
const timeStamp = eventDate.getTime(); // pega o time stamp da data definida

const contaAsHoras = setInterval(function(){
    const now = new Date();
    const timeStampAtual = now.getTime(); // pega o time stamp da data atual

    const ateOEvento = timeStamp - timeStampAtual; // logica da da regressiva

    const diaEmMs= 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minEmMS = 1000 * 60;

    const diasAteoEvento = Math.floor(ateOEvento / diaEmMs) //calculo de quanto falta para a data selecionada
    const horasAteoEvento = Math.floor((ateOEvento % diaEmMs) / horaEmMs);
    const minutosAteoEvento = Math.floor((ateOEvento % horaEmMs) / minEmMS)
    const segundosAteoEvento = Math.floor((ateOEvento % minEmMS) / 1000);

    console.log(diasAteoEvento)
    console.log(horasAteoEvento)
    console.log(minutosAteoEvento)
    console.log(segundosAteoEvento)


    document.getElementById('contador').innerHTML = `${diasAteoEvento}d ${horasAteoEvento}h ${minutosAteoEvento}m ${segundosAteoEvento}s`


    if(ateOEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `${'Meu Aniversario ja Passou Vacilao'}`
        document.getElementById('contador').style.color = 'red';
    }
},1000)