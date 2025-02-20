import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <Tarefa
        titulo="Completar o projeto"
        descricao="Finalizar a implementação do app de tarefas"
        data={Date.now}
        concluida={false}
        onConcluir={()=> handleConcluir(id)}
        onExcluir={()=> handleExcluir(id)}
      /> 
    </div>
  );
}

export default App;
