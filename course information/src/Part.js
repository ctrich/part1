

const Part = ({ part, exercises }) => {
    return (
        <li style={{listStyle: 'none'}}>
            <p>{ part } { exercises }</p>
        </li>
    );
}

export default Part;