var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');

function renderReponsitories(repositories){
    for(repo of repositories){
        const textElement = document.createTextNode(repo.name);
        const liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

function listRepositories(){
    var user = inputElement.value;

    if(!user) return;

    axios.get('https://api.github.com/users/'+user+'/repos')
        .then(function(response){
            renderReponsitories(response.data);
        });
    
}

