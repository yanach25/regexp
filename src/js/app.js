export default class Validator {
  static validateUsername(user) {
    const reg = /^([a-zA-Z])([\w-])*([a-zA-Z])$/;
    const isValid = reg.test(user);

    const hasManyDigits = /\d{3}/.test(user);

    return isValid && !hasManyDigits;
  }
}
