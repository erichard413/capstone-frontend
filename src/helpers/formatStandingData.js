function formatStandingData(data, format) {
    switch (format) {
        // create one array that holds an object for each team record, then sort based on league rank.
        case "League": {
            const output = [];
            data.map(d => output.push(...d.teamRecords));
            let sorted = output.sort((a,b)=> (+a.leagueRank > +b.leagueRank) ? 1 : ((+b.leagueRank > +a.leagueRank) ? -1 : 0));
            return sorted;
        }
        // divide into two arrays of objects, EAST and WEST, then sort each one based on conference rank.
        case "Conference": {
            const eastConf = [];
            const westConf = [];
            data.map(d => {
                if (d.conference.id === 6 || d.conference.name === "Eastern") {
                    eastConf.push(...d.teamRecords);
                }
                if (d.conference.id === 5 || d.conference.name === "Western") {
                    westConf.push(...d.teamRecords);
                }
                return d;
            });
            let eastSorted = eastConf.sort((a,b)=> (+a.conferenceRank > +b.conferenceRank) ? 1 : ((+b.conferenceRank > +a.conferenceRank) ? -1 : 0));
            let westSorted = westConf.sort((a,b)=> (+a.conferenceRank > +b.conferenceRank) ? 1 : ((+b.conferenceRank > +a.conferenceRank) ? -1 : 0));
            return {Eastern: eastSorted, Western: westSorted};
        }
        //  shift off top 3 teams in each array. Then find wildcard teams based on wildCardRank
        case "WildCard": {
            let metro = [...data[0].teamRecords];
            let atlantic = [...data[1].teamRecords];
            let central = [...data[2].teamRecords];
            let pacific = [...data[3].teamRecords];
            // top three in each division
            const pacificTop3 = [];
            const centralTop3 = [];
            const metroTop3 = [];
            const atlanticTop3 = [];
            // each of these arrays will hold 2 wildcard teams
            const eastWildCards = [];
            const westWildCards = [];
            // all other teams will go there
            const eastConf = [];
            const westConf = [];

            // shift off top 3 teams in each division, store to top 3's
            for(let i = 0; i<3; i++) {
                metroTop3.push(metro.shift());
                atlanticTop3.push(atlantic.shift());
                centralTop3.push(central.shift());
                pacificTop3.push(pacific.shift());
            }
            // all other teams will either go in wild cards, or conference.
            metro.map(t => {
                if (+t.wildCardRank <= 2 && +t.wildCardRank !== 0) {
                    eastWildCards.push(t);
                } else {
                    eastConf.push(t);
                }
            });
            atlantic.map(t => {
                if (+t.wildCardRank <= 2 && +t.wildCardRank !== 0) {
                    eastWildCards.push(t);
                } else {
                    eastConf.push(t);
                }
            });
            central.map(t => {
                if (+t.wildCardRank <= 2 && +t.wildCardRank !== 0) {
                    westWildCards.push(t);
                } else {
                    westConf.push(t);
                }
            });
            pacific.map(t => {
                if (+t.wildCardRank <= 2 && +t.wildCardRank !== 0) {
                    westWildCards.push(t);
                } else {
                    westConf.push(t);
                }
            });

            let eastSorted = eastConf.sort((a,b)=> (+a.conferenceRank > +b.conferenceRank) ? 1 : ((+b.conferenceRank > +a.conferenceRank) ? -1 : 0));
            let westSorted = westConf.sort((a,b)=> (+a.conferenceRank > +b.conferenceRank) ? 1 : ((+b.conferenceRank > +a.conferenceRank) ? -1 : 0));
            let eastWildCardSorted = eastWildCards.sort((a,b)=> (+a.wildCardRank > +b.wildCardRank) ? 1 : ((+b.wildCardRank > +a.wildCardRank) ? -1 : 0));
            let westWildCardSorted = westWildCards.sort((a,b)=> (+a.wildCardRank > +b.wildCardRank) ? 1 : ((+b.wildCardRank > +a.wildCardRank) ? -1 : 0));
            
            let output = {
                metro : metroTop3,
                atlantic : atlanticTop3,
                central : centralTop3,
                pacific : pacificTop3,
                eastWildCard: eastWildCardSorted,
                westWildCard : westWildCardSorted,
                east: eastSorted,
                west: westSorted
            };

            return output;
        }
        default: 
            return data;
    }
}

export default formatStandingData;