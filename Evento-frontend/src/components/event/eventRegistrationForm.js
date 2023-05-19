import React, { useState } from 'react';

const EventRegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [physicalAddress, setPhysicalAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { firstName, lastName, email, company, physicalAddress, dateOfBirth };
    console.log(JSON.stringify(formData, null, 2));
  }

  return (
    <div>
      <h1>Event Registration Form</h1>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} required />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="physicalAddress">Physical Address:</label>
          <input type="text" id="physicalAddress" value={physicalAddress} onChange={(e) => setPhysicalAddress(e.target.value)} required />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default EventRegistrationForm;






// import React, { useState } from 'react';

// const EventRegistrationForm = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [company, setCompany] = useState('');
//   const [physicalAddress, setPhysicalAddress] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = { firstName, lastName, email, company, physicalAddress, dateOfBirth };
//     console.log(JSON.stringify(formData, null, 2));
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//         <label htmlFor="firstName">First Name:</label>
//         <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//       </div>

//       <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//         <label htmlFor="lastName">Last Name:</label>
//         <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//       </div>

//       <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//         <label htmlFor="email">Email Address:</label>
//         <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </div>

//       <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//         <label htmlFor="company">Company:</label>
//         <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} required />
//       </div>

//       <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//         <label htmlFor="physicalAddress">Physical Address:</label>
//         <input type="text" id="physicalAddress" value={physicalAddress} onChange={(e) => setPhysicalAddress(e.target.value)} required />
//       </div>

//       <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//         <label htmlFor="dateOfBirth">Date of Birth:</label>
//         <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
//       </div>

//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default EventRegistrationForm;




// import React, { useState } from 'react';

// const EventRegistrationForm = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [company, setCompany] = useState('');
//   const [physicalAddress, setPhysicalAddress] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = { firstName, lastName, email, company, physicalAddress, dateOfBirth };
//     console.log(JSON.stringify(formData, null, 2));
//   }

//   return (
//     <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <label htmlFor="firstName">First Name:</label>
//       <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

//       <label htmlFor="lastName">Last Name:</label>
//       <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

//       <label htmlFor="email">Email Address:</label>
//       <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

//       <label htmlFor="company">Company:</label>
//       <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} required />

//       <label htmlFor="physicalAddress">Physical Address:</label>
//       <input type="text" id="physicalAddress" value={physicalAddress} onChange={(e) => setPhysicalAddress(e.target.value)} required />

//       <label htmlFor="dateOfBirth">Date of Birth:</label>
//       <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />

//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default EventRegistrationForm;




// import React, { useState } from 'react';

// const EventRegistrationForm = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [company, setCompany] = useState('');
//   const [physicalAddress, setPhysicalAddress] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = { firstName, lastName, email, company, physicalAddress, dateOfBirth };
//     console.log(JSON.stringify(formData, null, 2));
//   }

//   return (
//     <form onSubmit={handleSubmit}  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <div>
//         <label htmlFor="firstName">First Name:</label>
//         <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//       </div>
//       <div>
//         <label htmlFor="lastName">Last Name:</label>
//         <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//       </div>
//       <div>
//         <label htmlFor="email">Email Address:</label>
//         <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </div>
//       <div>
//         <label htmlFor="company">Company:</label>
//         <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} required />
//       </div>
//       <div>
//         <label htmlFor="physicalAddress">Physical Address:</label>
//         <input type="text" id="physicalAddress" value={physicalAddress} onChange={(e) => setPhysicalAddress(e.target.value)} required />
//       </div>
//       <div>
//         <label htmlFor="dateOfBirth">Date of Birth:</label>
//         <input type="date" id="dateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default EventRegistrationForm;
