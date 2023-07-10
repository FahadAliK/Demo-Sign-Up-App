import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Stack, Tooltip } from '@mui/material';
import AuthBox from '../shared/AuthBox';
import { LoadingButton } from '@mui/lab';
import * as Yup from 'yup';
import { Formik } from 'formik';

function Login() {
	const navigate = useNavigate();
	const initialValues = {
		email: '',
		password: '',
	};
	async function handleLogin(values, { setSubmitting }) {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
		}, 1000);
		// const { email, password } = values;
	}
	return (
		<AuthBox>
			<Typography variant="h3" sx={{ color: 'white' }}>
				Demo App
			</Typography>
			<Typography variant="h5" sx={{ color: '#B9BBBE' }}>
				Please login to continue
			</Typography>
			<Formik
				initialValues={initialValues}
				validationSchema={Yup.object().shape({
					email: Yup.string()
						.email('Invalid email.')
						.matches(
							/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
							'Invalid email.'
						)
						.required('Email required'),
					password: Yup.string()
						.min(6, 'Password must be 6 characters long.')
						.max(12, 'Password must be atmost 12 characters long.')
						.required('Password is required.'),
				})}
				onSubmit={(values, { setSubmitting }) =>
					handleLogin(values, { setSubmitting })
				}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<form className="form" onSubmit={handleSubmit}>
						<TextField
							id="email"
							label="Email"
							name="email"
							variant="outlined"
							type="email"
							required
							placeholder="Please enter your email."
							margin="normal"
							fullWidth
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							error={!!errors.email}
							helperText={errors.email}
						/>
						<TextField
							id="password"
							label="Password"
							name="password"
							variant="outlined"
							type="password"
							required
							placeholder="Please enter your password."
							margin="normal"
							fullWidth
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
							error={!!errors.password}
							helperText={errors.password}
						/>
						<Stack direction="row" spacing={4}>
							<Tooltip title="Log in to you account by providing above details.">
								<LoadingButton
									variant="contained"
									color="secondary"
									size="large"
									type="submit"
									loading={isSubmitting}
									disabled={!!Object.keys(errors).length}
								>
									Log In
								</LoadingButton>
							</Tooltip>
							<Tooltip
								title="Don't have an account? create one."
								style={{ display: isSubmitting ? 'none' : '' }}
							>
								<Button
									size="small"
									onClick={() => navigate('/register')}
									variant="outlined"
									color="secondary"
									disabled={isSubmitting}
								>
									Register instead.
								</Button>
							</Tooltip>
						</Stack>
					</form>
				)}
			</Formik>
		</AuthBox>
	);
}

export default Login;
