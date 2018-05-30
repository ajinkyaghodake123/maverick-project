export class User {
    userId: number
    userName: string
    age: number
    image: string
    coverImage: string
    gender: string
    friends: number
    location: string
    level: number
    levelName: String
    aboutMe: string
    status: string
    gameCount: string
    gamePlayed: [{
        gameId: number,
        gameName: String,
        gameStatus: String,
        timeStamp: String,
        rank: number,
        statistics: String,
        opponent: [{
            id: number,
            name: number,
            score: String,
            rank: String,
        }]
    }]
}