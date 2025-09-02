import React from 'react';

const CircularProgressBar = ({ percentage, size = 130, strokeWidth = 8 }) => {
       const radius = (size - strokeWidth) / 2;
       const circumference = 2 * Math.PI * radius;
       const progress = circumference * (1 - percentage / 100);

       return (
              <svg width={size} height={size}>
                     <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            className='stroke-secondary light:stroke-light-secondary'
                            strokeWidth={strokeWidth}
                            fill="none"
                     />
                     <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            className='stroke-primary'
                            strokeWidth={strokeWidth}
                            fill="none"
                            strokeDasharray={circumference}
                            strokeDashoffset={progress}
                            strokeLinecap="round"
                            transform={`rotate(-90 ${size / 2} ${size / 2})`}
                     />
                     <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="24"
                            // fill="#ffffff"
                            fontWeight="bold"
                            className='fill-white light:fill-light-tertiary'
                     >
                            {percentage}%
                     </text>
              </svg>
       );
};

export default CircularProgressBar;
