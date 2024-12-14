import eventList from "../../assets/event/event.json";
import { FC } from "react";
interface EventData{
    id: number;
    name: string;
    date: string;
    desc: string;
}

const Event: FC = () => {
    return(
        <div className="event">
            {eventList.map((event: EventData) =>(
                <div key={event.id}>
                    <h3>{event.name}</h3>
                    <p>{event.date}</p>
                    <p>{event.desc}</p>
                </div>
            ))}
        </div>
    )
}

export default Event