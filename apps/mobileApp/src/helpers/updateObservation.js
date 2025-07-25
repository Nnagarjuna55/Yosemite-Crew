export const updateObservation = ({
  patientId,
  feedback,
  rating,
  date = new Date().toISOString(),
}) => {
  return {
    resourceType: 'Observation',
    status: 'final',
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '76432-6',
          display: 'Patient feedback',
        },
      ],
      text: 'User Feedback',
    },
    subject: {
      reference: `Patient/${patientId}`,
    },
    effectiveDateTime: date,
    valueString: feedback,
    component: [
      {
        code: {
          text: 'Rating',
        },
        valueInteger: rating,
      },
    ],
  };
};
