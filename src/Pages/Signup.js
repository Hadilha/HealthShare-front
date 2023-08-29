import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import MenuItem from '@mui/material/MenuItem';
import Paper from "@mui/material/Paper";
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as yup from "yup";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Healthshare
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#d7e2fc",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  size: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  paper: {
    margin: theme.spacing(2, 6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const schema = yup
  .object()
  .shape({
    username: yup.string().required("Username is required"),
    fullname: yup.string().required("Full name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    role: yup.string().required("Role is required"),
    
    speciality: yup.string(),
    number: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required("A phone number is required"),
    address: yup.string().required("Address is required"),
    region: yup.string().required("Region is required"),
    notes: yup.string().required("Notes are required"),
  })
  

const defaultValues = {
  fullname: "",
  password: "",
  email: "",
  role: "",
  specialty: "",
  address: "",
  number: "",
  username: "",
};


export default function Signup(props) {
  const [username, setUsername] = useState("");
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");

  const [specialty, setspecialty] = useState("");
  const [number, setnumber] = useState("");
  const [address, setaddress] = useState("");
  const [region, setregion] = useState("");
  const [notes, setnotes] = useState("");
  const [password, setPassword] = useState("");
  const [role, setSelectedRole] = useState("");
  //const [check, setSelectedCheck] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  // TODO  ADD custom selector for each reducer
  const user = useSelector((state) => state);
  const roleOptions = ["doctor", "patient"];
  //const checkOptions = [true, false];
  const createCredentials = (data) => {
    console.log("2");
    const credentials = {};

    if (role !== null) {
      credentials.role = role;
    }
    if (specialty !== "") {
      credentials.specialty = data.specialty;
    }
    if (username !== "") {
      credentials.username = data.username;
    }
    if (fullname !== "") {
      credentials.fullname = data.fullname;
    }
    if (email !== "") {
      credentials.email = data.email;
    }

    if (password !== "") {
      credentials.password = data.password;
    }

    if (specialty !== "") {
      credentials.specialty = data.specialty;
    }

    if (number !== "") {
      credentials.number = data.number;
    }

    if (address !== "") {
      credentials.address = data.address;
    }

    if (region !== "") {
      credentials.region = data.region;
    }

    if (notes !== "") {
      credentials.notes = data.notes;
    }

    return credentials;
  };
  const {
    handleSubmit,
    control,
    setError,
    formState,
    setValue,
    trigger
  } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });


  const { errors } = formState

  const [test, setTest] = useState('')


  console.log('Erros here ', errors)
  {
    /* const onSubmit = (data) => {
    console.log("hello");

    // const credentials = createCredentials(data);
    const credentials = {
      username: data.username,
      password: data.password,
      email: data.email,
    };
    console.log("c", credentials);

    dispatch(signUp(credentials));
    console.log("user", user);
    {
      /* if (user.user.user.status === 200) {
          navigate("/", { replace: true });
      }
  };*/
  }
  const onSubmit = () => {
    console.log("onSubmit function called");
  };
  console.log("role", test);
  console.log("errors here ", errors);
  const classes = useStyles();

  const handleChangeRole = async (e) => {
    setValue('role',e.target.value);
    setSelectedRole(e.target.value)
    await trigger("role")
  }

  console.log("role here ", role)
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        className={classes.size}
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={1}
        square
      >
        <div className={classes.paper}>
          <h1 style={{ color: "#002884" }}>Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  error={!!errors.username}
                  helperText={errors.username?.message}
                />
              )}
            />

            <Controller
              name="fullname"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="fullname"
                  label="fullname"
                  autoFocus
                  error={!!errors.fullname}
                  helperText={errors.fullname?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Password"
                  type="password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
            <FormControl fullWidth variant="outlined">
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Role"
                    value={role}
                    error={!!errors.role}
                    onChange={handleChangeRole}
                  >
                    <MenuItem value="">Select a role</MenuItem>
                    <MenuItem value="doctor">Doctor</MenuItem>
                    <MenuItem value="patient">Patient</MenuItem>
                   </Select>
                )}
              />
              {errors.role && <div>{errors.role.message}</div>}
            </FormControl>

            {/*      <Controller
              name="check"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Autocomplete
                  value={check}
                  onChange={(event, newValue) => {
                    setSelectedCheck(newValue);
                  }}
                  options={checkOptions}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select a check"
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                    />
                  )}
                />
              )}
                  />*/}

            {role === "doctor" && (
              <>
                <Controller
                  name="specialty"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="specialty"
                      label="specialty"
                      error={!!errors.specialty}
                      helperText={errors.specialty?.message}
                    />
                  )}
                />
                <Controller
                  name="address"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="address"
                      label="address"
                      error={!!errors.address}
                      helperText={errors.address?.message}
                    />
                  )}
                />
                <Controller
                  name="number"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="number"
                      label="number"
                      error={!!errors.number}
                      helperText={errors.number?.message}
                    />
                  )}
                />
              </>
            )}

            {role === "patient" && (
              <>
                <Controller
                  name="region"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="region"
                      label="region"
                      error={!!errors.region}
                      helperText={errors.region?.message}
                    />
                  )}
                />

                <Controller
                  name="notes"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="notes"
                      label="notes"
                      error={!!errors.notes}
                      helperText={errors.notes?.message}
                    />
                  )}
                />
              </>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
