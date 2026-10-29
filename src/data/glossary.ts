import type { GlossaryEntry } from '@/types/insurance'

export const glossary: GlossaryEntry[] = [
  {
    id: 'premium',
    term: 'Premium',
    aliases: ['monthly payment', 'policy payment'],
    definition:
      'The amount you pay the insurer to keep your health policy active. It may be paid monthly, quarterly or once a year.',
    example:
      'If a plan costs UGX 45,000 a month, that UGX 45,000 is the premium. Missing a payment can suspend your cover.',
  },
  {
    id: 'benefit-limit',
    term: 'Benefit limit',
    aliases: ['cover limit', 'maximum benefit'],
    definition:
      'The most the insurer will pay for a benefit during a stated period. The period might be each visit, each admission, each year or the whole policy.',
    example:
      'A plan may pay up to UGX 6,000,000 for hospital care per year. After that, you may need to pay the rest yourself.',
  },
  {
    id: 'exclusion',
    term: 'Exclusion',
    aliases: ['not covered'],
    definition:
      'A treatment, condition or situation that the policy does not cover. Exclusions are listed in the policy document.',
    example:
      'A plan may exclude maternity care. That means the insurer does not pay for antenatal visits or delivery under that plan.',
  },
  {
    id: 'waiting-period',
    term: 'Waiting period',
    aliases: ['qualifying period'],
    definition:
      'The time you must wait after joining before certain benefits become available.',
    example:
      'A plan may require 10 months before maternity costs are covered, even though the policy starts immediately.',
  },
  {
    id: 'deductible',
    term: 'Deductible or excess',
    aliases: ['excess', 'deductible'],
    definition:
      'An amount you pay yourself before the insurer begins paying for a claim.',
    example:
      'With a UGX 50,000 excess, you pay the first UGX 50,000 of a hospital bill and the insurer covers the rest up to the limit.',
  },
  {
    id: 'co-payment',
    term: 'Co-payment',
    aliases: ['co-pay', 'copayment'],
    definition:
      'A fixed share of each bill that you pay, while the insurer pays the rest. It can apply to visits, medicines or procedures.',
    example:
      'A plan may ask you to pay 20% of each outpatient consultation and cover the other 80%.',
  },
  {
    id: 'outpatient-care',
    term: 'Outpatient care',
    aliases: ['clinic visit', 'day treatment'],
    definition:
      'Care you receive without staying overnight in hospital, such as a clinic consultation, test or day procedure.',
    example:
      'Visiting a clinic for malaria testing and medicine is usually outpatient care.',
  },
  {
    id: 'inpatient-care',
    term: 'Inpatient care',
    aliases: ['admission', 'hospital stay'],
    definition:
      'Care that requires you to be admitted and stay in hospital, often overnight.',
    example:
      'An operation that requires two nights in hospital is inpatient care.',
  },
  {
    id: 'pre-authorisation',
    term: 'Pre-authorisation',
    aliases: ['prior approval', 'preapproval'],
    definition:
      'Permission the insurer gives before certain treatment, tests or admissions. Without it, the insurer may reduce or refuse payment.',
    example:
      'Some plans require you to call the insurer before a planned operation so they can approve the cost in advance.',
  },
  {
    id: 'policyholder',
    term: 'Policyholder',
    aliases: ['principal member'],
    definition:
      'The person who takes out the policy, pays the premium and is responsible for the agreement with the insurer.',
    example:
      'A parent may be the policyholder while their spouse and children are covered as dependants.',
  },
  {
    id: 'dependent',
    term: 'Beneficiary or dependant',
    aliases: ['dependent', 'beneficiary'],
    definition:
      'A person covered under someone else’s policy, usually a spouse or child. The insurer sets rules on who can be a dependant.',
    example:
      'A plan might cover a spouse and up to four children under 18 as dependants.',
  },
  {
    id: 'network-hospital',
    term: 'Network hospital',
    aliases: ['panel hospital', 'participating provider'],
    definition:
      'A hospital or clinic that has an agreement with the insurer. Using a network provider is usually cheaper and may be required for cover.',
    example:
      'If your plan’s network does not include the nearest private hospital, you may need to travel to a network hospital or pay more.',
  },
  {
    id: 'claim',
    term: 'Claim',
    aliases: ['claiming'],
    definition:
      'A request to the insurer to pay for covered care, usually supported by bills, receipts and medical records.',
    example:
      'If you pay a hospital yourself, you may need to submit a claim form and receipts to be reimbursed.',
  },
  {
    id: 'reimbursement',
    term: 'Reimbursement',
    aliases: ['refund'],
    definition:
      'Money the insurer pays back to you after you have already paid for covered care.',
    example:
      'You pay UGX 200,000 at a clinic, submit a claim, and the insurer reimburses the covered portion.',
  },
]

export const faqs = [
  {
    question: 'Do I need an account to browse plans?',
    answer:
      'No. You can browse, compare and read the guide without creating an account. This prototype does not ask for medical histories or identification numbers.',
  },
  {
    question: 'How do I know which plan is right for me?',
    answer:
      'Start with who needs cover and which benefits matter most to you. Then compare the premium, limits, exclusions and waiting periods. Only the insurer can confirm whether you qualify.',
  },
  {
    question: 'Why are some details marked as unavailable?',
    answer:
      'Missing information is shown honestly rather than guessed. “Not provided” or “Check with insurer” does not mean a benefit is included or excluded — it means you should confirm before enrolling.',
  },
  {
    question: 'Does the platform enrol me or issue a policy?',
    answer:
      'No. HealthCover Uganda is an information and referral prototype. Enrolment, payments and policy documents are handled by the insurer or an authorised intermediary.',
  },
  {
    question: 'What should I check before paying a premium?',
    answer:
      'Confirm the benefit limits, exclusions, waiting periods, network hospitals, payment channel and the insurer’s official contact details. Ask for the policy document and read it before paying.',
  },
  {
    question: 'Is a cheaper premium always better value?',
    answer:
      'Not necessarily. A lower premium may come with lower limits, more exclusions or fewer network hospitals. Compare the same fields across plans rather than the price alone.',
  },
  {
    question: 'Are the insurers and plans shown here real?',
    answer:
      'This prototype uses clearly labelled demonstration data from fictional insurers. It is not a real insurance offer and does not represent any real partnership or regulatory approval.',
  },
  {
    question: 'What if I have an existing medical condition?',
    answer:
      'Tell the insurer before joining. Some plans exclude existing conditions or apply a longer waiting period. This prototype does not collect medical information and cannot advise on eligibility.',
  },
]

export function getGlossaryEntry(id: string): GlossaryEntry | undefined {
  return glossary.find((entry) => entry.id === id)
}
