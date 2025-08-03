import { useState } from 'react';

interface ThemeInputProps {
    onSubmit: (theme: string) => void;
}

function ThemeInput({ onSubmit }: ThemeInputProps) {
    const [theme, setTheme] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!theme.trim()) {
            setError('Please enter a theme name');
            return;
        }

        onSubmit(theme);
    };

    return (
        <div className="theme-input-container">
            <h2>Generate Your Adventure</h2>
            <p>Enter a theme for your interactive story</p>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        placeholder="Enter a theme (e.g. pirates, space, medieval, mystery...)"
                        className={error ? 'error' : ''}
                    />
                    {error && <p className="error-text">{error}</p>}
                </div>
                <button type="submit" className="generate-btn">
                    Generate Story
                </button>
            </form>

            <div className="examples">
                <h3>Popular themes:</h3>
                <ul>
                    <li>Pirates</li>
                    <li>Space Adventure</li>
                    <li>Medieval Fantasy</li>
                    <li>Mystery</li>
                    <li>Cyberpunk</li>
                    <li>Zombie Apocalypse</li>
                    <li>Time Travel</li>
                    <li>Wild West</li>
                </ul>
            </div>
        </div>
    );
}

export default ThemeInput;
