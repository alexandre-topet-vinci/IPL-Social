import { validatePassword } from '../functions/passwordChecker.js';

describe('Password Validation', () => {
  it('should return false for passwords shorter than 8 characters', () => {
      const shortPassword = '12345';

      const result = validatePassword(shortPassword);

      expect(result).toBe(false);
  });
  it('should return true for passwords with 8 or more characters', () => {
      const password = '1234567?';

      const result = validatePassword(password);

      expect(result).toBe(true);
  });


  it('should return true if the password contains at least one special character', () => {
      const password = 'Password1!';

      const result = validatePassword(password);
      
      expect(result).toBe(true);
  });

});