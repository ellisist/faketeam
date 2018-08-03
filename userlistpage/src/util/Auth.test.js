import { login, loggedIn } from './Auth.js'
import { USERNAME, PASSWORD } from '../secret.js'

test('loggedIn returns false when not logged in', () => {
  expect(loggedIn()).toBe(false)
})

test('loggedIn returns true after login called', () => { // Doesn't work. Looking into it.
  return login(USERNAME, PASSWORD)
    .then( () => {
      expect(loggedIn()).toBe(true)
    })
})
