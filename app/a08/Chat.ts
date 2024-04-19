export default class Chat {
    theChat : string[]
    constructor() {
        this.theChat = ['Start here->']
    }

    addLine(line : string) {
        this.theChat.push(line)
    }

    getAll() : string {
        var result = ''
        this.theChat.forEach( (line)=>{
            result += line  + '\n'
        })
        return result
    }
}