import Part from './Part';

const Content = ({ course }) => {
    const { parts } = course;
    return (
        <ul style={{padding: 0}}>
            {parts.map(x => <Part part={x.name} exercises={x.exercises} key={x.id} /> )}
        </ul>
    );
}

export default Content;