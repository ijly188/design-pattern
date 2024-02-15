class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
            this.state = 0; // 添加一個狀態來追蹤
        }
        return Singleton.instance;
    }

    getState() {
        return this.state;
    }

    incrementState() {
        this.state++;
    }
}

module.exports = Singleton;
