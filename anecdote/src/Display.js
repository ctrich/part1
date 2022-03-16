

const Display = ({ anecdote, votes }) => {
  return (
    <div style={{fontSize: '1.5rem'}}>
      { anecdote }
      <div>
        has { votes } votes
      </div> 
    </div>
  );
}

export default Display;