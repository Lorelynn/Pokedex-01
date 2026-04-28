// src/PokemonModal.jsx
import { useContext } from 'react';
import usePokemonModal from './hooks/usePokemonModal'; 
import { ThemeContext } from './context/ThemeContext.jsx'; 

function PokemonModal({ pokemon, onClose }) {

    const { theme } = useContext(ThemeContext);

    const { 
        isOpen, activeTab, setActiveTab, evolutions, themeColor, formatId, imageUrl 
    } = usePokemonModal(pokemon);

    if (!isOpen) return null; 

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" style={{ backgroundColor: themeColor }} onClick={(e) => e.stopPropagation()}>
                
                <div className="modal-header">
                    <button className="back-btn" onClick={onClose}>&larr;</button>
                    <h1 className="watermark">{pokemon.name}</h1>
                </div>

                <div className="modal-hero">
                    <img src={imageUrl} alt={pokemon.name} className="hero-image" />
                    <div className="hero-info">
                        <span className="hero-id">{formatId(pokemon.id)}</span>
                        <h2 className="hero-name">{pokemon.name}</h2>
                        <div className="hero-badges">
                            {pokemon.types?.map((t) => (
                                <span key={t.type.name} className="badge">
                                    {t.type.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="modal-tabs">
                    <div className={`tab ${activeTab === 'About' ? 'active' : ''}`} onClick={() => setActiveTab('About')}>About</div>
                    <div className={`tab ${activeTab === 'Stats' ? 'active' : ''}`} onClick={() => setActiveTab('Stats')}>Stats</div>
                    <div className={`tab ${activeTab === 'Evolution' ? 'active' : ''}`} onClick={() => setActiveTab('Evolution')}>Evolution</div>
                </div>

                <div className={`modal-body ${theme === 'dark' ? 'modal-body-dark' : ''}`}>

                    {activeTab === 'About' && (
                        <div>
                            <h3 className="section-title" style={{ color: themeColor }}>Pokédex Data</h3>
                            <div className="data-row">
                                <span className="data-label">Height</span>
                                <span className="data-value">{pokemon.height / 10} m</span>
                            </div>
                            <div className="data-row">
                                <span className="data-label">Weight</span>
                                <span className="data-value">{pokemon.weight / 10} kg</span>
                            </div>
                            <div className="data-row">
                                <span className="data-label">Abilities</span>
                                <div className="data-value abilities-list">
                                    {pokemon.abilities?.map((ab, index) => (
                                        <div key={ab.ability.name}>
                                            {index + 1}. {ab.ability.name.replace('-', ' ')}
                                            {ab.is_hidden && <span style={{fontSize: '0.8rem', color: 'gray'}}> (Hidden)</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Stats' && (
                        <div>
                            <h3 className="section-title" style={{ color: themeColor }}>Base Stats</h3>
                            {pokemon.stats.map((s) => (
                                <div className="data-row stat-row" key={s.stat.name}>
                                    <span className="data-label stat-name">{s.stat.name}</span>
                                    <span className="data-value stat-number">{s.base_stat}</span>
                                    <div className="stat-bar-bg">
                                        <div className="stat-bar-fill" style={{ 
                                            width: `${(s.base_stat / 255) * 100}%`, 
                                            backgroundColor: themeColor 
                                        }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'Evolution' && (
                        <div>
                            <h3 className="section-title" style={{ color: themeColor }}>Evolution Chain</h3>
                            <div className="evo-container">
                                {evolutions.length > 0 ? evolutions.map((evo, index) => (
                                    <div className="evo-item" key={evo.name}>
                                        <img src={evo.img} alt={evo.name} className="evo-img"/>
                                        <span className="evo-name">{evo.name}</span>
                                        {index < evolutions.length - 1 && <span className="evo-arrow">&rarr;</span>}
                                    </div>
                                )) : <p>Loading evolutions...</p>}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default PokemonModal;