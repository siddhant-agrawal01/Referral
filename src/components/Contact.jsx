import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
        <div className="space-y-4">
          <p>Email us (For Data Science Queries): <a href="mailto:admissions@accredian.com" className="text-blue-500">admissions@accredian.com</a></p>
          <p>Email us (For Product Management Queries): <a href="mailto:pm@accredian.com" className="text-blue-500">pm@accredian.com</a></p>
          <p>Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</p>
          <p>Product Management Admission Helpline: +91 9625811095</p>
          <p>Enrolled Student Helpline: +91 7969322507</p>
          <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
