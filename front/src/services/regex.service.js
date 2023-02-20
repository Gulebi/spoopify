export default class regexService {
    validatePassword(str) {
        return String(str).match(/^(?!.*[\s])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/gi);
    }

    validateLogin(str) {
        return String(str).match(/^[a-zA-Z0-9_-]{3,20}$/gi);
    }

    validatePlaylistURL(str) {
        return String(str).match(/^https?:\/\/(www\.)?youtube\.com\/playlist\?list=[A-Za-z0-9_-]{16,}$/gi);
    }
}
