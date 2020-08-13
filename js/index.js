const calculosUsuario = () =>{
    if( verificacao() == 1 ){
    calculoSalario()
    calcularIRRF()
    calcularBonificacao()
    calcularSalarioLiquido()
    $('#mensagemErro').hide()
    $('#mensagemSucesso').show('fade')
    }else{
        $('#mensagemErro').show()
    }
    
}

const calculoSalario = () =>{
    let valorHora = document.getElementById('valorHora').value
    let horasTrabalho = document.getElementById('horasTrabalho').value
    let salarioBruto = horasTrabalho*valorHora
    document.getElementById('salarioBruto').value = "R$" + salarioBruto
    BordeInputsGray()
    
}

const limpar = () =>{
    document.getElementById('nome').value = ""
    document.getElementById('valorHora').value = ""
    document.getElementById('horasTrabalho').value = ""
    document.getElementById('salarioBruto').value = ""
    document.getElementById('valorIRRF').value = ""
    document.getElementById('bonificacao').value = ""
    document.getElementById('salarioLiquido').value = ""
    $('#mensagemSucesso').hide('fade')
    $('#mensagemErro').hide()
    BordeInputsGray()
}

const calcularIRRF = () =>{
    let salarioBruto = document.getElementById('salarioBruto').value.replace('R$',"")
    if(salarioBruto<= 1903.98){
        document.getElementById('valorIRRF').value = "R$" +  "0"
    }
    else if(salarioBruto>1903.98 && salarioBruto <= 2826.65){
        let valorIRRF = 7.5/100*salarioBruto
        document.getElementById('valorIRRF').value =  "R$" + valorIRRF.toFixed(2)
    }
    else if(salarioBruto >2826.65 && salarioBruto <= 3751.05){
        let valorIRRF = 15/100*salarioBruto
        document.getElementById('valorIRRF').value =  "R$" + valorIRRF.toFixed(2)

    }
    else if(salarioBruto > 3751.05 && salarioBruto <= 4664.68){
        let valorIRRF = 22.5/100*salarioBruto
        document.getElementById('valorIRRF').value = "R$" +  valorIRRF.toFixed(2)
    }else{
        let valorIRRF = 27.5/100*salarioBruto
        document.getElementById('valorIRRF').value = "R$" +  valorIRRF.toFixed(2)
    }
  
}
const calcularBonificacao = () =>{
    let horasTrabalho = document.getElementById('horasTrabalho').value
    let salarioBruto = parseFloat(document.getElementById('salarioBruto').value.replace('R$',""))
    if(horasTrabalho > 160 ){
        let bonificacao = 15/100 * salarioBruto
        salarioBruto = salarioBruto + bonificacao
        document.getElementById('bonificacao').value =  "R$" + bonificacao.toFixed(2)
    }else{
        document.getElementById('bonificacao').value = "R$" +  0
    }
}

const calcularSalarioLiquido = () => {
    let salarioBruto = parseFloat(document.getElementById('salarioBruto').value.replace('R$',""))
    let valorIRRF = parseFloat(document.getElementById('valorIRRF').value.replace('R$',""))
    let bonificacao = parseFloat(document.getElementById('bonificacao').value.replace('R$',""))
    let salarioLiquido = salarioBruto + bonificacao - valorIRRF
    document.getElementById('salarioLiquido').value =  "R$" + salarioLiquido.toFixed(2)
}
const verificacao = () => {
    let nome = document.getElementById('nome').value
    let valorHora = document.getElementById('valorHora').value
    let horasTrabalho = document.getElementById('horasTrabalho').value
    if(nome === ""){
        $('#nome').css('border-color', 'red')
    }else{
        $('#nome').css('border-color', 'rgb(202, 200, 200')
    }
    if(valorHora === ""){
        $('#valorHora').css('border-color', 'red')
    }else{
        $('#valorHora').css('border-color', 'rgb(202, 200, 200')
    }
    if(horasTrabalho === ""){
        $('#horasTrabalho').css('border-color', 'red')
    }else{
        $('#horasTrabalho').css('border-color', 'rgb(202, 200, 200')
    }
    if(nome === "" || valorHora === "" || horasTrabalho === ""){
        return 0 
    }else{
        return 1
    }
}
const BordeInputsGray = () => {
    $('#nome').css('border-color', 'rgb(202, 200, 200')
    $('#valorHora').css('border-color', 'rgb(202, 200, 200')
    $('#horasTrabalho').css('border-color', 'rgb(202, 200, 200')
}
