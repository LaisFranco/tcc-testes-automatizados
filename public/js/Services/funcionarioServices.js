angular.module('folhaPagamento').factory('funcionarioServices',function($http){
    
    var _getFuncionarios,_addFuncionario,_removeFuncionario,_getFuncionario;
    
    _getFuncionarios = function(){
             
        return  $http.get("http://localhost:3000/api/funcionarios");      
    },
    
     _addFuncionario = function(funcionario){
        
         return $http.post("http://localhost:3000/api/funcionarios", funcionario);
    },
        
    _removeFuncionario = function(funcionario){
        return $http.delete("http://localhost:3000/api/funcionarios/"+funcionario._id+"");
    },
    
    _getFuncionario = function(id){
        
        return $http.get("http://localhost:3000/api/funcionarios/"+id);
    }
    
    return {
            getFuncionarios:_getFuncionarios,
            addFuncionario:_addFuncionario,
            removeFuncionario:_removeFuncionario,
            getFuncionario:_getFuncionario
           };
});