class Contact {

  constructor (options) {

    options = options || {};

      this.firstName = options.firstName || "";
      this.lastName = options.lastName || "";
      this.photo = options.photo || "";
      this.phoneNumber = options.phoneNumber;
      this.city = options.city || "";
      this.state = options.state;
  }
}

export {Contact};
