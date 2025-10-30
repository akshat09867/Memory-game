import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            padding: '20px'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '15px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                maxWidth: '500px'
            }}>
                <h1 style={{
                    color: '#333',
                    marginBottom: '20px',
                    fontSize: '2.5rem'
                }}>
                    Pokémon Memory Game
                </h1>
                <h2 style={{
                    color: '#666',
                    marginBottom: '30px',
                    fontSize: '1.5rem',
                    fontWeight: 'normal'
                }}>
                    Test your memory skills!
                </h2>
                <p style={{
                    color: '#777',
                    marginBottom: '30px',
                    fontSize: '18px',
                    lineHeight: '1.6'
                }}>
                    Click on different Pokémon to score points. But be careful - don't click the same Pokémon twice!
                </p>
                <Link 
                    to="/start" 
                    style={{
                        display: 'inline-block',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        padding: '15px 40px',
                        fontSize: '18px',
                        textDecoration: 'none',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#45a049';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#4CAF50';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.3)';
                    }}
                >
                    Start Game
                </Link>
            </div>
        </div>
    )
}