import { useState } from 'react'

const ResponseModal = ({ handleClose, show, children }) => {
  const [name, setName] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(name, content)
  }
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
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
        <button type="button" onClick={() => handleClose()}>
          Close
        </button>
      </section>
    </div>
  
  )
}

export default ResponseModal