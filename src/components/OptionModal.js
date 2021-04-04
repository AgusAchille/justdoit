import React from 'react'
import Modal from 'react-modal'

export default function OptionModal({ option, clearOptionHandler, open }) {
    return (
        <Modal
          isOpen={open}
          contentLabel="Example Modal"
          onRequestClose={clearOptionHandler}
          appElement={document.getElementById('app')}
          closeTimeoutMS={200}    
          className='modal'    
        >
            <h1>{option}</h1>
            <button className='button button--animate' onClick={clearOptionHandler}>Ok</button>
        </Modal>
    )
}
