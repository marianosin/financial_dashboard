function loginTester () { 
    
    let testLog = JSON.parse(localStorage.getItem("DASHBOARD_USERS"))

    if (testLog != null) {
        if (!testLog.activeSession) {
            window.location.href= '../'
        }
        
    }
    if (testLog === null) {
        window.location.href = '../'
    }
    return testLog
}

export {loginTester}