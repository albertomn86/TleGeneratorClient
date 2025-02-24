import ObjectRow, {ObjectRowProps} from "./ObjectRow";
import { useState } from "react";

export default function ObjectList({ objects }: { objects: ObjectRowProps[] }) {
    const [objectList, setObjectList] = useState(objects);

    const setSelection = (id: string) => {
        setObjectList((prevObjects) =>
            prevObjects.map(obj =>
                obj.id === id ? { ...obj, isSelected: !obj.isSelected } : obj
            )
        );
    };

    return(
        <table>
            { objectList.map((item: ObjectRowProps) => 
                <ObjectRow key={item.id} {...item} onChangeHandler={setSelection} />
            )}
        </table>
    );
}