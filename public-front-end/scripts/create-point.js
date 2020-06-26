function populateUFs(){
    const ufSelect=document.querySelector("select[name=uf]")
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then( res=> res.json() )
    .then(states=>{
        for(const state of states){
       ufSelect.innerHTML=ufSelect.innerHTML +`<option value="${state.id}">${state.nome}</option>` //precisa ser crase pra funcionar pegar o valor dentro do loop pelo $

        }
    })
}
populateUFs()

function getcities(event){
    const citySelect=document.querySelector("select[name=city]")
const ufValue = event.target.value
const url=`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

citySelect.innerHTML="<option value>Selecione a Cidade</option>"
citySelect.disabled=true

fetch(url)
.then( res=> res.json() )
.then(cities=>{
  
    for(const city of cities){
   citySelect.innerHTML=citySelect.innerHTML +`<option value="${city.nome}">${city.nome}</option>` //precisa ser crase pra funcionar pegar o valor dentro do loop pelo $

    }
    citySelect.disabled=false
})
}

document
        .querySelector('select[name=uf]')
        .addEventListener('change',getcities)//essa parte da setinha,é a criação da função anonima

    //Parte dos itens de coleta
    //fazer um programa de repetição para detectar os cliques do li

 
