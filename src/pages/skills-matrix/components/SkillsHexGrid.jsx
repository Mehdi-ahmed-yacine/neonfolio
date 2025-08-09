import React, { useState, useEffect } from 'react';
import SkillHexagon from './SkillHexagon';

const SkillsHexGrid = ({ skills, onSkillClick, activeSkill }) => {
  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    // Animate skills appearance with staggered delay
    const timer = setTimeout(() => {
      setVisibleSkills(skills);
    }, 300);

    return () => clearTimeout(timer);
  }, [skills]);

  // Create hexagonal grid layout
  const createHexGrid = (skills) => {
    const rows = [];
    const skillsPerRow = [4, 5, 6, 5, 4]; // Hexagonal pattern
    let skillIndex = 0;

    skillsPerRow?.forEach((count, rowIndex) => {
      const row = [];
      const startIndex = skillIndex;
      
      for (let i = 0; i < count && skillIndex < skills?.length; i++) {
        row?.push(skills?.[skillIndex]);
        skillIndex++;
      }
      
      if (row?.length > 0) {
        rows?.push({
          skills: row,
          offset: rowIndex % 2 === 1 ? 'translate-x-16' : '',
          index: rowIndex
        });
      }
    });

    return rows;
  };

  const hexRows = createHexGrid(visibleSkills);

  return (
    <div className="flex flex-col items-center space-y-4 py-8">
      {hexRows?.map((row, rowIndex) => (
        <div 
          key={rowIndex}
          className={`flex items-center justify-center space-x-4 ${row?.offset} transition-all duration-500`}
          style={{ animationDelay: `${rowIndex * 200}ms` }}
        >
          {row?.skills?.map((skill, skillIndex) => (
            <SkillHexagon
              key={skill?.id}
              skill={skill}
              index={rowIndex * 5 + skillIndex}
              isActive={activeSkill?.id === skill?.id}
              onClick={onSkillClick}
            />
          ))}
        </div>
      ))}
      {/* Mobile Grid Fallback */}
      <div className="md:hidden grid grid-cols-3 gap-4 w-full max-w-sm">
        {visibleSkills?.map((skill, index) => (
          <SkillHexagon
            key={skill?.id}
            skill={skill}
            index={index}
            isActive={activeSkill?.id === skill?.id}
            onClick={onSkillClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsHexGrid;