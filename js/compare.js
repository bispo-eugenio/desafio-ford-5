
//car
let carArr = [];

class Car {

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            if(carArr.length === 2){
                alert("Apenas é possível comparar 2 veículo")
                el.checked = false
                return
            }
            else if (GetCarArrPosition(carArr, carClass) === -1){
                carArr.push(carClass)
                verificationButton(carArr)
                console.log(carArr.length)
                }
        } else {
            //Se for diferente de menos -1 o vai adicionar no array
            if(GetCarArrPosition(carArr, carClass) !== -1){
                carArr.splice(GetCarArrPosition(carArr, carClass), 1)
            }
            verificationButton(carArr)
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function verificationButton(carArr){
    const buttonCompare = document.getElementById("compare-btn")
    if(carArr.length === 2){
        console.log("sdja")
        buttonCompare.setAttribute("disabled", false);
        buttonCompare.disabled = false;
    } else {
        buttonCompare.setAttribute("disabled", true);
        buttonCompare.disabled = true;
        return
    }
}

function ShowCompare() {
    if(carArr.length < 2 || carArr.length === 1) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    } 

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    carArr.forEach((element, index) => {
        if(element instanceof Car){
            let idElement = [
                "image",
                "nome", "alturaCacamba", 
                "alturaVeiculo", "alturaSolo",
                "capacidadeCarga", "motor", 
                "potencia", "volumeCacamba", 
                "roda", "preco"
            ]

            let idTd = [
                "compare_image_", "compare_modelo_",
                "compare_alturacacamba_","compare_alturaveiculo_", 
                "compare_alturasolo_", "compare_capacidadecarga_", 
                "compare_motor_", "compare_potencia_", 
                "compare_volumecacamba_", "compare_roda_", 
                "compare_preco_"
            ]

            for (let i = 0; i < idTd.length; i++){
                let idConcat = idTd[i] + index
                let idTdElement = document.getElementById(idConcat)
                if (idElement[i] === "image"){
                    idTdElement.innerHTML = `<img src="${element[idElement[i]]}" alt='imagem do carro' class='compare-image'>`
                } else
                    idTdElement.innerText = element[idElement[i]]
            }
            
            
        }
    })  
}

window.addEventListener("DOMContentLoaded", () => {
    verificationButton(carArr);
})