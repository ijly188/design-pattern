const Singleton = require('./singleton');

test('Singleton gives the same instance', () => {
    const instance1 = new Singleton();
    const instance2 = new Singleton();
    expect(instance1).toBe(instance2);
});

test('Singleton instances share state', () => {
    const instance1 = new Singleton();
    instance1.incrementState();
    const instance2 = new Singleton();
    expect(instance2.getState()).toBe(1);
});
