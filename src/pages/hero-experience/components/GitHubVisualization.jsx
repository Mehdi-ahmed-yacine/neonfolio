import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const GitHubVisualization = () => {
  const [contributions, setContributions] = useState([]);
  const [stats, setStats] = useState({
    totalCommits: 1247,
    currentStreak: 23,
    longestStreak: 87,
    repositories: 42
  });

  // Generate mock contribution data
  useEffect(() => {
    const generateContributions = () => {
      const data = [];
      const today = new Date();
      
      for (let i = 364; i >= 0; i--) {
        const date = new Date(today);
        date?.setDate(date?.getDate() - i);
        
        const contributions = Math.floor(Math.random() * 8);
        data?.push({
          date: date?.toISOString()?.split('T')?.[0],
          count: contributions,
          level: contributions === 0 ? 0 : contributions <= 2 ? 1 : contributions <= 4 ? 2 : contributions <= 6 ? 3 : 4
        });
      }
      
      setContributions(data);
    };

    generateContributions();
  }, []);

  const getContributionColor = (level) => {
    switch (level) {
      case 0: return 'bg-muted/20';
      case 1: return 'bg-primary/30';
      case 2: return 'bg-primary/50';
      case 3: return 'bg-primary/70';
      case 4: return 'bg-primary';
      default: return 'bg-muted/20';
    }
  };

  return (
    <div className="w-full max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Github" size={24} className="text-foreground" />
          <h3 className="text-xl font-semibold text-foreground">GitHub Activity</h3>
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span>Active Developer</span>
          </div>
        </div>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="glass-effect rounded-lg p-4 border border-primary/20">
          <div className="text-2xl font-bold text-primary">{stats?.totalCommits?.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">Total Commits</div>
        </div>
        
        <div className="glass-effect rounded-lg p-4 border border-accent/20">
          <div className="text-2xl font-bold text-accent">{stats?.currentStreak}</div>
          <div className="text-sm text-muted-foreground">Current Streak</div>
        </div>
        
        <div className="glass-effect rounded-lg p-4 border border-success/20">
          <div className="text-2xl font-bold text-success">{stats?.longestStreak}</div>
          <div className="text-sm text-muted-foreground">Longest Streak</div>
        </div>
        
        <div className="glass-effect rounded-lg p-4 border border-warning/20">
          <div className="text-2xl font-bold text-warning">{stats?.repositories}</div>
          <div className="text-sm text-muted-foreground">Repositories</div>
        </div>
      </div>
      {/* Contribution Graph */}
      <div className="glass-effect rounded-xl p-6 border border-primary/20">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-medium text-foreground">Contribution Activity</h4>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Less</span>
            <div className="flex space-x-1">
              {[0, 1, 2, 3, 4]?.map(level => (
                <div
                  key={level}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>

        {/* Contribution Grid */}
        <div className="overflow-x-auto">
          <div className="grid grid-cols-53 gap-1 min-w-max">
            {contributions?.map((day, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-sm ${getContributionColor(day?.level)} hover:ring-2 hover:ring-primary/50 transition-all duration-200 cursor-pointer`}
                title={`${day?.count} contributions on ${day?.date}`}
              />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-6 pt-6 border-t border-primary/10">
          <h5 className="text-sm font-medium text-foreground mb-3">Recent Activity</h5>
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-sm">
              <Icon name="GitCommit" size={16} className="text-primary" />
              <span className="text-muted-foreground">Pushed 3 commits to</span>
              <span className="text-foreground font-medium">portfolio-v2</span>
              <span className="text-muted-foreground">2 hours ago</span>
            </div>
            
            <div className="flex items-center space-x-3 text-sm">
              <Icon name="GitPullRequest" size={16} className="text-accent" />
              <span className="text-muted-foreground">Opened pull request in</span>
              <span className="text-foreground font-medium">react-components</span>
              <span className="text-muted-foreground">5 hours ago</span>
            </div>
            
            <div className="flex items-center space-x-3 text-sm">
              <Icon name="Star" size={16} className="text-warning" />
              <span className="text-muted-foreground">Starred</span>
              <span className="text-foreground font-medium">awesome-react-hooks</span>
              <span className="text-muted-foreground">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubVisualization;