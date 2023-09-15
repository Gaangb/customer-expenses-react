import ExpensiveCard from "../expensiveCard";
import './style.css'

export default function ExpenseList(){
    const notes = [
        {
          category: "Energia",
          value: 90,
          date: "15/09/2022",
          description: "shashahsahsa"
        },
        {
          category: "Energia",
          value: 90,
          date: "15/09/2022",
          description: "shashahsahsa"
        },
        {
          category: "Energia",
          value: 90,
          date: "15/09/2022",
          description: "shashahsahsa"
        },
        {
          category: "Energia",
          value: 90,
          date: "15/09/2022",
          description: "shashahsahsa"
        }
    
      ]

    return(
        <div className="container_list">
            {notes.map(note =>(
                <div key={note.id}>
                    <ExpensiveCard taskType={note.category} taskValue={note.value} taskDate={note.date} taskDescription={note.description}/>
                </div>
            ))}
        </div>
    );
}