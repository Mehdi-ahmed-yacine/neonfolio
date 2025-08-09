import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories?.map((category) => (
        <button
          key={category?.id}
          onClick={() => onCategoryChange(category?.id)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category?.id
              ? 'bg-primary text-primary-foreground shadow-glow-sm'
              : 'bg-muted/30 text-muted-foreground hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20'
          }`}
        >
          <Icon 
            name={category?.icon} 
            size={18} 
            className={activeCategory === category?.id ? 'text-primary-foreground' : 'text-current'} 
          />
          <span>{category?.name}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${
            activeCategory === category?.id
              ? 'bg-primary-foreground/20 text-primary-foreground'
              : 'bg-muted text-muted-foreground'
          }`}>
            {category?.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;