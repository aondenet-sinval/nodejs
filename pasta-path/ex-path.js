const path = require("path");
//O módulo path também pode identificar a extensão de um nome de arquivo. Se você tiver um arquivo e quiser identificar se ele é um arquivo JSON, poderá usar o método path.extname.
console.log(path.extname("sales.json"));
/*
O módulo path contém muitos métodos diferentes que fazem várias coisas. 
No entanto, você pode obter a maioria das informações necessárias sobre 
um caminho ou arquivo usando o método parse. Esse método retorna um objeto
que contém o diretório atual no qual você está, o nome do arquivo, a extensão 
do nome de arquivo e até o nome do arquivo sem a extensão.
*/
console.log('Usando método parse do módulo path: ',path.parse("stores/201/sales.json"));
//Obtendo o caminho para as pastas 'stores' e '201'
console.log(path.join("stores", "201")); // stores/201
//Verificando odiretório atual
console.log(__dirname);
