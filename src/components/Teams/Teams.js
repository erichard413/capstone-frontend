import React from 'react';
import TeamCard from './TeamCard';
import '../../stylesheets/components/Teams/Teams.css';

function Teams({teams}) {
    return (
        <div className="Teams main-content">
            
            {teams && teams.map(t => (
                    <TeamCard team={t} key={t.id} />
            )
            )}
        </div>
    )
}

export default Teams;