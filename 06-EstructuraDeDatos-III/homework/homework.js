'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los 
 siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto 
  valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth 
  first (DFS) en cualquiera de sus variantes, según se indique 
  por parámetro ("post-order", "pre-order", o "in-order"). 
  Nota: si no se provee ningún parámetro, hará el recorrido 
  "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden 
  breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra
   representado en la imagen bst.png dentro del directorio 
   homework.
*/
function BinarySearchTree(value) {
   this.value = value; 
   this.left = null;
   this.right = null;
}

let arbol = new BinarySearchTree(15);

BinarySearchTree.prototype.insert = function(value){
   if(value > this.value){
      if (this.right == null){
         this.right = new BinarySearchTree(value);
      }else{
         this.right.insert(value)
      }
   }
   else if (value < this.value){
      if (this.left == null){
         this.left = new BinarySearchTree(value);
      }else{
         this.left.insert(value)
      }
   }     
}


BinarySearchTree.prototype.contains = function(value){
   
   if(value == this.value) return true

   if(value < this.value){
      // busca a la izquierda
      if(this.right === null) return false;
      return this.left.contains(value)
   }

   if(value > this.value){
      // busca a la derecha
      if(this.left === null) return false;
      return this.right.contains(value)
   }
}

BinarySearchTree.prototype.size = function(){
   if(this.right === null && this.left === null) return 1;
   
   if(this.left !== null && this.right === null) return 1 + this.left.size();

   if(this.right !== null && this.left === null) return 1 + this.right.size();

   if(this.right !== null && this.left !== null) return 1 + this.left.size() + this.right.size()
}

  
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
   if( order === "pre-order"){
      cb(this.value);
      if(this.left !== null) this.left.depthFirstForEach(cb, order);
      if(this.right !== null) this.right.depthFirstForEach(cd, order);

   }
   else if( order == "post-order"){
      if(this.left !== null) this.left.depthFirstForEach(cb, order);
      if(this.right !== null) this.right.depthFirstForEach(cd, order);
      cb(this.value)
   }
   else{
      if(this.left !== null) this.left.depthFirstForEach(cb, order);
      cb(this.value)
      if(this.right !== null) this.right.depthFirstForEach(cd, order);
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function(){}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
