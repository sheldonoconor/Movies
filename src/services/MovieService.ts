export class MovieService {

	private readonly key: string;

	constructor (key: string) {
		this.key = key;
	}
	
	getTopRated (page = 1) {
		return Promise.resolve(tmp);
		return new Promise((resolve, reject) => {
			fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.key}&language=en-US&page=${page}`)
				.then(
				(data: any) => resolve(data),
				(error: any) => reject(error));
		});
	}
}

const tmp = {
    "page": 1,
    "total_results": 7376,
    "total_pages": 369,
    "results": [
        {
            "vote_count": 2072,
            "id": 19404,
            "video": false,
            "vote_average": 9,
            "title": "Dilwale Dulhania Le Jayenge",
            "popularity": 17.86,
            "poster_path": "/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg",
            "original_language": "hi",
            "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
            "genre_ids": [
                35,
                18,
                10749
            ],
            "backdrop_path": "/mMaxGuQKuH4WUHBwUNhJOetDYE9.jpg",
            "adult": false,
            "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
            "release_date": "1995-10-20"
        },
        {
            "vote_count": 246,
            "id": 496243,
            "video": false,
            "vote_average": 8.8,
            "title": "Parasite",
            "popularity": 32.231,
            "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
            "original_language": "ko",
            "original_title": "기생충",
            "genre_ids": [
                18,
                53
            ],
            "backdrop_path": "/ny5aCtglk2kceGAuAdiyqbhBBAf.jpg",
            "adult": false,
            "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
            "release_date": "2019-05-30"
        },
        {
            "vote_count": 13304,
            "id": 278,
            "video": false,
            "vote_average": 8.7,
            "title": "The Shawshank Redemption",
            "popularity": 28.62,
            "poster_path": "/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
            "original_language": "en",
            "original_title": "The Shawshank Redemption",
            "genre_ids": [
                18,
                80
            ],
            "backdrop_path": "/j9XKiZrVeViAixVRzCta7h1VU9W.jpg",
            "adult": false,
            "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
            "release_date": "1994-09-23"
        },
        {
            "vote_count": 10150,
            "id": 238,
            "video": false,
            "vote_average": 8.6,
            "title": "The Godfather",
            "popularity": 30.719,
            "poster_path": "/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
            "original_language": "en",
            "original_title": "The Godfather",
            "genre_ids": [
                18,
                80
            ],
            "backdrop_path": "/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
            "adult": false,
            "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
            "release_date": "1972-03-14"
        },
        {
            "vote_count": 4230,
            "id": 372058,
            "video": false,
            "vote_average": 8.6,
            "title": "Your Name.",
            "popularity": 29.87,
            "poster_path": "/xq1Ugd62d23K2knRUx6xxuALTZB.jpg",
            "original_language": "ja",
            "original_title": "君の名は。",
            "genre_ids": [
                10749,
                16,
                18
            ],
            "backdrop_path": "/nvsdKYPKwf51EAgC0xLJMB9kUZM.jpg",
            "adult": false,
            "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
            "release_date": "2016-08-26"
        },
        {
            "vote_count": 8146,
            "id": 424,
            "video": false,
            "vote_average": 8.5,
            "title": "Schindler's List",
            "popularity": 22.048,
            "poster_path": "/yPisjyLweCl1tbgwgtzBCNCBle.jpg",
            "original_language": "en",
            "original_title": "Schindler's List",
            "genre_ids": [
                18,
                36,
                10752
            ],
            "backdrop_path": "/af98P1bc7lJsFjhHOVWXQgNNgSQ.jpg",
            "adult": false,
            "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
            "release_date": "1993-12-15"
        },
        {
            "vote_count": 5957,
            "id": 240,
            "video": false,
            "vote_average": 8.5,
            "title": "The Godfather: Part II",
            "popularity": 27.012,
            "poster_path": "/bVq65huQ8vHDd1a4Z37QtuyEvpA.jpg",
            "original_language": "en",
            "original_title": "The Godfather: Part II",
            "genre_ids": [
                18,
                80
            ],
            "backdrop_path": "/gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg",
            "adult": false,
            "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
            "release_date": "1974-12-20"
        },
        {
            "vote_count": 7497,
            "id": 129,
            "video": false,
            "vote_average": 8.5,
            "title": "Spirited Away",
            "popularity": 34.194,
            "poster_path": "/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
            "original_language": "ja",
            "original_title": "千と千尋の神隠し",
            "genre_ids": [
                16,
                10751,
                14
            ],
            "backdrop_path": "/djgM2d3e42p9GFQObg6lwK2SVw2.jpg",
            "adult": false,
            "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
            "release_date": "2001-07-20"
        },
        {
            "vote_count": 8396,
            "id": 497,
            "video": false,
            "vote_average": 8.5,
            "title": "The Green Mile",
            "popularity": 23.388,
            "poster_path": "/sOHqdY1RnSn6kcfAHKu28jvTebE.jpg",
            "original_language": "en",
            "original_title": "The Green Mile",
            "genre_ids": [
                14,
                18,
                80
            ],
            "backdrop_path": "/Rlt20sEbOQKPVjia7lUilFm49W.jpg",
            "adult": false,
            "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
            "release_date": "1999-12-10"
        },
        {
            "vote_count": 7332,
            "id": 637,
            "video": false,
            "vote_average": 8.4,
            "title": "Life Is Beautiful",
            "popularity": 16.031,
            "poster_path": "/f7DImXDebOs148U4uPjI61iDvaK.jpg",
            "original_language": "it",
            "original_title": "La vita è bella",
            "genre_ids": [
                35,
                18
            ],
            "backdrop_path": "/bORe0eI72D874TMawOOFvqWS6Xe.jpg",
            "adult": false,
            "overview": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
            "release_date": "1997-12-20"
        },
        {
            "vote_count": 453,
            "id": 40096,
            "video": false,
            "vote_average": 8.4,
            "title": "A Dog's Will",
            "popularity": 7.994,
            "poster_path": "/uHEmM49YphluJnGep8Ef1qwD2QX.jpg",
            "original_language": "pt",
            "original_title": "O Auto da Compadecida",
            "genre_ids": [
                12,
                35
            ],
            "backdrop_path": "/alQqTpmEkxSLgajfEYTsTH6nAKB.jpg",
            "adult": false,
            "overview": "The lively João Grilo and the sly Chicó are poor guys living in the hinterland who cheat a bunch of people in a small Northeast Brazil town. But when they die, they have to be judged by Christ, the Devil and the Virgin Mary, before they are admitted to paradise.",
            "release_date": "2000-09-15"
        },
        {
            "vote_count": 15383,
            "id": 680,
            "video": false,
            "vote_average": 8.4,
            "title": "Pulp Fiction",
            "popularity": 30.327,
            "poster_path": "/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
            "original_language": "en",
            "original_title": "Pulp Fiction",
            "genre_ids": [
                53,
                80
            ],
            "backdrop_path": "/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
            "adult": false,
            "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
            "release_date": "1994-09-10"
        },
        {
            "vote_count": 4263,
            "id": 324857,
            "video": false,
            "vote_average": 8.4,
            "title": "Spider-Man: Into the Spider-Verse",
            "popularity": 66.971,
            "poster_path": "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
            "original_language": "en",
            "original_title": "Spider-Man: Into the Spider-Verse",
            "genre_ids": [
                28,
                12,
                16,
                878,
                35
            ],
            "backdrop_path": "/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg",
            "adult": false,
            "overview": "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
            "release_date": "2018-12-06"
        },
        {
            "vote_count": 19044,
            "id": 155,
            "video": false,
            "vote_average": 8.4,
            "title": "The Dark Knight",
            "popularity": 36.189,
            "poster_path": "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
            "original_language": "en",
            "original_title": "The Dark Knight",
            "genre_ids": [
                18,
                28,
                80,
                53
            ],
            "backdrop_path": "/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
            "adult": false,
            "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
            "release_date": "2008-07-16"
        },
        {
            "vote_count": 256,
            "id": 14537,
            "video": false,
            "vote_average": 8.4,
            "title": "Harakiri",
            "popularity": 14.895,
            "poster_path": "/5konZnIbcAxZjP616Cz5o9bKEfW.jpg",
            "original_language": "ja",
            "original_title": "切腹",
            "genre_ids": [
                28,
                18,
                36
            ],
            "backdrop_path": "/pz9fxHyGiiNLZ21bccAtwrMAH7f.jpg",
            "adult": false,
            "overview": "Aging samurai Hanshiro Tsugumo arrives at the home of Kageyu Saito and asks to commit a ritual suicide on the property, which Saito thinks is a ploy to gain pity and a job. Saito tells Tsugumo of another samurai, Motome Chijiiwa, who threatened suicide as a stratagem, only to be forced to follow through on the task. When Tsugumo reveals that Chijiiwa was his son-in-law, the disclosure sets off a fierce conflict.",
            "release_date": "1962-09-15"
        },
        {
            "vote_count": 14997,
            "id": 13,
            "video": false,
            "vote_average": 8.4,
            "title": "Forrest Gump",
            "popularity": 39.653,
            "poster_path": "/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg",
            "original_language": "en",
            "original_title": "Forrest Gump",
            "genre_ids": [
                35,
                18,
                10749
            ],
            "backdrop_path": "/wMgbnUVS9wbRGAdki8fqxKU1O0N.jpg",
            "adult": false,
            "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
            "release_date": "1994-07-06"
        },
        {
            "vote_count": 16451,
            "id": 550,
            "video": false,
            "vote_average": 8.4,
            "title": "Fight Club",
            "popularity": 31.374,
            "poster_path": "/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
            "original_language": "en",
            "original_title": "Fight Club",
            "genre_ids": [
                18
            ],
            "backdrop_path": "/mMZRKb3NVo5ZeSPEIaNW9buLWQ0.jpg",
            "adult": false,
            "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
            "release_date": "1999-10-15"
        },
        {
            "vote_count": 5002,
            "id": 539,
            "video": false,
            "vote_average": 8.4,
            "title": "Psycho",
            "popularity": 16.851,
            "poster_path": "/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg",
            "original_language": "en",
            "original_title": "Psycho",
            "genre_ids": [
                27,
                18,
                53
            ],
            "backdrop_path": "/3md49VBCeqY6MSNyAVY6d5eC6bA.jpg",
            "adult": false,
            "overview": "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.",
            "release_date": "1960-06-16"
        },
        {
            "vote_count": 2274,
            "id": 311,
            "video": false,
            "vote_average": 8.4,
            "title": "Once Upon a Time in America",
            "popularity": 17.655,
            "poster_path": "/fqP3Q7DWMFqW7mh11hWXbNwN9rz.jpg",
            "original_language": "en",
            "original_title": "Once Upon a Time in America",
            "genre_ids": [
                18,
                80
            ],
            "backdrop_path": "/vnT6HzjLSDrAweHn9xWykb8Ii6T.jpg",
            "adult": false,
            "overview": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
            "release_date": "1984-05-23"
        },
        {
            "vote_count": 13318,
            "id": 122,
            "video": false,
            "vote_average": 8.4,
            "title": "The Lord of the Rings: The Return of the King",
            "popularity": 36.233,
            "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
            "original_language": "en",
            "original_title": "The Lord of the Rings: The Return of the King",
            "genre_ids": [
                12,
                14,
                28
            ],
            "backdrop_path": "/8BPZO0Bf8TeAy8znF43z8soK3ys.jpg",
            "adult": false,
            "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.",
            "release_date": "2003-12-01"
        }
    ]
}