import React from 'react';

const Input = (props) => {
    const { list, setList } = props;

    let task = {
        name: "",
        isComplete: false
    };

    const onChange = e => {
        task.name = e.target.value;
    };

    const onClick = e => {
        setList([...list, task]);
        e.target.value = "";
    };

    return (
        <div>
            <input type="text" name="task" onChange={ onChange } />
            <button onClick={ onClick }>Add</button>
        </div>
    );
};

export default Input;