import{ useState } from 'react';
import firebase from 'firebase/app';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Get a reference to the Firebase Realtime Database
    const database = firebase.database();
    const registrationsRef = database.ref('registrations');
    
    // Send the data to Firebase
    registrationsRef.push({
      name: name,
      email: email
    });
    
    // Clear the form
    setName('');
    setEmail('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
