import { useState } from 'react'

const ResponseModal = ({ responseData ,handleClose, show, children, submitResponse }) => {
  const [name, setName] = useState(responseData.name || "")
  const [content, setContent] = useState(responseData.content || "")
  console.log(responseData)
  const handleSubmit = event => {
    event.preventDefault()
    submitResponse({
      name,
      content,
      published_at: new Date().toLocaleDateString('en-US')
    })
    handleClose()
    //console.log(name, content, Date.now())
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