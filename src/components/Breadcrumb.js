const Breadcrumb = ({ path }) => {
    return (
      <div>
       <ul style={{ listStyleType: 'none', padding: 0 }}>
        {path.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </div>
    );
  };
  
  export default Breadcrumb