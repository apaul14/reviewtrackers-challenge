import { useState } from 'react'

const ResponseModal = () => {
  const [name, setName] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(name, content)
  }

  return (
    <form onSubmit={ (e) => handleSubmit(e) }>
        <input 
          placeholder="Name" 
          type="text" 
          name="name" 
          value={name} 
          onChange={ (e) => setName(e.target.value) } 
        />
        <textarea
          placeholder="Share your response here"
          name="response"
          value={content}
          onChange={ (e) => setContent(e.target.value) } 
        />
      <input type="submit" value="Submit" />
  </form>
  )
}

export default ResponseModal