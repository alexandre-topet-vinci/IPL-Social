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
  it('should return false if the password does not contain a special character', () => {
      const password = 'Password1';

      const result = validatePassword(password);

      expect(result).toBe(false);
  });
  it('should return true if the password contains at least one digit', () => {
      const password = 'Password1!';

      const result = validatePassword(password);

      expect(result).toBe(true);
  });
  it('should return true if the password contains at least one digit', () => {
      const password = 'Password!';

      const result = validatePassword(password);

      expect(result).toBe(false);
  });
  it('should return true for valid passwords without "IPL"', () => {
      const password = 'Password1!'

      const result = validatePassword(password);

      expect(result).toBe(true);
  });
  it('should return false if the password contains "IPL" (uppercase)', () => {
      const password = 'IPLpassword1!';
    
      const result = validatePassword(password);

      expect(result).toBe(false);
  });
  it('should return false if the password contains "IPL" (lowercase insensitive)', () => {
      const password = 'iplpassword1!';
    
     const result = validatePassword(password);

     expect(result).toBe(false);
  });
});