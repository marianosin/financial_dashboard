
class App {
    constructor(activeSession){
        this.users = []
        this.sections = []
        this.activeSession = activeSession
    }
    
    addUser(user) {
        this.users.push(user)
    }
    addSection(section){
        this.sections.push(section)
    }
}

export {App}