
let nomes = ['Paulo','Pedro','Noel','Lúcia','Susana','Johny','Edmundo','Helena','Gregório','Aslam','Chasta','Trumpkin','Calors','Aravis','Ricardo','Lourenço'];
function criarElementos(){
    let elementos = [];
    for(let i = 0; i<162;i++){
        let novo = document.createElement('div');
        novo.id = id;
        mapa[novo.id]={
            nome:nomes[rand(0,nomes.length-1)],
            elemento:novo,
            idade:rand(6,100)
        };
        novo.innerHTML = criarPessoa(mapa[novo.id]);
        novo.classList.add('caixa');
        novo.classList.add('noselect');
        novo.onclick = clicou;
        elementos.push(novo);
        id++;
        
    }

    
    let onde = document.getElementById('conteudo');
    console.log(onde);
    elementos.forEach(e=>{onde.appendChild(e);});
    console.log("O Mapa", mapa);
    maisHomonimo();//conta os homonimos
    
}

let id = 1;
let mapa = {};

function clicou(){
    let obj = mapa[this.id];
    let v = document.getElementById('checagem');//homonimos
    if(v.checked){
        Object.values(mapa).forEach(o=>{
            if(o.nome==obj.nome)o.elemento.classList.toggle('tremendo');
        });
        contar();
        return;
    }
    
    
    obj.elemento.classList.toggle('tremendo');
    contar();
    // console.log("Clicou ", obj);

}

function maisHomonimo(){
    let temp = {};
    Object.values(mapa).forEach(o=>{
        if(!temp[o.nome])temp[o.nome]={nome:o.nome,quantidade:0};
        temp[o.nome].quantidade++;
    });
    let maior = null;
    Object.values(temp).forEach(e=>{
        if(!maior)maior = e;
        if(e.quantidade>maior.quantidade)maior = e;
    });

    document.getElementById('maior').innerHTML = `${maior.nome}: ${maior.quantidade} ocorrências.`;
}

function contar(){
    let q = 0;
    Object.values(mapa).forEach(o=>{
        if(o.elemento.classList.contains('tremendo'))q++;
    });

    document.getElementById('status').innerHTML = `Tremento: ${q} pessoas`;

}

function criarPessoa(ele){
    let res =``;
    let foto = rand(1,16);
    res+=`
    <div>
    <div>
            <img src="avatares/${foto}.svg" style="width:30px">
        </div>`;
    res+=`
    <div>
    ${ele.nome}
    </div>
    <div class="idade">
        ${ele.idade} anos.
    </div>
    </div>
    `;

    return res;
}

function rand(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

criarElementos();