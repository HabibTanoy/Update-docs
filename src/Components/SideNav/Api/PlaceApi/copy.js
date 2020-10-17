// import React from 'react';

// // class CopyExample extends React.Component {

// //  state = {
// //    copySuccess: 'copy',
// //    text: ''
// //  }


//   copyToClipboard = (e) => {
//     this.textArea.select();
//     document.execCommand('copy');
//     e.target.focus();
//     const doesShow = this.state.copySuccess
//     this.setState({ copySuccess: 'Copied!' });
//   };

//   render() {
//     return (
//       <div>
//         {
//          document.queryCommandSupported('copy') &&
//           <div>
//             <button onClick={this.copyToClipboard}>{this.state.copySuccess}</button> 
//           </div>
//         }
//         <form>
//           <textarea
//             ref={(textarea) => this.textArea = textarea}
//             value={this.state.text}
//             onChange={(e) => this.setState({text:e.target.value})}>
//             </textarea>
          
//         </form>
//       </div>
//     );
//   }

// }
    
// export default CopyExample;
import React, { useState, useRef } from 'react';

const CopyExample = () => {

  const initialValue = 'copy'
  const [copy, setCopy] = useState(initialValue);
  const [text, setText] = useState()
  const textAreaRef = useRef(null)

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    // this.setState({ copySuccess: 'Copied!' });
    setCopy('Copied!')
  };

  return ( 
    <div>
        {
         document.queryCommandSupported('copy') &&
          <div>
            <button onClick={copyToClipboard}>{copy}</button> 
          </div>
        }
        <form>
          <textarea
            ref={textAreaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
          >
            </textarea>
          
        </form>
      </div>
   );
}
 
export default CopyExample;