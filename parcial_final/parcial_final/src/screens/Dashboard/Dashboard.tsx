import "./dashboard.css";

interface DashboardProps {
  poems: {
    id: string;
    title: string;
    excerpt: string;
  }[];
}

const Dashboard: React.FC<DashboardProps> = ({ poems }) => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      <div className="poem-list">
        <h1>
          querido Leider (tal vez no tan querido.) Gracias x la fe 💖😔👍
        </h1>
        {poems 
        ?
        
        poems.map((poem) => (
          <div key={poem.id} className="poem-card">
            <h2 className="poem-title">{poem.title}</h2>
            <p className="poem-excerpt">{poem.excerpt}...</p>
            <button className="poem-button">
              Read More
            </button>
          </div>
        )): null
      
      }
      </div>
    </div>
  );
};

export default Dashboard;
