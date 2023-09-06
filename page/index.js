


import { createWidget,  widget, align, prop, text_style, event } from '@zos/ui'

Page({
  build() {
 
const RandomButton = createWidget(widget.BUTTON, { //when randomButton is pressed it changes randomtext widget with event listener below to random decimal number
  //Notice addevent listeners are added at the end of the module after the widgets added

x: 96,
y: 50,
w: 300,
h: 60,
color: 0xffffff,
text_size: 36,
align_h: align.CENTER_H,
align_v: align.CENTER_V,
text_style: text_style.NONE,
text:"Make decimal",



})

const RandomButton2 = createWidget(widget.BUTTON, { //when randomButton is pressed it changes randomtext widget with event listener below to random decimal number
  //Notice addevent listeners are added at the end of the module after the widgets added

x: 96,
y: 150,
w: 300,
h: 60,
color: 0xffffff,
text_size: 36,
align_h: align.CENTER_H,
align_v: align.CENTER_V,
text_style: text_style.NONE,
text:"Make 1-10",



})

const RandomText = createWidget(widget.TEXT, { //When random text is pressed a new number from 1-4 will be randomly selected
  //The locations of the buttons are relative to the coordinates below. no stacking is demonstrated here
  x: 50,
  y: 300,
  w: 350,
  h: 60,
  color: 0xffffff,
  text_size: 36,
  align_h: align.CENTER_H,
  align_v: align.CENTER_V,
  text_style: text_style.NONE,
  
  
})

RandomButton2.addEventListener(event.CLICK_DOWN,()=>
  RandomText.setProperty(prop.MORE,{text:Math.floor(Math.random()*11)})
  )


RandomButton.addEventListener(event.CLICK_DOWN,()=>
  RandomText.setProperty(prop.MORE,{text:Math.random()})
  )
  
RandomText.addEventListener(event.CLICK_DOWN, () => {
  
RandomText.setProperty(prop.MORE,{text: Math.floor(Math.random()*5)})
})

}

})
  


