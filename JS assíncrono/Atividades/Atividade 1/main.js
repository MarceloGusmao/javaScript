function checarIdade(idade){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            return idade >=18 ? resolve() : reject();
        }, 2000);
    });
}

checarIdade(20)
    .then(function(response){
        console.log('Maior que 18');
    })
    .catch(function(error){
        console.warn('Menor que 18');
    });