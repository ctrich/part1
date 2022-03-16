

const Total = ({ course }) => {
    const { parts } = course;

    const total = parts.reduce((sum, x) => sum += x.exercises, 0);

    return (
        <div>
            Total of {total} exercises
        </div>
    );
}

export default Total;