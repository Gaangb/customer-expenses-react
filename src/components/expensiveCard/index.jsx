import './style.css'
export default function ExpensiveCard({id, taskType, taskValue, taskDate, taskDescription}){
    return(
    <div className="container_card">
        <p>{taskType}</p>
        <p>R${taskValue}</p>
        <p>{taskDate}</p>
        <p>{taskDescription}</p>
    </div>
    )
}