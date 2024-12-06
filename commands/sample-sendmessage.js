module.exports.config = {
    name: "testsendtext", // command name
    author: "Kenlie Jugarap",
    version: "1.0",
    category: "test",
    description: "Test send message text",
    adminOnly: false, // if false all users can use this command but if true only the admin id lists on config.json can use
    usePrefix: true, // if true it uses the command with the prefix example /testsendimage-url but if false no need prefix can direct use testsendimage-url
    cooldown: 5, // cooldown on how many command to be used
};

module.exports.run = async function ({ event, args }) {
    api.sendMessage("This is a test, sendmessage test message", event.sender.id).catch(err => {
        console.log(err);
    });
};
