import { validatePassword } from '../functions/passwordChecker.js';

describe('Password Validation', () => {
  it('should return false for passwords shorter than 8 characters', () => {
      const shortPassword = '12345';

      const result = validatePassword(shortPassword);

      expect(result).toBe(false);
  });
});