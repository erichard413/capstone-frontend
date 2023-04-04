import React from 'react';
import {useState} from 'react';
import TeamCard from './TeamCard';
import '../../stylesheets/components/Teams/Teams.css';

function Teams({teams}) {
    return (
        <div className="Teams main-content">
            
            {teams && teams.map(t => (
                <>
                    <img className="Standings-logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${t.id}.svg`} key={`${t.id}-img`} style={{width: '30px', height: '30px'}} alt={`logo-${t.name}`} />
                    <TeamCard team={t} key={t.id} />
                </>

            )
            )}
        </div>
    )
}

export default Teams;