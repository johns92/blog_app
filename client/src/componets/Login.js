import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store'
import { useNavigate } from 'react-router-dom'
import config from '../config'

const Login = () => {
  const naviagte = useNavigate()
  const dispath = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    if (isLoggedIn) {
      naviagte('/blogs')
    }
  }, [isLoggedIn])

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const sendRequest = async (type = 'login') => {
    const res = await axios
      .post(`${config.BASE_URL}/api/users/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password
      })
      .catch((err) => console.log(err))

    const data = await res.data
    return data
  }

  const handleSubmit = (e) => {
    e.preventDefault()
      sendRequest()
        .then((data) => localStorage.setItem('userId', data.user._id))
        .then(() => dispath(authActions.login()))
        .then(() => naviagte('/blogs'))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={'column'}
          alignItems="center"
          justifyContent={'center'}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h4" padding={3} textAlign="center">
            Login
          </Typography>
          <TextField
            name="email"
            onChange={handleChange}
            value={inputs.email}
            type={'email'}
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={inputs.password}
            type={'password'}
            placeholder="Password"
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default Login
