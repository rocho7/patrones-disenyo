interface IValidatorDate {
  validate(dateFrom: string, dateTo?: string): boolean;
}

class RequiredValidatorDate implements IValidatorDate {
  validate(dateFrom: string, dateTo?: string): boolean {
    if (dateFrom.trim() === "") {
      console.log("%cLa fecha es requerida.", "color: red; font-weight: bold;");
      return false;
    }
    return true;
  }
}

abstract class ValidatorDateDecorator implements IValidatorDate {
  protected validator: IValidatorDate;

  constructor(validator: IValidatorDate) {
    this.validator = validator;
  }

  validate(dateFrom: string, dateTo?: string): boolean {
    return this.validator.validate(dateFrom, dateTo);
  }
}

class GreatherThanValidatorDate extends ValidatorDateDecorator {
  override validate(dateFrom: string, dateTo?: string): boolean {
    return new Date(dateFrom) > new Date(dateTo || "");
  }
}

class UnixValidatorDate extends ValidatorDateDecorator {
  override validate(dateFrom: string, dateTo?: string): boolean {
    return new Date(dateFrom).getTime() < 0;
  }
}

function mainDecorator2() {
  let validator: IValidatorDate = new RequiredValidatorDate();
  console.log("%cvalidor required ", "color: white; background-color: #007acc;", validator.validate("2024-01-01"));

  validator = new GreatherThanValidatorDate(validator);
  console.log("%cvalidor greather than ", "color: white; background-color: #007acc;", validator.validate("2024-01-01", "2024-12-31"));

  validator = new UnixValidatorDate(validator);
  console.log("%cvalidor unix ", "color: white; background-color: #007acc;", validator.validate("1969-12-31"));
}
mainDecorator2();
