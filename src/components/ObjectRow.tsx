export interface ObjectRowProps {
    id: string
    objectName: string
    isSelected: boolean
}

export interface ObjectRowPropsExtended extends ObjectRowProps {
    onChangeHandler: (id: string) => void;
}

export default function ObjectRow({id, objectName, isSelected, onChangeHandler}: ObjectRowPropsExtended) {
    return (
        <tr>
            <td>{ id }</td>
            <td>{ objectName }</td>
            <td><input type="checkbox" checked={ isSelected } onChange={() => onChangeHandler(id)}></input></td>
        </tr>
    );
}
