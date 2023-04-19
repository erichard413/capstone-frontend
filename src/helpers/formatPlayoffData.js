// const mockPlayoffData = {
// 	"copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2023. All Rights Reserved.",
// 	"id": 1,
// 	"name": "Playoffs",
// 	"season": "20212022",
// 	"defaultRound": 4,
// 	"rounds": [
// 		{
// 			"number": 1,
// 			"code": 1,
// 			"names": {
// 				"name": "First Round",
// 				"shortName": "R1"
// 			},
// 			"format": {
// 				"name": "BO7",
// 				"description": "Best of 7",
// 				"numberOfGames": 7,
// 				"numberOfWins": 4
// 			},
// 			"series": [
// 				{
// 					"seriesNumber": 1,
// 					"seriesCode": "A",
// 					"names": {
// 						"matchupName": "Panthers (1) vs. Capitals (WC2)",
// 						"matchupShortName": "FLA v WSH",
// 						"teamAbbreviationA": "FLA",
// 						"teamAbbreviationB": "WSH",
// 						"seriesSlug": "panthers-vs-capitals-series-a"
// 					},
// 					"currentGame": {
// 						"seriesSummary": {
// 							"gamePk": 2021030116,
// 							"gameNumber": 6,
// 							"gameLabel": "Game 6",
// 							"necessary": true,
// 							"gameCode": 116,
// 							"gameTime": "2022-05-13T23:30:00Z",
// 							"seriesStatus": "Panthers win 4-2",
// 							"seriesStatusShort": "FLA wins 4-2"
// 						}
// 					},
// 					"conference": {
// 						"id": 6,
// 						"name": "Eastern",
// 						"link": "/api/v1/conferences/6"
// 					},
// 					"round": {
// 						"number": 1
// 					},
// 					"matchupTeams": [
// 						{
// 							"team": {
// 								"id": 13,
// 								"name": "Florida Panthers",
// 								"link": "/api/v1/teams/13"
// 							},
// 							"seed": {
// 								"type": "1",
// 								"rank": 1,
// 								"isTop": true
// 							},
// 							"seriesRecord": {
// 								"wins": 4,
// 								"losses": 2
// 							}
// 						},
// 						{
// 							"team": {
// 								"id": 15,
// 								"name": "Washington Capitals",
// 								"link": "/api/v1/teams/15"
// 							},
// 							"seed": {
// 								"type": "WC2",
// 								"rank": 4,
// 								"isTop": false
// 							},
// 							"seriesRecord": {
// 								"wins": 2,
// 								"losses": 4
// 							}
// 						}
// 					]
// 				},
// 				{
// 					"seriesNumber": 2,
// 					"seriesCode": "B",
// 					"names": {
// 						"matchupName": "Maple Leafs (2) vs. Lightning (3)",
// 						"matchupShortName": "TOR v TBL",
// 						"teamAbbreviationA": "TOR",
// 						"teamAbbreviationB": "TBL",
// 						"seriesSlug": "maple-leafs-vs-lightning-series-b"
// 					},
// 					"currentGame": {
// 						"seriesSummary": {
// 							"gamePk": 2021030127,
// 							"gameNumber": 7,
// 							"gameLabel": "Game 7",
// 							"necessary": true,
// 							"gameCode": 127,
// 							"gameTime": "2022-05-14T23:00:00Z",
// 							"seriesStatus": "Lightning win 4-3",
// 							"seriesStatusShort": "TBL wins 4-3"
// 						}
// 					},
// 					"conference": {
// 						"id": 6,
// 						"name": "Eastern",
// 						"link": "/api/v1/conferences/6"
// 					},
// 					"round": {
// 						"number": 1
// 					},
// 					"matchupTeams": [
// 						{
// 							"team": {
// 								"id": 10,
// 								"name": "Toronto Maple Leafs",
// 								"link": "/api/v1/teams/10"
// 							},
// 							"seed": {
// 								"type": "2",
// 								"rank": 2,
// 								"isTop": true
// 							},
// 							"seriesRecord": {
// 								"wins": 3,
// 								"losses": 4
// 							}
// 						},
// 						{
// 							"team": {
// 								"id": 14,
// 								"name": "Tampa Bay Lightning",
// 								"link": "/api/v1/teams/14"
// 							},
// 							"seed": {
// 								"type": "3",
// 								"rank": 3,
// 								"isTop": false
// 							},
// 							"seriesRecord": {
// 								"wins": 4,
// 								"losses": 3
// 							}
// 						}
// 					]
// 				},
// 				{
// 					"seriesNumber": 3,
// 					"seriesCode": "C",
// 					"names": {
// 						"matchupName": "Hurricanes (1) vs. Bruins (WC1)",
// 						"matchupShortName": "CAR v BOS",
// 						"teamAbbreviationA": "CAR",
// 						"teamAbbreviationB": "BOS",
// 						"seriesSlug": "hurricanes-vs-bruins-series-c"
// 					},
// 					"currentGame": {
// 						"seriesSummary": {
// 							"gamePk": 2021030137,
// 							"gameNumber": 7,
// 							"gameLabel": "Game 7",
// 							"necessary": true,
// 							"gameCode": 137,
// 							"gameTime": "2022-05-14T20:30:00Z",
// 							"seriesStatus": "Hurricanes win 4-3",
// 							"seriesStatusShort": "CAR wins 4-3"
// 						}
// 					},
// 					"conference": {
// 						"id": 6,
// 						"name": "Eastern",
// 						"link": "/api/v1/conferences/6"
// 					},
// 					"round": {
// 						"number": 1
// 					},
// 					"matchupTeams": [
// 						{
// 							"team": {
// 								"id": 12,
// 								"name": "Carolina Hurricanes",
// 								"link": "/api/v1/teams/12"
// 							},
// 							"seed": {
// 								"type": "1",
// 								"rank": 1,
// 								"isTop": true
// 							},
// 							"seriesRecord": {
// 								"wins": 4,
// 								"losses": 3
// 							}
// 						},
// 						{
// 							"team": {
// 								"id": 6,
// 								"name": "Boston Bruins",
// 								"link": "/api/v1/teams/6"
// 							},
// 							"seed": {
// 								"type": "WC1",
// 								"rank": 4,
// 								"isTop": false
// 							},
// 							"seriesRecord": {
// 								"wins": 3,
// 								"losses": 4
// 							}
// 						}
// 					]
// 				},
// 				{
// 					"seriesNumber": 4,
// 					"seriesCode": "D",
// 					"names": {
// 						"matchupName": "Rangers (2) vs. Penguins (3)",
// 						"matchupShortName": "NYR v PIT",
// 						"teamAbbreviationA": "NYR",
// 						"teamAbbreviationB": "PIT",
// 						"seriesSlug": "rangers-vs-penguins-series-d"
// 					},
// 					"currentGame": {
// 						"seriesSummary": {
// 							"gamePk": 2021030147,
// 							"gameNumber": 7,
// 							"gameLabel": "Game 7",
// 							"necessary": true,
// 							"gameCode": 147,
// 							"gameTime": "2022-05-15T23:00:00Z",
// 							"seriesStatus": "Rangers win 4-3",
// 							"seriesStatusShort": "NYR wins 4-3"
// 						}
// 					},
// 					"conference": {
// 						"id": 6,
// 						"name": "Eastern",
// 						"link": "/api/v1/conferences/6"
// 					},
// 					"round": {
// 						"number": 1
// 					},
// 					"matchupTeams": [
// 						{
// 							"team": {
// 								"id": 3,
// 								"name": "New York Rangers",
// 								"link": "/api/v1/teams/3"
// 							},
// 							"seed": {
// 								"type": "2",
// 								"rank": 2,
// 								"isTop": true
// 							},
// 							"seriesRecord": {
// 								"wins": 4,
// 								"losses": 3
// 							}
// 						},
// 						{
// 							"team": {
// 								"id": 5,
// 								"name": "Pittsburgh Penguins",
// 								"link": "/api/v1/teams/5"
// 							},
// 							"seed": {
// 								"type": "3",
// 								"rank": 3,
// 								"isTop": false
// 							},
// 							"seriesRecord": {
// 								"wins": 3,
// 								"losses": 4
// 							}
// 						}
// 					]
// 				},
// 				{
// 					"seriesNumber": 5,
// 					"seriesCode": "E",
// 					"names": {
// 						"matchupName": "Avalanche (1) vs. Predators (WC2)",
// 						"matchupShortName": "COL v NSH",
// 						"teamAbbreviationA": "COL",
// 						"teamAbbreviationB": "NSH",
// 						"seriesSlug": "avalanche-vs-predators-series-e"
// 					},
// 					"currentGame": {
// 						"seriesSummary": {
// 							"gamePk": 2021030154,
// 							"gameNumber": 4,
// 							"gameLabel": "Game 4",
// 							"necessary": true,
// 							"gameCode": 154,
// 							"gameTime": "2022-05-10T01:30:00Z",
// 							"seriesStatus": "Avalanche win 4-0",
// 							"seriesStatusShort": "COL wins 4-0"
// 						}
// 					},
// 					"conference": {
// 						"id": 5,
// 						"name": "Western",
// 						"link": "/api/v1/conferences/5"
// 					},
// 					"round": {
// 						"number": 1
// 					},
// 					"matchupTeams": [
// 						{
// 							"team": {
// 								"id": 21,
// 								"name": "Colorado Avalanche",
// 								"link": "/api/v1/teams/21"
// 							},
// 							"seed": {
// 								"type": "1",
// 								"rank": 1,
// 								"isTop": true
// 							},
// 							"seriesRecord": {
// 								"wins": 4,
// 								"losses": 0
// 							}
// 						},
// 						{
// 							"team": {
// 								"id": 18,
// 								"name": "Nashville Predators",
// 								"link": "/api/v1/teams/18"
// 							},
// 							"seed": {
// 								"type": "WC2",
// 								"rank": 4,
// 								"isTop": false
// 							},
// 							"seriesRecord": {
// 								"wins": 0,
// 								"losses": 4
// 							}
// 						}
// 					]
// 				},
// 				{
// 					"seriesNumber": 6,
// 					"seriesCode": "F",
// 					"names": {
// 						"matchupName": "Wild (2) vs. Blues (3)",
// 						"matchupShortName": "MIN v STL",
// 						"teamAbbreviationA": "MIN",
// 						"teamAbbreviationB": "STL",
// 						"seriesSlug": "wild-vs-blues-series-f"
// 					},
// 					"currentGame": {
// 						"seriesSummary": {
// 							"gamePk": 2021030166,
// 							"gameNumber": 6,
// 							"gameLabel": "Game 6",
// 							"necessary": true,
// 							"gameCode": 166,
// 							"gameTime": "2022-05-13T01:30:00Z",
// 							"seriesStatus": "Blues win 4-2",
// 							"seriesStatusShort": "STL wins 4-2"
// 						}
// 					},
// 					"conference": {
// 						"id": 5,
// 						"name": "Western",
// 						"link": "/api/v1/conferences/5"
// 					},
// 					"round": {
// 						"number": 1
// 					},
// 					"matchupTeams": [
// 						{
// 							"team": {
// 								"id": 30,
// 								"name": "Minnesota Wild",
// 								"link": "/api/v1/teams/30"
// 							},
// 							"seed": {
// 								"type": "2",
// 								"rank": 2,
// 								"isTop": true
// 							},
// 							"seriesRecord": {
// 								"wins": 2,
// 								"losses": 4
// 							}
// 						},
// 						{
// 							"team": {
// 								"id": 19,
// 								"name": "St. Louis Blues",
// 								"link": "/api/v1/teams/19"
// 							},
// 							"seed": {
// 								"type": "3",
// 								"rank": 3,
// 								"isTop": false
// 							},
// 							"seriesRecord": {
// 								"wins": 4,
// 								"losses": 2
// 							}
// 						}
// 					]
// 				},
// 				{
// 					"seriesNumber": 7,
// 					"seriesCode": "G",
// 					"names": {
// 						"matchupName": "Flames (1) vs. Stars (WC1)",
// 						"matchupShortName": "CGY v DAL",
// 						"teamAbbreviationA": "CGY",
// 						"teamAbbreviationB": "DAL",
// 						"seriesSlug": "flames-vs-stars-series-g"
// 					},
// 					"currentGame": {
// 						"seriesSummary": {
// 							"gamePk": 2021030177,
// 							"gameNumber": 7,
// 							"gameLabel": "Game 7",
// 							"necessary": true,
// 							"gameCode": 177,
// 							"gameTime": "2022-05-16T01:30:00Z",
// 							"seriesStatus": "Flames win 4-3",
// 							"seriesStatusShort": "CGY wins 4-3"
// 						}
// 					},
// 					"conference": {
// 						"id": 5,
// 						"name": "Western",
// 						"link": "/api/v1/conferences/5"
// 					},
// 					"round": {
// 						"number": 1
// 					},
// 					"matchupTeams": [
// 						{
// 							"team": {
// 								"id": 20,
// 								"name": "Calgary Flames",
// 								"link": "/api/v1/teams/20"
// 							},
// 							"seed": {
// 								"type": "1",
// 								"rank": 1,
// 								"isTop": true
// 							},
// 							"seriesRecord": {
// 								"wins": 4,
// 								"losses": 3
// 							}
// 						},
// 						{
// 							"team": {
// 								"id": 25,
// 								"name": "Dallas Stars",
// 								"link": "/api/v1/teams/25"
// 							},
// 							"seed": {
// 								"type": "WC1",
// 								"rank": 4,
// 								"isTop": false
// 							},
// 							"seriesRecord": {
// 								"wins": 3,
// 								"losses": 4
// 							}
// 						}
// 					]
// 				},
// 				{
// 					"seriesNumber": 8,
// 					"seriesCode": "H",
// 					"names": {
// 						"matchupName": "Oilers (2) vs. Kings (3)",
// 						"matchupShortName": "EDM v LAK",
// 						"teamAbbreviationA": "EDM",
// 						"teamAbbreviationB": "LAK",
// 						"seriesSlug": "oilers-vs-kings-series-h"
// 					},
// 					"currentGame": {
// 						"seriesSummary": {
// 							"gamePk": 2021030187,
// 							"gameNumber": 7,
// 							"gameLabel": "Game 7",
// 							"necessary": true,
// 							"gameCode": 187,
// 							"gameTime": "2022-05-15T02:00:00Z",
// 							"seriesStatus": "Oilers win 4-3",
// 							"seriesStatusShort": "EDM wins 4-3"
// 						}
// 					},
// 					"conference": {
// 						"id": 5,
// 						"name": "Western",
// 						"link": "/api/v1/conferences/5"
// 					},
// 					"round": {
// 						"number": 1
// 					},
// 					"matchupTeams": [
// 						{
// 							"team": {
// 								"id": 22,
// 								"name": "Edmonton Oilers",
// 								"link": "/api/v1/teams/22"
// 							},
// 							"seed": {
// 								"type": "2",
// 								"rank": 2,
// 								"isTop": true
// 							},
// 							"seriesRecord": {
// 								"wins": 4,
// 								"losses": 3
// 							}
// 						},
// 						{
// 							"team": {
// 								"id": 26,
// 								"name": "Los Angeles Kings",
// 								"link": "/api/v1/teams/26"
// 							},
// 							"seed": {
// 								"type": "3",
// 								"rank": 3,
// 								"isTop": false
// 							},
// 							"seriesRecord": {
// 								"wins": 3,
// 								"losses": 4
// 							}
// 						}
// 					]
// 				}
// 			]
// 		},
// 		{
// 			"number": 2,
// 			"code": 2,
// 			"names": {
// 				"name": "Second Round",
// 				"shortName": "R2"
// 			},
// 			"format": {
// 				"name": "BO7",
// 				"description": "Best of 7",
// 				"numberOfGames": 7,
// 				"numberOfWins": 4
// 			},
// 			"series": [
// 				{
// 					"seriesNumber": 1,
// 					"seriesCode": "I",
// 					"names": {
// 						"matchupName": "Panthers (1) vs. Lightning (3)",
// 						"matchupShortName": "FLA v TBL",
// 						"teamAbbreviationA": "FLA",
// 						"teamAbbreviationB": "TBL",
// 						"seriesSlug": "panthers-vs-lightning-series-i"
// 					},
// 					"currentGame": {
// 						"seriesSummary": {
// 							"gamePk": 2021030214,
// 							"gameNumber": 4,
// 							"gameLabel": "Game 4",
// 							"necessary": true,
// 							"gameCode": 214,
// 							"gameTime": "2022-05-23T23:00:00Z",
// 							"seriesStatus": "Lightning win 4-0",
// 							"seriesStatusShort": "TBL wins 4-0"
// 						}
// 					},
// 					"conference": {
// 						"id": 6,
// 						"name": "Eastern",
// 						"link": "/api/v1/conferences/6"
// 					},
// 					"round": {
// 						"number": 2
// 					},
// 					"matchupTeams": [
// 						{
// 							"team": {
// 								"id": 13,
// 								"name": "Florida Panthers",
// 								"link": "/api/v1/teams/13"
// 							},
// 							"seed": {
// 								"type": "1",
// 								"rank": 1,
// 								"isTop": true
// 							},
// 							"seriesRecord": {
// 								"wins": 0,
// 								"losses": 4
// 							}
// 						},
// 						{
// 							"team": {
// 								"id": 14,
// 								"name": "Tampa Bay Lightning",
// 								"link": "/api/v1/teams/14"
// 							},
// 							"seed": {
// 								"type": "3",
// 								"rank": 3,
// 								"isTop": false
// 							},
// 							"seriesRecord": {
// 								"wins": 4,
// 								"losses": 0
// 							}
// 						}
// 					]
// 				},
// 				{
// 					"seriesNumber": 2,
// 					"seriesCode": "J",
// 					"names": {
// 						"matchupName": "Hurricanes (1) vs. Rangers (2)",
// 						"matchupShortName": "CAR v NYR",
// 						"teamAbbreviationA": "CAR",
// 						"teamAbbreviationB": "NYR",
// 						"seriesSlug": "hurricanes-vs-rangers-series-j"
// 					},
// 					"currentGame": {
// 						"seriesSummary": {
// 							"gamePk": 2021030227,
// 							"gameNumber": 7,
// 							"gameLabel": "Game 7",
// 							"necessary": true,
// 							"gameCode": 227,
// 							"gameTime": "2022-05-31T00:00:00Z",
// 							"seriesStatus": "Rangers win 4-3",
// 							"seriesStatusShort": "NYR wins 4-3"
// 						}
// 					},
// 					"conference": {
// 						"id": 6,
// 						"name": "Eastern",
// 						"link": "/api/v1/conferences/6"
// 					},
// 					"round": {
// 						"number": 2
// 					},
// 					"matchupTeams": [
// 						{
// 							"team": {
// 								"id": 12,
// 								"name": "Carolina Hurricanes",
// 								"link": "/api/v1/teams/12"
// 							},
// 							"seed": {
// 								"type": "1",
// 								"rank": 1,
// 								"isTop": true
// 							},
// 							"seriesRecord": {
// 								"wins": 3,
// 								"losses": 4
// 							}
// 						},
// 						{
// 							"team": {
// 								"id": 3,
// 								"name": "New York Rangers",
// 								"link": "/api/v1/teams/3"
// 							},
// 							"seed": {
// 								"type": "2",
// 								"rank": 2,
// 								"isTop": false
// 							},
// 							"seriesRecord": {
// 								"wins": 4,
// 								"losses": 3
// 							}
// 						}
// 					]
// 				},
// 				{
// 					"seriesNumber": 3,
// 					"seriesCode": "K",
// 					"names": {
// 						"matchupName": "Avalanche (1) vs. Blues (3)",
// 						"matchupShortName": "COL v STL",
// 						"teamAbbreviationA": "COL",
// 						"teamAbbreviationB": "STL",
// 						"seriesSlug": "avalanche-vs-blues-series-k"
// 					},
// 					"currentGame": {
// 						"seriesSummary": {
// 							"gamePk": 2021030236,
// 							"gameNumber": 6,
// 							"gameLabel": "Game 6",
// 							"necessary": true,
// 							"gameCode": 236,
// 							"gameTime": "2022-05-28T00:00:00Z",
// 							"seriesStatus": "Avalanche win 4-2",
// 							"seriesStatusShort": "COL wins 4-2"
// 						}
// 					},
// 					"conference": {
// 						"id": 5,
// 						"name": "Western",
// 						"link": "/api/v1/conferences/5"
// 					},
// 					"round": {
// 						"number": 2
// 					},
// 					"matchupTeams": [
// 						{
// 							"team": {
// 								"id": 21,
// 								"name": "Colorado Avalanche",
// 								"link": "/api/v1/teams/21"
// 							},
// 							"seed": {
// 								"type": "1",
// 								"rank": 1,
// 								"isTop": true
// 							},
// 							"seriesRecord": {
// 								"wins": 4,
// 								"losses": 2
// 							}
// 						},
// 						{
// 							"team": {
// 								"id": 19,
// 								"name": "St. Louis Blues",
// 								"link": "/api/v1/teams/19"
// 							},
// 							"seed": {
// 								"type": "3",
// 								"rank": 3,
// 								"isTop": false
// 							},
// 							"seriesRecord": {
// 								"wins": 2,
// 								"losses": 4
// 							}
// 						}
// 					]
// 				},
// 				{
// 					"seriesNumber": 4,
// 					"seriesCode": "L",
// 					"names": {
// 						"matchupName": "Flames (1) vs. Oilers (2)",
// 						"matchupShortName": "CGY v EDM",
// 						"teamAbbreviationA": "CGY",
// 						"teamAbbreviationB": "EDM",
// 						"seriesSlug": "flames-vs-oilers-series-l"
// 					},
// 					"currentGame": {
// 						"seriesSummary": {
// 							"gamePk": 2021030245,
// 							"gameNumber": 5,
// 							"gameLabel": "Game 5",
// 							"necessary": true,
// 							"gameCode": 245,
// 							"gameTime": "2022-05-27T01:30:00Z",
// 							"seriesStatus": "Oilers win 4-1",
// 							"seriesStatusShort": "EDM wins 4-1"
// 						}
// 					},
// 					"conference": {
// 						"id": 5,
// 						"name": "Western",
// 						"link": "/api/v1/conferences/5"
// 					},
// 					"round": {
// 						"number": 2
// 					},
// 					"matchupTeams": [
// 						{
// 							"team": {
// 								"id": 20,
// 								"name": "Calgary Flames",
// 								"link": "/api/v1/teams/20"
// 							},
// 							"seed": {
// 								"type": "1",
// 								"rank": 1,
// 								"isTop": true
// 							},
// 							"seriesRecord": {
// 								"wins": 1,
// 								"losses": 4
// 							}
// 						},
// 						{
// 							"team": {
// 								"id": 22,
// 								"name": "Edmonton Oilers",
// 								"link": "/api/v1/teams/22"
// 							},
// 							"seed": {
// 								"type": "2",
// 								"rank": 2,
// 								"isTop": false
// 							},
// 							"seriesRecord": {
// 								"wins": 4,
// 								"losses": 1
// 							}
// 						}
// 					]
// 				}
// 			]
// 		},
// 		{
// 			"number": 3,
// 			"code": 3,
// 			"names": {
// 				"name": "Conference Finals",
// 				"shortName": "CF"
// 			},
// 			"format": {
// 				"name": "BO7",
// 				"description": "Best of 7",
// 				"numberOfGames": 7,
// 				"numberOfWins": 4
// 			},
// 			"series": [
// 				{
// 					"seriesNumber": 1,
// 					"seriesCode": "M",
// 					"names": {
// 						"matchupName": "Rangers (2) vs. Lightning (3)",
// 						"matchupShortName": "NYR v TBL",
// 						"teamAbbreviationA": "NYR",
// 						"teamAbbreviationB": "TBL",
// 						"seriesSlug": "rangers-vs-lightning-series-m"
// 					},
// 					"currentGame": {
// 						"seriesSummary": {
// 							"gamePk": 2021030316,
// 							"gameNumber": 6,
// 							"gameLabel": "Game 6",
// 							"necessary": true,
// 							"gameCode": 316,
// 							"gameTime": "2022-06-12T00:00:00Z",
// 							"seriesStatus": "Lightning win 4-2",
// 							"seriesStatusShort": "TBL wins 4-2"
// 						}
// 					},
// 					"conference": {
// 						"id": 6,
// 						"name": "Eastern",
// 						"link": "/api/v1/conferences/6"
// 					},
// 					"round": {
// 						"number": 3
// 					},
// 					"matchupTeams": [
// 						{
// 							"team": {
// 								"id": 3,
// 								"name": "New York Rangers",
// 								"link": "/api/v1/teams/3"
// 							},
// 							"seed": {
// 								"type": "2",
// 								"rank": 2,
// 								"isTop": true
// 							},
// 							"seriesRecord": {
// 								"wins": 2,
// 								"losses": 4
// 							}
// 						},
// 						{
// 							"team": {
// 								"id": 14,
// 								"name": "Tampa Bay Lightning",
// 								"link": "/api/v1/teams/14"
// 							},
// 							"seed": {
// 								"type": "3",
// 								"rank": 3,
// 								"isTop": false
// 							},
// 							"seriesRecord": {
// 								"wins": 4,
// 								"losses": 2
// 							}
// 						}
// 					]
// 				},
// 				{
// 					"seriesNumber": 2,
// 					"seriesCode": "N",
// 					"names": {
// 						"matchupName": "Avalanche (1) vs. Oilers (2)",
// 						"matchupShortName": "COL v EDM",
// 						"teamAbbreviationA": "COL",
// 						"teamAbbreviationB": "EDM",
// 						"seriesSlug": "avalanche-vs-oilers-series-n"
// 					},
// 					"currentGame": {
// 						"seriesSummary": {
// 							"gamePk": 2021030324,
// 							"gameNumber": 4,
// 							"gameLabel": "Game 4",
// 							"necessary": true,
// 							"gameCode": 324,
// 							"gameTime": "2022-06-07T00:00:00Z",
// 							"seriesStatus": "Avalanche win 4-0",
// 							"seriesStatusShort": "COL wins 4-0"
// 						}
// 					},
// 					"conference": {
// 						"id": 5,
// 						"name": "Western",
// 						"link": "/api/v1/conferences/5"
// 					},
// 					"round": {
// 						"number": 3
// 					},
// 					"matchupTeams": [
// 						{
// 							"team": {
// 								"id": 21,
// 								"name": "Colorado Avalanche",
// 								"link": "/api/v1/teams/21"
// 							},
// 							"seed": {
// 								"type": "1",
// 								"rank": 1,
// 								"isTop": true
// 							},
// 							"seriesRecord": {
// 								"wins": 4,
// 								"losses": 0
// 							}
// 						},
// 						{
// 							"team": {
// 								"id": 22,
// 								"name": "Edmonton Oilers",
// 								"link": "/api/v1/teams/22"
// 							},
// 							"seed": {
// 								"type": "2",
// 								"rank": 2,
// 								"isTop": false
// 							},
// 							"seriesRecord": {
// 								"wins": 0,
// 								"losses": 4
// 							}
// 						}
// 					]
// 				}
// 			]
// 		},
// 		{
// 			"number": 4,
// 			"code": 4,
// 			"names": {
// 				"name": "Stanley Cup Final",
// 				"shortName": "SCF"
// 			},
// 			"format": {
// 				"name": "BO7",
// 				"description": "Best of 7",
// 				"numberOfGames": 7,
// 				"numberOfWins": 4
// 			},
// 			"series": [
// 				{
// 					"seriesNumber": 1,
// 					"seriesCode": "O",
// 					"names": {
// 						"matchupName": "Avalanche (1) vs. Lightning (3)",
// 						"matchupShortName": "COL v TBL",
// 						"teamAbbreviationA": "COL",
// 						"teamAbbreviationB": "TBL",
// 						"seriesSlug": "avalanche-vs-lightning-series-o"
// 					},
// 					"currentGame": {
// 						"seriesSummary": {
// 							"gamePk": 2021030416,
// 							"gameNumber": 6,
// 							"gameLabel": "Game 6",
// 							"necessary": true,
// 							"gameCode": 416,
// 							"gameTime": "2022-06-27T00:00:00Z",
// 							"seriesStatus": "Avalanche win 4-2",
// 							"seriesStatusShort": "COL wins 4-2"
// 						}
// 					},
// 					"conference": {
// 						"link": "/api/v1/conferences/null"
// 					},
// 					"round": {
// 						"number": 4
// 					},
// 					"matchupTeams": [
// 						{
// 							"team": {
// 								"id": 21,
// 								"name": "Colorado Avalanche",
// 								"link": "/api/v1/teams/21"
// 							},
// 							"seed": {
// 								"type": "1",
// 								"rank": 1,
// 								"isTop": true
// 							},
// 							"seriesRecord": {
// 								"wins": 4,
// 								"losses": 2
// 							}
// 						},
// 						{
// 							"team": {
// 								"id": 14,
// 								"name": "Tampa Bay Lightning",
// 								"link": "/api/v1/teams/14"
// 							},
// 							"seed": {
// 								"type": "3",
// 								"rank": 3,
// 								"isTop": false
// 							},
// 							"seriesRecord": {
// 								"wins": 2,
// 								"losses": 4
// 							}
// 						}
// 					]
// 				}
// 			]
// 		}
// 	]
// }

