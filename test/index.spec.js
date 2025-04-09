const {generateStrongPassword, isStrongPassword} = require('../dist/index');

describe('testing passwords', () => {

    test('generateStrongPassword returns a password with the given length', () => {
        const length = 12;
        const password = generateStrongPassword(length);

        expect(password.length).toBe(length);
    })

    test('generateStrongPassword returns a strong password', () => {
        const length = 12;
        const password = generateStrongPassword(length);
        const isStrong = isStrongPassword(password);

        expect(password.length).toBe(length);
        expect(isStrong).toBeTruthy();
    })

    test('isStrongPassword returns false if password length is less than 8', () => {
        const password = 'test';
        const isStrong = isStrongPassword(password);

        expect(isStrong).toBeFalsy();
    })
})