export default class CredentialsValidatorService {
  private static nameRegex: RegExp = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
  private static emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private static passwordRegex: RegExp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,25}$/;
  private static companyRegex: RegExp = /^[0-9A-Za-zÀ-ÿ\s,._+;()*~'#@!?&-]+$/;    // TODO: this is not working right

  /**
   * Check if the name starts with a letter, and it has at least two names ex. 'John Doe'
   */
  public static fullNameValidator(fullName: string): boolean { return this.nameRegex.test(fullName); }

  /**
   * Checks whether a string meets the requirements to be an email address or not
   */
  public static emailValidator(email: string): boolean { return this.emailRegex.test(email); }

  /**
   * Validates if a password has at least:
   *  - 1 lowercase alphabetical character
   *  - 1 uppercase alphabetical character
   *  - 1 numeric character
   *  - 1 special character
   *  - must be at least 8 characters long
   */
  public static passwordValidator(password: string): boolean { return this.passwordRegex.test(password); }

  public static companyNameValidator(companyName: string): boolean { return this.companyRegex.test(companyName); }
}
