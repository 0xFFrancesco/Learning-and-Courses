import React, { useState } from 'react';

type ExperimentRowProps = {
    title: string;
};

const ExperimentRow: React.FC<ExperimentRowProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="experiment-row">
            <div className={`experiment-row-title ${isOpen ? 'modOpen' : null}`} onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span> <span className="experiment-row-title-icon">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && <div className={`experiment-row-content ${isOpen ? 'modOpen' : null}`}>{children}</div>}
        </div>
    );
};

export default ExperimentRow;