const formatPlayoffData = (data) => {
    let output = {
        east: {
            round1: [],
            round2: [],
            round3: [],
            round4: []
        },
        west: {
            round1: [],
            round2: [],
            round3: [],
            round4: []
        }
    }
    // format for round 1
    data.rounds[0].series.forEach(s => {
        if (s.matchupTeams) {
            if (output.east.round1.length < 4) {
            if (s.matchupTeams) {
                output.east.round1.push({
                description: s.currentGame.seriesSummary.seriesStatusShort,
                code: s.seriesCode,
                team1: {
                    id: s.matchupTeams[0].team.id || null,
                    name: s.matchupTeams[0].team.name || null,
                    wins: s.matchupTeams[0].seriesRecord.wins || null
                },
                team2: {
                    id: s.matchupTeams[1].team.id || null,
                    name: s.matchupTeams[1].team.name || null,
                    wins: s.matchupTeams[1].seriesRecord.wins || null
                }
            })
            } 
        } else {
                output.west.round1.push({
                description: s.currentGame.seriesSummary.seriesStatusShort,
                code: s.seriesCode,
                team1: {
                    id: s.matchupTeams[0].team.id || null,
                    name: s.matchupTeams[0].team.name || null,
                    wins: s.matchupTeams[0].seriesRecord.wins || null
                },
                team2: {
                    id: s.matchupTeams[1].team.id || null,
                    name: s.matchupTeams[1].team.name || null,
                    wins: s.matchupTeams[1].seriesRecord.wins || null
                }
            }) 
        }
        }
    })
    // format for round 2
    
    data.rounds[1].series.forEach(s => {
        if (s.matchupTeams) {
            if (output.east.round2.length < 2) {
            output.east.round2.push({
                description: s.currentGame.seriesSummary.seriesStatusShort,
                code: s.seriesCode,
                team1: {
                    id: s.matchupTeams[0].team.id || null,
                    name: s.matchupTeams[0].team.name || null,
                    wins: s.matchupTeams[0].seriesRecord.wins || null
                },
                team2: {
                    id: s.matchupTeams[1].team.id || null,
                    name: s.matchupTeams[1].team.name || null,
                    wins: s.matchupTeams[1].seriesRecord.wins || null
                }
            })
        } else {
            output.west.round2.push({
                description: s.currentGame.seriesSummary.seriesStatusShort,
                code: s.seriesCode,
                team1: {
                    id: s.matchupTeams[0].team.id || null,
                    name: s.matchupTeams[0].team.name || null,
                    wins: s.matchupTeams[0].seriesRecord.wins || null
                },
                team2: {
                    id: s.matchupTeams[1].team.id || null,
                    name: s.matchupTeams[1].team.name || null,
                    wins: s.matchupTeams[1].seriesRecord.wins || null
                }
            })
        }
        }
    } )
    
       // format for round 3
    data.rounds[2].series.forEach(s => {
        if (s.matchupTeams) {
            if (s.conference.name === "Eastern") {
            output.east.round3.push({
                description: s.currentGame.seriesSummary.seriesStatusShort,
                code: s.seriesCode,
                team1: {
                    id: s.matchupTeams[0].team.id,
                    name: s.matchupTeams[0].team.name,
                    wins: s.matchupTeams[0].seriesRecord.wins || null
                },
                team2: {
                    id: s.matchupTeams[1].team.id || null,
                    name: s.matchupTeams[1].team.name || null,
                    wins: s.matchupTeams[1].seriesRecord.wins || null
                }
            })
        } else {
            output.west.round3.push({
                description: s.currentGame.seriesSummary.seriesStatusShort,
                code: s.seriesCode,
                team1: {
                    id: s.matchupTeams[0].team.id || null,
                    name: s.matchupTeams[0].team.name || null,
                    wins: s.matchupTeams[0].seriesRecord.wins || null
                },
                team2: {
                    id: s.matchupTeams[1].team.id || null,
                    name: s.matchupTeams[1].team.name || null,
                    wins: s.matchupTeams[1].seriesRecord.wins || null
                }
            })
        }
        }
    } )
    if (output.east.round3) {
        output.east.round3 = output.east.round3.sort((a,b)=> (a.code > b.code) ? 1 : ((b.code > a.code) ? -1 : 0))
    }
    // format for round 4
    let s = data.rounds[3].series[0]
    if (s.matchupTeams) {
        s.matchupTeams.forEach(t => {
        // if team id is in the previous round east, push team to the east, otherwise push to west.
        console.log(t.team.id)
        if (output.east.round3[0].team1.id === t.team.id || output.east.round3[0].team2.id === t.team.id) {
            output.east.round4.push({
                description: s.currentGame.seriesSummary.seriesStatusShort,
                code: s.seriesCode,
                team1: {
                    id: t.team.id || null,
                    name: t.team.name || null,
                    wins: t.seriesRecord.wins || null
                }
            })
        } else {
            output.west.round4.push({
                description: s.currentGame.seriesSummary.seriesStatusShort,
                code: s.seriesCode,
                team1: {
                    id: t.team.id || null,
                    name: t.team.name || null,
                    wins: t.seriesRecord.wins || null
                }
            })
        }
        })
    }  
    return output;
}

export default formatPlayoffData;
