const calculosUsuario = () =>{
    calculoSalario()
    calcularIRRF()
    calcularBonificacao()
    calcularSalarioLiquido()
    
}

const calculoSalario = () =>{
    let valorHora = document.getElementById('valorHora').value
    let horasTrabalho = document.getElementById('horasTrabalho').value
    let salarioBruto = horasTrabalho*valorHora
    document.getElementById('salarioBruto').value = salarioBruto
    
    
}

const limpar = () =>{
    document.getElementById('nome').value = ""
    document.getElementById('valorHora').value = ""
    document.getElementById('horasTrabalho').value = ""
    document.getElementById('salarioBruto').value = ""
    document.getElementById('valorIRRF').value = ""
    document.getElementById('bonificacao').value = ""
    document.getElementById('salarioLiquido').value = salarioLiquido
}

const calcularIRRF = () =>{
    let salarioBruto = document.getElementById('salarioBruto').value
    if(salarioBruto<= 1903.98){
        document.getElementById('valorIRRF').value = "0"
    }
    else if(salarioBruto>1903.98 && salarioBruto <= 2826.65){
        let valorIRRF = 7.5/100*salarioBruto
        document.getElementById('valorIRRF').value = valorIRRF.toFixed(2)
    }
    else if(salarioBruto >2826.65 && salarioBruto <= 3751.05){
        let valorIRRF = 15/100*salarioBruto
        document.getElementById('valorIRRF').value = valorIRRF.toFixed(2)

    }
    else if(salarioBruto > 3751.05 && salarioBruto <= 4664.68){
        let valorIRRF = 22.5/100*salarioBruto
        document.getElementById('valorIRRF').value = valorIRRF.toFixed(2)
    }else{
        let valorIRRF = 27.5/100*salarioBruto
        document.getElementById('valorIRRF').value = valorIRRF.toFixed(2)
    }
  
}
const calcularBonificacao = () =>{
    let horasTrabalho = document.getElementById('horasTrabalho').value
    let salarioBruto = parseFloat(document.getElementById('salarioBruto').value)
    if(horasTrabalho > 160 ){
        let bonificacao = 15/100 * salarioBruto
        salarioBruto = salarioBruto + bonificacao
        document.getElementById('bonificacao').value = bonificacao.toFixed(2)
    }else{
        document.getElementById('bonificacao').value = 0
    }
}

const calcularSalarioLiquido = () => {
    let salarioBruto = parseFloat(document.getElementById('salarioBruto').value)
    let valorIRRF = parseFloat(document.getElementById('valorIRRF').value)
    let bonificacao = parseFloat(document.getElementById('bonificacao').value)
    let salarioLiquido = salarioBruto + bonificacao - valorIRRF
    document.getElementById('salarioLiquido').value = salarioLiquido.toFixed(2)
}