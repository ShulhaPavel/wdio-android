export async function activateApp(appPackage){
    try{
        await driver.activateApp(appPackage)
        await driver.execute("browserstack_executor: {\"action\": \"adbShell\", \"arguments\": {\"command\" : \"wm set-fix-to-user-rotation enabled\" }}");
        await driver.setOrientation('PORTRAIT')
    } catch(error){
        console.log(`Failed to activate app: ${error}`)
        throw error;
    }
}

export async function terminateApp(appPackage){
    try{
        await driver.terminateApp(appPackage)
    } catch(error){
        console.log(`Failed to terminate app: ${error}`)
        throw error;
    }
}