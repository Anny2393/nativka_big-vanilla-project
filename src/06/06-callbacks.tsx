import React, {ChangeEvent, MouseEvent} from 'react';

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name);
    }

    const onNameChenged = () => {
        console.log("name changed")
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed:" + event.currentTarget.value)
    }

    const FocusLostHandler = () => {
        console.log("focus lost")
    }

    return <div>
        <textarea onChange={onNameChenged} onBlur={FocusLostHandler}>Dimych</textarea>
        <input onChange={onAgeChanged} type={"number"}/>

        <button name="delete" onClick={deleteUser}>delete</button>

    </div>
}
