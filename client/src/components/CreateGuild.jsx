import React, { useState } from 'react'
import { Card, CardContent, CardHeader, TextField, Button } from '@mui/material'
import { useMutation } from '@apollo/client'
import { CREATE_GUILD } from '../utils/mutations'

const CreateGuild = () => {
  const [guildFormData, setGuildFormData] = useState({
    name: '',
    description: '',
    icons: '',
  })
  // set state for alert
  const [showAlert, setShowAlert] = useState(false)
  const [createGuild] = useMutation(CREATE_GUILD)
  const [disabled, setDisabled] = useState(true)

  const handleInputChange = event => {
    const { name, value } = event.target
    setGuildFormData({ ...guildFormData, [name]: value })
  }

  const handleFormBlur = event => {
    if (event.target.name == 'name' && !guildFormData.name) {
      console.log('Please enter your guild name')
    }
    // console.log(event.target)
    if (
      event.target.description == 'description' &&
      !guildFormData.description
    ) {
      console.log('Please enter your guild description')
    }
    if (guildFormData.name && guildFormData.description) {
      setDisabled(false)
    }
  }

  const handleFormSubmit = async event => {
    event.preventDefault()

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    try {
      const { data } = await createGuild({
        variables: { ...guildFormData },
      })
      console.log(data)

      if (!data) {
        throw new Error('something went wrong!')
      }
    } catch (err) {
      console.error(err)
      setShowAlert(true)
    }

    setGuildFormData({
      name: '',
      description: '',
      icons: '',
    })
  }

  return (
    <Card
    sx={{
      margin: 10
    }}
    >
      <CardHeader
        title="Create Your Guild"
        subheader="Join Forces to Fight Evil!"
        sx={{
          textAlign: 'center'
        }}
      />
      <CardContent>
        <form onSubmit={handleFormSubmit}>
          <TextField
            className="form"
            type="text"
            placeholder="guild name"
            onChange={handleInputChange}
            onBlur={handleFormBlur}
            required
            name="name"
            sx={{
              margin: 2
            }}
          />
          <TextField
            className="form"
            type="text"
            placeholder="guild description"
            onChange={handleInputChange}
            onBlur={handleFormBlur}
            required
            name="description"
            sx={{
              margin: 2
            }}
          />
          <Button
            className="form"
            disabled={disabled}
            variant="contained"
            type="submit"
            sx={{
              margin: 2
            }}
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default CreateGuild
