//import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'motion/react';
import Button from '../buttons/button.jsx';
import { EASE, VIEWPORT } from '../motion/variants.js';
import './form.css';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export default function Form({
  fullName = true,
  jobTitle = false,
  companyNameIndustry = false,
  employeesNeeded = false,
  rolesRequired = false,
  contactNumber = false,
  email = true,
  heardAbout = false,
  anythingElse = false,
}) {
  const [state, handleSubmit] = useForm(FORMSPREE_ENDPOINT);

  if (state.succeeded) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        Thanks for reaching out! We'll be in touch soon.
      </motion.p>
    );
  }

  return (
    <motion.form
      className="form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
    >
      <div className="form-grid">

        {fullName && (
          <div className="form-group">
            <label htmlFor="fullName">Full name <span className="required">*</span></label>
            <input id="fullName" type="text" name="fullName" required />
            <ValidationError prefix="Full name" field="fullName" errors={state.errors} className="field-error" />
          </div>
        )}

        {jobTitle && (
          <div className="form-group">
            <label htmlFor="jobTitle">Job title</label>
            <input id="jobTitle" type="text" name="jobTitle" />
            <ValidationError prefix="Job title" field="jobTitle" errors={state.errors} className="field-error" />
          </div>
        )}

        {companyNameIndustry && (
          <div className="form-group">
            <label htmlFor="companyNameIndustry">Company name & industry <span className="required">*</span></label>
            <input id="companyNameIndustry" type="text" name="companyNameIndustry" required />
            <ValidationError prefix="Company name & industry" field="companyNameIndustry" errors={state.errors} className="field-error" />
          </div>
        )}

        {employeesNeeded && (
          <div className="form-group">
            <label htmlFor="employeesNeeded">Number of hires needed</label>
            <input id="employeesNeeded" type="text" name="employeesNeeded" />
            <ValidationError prefix="Number of hires needed" field="employeesNeeded" errors={state.errors} className="field-error" />
          </div>
        )}

        {rolesRequired && (
          <div className="form-group">
            <label htmlFor="rolesRequired">Roles required</label>
            <input id="rolesRequired" type="text" name="rolesRequired" />
            <ValidationError prefix="Roles required" field="rolesRequired" errors={state.errors} className="field-error" />
          </div>
        )}

        {contactNumber && (
          <div className="form-group">
            <label htmlFor="contactNumber">Contact number</label>
            <input id="contactNumber" type="tel" name="contactNumber" />
            <ValidationError prefix="Contact number" field="contactNumber" errors={state.errors} className="field-error" />
          </div>
        )}

        {email && (
          <div className="form-group">
            <label htmlFor="email">Email address <span className="required">*</span></label>
            <input id="email" type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="field-error" />
          </div>
        )}

        {heardAbout && (
          <div className="form-group form-group--full">
            <label htmlFor="heardAbout">How did you hear about BrightHire? <span className="required">*</span></label>
            <input id="heardAbout" type="text" name="heardAbout" required />
            <ValidationError prefix="How did you hear about BrightHire" field="heardAbout" errors={state.errors} className="field-error" />
          </div>
        )}

        {anythingElse && (
          <div className="form-group form-group--full">
            <label htmlFor="anythingElse">Anything else we should know?</label>
            <textarea id="anythingElse" name="anythingElse" rows="4" />
            <ValidationError prefix="Anything else" field="anythingElse" errors={state.errors} className="field-error" />
          </div>
        )}

      </div>

      <div className="form-footer">
        <Button type="submit" variant="primary" disabled={state.submitting}>
          Send enquiry →
        </Button>
        <p>Your enquiry goes to admin@brighthire.net. We respond within one business day.</p>
      </div>
    </motion.form>
  );
}
