var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');



function renderReponsitories(repositories){
    listElement.innerHTML = "";

    for(repo of repositories){
        const textElement = document.createTextNode(repo.name);
        const liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

function loadRepositorie(loading){
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');

    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
}

function erroReposistorie(loading){
    listElement.innerHTML = "";

    var textElement = document.createTextNode('erro!!');
    var erroElement = document.createElement('li');

    erroElement.style.color = "#F00";

    erroElement.appendChild(textElement);
    listElement.appendChild(erroElement);
}

function listRepositories(){
    var user = inputElement.value;

    if(!user) return;

    loadRepositorie();

    axios.get('https://api.github.com/users/'+user+'/repos')
        .then(function(response){
            renderReponsitories(response.data);
        })
        .catch(function(){
            erroReposistorie();
        });
    
}

