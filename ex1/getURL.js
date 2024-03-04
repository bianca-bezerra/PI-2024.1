
// 1.Crie um programa que receba uma URL e execute um método GET exibindo 
// como saída alguns elementos como: Status code, Encoding, O tamanho da 
// resposta, O corpo da resposta, dentre outros 

import fetch from 'node-fetch';

const urlGithub = "https://api.github.com/users/github";
const urlUsers =  "https://jsonplaceholder.typicode.com/users"

// Conexão
fetch(urlUsers)
.then(response => {
    
    // Informações sobre o request
    console.log(`STATUS CODE: ${response.status}`);
    console.log(`ENCODING: ${response.headers.get('content-encoding')}`);
    console.log(`CONTENT LENGTH: ${response.headers.get('content-length')}`);
    return response.json()
})

.then(response => {
    // Body
    console.table(response);
})