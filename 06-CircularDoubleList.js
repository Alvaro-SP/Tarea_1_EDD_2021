class nodo{
    constructor(dato){
        this.dato=dato;
        this.next=null;
        this.ant=null;
    };
};

class listaDobleCircular{
    constructor(){
        console.log("se ha creado la lista circular Doblemente Enlazada");
        this.cabeza=null;
        this.cola=null;
        this.nodoActual=null;
        this.size=0;
    };
    insertar(dato){
        let nuevo=new nodo(dato);
        if(this.cabeza==null){
            nuevo.next=nuevo;
            this.cabeza=nuevo;
            this.cabeza.ant=nuevo;
            this.cola=nuevo;
        }else{
            this.cola.next=nuevo;
            nuevo.next=this.cabeza;
            nuevo.ant=this.cola;
            this.cabeza.ant=nuevo;
            this.cabeza=nuevo;
        };
        this.size++;
        return dato;
    };
    //REVISAR SI LA LISTA ESTA VACÍA
    isEmpty(){
        return this.size === 0;
        // if(this.size===0){
        //     return true;
        // }else{
        //     return false;
        // };
    };
    getSize(){
        return this.size;
    };
    //!REMOVER VALOR DE LA CABEZA
    removeHead(){
        if(!this.cabeza){
            return null;
        };
        const valueToReturn = this.cabeza.data;
        if(this.cabeza===this.cola){
            this.cabeza=null;
            this.cola=null;
        }else{
            this.cabeza=this.cabeza.next;
            this.cabeza.ant=null;

        };
        this.size--;
        return valueToReturn;
    };
    imprimir(){
        let salida="";
        if(this.size>0){
            this.nodoActual=this.cabeza;
            let contador=1
            while(contador<=this.size){
                if(contador<this.size){
                    salida+=this.nodoActual.dato+" -> ";
                }else{
                    salida+=this.nodoActual.dato+" -> "
                };
                contador+=1;
                this.nodoActual=this.nodoActual.next;
            };
            console.log(salida);
        }else{
            console.log("Lista Circular Vacia!");
        };
        return salida
    };

    imprimir2(){
        let salida="";
        if(this.size>0){
            if(this.cabeza==this.cola){
                console.log(this.cabeza.dato);
            }else{
                this.nodoActual=this.cabeza;

            };
            while(this.nodoActual!=this.cola){
                
                salida+=this.nodoActual.dato+" -> ";
                
                this.nodoActual=this.nodoActual.next;
            };
            salida+=this.nodoActual.dato;
            console.log(salida);
        }else{
            console.log("Lista Circular Vacia!");
        };
        console.log(this.nodoActual.next.next.ant.next.dato)
        console.log(this.nodoActual.ant.ant.ant.ant.dato)
        return salida
    };
}
let lista = new listaDobleCircular();
lista.insertar(1);
lista.insertar(2);
lista.insertar(3);
lista.insertar(4);
lista.imprimir();
lista.imprimir2();
lista.getSize();
lista.isEmpty();
lista.removeHead();
lista.imprimir();