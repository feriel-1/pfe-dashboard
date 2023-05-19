import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { collection } from 'firebase/firestore';


export const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    firstName: 'Mohamed',
    lastName: 'Aouichaoui', 
    email: 'mohamed.aouichaoui@leoni.com',
    phone: '50510292',
    country: 'LTN3'
  });

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const handleAdd = async (e) => {
    e.preventDefault();
    //try {
      //const res = await createUserWithEmailAndPassword(
        /////auth,
       // data.email,
        //data.password
      //);
     const res = await addDoc(collection(db, "users"), {
        name:"salah",
        state:"sallouha",
        country:"msalha"
      });

      coonsole.log(res.id)
  }}

  return (
    <form
      autoComplete="on"
      // noValidate
      onSubmit={handleAdd}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
          
                  label="First name"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                />
              </Grid>
             
              <Grid
                xs={12}
                md={6}
              >
               
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained" type='submit'>
            Save details
          </Button>
        </CardActions>
      </Card>
    </form>
  );

