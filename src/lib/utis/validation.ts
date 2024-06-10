type ValidationType = {
  rule: any;
  message: string;
};

export const Validations = {
  Required: (message: string = "Field must be filled"): ValidationType => {
    return {
      rule: (text: string = "") => {
        if (text === null) text = "";

        let regExp = new RegExp("^(?!\\s*$).+");
        let validationResult = text.match(regExp);

        if (validationResult === null) {
          return false;
        }
        return true;
      },
      message,
    };
  },
  IsFile: (message: string = "Field must be file"): ValidationType => {
    return {
      rule: (file: any) => {
        if (!file) return false;
        return true;
      },
      message,
    };
  },
};
