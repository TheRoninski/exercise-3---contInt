const {generateStrongPassword, isStrongPassword} = require('../dist/index');

describe('testing passwords', () => {

    test('generateStrongPassword returns a strong password', () => {
        const length = 12;
        const password = generateStrongPassword(length);

        expect(password.length).toBe(length);
    })

    test('isStrongPassword returns false if password length is less than 8', () => {
        const password = 'test';
        const isStrong = isStrongPassword(password);

        expect(isStrong).toBeFalsy();
    })
})