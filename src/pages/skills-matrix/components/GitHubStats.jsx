import React from 'react';
import Icon from '../../../components/AppIcon';

const GitHubStats = () => {
  // Mock GitHub data - in real implementation, this would come from GitHub API
  const githubStats = {
    totalCommits: 1247,
    totalRepos: 42,
    totalStars: 156,
    totalForks: 23,
    currentStreak: 15,
    longestStreak: 47,
    contributionsThisYear: 892,
    languageStats: [
      { name: "JavaScript", percentage: 45, color: "#f1e05a" },
      { name: "TypeScript", percentage: 25, color: "#2b7489" },
      { name: "Python", percentage: 15, color: "#3572A5" },
      { name: "CSS", percentage: 10, color: "#563d7c" },
      { name: "Other", percentage: 5, color: "#8a8a8a" }
    ],
    recentActivity: [
      { type: "commit", repo: "neonfolio-v2", message: "Add skills matrix animations", time: "2 hours ago" },
      { type: "pr", repo: "react-components", message: "Implement hexagonal grid layout", time: "1 day ago" },
      { type: "issue", repo: "portfolio-backend", message: "Optimize API response times", time: "2 days ago" },
      { type: "commit", repo: "learning-tracker", message: "Update skill proficiency levels", time: "3 days ago" }
    ]
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'commit': return 'GitCommit';
      case 'pr': return 'GitPullRequest';
      case 'issue': return 'AlertCircle';
      default: return 'Activity';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">GitHub Activity</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real-time insights into my coding activity and contribution patterns across various projects.
        </p>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors duration-300">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Icon name="GitCommit" size={24} className="text-primary" />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">{githubStats?.totalCommits?.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">Total Commits</div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/30 transition-colors duration-300">
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Icon name="FolderOpen" size={24} className="text-accent" />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">{githubStats?.totalRepos}</div>
          <div className="text-sm text-muted-foreground">Repositories</div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-warning/30 transition-colors duration-300">
          <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Icon name="Star" size={24} className="text-warning" />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">{githubStats?.totalStars}</div>
          <div className="text-sm text-muted-foreground">Stars Earned</div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-success/30 transition-colors duration-300">
          <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Icon name="Zap" size={24} className="text-success" />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">{githubStats?.currentStreak}</div>
          <div className="text-sm text-muted-foreground">Day Streak</div>
        </div>
      </div>
      {/* Language Stats */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6">Language Distribution</h3>
        <div className="space-y-4">
          {githubStats?.languageStats?.map((lang, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: lang?.color }}
                  />
                  <span className="text-sm font-medium text-foreground">{lang?.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{lang?.percentage}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${lang?.percentage}%`,
                    backgroundColor: lang?.color
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {githubStats?.recentActivity?.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors duration-200">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={getActivityIcon(activity?.type)} size={16} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium text-foreground">{activity?.repo}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{activity?.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{activity?.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Contribution Graph Placeholder */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-xl font-semibold text-foreground mb-6">Contribution Graph</h3>
        <div className="grid grid-cols-53 gap-1">
          {Array.from({ length: 371 }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-sm ${
                Math.random() > 0.7 
                  ? 'bg-primary' 
                  : Math.random() > 0.5 
                    ? 'bg-primary/60' 
                    : Math.random() > 0.3 
                      ? 'bg-primary/30' :'bg-muted'
              }`}
              title={`${Math.floor(Math.random() * 10)} contributions`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
          <span>Less</span>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-muted rounded-sm" />
            <div className="w-3 h-3 bg-primary/30 rounded-sm" />
            <div className="w-3 h-3 bg-primary/60 rounded-sm" />
            <div className="w-3 h-3 bg-primary rounded-sm" />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;