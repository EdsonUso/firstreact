import './Tarefa.css';

function Tarefa({titulo, descricao, data, concluida, onConcluir, onExcluir}) {
    return(
        <div className={`tarefa-container ${concluida ? 'concluida' : ''}`}>
            <div className="tarefa-header">
                <h3>{titulo}</h3>
                <span className="data">{data}</span>
            </div>
            <div className="tarefa-body">
                <p>{descricao}</p>
            </div>
            <div className="tarefa-footer">
                <button 
                    className={`btn-concluir ${concluida ? 'btn-concluido' : ''}`}
                    onClick={onConcluir}
                >
                    {concluida ? 'Reabrir' : 'Concluir'}
                </button>
                <button 
                    className="btn-excluir"
                    onClick={onExcluir}
                >
                    Excluir
                </button>
            </div>
        </div>
    )
}