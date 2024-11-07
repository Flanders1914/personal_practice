/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function(s) {
    let is_separator = (s) => {
        if (s == '+' || s == '-' || s == '(' || s == ')' || s == ' ') {
            return true
        } else {
            return false
        }
    }
    let i = s.indexOf('@')
    if (i != -1) {
        // email
        let name = s.slice(0, i).toLocaleLowerCase()
        let domain = s.slice(i).toLocaleLowerCase()
        return (name[0] + "*****" + name.at(-1) + domain)
    } else {
        // phone
        let temp = ""
        for (let i = s.length-1; i >= 0; i--) {
            if (!is_separator(s[i])) {
                temp = s[i] + temp
            }           
        }
        if (temp.length == 10) {
            return "***-***-" + temp.slice(-4)
        } else if (temp.length == 11) {
            return "+*-***-***-" + temp.slice(-4)
        } else if (temp.length == 12) {
            return "+**-***-***-" + temp.slice(-4)
        } else if (temp.length == 13) {
            return "+***-***-***-" + temp.slice(-4)
        }
    }
};