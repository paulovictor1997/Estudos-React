import {useState} from 'react'

function TodoForm({addTodo}) {
    const [value,setValue] = useState("")
    const [category,setCategory] = useState("")

    const handleSubmit = ((e)=>{
        e.preventDefault()
        //adicionar todo
        if(!value || !category)return
        addTodo(value,category)
        //limpar os campos
        setValue("")
        setCategory("")
        //console.log(value,category)
    })


  return (
    <div className='todo-form'>
        <h2>Criar Tarefa :</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Digite o título' 
            onChange={(e)=> setValue(e.target.value)}
            value={value}    
            />
            <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudo">Estudo</option>
                <option value="Pessoal">Pessoal</option>
            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm