import React, { useState } from 'react';

type ExperimentRowProps = {
    title: string;
};

const ExperimentRow: React.FC<ExperimentRowProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`experiment-row ${isOpen ? 'modOpen' : null}`} onClick={!isOpen ? () => setIsOpen(true) : undefined}>
            <div className={`experiment-row-title ${isOpen ? 'modOpen' : null}`} onClick={isOpen ? () => setIsOpen(false) : undefined}>
                <span>{title}</span> <span className="experiment-row-title-icon">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && <div className={`experiment-row-content ${isOpen ? 'modOpen' : null}`}>{children}</div>}
        </div>
    );
};

export default ExperimentRow;
