import { Fhir } from 'fhir'

const fhirValidator = new Fhir();

/**
 * ✅ Validate FHIR Resource
 * @param {Object} resource - FHIR Resource to validate
 * @returns {Object} - Validation result
 */
const validateFHIR = (resource: Record<string, any>) => {
  try {
    const result = fhirValidator.validate(resource);

    if (result.valid) {
      return {
        valid: true,
        message: 'FHIR Resource is valid!',
      };
    } else {
      return {
        valid: false,
        errors: result.messages,
      };
    }
  } catch (error: any) {
    return {
      valid: false,
      errors: [`Validation failed: ${error.message}`],
    };
  }
};

export { validateFHIR };
