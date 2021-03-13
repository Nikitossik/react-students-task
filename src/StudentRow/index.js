import DeleteButton from '../Buttons/DeleteButton';
import SelectButton from '../Buttons/SelectButton';

const StudentRow = ({deleteFunc, selectFunc, student}) => {
    return( 
        <tr>
            <td>{student.name}</td>
            <td>{student.surname}</td>
            <td>{student.marks.html}</td>
            <td>{student.marks.css}</td>
            <td>{student.marks.js}</td>
            <td>{student.marks.php}</td>
            <td>{student.average}</td>
            <td>
                <SelectButton selectCallback={selectFunc} student={student}/>
            </td>
            <td>
                <DeleteButton deleteCallback={deleteFunc} student={student}/>
            </td>
        </tr>
    );
}

export default StudentRow;