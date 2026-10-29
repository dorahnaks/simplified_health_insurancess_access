import type { Plan } from '@/types/insurance'

const DEMO_SOURCE =
  'Demonstration dataset created for the UIA Career Expo 2026 prototype. Not supplied by a real insurer.'
const DEMO_NOTICE = true

/**
 * Fictional plans used to demonstrate the product-discovery experience.
 * Premiums, limits and contact details are illustrative only.
 */
export const plans: Plan[] = [
  {
    id: 'nile-jua-starter',
    insurerId: 'nilecare',
    name: 'Jua Starter',
    description:
      'An entry-level plan for one working adult. It covers emergencies and inpatient care, with a small number of outpatient visits each year.',
    intendedFor: ['individual'],
    premium: { amount: 45000, currency: 'UGX', frequency: 'monthly' },
    premiumNote: null,
    benefits: [
      {
        category: 'hospitalisation',
        summary:
          'Inpatient admissions at network hospitals, including bed, nursing and theatre fees.',
        limit: 'UGX 6,000,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'emergency',
        summary:
          'Emergency stabilisation and ambulance transfer within 30 km of a network hospital.',
        limit: 'UGX 1,000,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'outpatient',
        summary: 'General consultations at network clinics.',
        limit: '4 visits',
        limitPeriod: 'per-year',
      },
      {
        category: 'laboratory',
        summary: 'Basic laboratory tests ordered during a covered visit.',
        limit: 'UGX 300,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'prescriptions',
        summary: 'Generic medicines dispensed during a covered visit.',
        limit: 'UGX 500,000',
        limitPeriod: 'per-year',
      },
    ],
    exclusions: [
      'Dental treatment, except emergency pain relief after an accident.',
      'Optical care, spectacles and contact lenses.',
      'Maternity and childbirth costs.',
      'Cosmetic procedures and elective surgery that a network doctor has not recommended.',
      'Treatment received outside Uganda.',
      'Injuries from professional sport, racing or dangerous hobbies.',
    ],
    checkFirst: [
      'Whether the outpatient visit limit includes specialist consultations.',
      'Which hospitals and clinics are in the network in your district.',
      'Whether a chronic condition diagnosed before joining is covered at all.',
    ],
    waitingPeriods: [
      { label: 'General inpatient and outpatient care', duration: '30 days' },
      {
        label: 'Accidents and emergency care',
        duration: 'No waiting period',
        note: 'Covered from the first day of the policy, subject to the policy terms.',
      },
      {
        label: 'Existing or chronic conditions',
        duration: '6 months',
        note: 'Confirm with the insurer whether your condition is covered at all.',
      },
    ],
    eligibility: [
      'Aged 18 to 59 at entry.',
      'Resident in Uganda.',
      'Premium paid in advance each month.',
    ],
    requiredDocuments: [
      'National ID or passport.',
      'Completed application form.',
      'Recent passport-size photograph.',
      'Mobile money statement or proof of income, if requested.',
    ],
    enrolmentSteps: [
      'Contact NileCare to confirm the plan and the network hospitals near you.',
      'Complete the application form and submit your documents.',
      'Pay the first premium through an approved payment channel.',
      'Receive your membership details and policy documents.',
      'Read the policy document and confirm the limits before relying on cover.',
    ],
    contactUrl: 'https://nilecare.example/plans/jua-starter',
    source: DEMO_SOURCE,
    lastVerified: null,
    isDemonstration: DEMO_NOTICE,
  },
  {
    id: 'nile-familia-plus',
    insurerId: 'nilecare',
    name: 'Familia Plus',
    description:
      'A family plan with inpatient, outpatient and maternity cover. Designed for a principal member, a spouse and dependent children on one policy.',
    intendedFor: ['family'],
    premium: { amount: 135000, currency: 'UGX', frequency: 'monthly' },
    premiumNote: null,
    benefits: [
      {
        category: 'hospitalisation',
        summary:
          'Inpatient care at network hospitals, including maternity admissions.',
        limit: 'UGX 15,000,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'maternity',
        summary:
          'Antenatal visits, normal delivery and caesarean section at network hospitals.',
        limit: 'UGX 6,000,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'outpatient',
        summary: 'General and specialist consultations at network facilities.',
        limit: '12 visits',
        limitPeriod: 'per-year',
      },
      {
        category: 'prescriptions',
        summary: 'Medicines prescribed during covered visits.',
        limit: 'UGX 1,200,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'laboratory',
        summary: 'Laboratory tests and basic imaging ordered during covered visits.',
        limit: 'UGX 800,000',
        limitPeriod: 'per-year',
      },
    ],
    exclusions: [
      'Fertility treatment, family planning and assisted reproduction.',
      'Cosmetic surgery and procedures that are not medically necessary.',
      'Dental braces, routine dental check-ups and optical care.',
      'Treatment received outside Uganda.',
      'Self-inflicted injury and injury arising from illegal activity.',
      'Pre-existing conditions during the first 12 months, unless declared and accepted.',
    ],
    checkFirst: [
      'Whether a newborn can be added immediately after birth.',
      'Whether specialist consultations count as one or two outpatient visits.',
      'Whether maternity cover applies to the spouse as well as the principal member.',
    ],
    waitingPeriods: [
      { label: 'General inpatient and outpatient care', duration: '30 days' },
      { label: 'Maternity care', duration: '10 months' },
      {
        label: 'Pre-existing conditions',
        duration: '12 months',
        note: 'Only if the condition was declared and accepted by the insurer.',
      },
    ],
    eligibility: [
      'Principal member aged 18 to 65.',
      'Spouse and children under 18, or under 25 if in full-time education.',
      'Resident in Uganda.',
    ],
    requiredDocuments: [
      'National ID or passport for the principal member.',
      'Birth certificate or ID for each dependent.',
      'Marriage certificate if adding a spouse, if requested.',
      'Completed application form.',
      'Proof of income, if requested.',
    ],
    enrolmentSteps: [
      'Contact NileCare for a current quotation for your family size.',
      'Complete one application form listing each dependant.',
      'Submit identity and dependency documents.',
      'Pay the first premium through an approved payment channel.',
      'Check that every dependant is named correctly in the policy documents.',
    ],
    contactUrl: 'https://nilecare.example/plans/familia-plus',
    source: DEMO_SOURCE,
    lastVerified: null,
    isDemonstration: DEMO_NOTICE,
  },
  {
    id: 'nile-community-saver',
    insurerId: 'nilecare',
    name: 'Community Saver',
    description:
      'A low-cost plan for market vendors, artisans and other self-employed workers. It focuses on hospital care and a limited number of clinic visits.',
    intendedFor: ['self-employed'],
    premium: { amount: 22000, currency: 'UGX', frequency: 'monthly' },
    premiumNote: null,
    benefits: [
      {
        category: 'hospitalisation',
        summary: 'Inpatient care at network hospitals and clinics.',
        limit: 'UGX 3,000,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'emergency',
        summary: 'Emergency stabilisation at a network facility.',
        limit: 'UGX 500,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'outpatient',
        summary: 'General consultations at network clinics.',
        limit: '6 visits',
        limitPeriod: 'per-year',
      },
      {
        category: 'prescriptions',
        summary: 'Medicines prescribed during a covered visit.',
        limit: 'UGX 250,000',
        limitPeriod: 'per-year',
      },
    ],
    exclusions: [
      'Maternity and childbirth costs.',
      'Dental and optical care.',
      'Treatment received outside Uganda.',
      'Cosmetic procedures and treatment that is not medically necessary.',
      'Pre-existing conditions during the first 12 months, unless declared and accepted.',
    ],
    checkFirst: [
      'Whether accidents at a workplace or market stall are treated as emergencies.',
      'Which clinics in your area accept the plan.',
      'Whether a spouse or dependant can be added later.',
    ],
    waitingPeriods: [
      { label: 'General inpatient and outpatient care', duration: '30 days' },
      {
        label: 'Existing conditions',
        duration: '12 months',
        note: 'Confirm whether your condition is covered at all.',
      },
    ],
    eligibility: [
      'Aged 18 to 65.',
      'Self-employed or working in the informal sector.',
      'Resident in Uganda.',
    ],
    requiredDocuments: [
      'National ID.',
      'Completed application form.',
      'Mobile money statement or another proof of income, if requested.',
    ],
    enrolmentSteps: [
      'Contact NileCare to confirm the plan and nearby network clinics.',
      'Complete the application form.',
      'Pay the first premium through mobile money or another approved channel.',
      'Keep your membership number and policy documents safe.',
    ],
    contactUrl: 'https://nilecare.example/plans/community-saver',
    source: DEMO_SOURCE,
    lastVerified: null,
    isDemonstration: DEMO_NOTICE,
  },
  {
    id: 'rift-basic-cover',
    insurerId: 'rift-valley',
    name: 'Rift Basic Cover',
    description:
      'A basic hospital plan for one adult. This demonstration record only includes summary information, so several important details are missing.',
    intendedFor: ['individual'],
    premium: null,
    premiumNote:
      'Premium is not published in this demonstration dataset. Contact the insurer for a current quote.',
    benefits: [
      {
        category: 'hospitalisation',
        summary: 'Inpatient care at designated hospitals.',
        limit: null,
        limitPeriod: null,
      },
      {
        category: 'outpatient',
        summary: 'General consultations at participating clinics.',
        limit: '4 visits',
        limitPeriod: 'per-year',
      },
      {
        category: 'emergency',
        summary: 'Emergency treatment at a participating hospital.',
        limit: null,
        limitPeriod: null,
      },
    ],
    exclusions: [
      'Maternity and childbirth costs.',
      'Dental and optical care.',
      'Cosmetic procedures.',
      'Treatment received outside Uganda.',
      'Self-inflicted injury.',
    ],
    checkFirst: [
      'The summary does not state hospital benefit limits.',
      'The waiting period is not provided in this dataset.',
      'The list of designated hospitals is not included.',
      'Required documents and eligibility conditions are not provided.',
    ],
    waitingPeriods: null,
    eligibility: null,
    requiredDocuments: null,
    enrolmentSteps: null,
    contactUrl: null,
    source: DEMO_SOURCE,
    lastVerified: null,
    isDemonstration: DEMO_NOTICE,
  },
  {
    id: 'rift-boda-shield',
    insurerId: 'rift-valley',
    name: 'Boda Shield',
    description:
      'Accident-focused cover for motorcycle riders. It pays for emergency treatment, accident-related admissions and follow-up visits after a covered accident.',
    intendedFor: ['self-employed'],
    premium: { amount: 28000, currency: 'UGX', frequency: 'monthly' },
    premiumNote: null,
    benefits: [
      {
        category: 'emergency',
        summary:
          'Emergency treatment after an accident, including ambulance transfer within 25 km.',
        limit: 'UGX 1,500,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'hospitalisation',
        summary: 'Accident-related inpatient admissions at network hospitals.',
        limit: 'UGX 5,000,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'outpatient',
        summary: 'Follow-up consultations after a covered accident.',
        limit: '6 visits',
        limitPeriod: 'per-year',
      },
      {
        category: 'laboratory',
        summary: 'X-rays and basic laboratory tests after a covered accident.',
        limit: 'UGX 400,000',
        limitPeriod: 'per-year',
      },
    ],
    exclusions: [
      'Routine illness that is not caused by an accident.',
      'Maternity, dental and optical care.',
      'Injury while riding without a valid riding permit or while under the influence of alcohol.',
      'Professional racing and competitive sport.',
      'Treatment received outside Uganda.',
      'Pre-existing injuries.',
    ],
    checkFirst: [
      'Whether passengers on your motorcycle are covered.',
      'Whether lost income or vehicle repairs are covered — usually they are not.',
      'Which hospitals along your usual routes accept the plan.',
      'Whether follow-up physiotherapy is included.',
    ],
    waitingPeriods: [
      { label: 'Accident and emergency cover', duration: 'No waiting period' },
      { label: 'Follow-up outpatient care', duration: '14 days' },
    ],
    eligibility: [
      'Aged 18 to 60.',
      'Working as a motorcycle rider or in another self-employed role.',
      'Valid riding permit where the law requires one.',
      'Resident in Uganda.',
    ],
    requiredDocuments: [
      'National ID.',
      'Riding permit, if you ride a motorcycle.',
      'Rider association membership card, if applicable.',
      'Mobile money statement or proof of income, if requested.',
    ],
    enrolmentSteps: [
      'Contact Rift Valley Health Assurance to confirm the plan and network hospitals.',
      'Complete the application form and provide your documents.',
      'Pay the first premium through an approved channel.',
      'Keep a copy of the policy terms with your membership details.',
    ],
    contactUrl: 'https://riftvalley.example/plans/boda-shield',
    source: DEMO_SOURCE,
    lastVerified: null,
    isDemonstration: DEMO_NOTICE,
  },
  {
    id: 'equator-individual-care',
    insurerId: 'equator-shield',
    name: 'Equator Individual Care',
    description:
      'A broader individual plan with dental, optical and mental-health benefits alongside hospital and outpatient cover. Billed once a year.',
    intendedFor: ['individual'],
    premium: { amount: 780000, currency: 'UGX', frequency: 'annually' },
    premiumNote: null,
    benefits: [
      {
        category: 'hospitalisation',
        summary: 'Inpatient care at network hospitals.',
        limit: 'UGX 10,000,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'outpatient',
        summary: 'General and specialist consultations at network facilities.',
        limit: '8 visits',
        limitPeriod: 'per-year',
      },
      {
        category: 'dental',
        summary: 'Routine dental treatment at network dentists.',
        limit: 'UGX 500,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'optical',
        summary: 'Eye tests and a contribution towards spectacles.',
        limit: 'UGX 300,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'mental-health',
        summary: 'Outpatient counselling and therapy sessions with approved providers.',
        limit: 'UGX 600,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'chronic-care',
        summary: 'Ongoing treatment for listed chronic conditions after the waiting period.',
        limit: 'UGX 1,500,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'prescriptions',
        summary: 'Prescribed medicines dispensed during covered care.',
        limit: 'UGX 700,000',
        limitPeriod: 'per-year',
      },
    ],
    exclusions: [
      'Maternity and childbirth costs.',
      'Fertility treatment and assisted reproduction.',
      'Cosmetic procedures and treatment that is not medically necessary.',
      'Experimental or unapproved treatment.',
      'Treatment received outside Uganda.',
      'Injury arising from illegal activity.',
    ],
    checkFirst: [
      'Whether routine dental cleaning is included in the dental limit.',
      'Whether therapy sessions need pre-authorisation.',
      'Whether maternity can be added as an optional benefit.',
      'Whether your specific chronic condition is on the insurer’s listed conditions.',
    ],
    waitingPeriods: [
      { label: 'General inpatient and outpatient care', duration: '30 days' },
      { label: 'Dental and optical benefits', duration: '3 months' },
      {
        label: 'Chronic conditions',
        duration: '6 months',
        note: 'Only listed conditions are covered, and they must be declared.',
      },
    ],
    eligibility: [
      'Aged 18 to 65 at entry.',
      'Resident in Uganda.',
      'Annual premium paid in advance, or by an agreed instalment plan.',
    ],
    requiredDocuments: [
      'National ID or passport.',
      'Completed application form.',
      'Recent passport-size photograph.',
      'Proof of income, if requested.',
    ],
    enrolmentSteps: [
      'Contact Equator Shield to confirm current benefits and network providers.',
      'Complete the application form and declare any existing conditions.',
      'Pay the annual premium or agree an instalment plan in writing.',
      'Check the policy schedule for limits and waiting periods.',
    ],
    contactUrl: 'https://equatorshield.example/plans/individual-care',
    source: DEMO_SOURCE,
    lastVerified: null,
    isDemonstration: DEMO_NOTICE,
  },
  {
    id: 'equator-family-health',
    insurerId: 'equator-shield',
    name: 'Equator Family Health',
    description:
      'A comprehensive family plan with maternity, dental, optical and mental-health cover for a principal member, a spouse and up to four children. Billed quarterly.',
    intendedFor: ['family'],
    premium: { amount: 510000, currency: 'UGX', frequency: 'quarterly' },
    premiumNote: null,
    benefits: [
      {
        category: 'hospitalisation',
        summary: 'Inpatient care at network hospitals, including maternity admissions.',
        limit: 'UGX 20,000,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'maternity',
        summary: 'Antenatal care, delivery and postnatal care at network hospitals.',
        limit: 'UGX 7,000,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'outpatient',
        summary: 'General and specialist consultations at network facilities.',
        limit: '16 visits',
        limitPeriod: 'per-year',
      },
      {
        category: 'dental',
        summary: 'Routine dental treatment at network dentists.',
        limit: 'UGX 900,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'optical',
        summary: 'Eye tests and a contribution towards spectacles for each member.',
        limit: 'UGX 600,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'mental-health',
        summary: 'Outpatient counselling and therapy with approved providers.',
        limit: 'UGX 900,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'prescriptions',
        summary: 'Prescribed medicines dispensed during covered care.',
        limit: 'UGX 1,500,000',
        limitPeriod: 'per-year',
      },
      {
        category: 'laboratory',
        summary: 'Laboratory tests and basic imaging during covered care.',
        limit: 'UGX 1,000,000',
        limitPeriod: 'per-year',
      },
    ],
    exclusions: [
      'Fertility treatment and assisted reproduction.',
      'Cosmetic procedures and treatment that is not medically necessary.',
      'Orthodontic braces and dental implants.',
      'Experimental or unapproved treatment.',
      'Treatment received outside Uganda.',
      'Pre-existing conditions during the first 12 months, unless declared and accepted.',
    ],
    checkFirst: [
      'Whether the optical limit applies per member or to the whole family.',
      'Whether newborn babies are covered immediately or need to be added.',
      'Whether delivery at a hospital outside the network is covered in an emergency.',
      'Whether dental implants are ever covered.',
    ],
    waitingPeriods: [
      { label: 'General inpatient and outpatient care', duration: '30 days' },
      { label: 'Maternity care', duration: '10 months' },
      { label: 'Dental and optical benefits', duration: '3 months' },
      {
        label: 'Pre-existing conditions',
        duration: '12 months',
        note: 'Only if declared and accepted by the insurer.',
      },
    ],
    eligibility: [
      'Principal member aged 18 to 65.',
      'Spouse and up to four children under 18, or under 25 if in full-time education.',
      'Resident in Uganda.',
    ],
    requiredDocuments: [
      'National ID or passport for the principal member.',
      'Birth certificate or ID for each child.',
      'Marriage certificate if adding a spouse, if requested.',
      'Completed application form.',
      'Proof of income, if requested.',
    ],
    enrolmentSteps: [
      'Contact Equator Shield for a quotation covering your family size.',
      'Complete the application form and list every dependant.',
      'Submit identity and dependency documents.',
      'Pay the first quarterly premium or agree an instalment plan in writing.',
      'Check that each family member is named correctly in the policy documents.',
    ],
    contactUrl: 'https://equatorshield.example/plans/family-health',
    source: DEMO_SOURCE,
    lastVerified: null,
    isDemonstration: DEMO_NOTICE,
  },
]

export function getPlanById(id: string): Plan | undefined {
  return plans.find((plan) => plan.id === id)
}
