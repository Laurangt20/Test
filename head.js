// Clase para representar un nodo en el heap
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Clase para implementar un heap
  class Heap {
    constructor() {
      this.root = null;
      this.size = 0;
    }
  
    // Insertar un nuevo elemento en el heap
    insert(value) {
      const newNode = new Node(value);
  
      // Si el heap está vacío, el nuevo nodo es la raíz
      if (this.size === 0) {
        this.root = newNode;
        this.size++;
        return;
      }
  
      // Percolar el nuevo nodo hacia arriba hasta que esté en la posición correcta
      this._percolateUp(newNode);
      this.size++;
    }
  
    // Eliminar el elemento con la mayor prioridad (valor mínimo) del heap
    remove() {
      // Si el heap está vacío, no hay nada que eliminar
      if (this.size === 0) {
        return;
      }
  
      // Guardar el valor del nodo raíz
      const minValue = this.root.value;
  
      // Si el heap solo tiene un nodo, eliminar la raíz
      if (this.size === 1) {
        this.root = null;
        this.size--;
        return minValue;
      }
  
      // Reemplazar la raíz con el último nodo del heap
      const lastNode = this._getLastNode();
      this.root.value = lastNode.value;
  
      // Percolar el nuevo valor de la raíz hacia abajo hasta que esté en la posición correcta
      this._percolateDown(this.root);
  
      // Eliminar el último nodo del heap
      this._removeLastNode();
      this.size--;
  
      return minValue;
    }
  
    // Percolar un nodo hacia arriba hasta que esté en la posición correcta
    _percolateUp(node) {
      let currentNode = node;
      let parentNode = this._getParentNode(currentNode);
  
      // Mientras el valor del nodo actual sea menor que el valor del nodo padre
      while (currentNode.value < parentNode.value) {
        // Intercambiar los valores de los nodos
        const temp = currentNode.value;
        currentNode.value = parentNode.value;
        parentNode.value = temp;
  
        // Actualizar el nodo actual al padre
        currentNode = parentNode;
        parentNode = this._getParentNode(currentNode);
      }
    }
  
    // Percolar un nodo hacia abajo hasta que esté en la posición correcta
    _percolateDown(node) {
      let currentNode = node;
      let smallestChildNode = this._getSmallestChildNode(currentNode);
  
      // Mientras el valor del nodo actual sea mayor que el valor del nodo hijo más pequeño
      while (currentNode.value > smallestChildNode.value) {
        // Intercambiar los valores de los nodos
        const temp = currentNode.value;
        currentNode.value = smallestChildNode.value;
        smallestChildNode.value = temp;
  
        // Actualizar el nodo actual al hijo más pequeño
        currentNode = smallestChildNode;
        smallestChildNode = this._getSmallestChildNode(currentNode);
      }
    }
  
    // Obtener el nodo padre de un nodo dado
    _getParentNode(node) {
      return this.root === node ? null : this._findNodeAtIndex((node.index - 1) / 2);
    }
  
    // Obtener el nodo hijo más pequeño de un nodo dado
    _getSmallestChildNode(node) {
      const leftChild = node.left;
      const rightChild = node.right;
  
      // Si el nodo no tiene hijos, no hay hijo más pequeño
      if (leftChild === null && rightChild === null) {
        return null;
      }
  
      // Si el nodo solo tiene un hijo, ese es el hijo más pequeño
      if (leftChild === null) {
        return rightChild;
      }
      if (rightChild === null) {
        return leftChild;
      }
  
      // Si el nodo tiene dos hijos, devolver el hijo con el valor más pequeño
      return leftChild.value < rightChild.value ? leftChild : rightChild;
    }
  
    // Obtener el último nodo del heap
    _getLastNode() {
      let currentNode = this.root;
    }
      // Recorrer el heap hacia la derecha hasta encontrar el último nodo
      
  }