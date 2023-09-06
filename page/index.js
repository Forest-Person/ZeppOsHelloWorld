


import { createWidget, widget, align, prop, text_style, event } from '@zos/ui'

Page({
  build() {
 

    const RandomButton = createWidget(widget.BUTTON, {
      x: 96,
      y: 300,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      text:'Butt'
      
    })

    

const RandomText = createWidget(widget.TEXT, {
  x: 96,
  y: 150,
  w: 288,
  h: 200,
  color: 0xffffff,
  text_size: 36,
  align_h: align.CENTER_H,
  align_v: align.CENTER_V,
  text_style: text_style.NONE,
  text:'BORCHEs'
  
})



  
RandomText.addEventListener(event.CLICK_DOWN, (info) => {
  let num = Math.floor(Math.random()*5)
RandomText.setProperty(prop.MORE,{text: num})
})

}

})
  


