import { useCallback, useState } from "react"
import PokemonImageSimple from "./img.js"

export default function Start(){
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)
    const [pokemons, setPokemons] = useState([
        { id: 1, name: 'pikachu' },
        { id: 2, name: 'charmander' },
        { id: 3, name: 'bulbasaur' },
        { id: 4, name: 'squirtle' },
        { id: 5, name: 'jigglypuff' },
        { id: 6, name: 'meowth' },
        { id: 7, name: 'psyduck' },
        { id: 8, name: 'snorlax' },
        { id: 9, name: 'eevee' },
        { id: 10, name: 'mewtwo' },
        { id: 11, name: 'gengar' },
        { id: 12, name: 'dragonite' }
    ]);
    const [clickHistory, setClickHistory] = useState([]);

    const isArrayUnique = (arr) => {
        const numbers = arr.map(item => item.number);
        return new Set(numbers).size === numbers.length;
    };

    const handleBlockClick = useCallback((clickedNumber) => {
        const newHistory = [{ number: clickedNumber }, ...clickHistory.slice(0, 9)];
        const hasDuplicate = !isArrayUnique(newHistory);
        
        if (hasDuplicate) {
            if (score > bestScore) {
                setBestScore(score);
            }
            setScore(0);
            setClickHistory([]);
        } else {
            setScore(prevScore => prevScore + 1);
            setClickHistory(newHistory);
            
            setPokemons(prevPokemons => {
                const shuffled = [...prevPokemons];
                for (let i = shuffled.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
                }
                return shuffled;
            });
        }
    }, [score, bestScore, clickHistory]);

    return(
        <div style={{ 
            minHeight: '100vh', 
            backgroundColor: '#f5f5f5',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                textAlign: 'center',
                marginBottom: '30px',
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <h1 style={{ 
                    color: '#333', 
                    marginBottom: '10px',
                    fontSize: '2.5rem'
                }}>
                    Pokémon Memory Game
                </h1>
                <p style={{ 
                    fontSize: '18px', 
                    color: '#666',
                    marginBottom: '20px'
                }}>
                    Get points by clicking on an image but don't click on any more than once!
                </p>
                
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '40px',
                    fontSize: '20px',
                    fontWeight: 'bold'
                }}>
                    <div style={{ color: '#4CAF50' }}>
                        Score: <span style={{ fontSize: '24px' }}>{score}</span>
                    </div>
                    <div style={{ color: '#FF9800' }}>
                        Best Score: <span style={{ fontSize: '24px' }}>{bestScore}</span>
                    </div>
                </div>
            </div>

            {clickHistory.length > 0 && !isArrayUnique(clickHistory) && (
                <div style={{
                    textAlign: 'center',
                    padding: '20px',
                    backgroundColor: '#ffebee',
                    borderRadius: '10px',
                    marginBottom: '20px',
                    border: '2px solid #f44336'
                }}>
                    <h1 style={{ color: '#d32f2f', margin: 0 }}>
                        Game Over! You clicked a Pokémon twice!
                    </h1>
                    <p style={{ color: '#666', fontSize: '18px' }}>
                        Click any Pokémon to start a new game
                    </p>
                </div>
            )}

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '20px', 
                padding: '20px',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {pokemons.map((pokemon) => (
                    <div
                        key={pokemon.id}
                        onClick={() => handleBlockClick(pokemon.id)}
                        style={{
                            padding: '15px',
                            backgroundColor: 'white',
                            border: '2px solid #e0e0e0',
                            borderRadius: '15px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            height: '320px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
                            e.currentTarget.style.borderColor = '#4CAF50';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                            e.currentTarget.style.borderColor = '#e0e0e0';
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            left: '0',
                            right: '0',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            color: 'white',
                            padding: '8px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            textTransform: 'capitalize',
                            zIndex: 2
                        }}>
                            {pokemon.name}
                        </div>

                        <div style={{
                            width: '180px',
                            height: '180px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '30px',
                            marginBottom: '15px'
                        }}>
                            <PokemonImageSimple name={pokemon.name} />
                        </div>

                        <div style={{
                            marginTop: 'auto',
                            padding: '10px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            fontSize: '14px',
                            color: '#666',
                            width: '100%',
                            textAlign: 'center'
                        }}>
                            Click to select
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}