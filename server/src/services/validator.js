import expressvalidator from "express-validator";

export function validatorSchema(req, res, next) {
  const error = expressvalidator.validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({
      error: error.array()[0].msg,
    });
  }
  next();
}
