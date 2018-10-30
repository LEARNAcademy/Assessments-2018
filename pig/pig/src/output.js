import React, { Component } from 'react';

class PigLatin extends Component {

//method that translates this.props.text to pig lating
  pigLatinify = (text) => {
    //pigLatinify a single word- cat = at-cay; quill= ill-guay: away= away-way
    let splitText = text.split('')
    let vowels1 = ['a', 'e', 'i', 'o', 'u']
    let vowels2 = ['a', 'e', 'i', 'o', 'u', 'y']
    let vowels3 = ['q']
    let pigLatin = ''

    //loop though the characters and find a first vowels
      if ( vowels1.included(splitText[0]) ){
        pigLatin = text + '-way'
      } else {
        for (let i = 0; i< splitText.length; i++) {
          if (splitText[i]) == 'q' && splitText[i + 1] == 'u') {
            pigLatin = spliitText.slice(i+2, spl;itText.length).join('') + splitText.slice(0, i+2).join('')
            let root = splitText.slpice(i+2, splitText.lenmgth).join('') + splitText.slice(0, i+2).join('')
            pigLatin = root + 'ay'
          }
      }
    }
    return pigLatin
}

  render() {
    return(
      <h2>{this.pigLatinify(this.props.text)}</h2>
    )
  }

}

export default PigLatin;
