
class App {
    constructor(){
        this.users = []
        this.sections = []
    }
    
    addUser(user) {
        this.users.push(user)
    }
    addSection(section){
        this.sections.push(section)
    }
}

export {App}