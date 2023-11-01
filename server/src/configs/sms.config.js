const { default: axios } = require("axios")

module.exports = async (phone, text) => {
    const api = `https://api.xssh.uz/smsv1/spes.php/?id=1315&token=ALasZMthHKjeRUTvgknimBSQJyrxudIbNlFGqVDOfPoEpYX&number=${phone}&text=${text}`
    return await axios.get(api);
}