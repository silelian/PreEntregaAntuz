import { useState } from "react"
import Item from "../../components/item"
import Button from 'react-bootstrap/Button';
import style from './style.module.css'

// creo el componente
const ItemListConatainer = () => {
    // aqui va la logica de cada componente
    //creo el array de objetos
    //uso estados usesState, el array va estar vacio porq no se agrego nada al array
    const [listaDeCompras,setlistaDeCompras] = useState([])
    const [input,setInput] = useState('')
    
// para usar el onclick hago una funcion para que lo q esta en el input lo meta en el array
const addItem = () =>{
    if(input !== ''){
        // trae lo q esta en la lista de compras y agrego lo q tiene el input   
        setlistaDeCompras([...listaDeCompras,input])
        setInput('')
    }

}
   
const deleteItem = (nombre) =>{
    //creas una nueva lista con los productos, menos con el que buscas
    // el filter trae lo q le digas en el ()
    const nuevaLista = listaDeCompras.filter(pr => pr!== nombre)
    setlistaDeCompras(nuevaLista)
}
    
    return(
        //renderizar la lista
        <div>
             {/* voy a empezar a dar el alta los productos a traves de un input */}
             {/* input recibe el valor de input */}
                <input value = {input} onChange={(event) => setInput(event.target.value)} />
                <Button onClick={addItem}as="input" type="reset" value="Guardar" className={style['btnguardar']} />    
                {/* <button onClick={addItem}>Guardar</button> */}
            {
            listaDeCompras.length > 0 ? (
                // hago un react framen sino re rompe <></>
                <>
                    {/* uso el map para recorrer el array y por cada item lo muestro*/}
                    {/* llamo un compopnente dentro de otro componente */}
                    {listaDeCompras.map(producto => <Item nombre = {producto} deleteItem = {deleteItem}/>)}
                </>
            ) : (
                <p className={style['item-p']}> Lista vacia </p>
            )
            
            }
        </div>
    )
    
}
export default ItemListConatainer