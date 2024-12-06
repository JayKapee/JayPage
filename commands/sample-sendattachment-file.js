module.exports.config = {
    name: "testsendimage-file", // command name
    author: "Kenlie Jugarap",
    version: "1.0",
    category: "test",
    description: "Test send image message thru file", // description of the command
    adminOnly: false, // if false all users can use this command but if true only the admin id lists on config.json can use
    usePrefix: true, // if true it uses the command with the prefix example /testsendimage-url but if false no need prefix can direct use testsendimage-url
    cooldown: 5, // cooldown on how many command to be used
};

module.exports.run = async function ({ event, args }) {
    try {
        await api.sendAttachment("file", __dirname + "/cache/example.jpg", event.sender.id);
    } catch (err) {
        console.log(err);
    }
};
