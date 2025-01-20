
export const StoryDisplay = ({ story }) => {
  return (
        // @ts-ignore-error
    <div style={styles.container}>
        {/* @ts-ignore-error */}
      <h1 style={styles.title}>~~~</h1>
       {/* @ts-ignore-error */}
      <p style={styles.storyText}>
        {story.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '800px',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'papyrus',
    lineHeight: '1.6',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px',
    color: 'white',
  },
  storyText: {
    textAlign: 'center',
    fontSize: '1rem',
    color: 'white',
    whiteSpace: 'pre-wrap', // Preserve whitespace for formatting
  },
};

export default StoryDisplay;
