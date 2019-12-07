import { login, logout } from '../../actions/auth';

test('Should generate login action button', () => {
    const action = login(1);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 1
    })
})

test('Should generate logpit action button', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT',
    })
})