import React, { Component } from 'react';

class GitHubRepos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        const { username } = this.props;
        fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=32`)
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    this.setState({ repos: data, loading: false });
                } else {
                    this.setState({ error: 'Failed to fetch repos', loading: false });
                }
            })
            .catch((err) => {
                this.setState({ error: err.message, loading: false });
            });
    }

    getLanguageColor(language) {
        // Simple mapping of some common languages to colors used on GitHub
        const colors = {
            'JavaScript': '#f1e05a',
            'Python': '#3572A5',
            'C++': '#f34b7d',
                'C#': '#178600',
                    'TypeScript': '#2b7489',
                        'Java': '#b07219',
                            'Ruby': '#701516',
                                'PHP': '#4F5D95',
                                    'CSS': '#563d7c',
                                        'Shell': '#89e051',
                                            'Go': '#00ADD8',
      'default': '#ededed',
};
return colors[language] || colors.default;
  }

render() {
    const { repos, loading, error } = this.state;

    if (loading) return <p style={{ color: '#c9d1d9' }}>Loading GitHub Repos...</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '16px',
                backgroundColor: '#e6e6e6',
                padding: '16px',
                border: '1px solid #adadad',
                borderRadius: '8px',
                color: '#c9d1d9',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                width: '90%'
            }}
        >
            {repos.map((repo) => (
                <div
                    key={repo.id}
                    style={{
                        backgroundColor: '#e6e6e6',
                        border: '1px solid #adadad',
                        borderRadius: '8px',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '140px',
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontWeight: '600',
                                color: '#58a6ff',
                                fontSize: '16px',
                                textDecoration: 'none',
                            }}
                            onMouseOver={e => (e.currentTarget.style.textDecoration = 'underline')}
                            onMouseOut={e => (e.currentTarget.style.textDecoration = 'none')}
                        >
                            {repo.name}
                        </a>
                        <span
                            style={{
                                backgroundColor: '#30363d',
                                color: '#8b949e',
                                fontSize: '12px',
                                padding: '2px 8px',
                                borderRadius: '2em',
                                height: '20px',
                                lineHeight: '16px',
                                userSelect: 'none',
                            }}
                        >
                            Public
                        </span>
                    </div>
                    {repo.description && (
                        <p
                            style={{
                                margin: '8px 0 12px 0',
                                fontSize: '13px',
                                color: '#8b949e',
                                lineHeight: '1.3',
                                flexGrow: 1,
                                textAlign: 'left'
                            }}
                        >
                            {repo.description}
                        </p>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', color: '#8b949e', gap: '12px' }}>
                        {repo.language && (
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span
                                    style={{
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        backgroundColor: this.getLanguageColor(repo.language),
                                        display: 'inline-block',
                                    }}
                                ></span>
                                {repo.language}
                            </span>
                        )}
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <svg
                                height="16"
                                width="16"
                                aria-label="star"
                                viewBox="0 0 16 16"
                                version="1.1"
                                fill="#8b949e"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M8 12.027l3.717 2.087-1-4.279 3.28-2.843-4.365-.374L8 3 6.368 6.618l-4.365.374 3.28 2.843-1 4.279L8 12.027z" />
                            </svg>
                            {repo.stargazers_count}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
}

export default GitHubRepos;
