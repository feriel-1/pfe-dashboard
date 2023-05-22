import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, color,Link, Stack, TextField, Typography } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';
import { positions } from '@mui/system';

const Page = () => {
    const formik = useFormik({
      initialValues: {
        email: '',
        name: '',
        password: '',
        position: '',
        department: ''
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email('Must be a valid email')
          .max(255)
          .required('Email is required'),
        name: Yup.string()
          .max(255)
          .required('Name is required'),
        password: Yup.string()
          .max(255)
          .required('Password is required'),
        position: Yup.string()
          .max(255)
          .required('Position is required'),
       // department: Yup.string()
        //  .max(255)
        //  .required('Department is required')
      }),
      onSubmit: async (values) => {
        // Handle form submission
        try {
          // Create user account with email and password
          const userCredential = await firebase.auth().createUserWithEmailAndPassword(
            values.email,
            values.password
          );
          const user = userCredential.user;
    
          // Update user profile with name, position, and department
          await user.updateProfile({
            displayName: values.name,
            displayPosition: values.position,
            displayDepartment: values.department
          });
    
          // Clear form inputs
          formik.resetForm();
    
          // Handle successful signup or redirect to another page
          // ...
        } catch (error) {
          // Handle signup error
          console.error('Error signing up:', error);
        }
      }
    });
   return (
    <>
      <Head>
        <title>
          Register
        </title>
      </Head>
      <Box
        sx={{
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Register
              </Typography>
            </Stack>
            <form
             // noValidate
              onSubmit={formik.handleSubmit}
            >
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.name && formik.errors.name)}
                  fullWidth
                  helperText={formik.touched.name && formik.errors.name}
                  label="Name"
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                 <TextField
                  error={!!(formik.touched.position && formik.errors.position)}
                  fullWidth
                  helperText={formik.touched.position && formik.errors.position}
                  label="Position"
                  name="position"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.position}
                />
                 <TextField
                  error={!!(formik.touched.department && formik.errors.department)}
                  fullWidth
                  helperText={formik.touched.department && formik.errors.department}
                  label="Departement"
                  name="departement"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.department}
                />
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
              </Stack>
              {formik.errors.submit && (
                <Typography
                  color="error"
                  sx={{ mt: 3 , backgroundColor:"blue"  }}
                  variant="body2"
                >
                  {formik.errors.submit}
                </Typography>
              )}
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3, backgroundColor:"blue" }}
                type="submit"
                variant="contained"
                
              >
                Continue
              </Button>
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};



export default Page;