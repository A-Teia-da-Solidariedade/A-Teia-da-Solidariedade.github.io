//const constante = 12 (definindo uma constante com valor 12)
//var variavel (criar uma variavel pra poder colocar algo agr ou dps)
//document.write(constante) = (escreveria o valor da constante 12 no arquivo javascript)

//boolean=true ou false(maneira de escrever uma string sem aspas,definindo o boolean como uma variavel ou constante)
//objetos possuem propriedades e funcionalidades(precisam ser abertos com chaves{},exemplo de objeto abaixo)
//const pessoa = {
  //altura:"1,78m",
  //idade:21,
  //solteiro:true,
  //correr(){
    //document.write("corre 8km por dia")
    //return 'quando está a fim'
//  }
// //nesse correr,criamos uma funcionalidade para o objeto,de maneira que ao selecionarmos a propriedade correr,será escrito a frase.Além disso colocamos return para dar uma valor a essa funcionalidade,pois com somente o document write,ela executa apenas uma ação
//document.write(pessoa.correr)//como escrever uma propriedade do objeto pessoa
//array-vetores(grupo de informações em conjunto,definido por[])
//const grupodebolinhas=["azul","verde","vermelho"]
//document.write(grupodebolinhas[1])//sem os colchetes,escreve todas as infos do vetor,com os colchete podemos escolher qual info falar começando sempre da posição 0-...,nesse caso de 0-2

//funçoes-atalhos
//registrando a funçao
//function saymyname(name){
//  document.write(name)
//
//executando ela
//saymyname("rhamon")
//saymyname("matheus")

//condicionais
//const notafinal=7

//if(notafinal<5){//caminho 1 da condicional
//  document.write("reprovado")
//else{//caminho 2 da condicional
 // document.write("aprovado")

//loop repetição
for (i=0;i<10;i++) {
    document.write(`<p> $(i) </p>`)//aparece os valores do i ao longo do loop
  }