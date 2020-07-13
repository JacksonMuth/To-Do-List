import React from 'react'

const Task = (props) => {
    const { task, index, list, setList } = props;

    const onClick = () => {
        setList(() => list.filter(task => list.indexOf(task) !== index));
    };

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    };

    return (
        <div style={{border: "1px solid black"}}>
            <h4 style={{ textDecoration: task.isComplete? "line-through" : "none"}}>{task.name}</h4>
            <div>
                <label htmlFor="checkbox">Completed?</label>
                <input  onChange={onChange} type="checkbox" name="" checked={task.isComplete}/>
                <button onClick={onClick}>Delete</button>
            </div>
        </div>
    )
}

export default Task;