import React, { useState } from 'react';
import './replyModal.css';

const ReplyModal=(props)=>{
  const [input, setInput] = useState("");
  console.log(input);
  const { open, close, header } = props;
  return (
      <div className={open ? 'openModal modal' : 'modal'}>
          {open && 
              <section>
                  <header>
                      {header}
                      <button className='close' onClick={close}>
                          &times;
                      </button>
                  </header>
                  <main>{props.children}
                  <input type="text" value={input}/>
                  
                  </main>
                  <footer>
                      <button className='close' onClick={close}>close</button>
                  </footer>
              </section>
          }
      </div>
  );

}
export default ReplyModal;