How to edit the website content
===============================

![img](/assets/paper_img/balloon.jpg)
## Event text
The event text can be edited in the javascript file `~\assets\js\eventtext.js`. Do as follows:
1. Write the event main (body) text in a separate file, e.g. in notepad.
2. Create a new sign-up sheet using the google form template from https://docs.google.com/forms/ and copy the link.
3. Open `eventtext.js`. Be careful not to save anything while editing! That would break the website.
4. Move existing events forward, for instance by changing the 2s and 3s in the variable names to 1s and 2s, respectively. The e1... variables are the ones that pertain to the first/leftmost event.
5. Add the information to the new e3... variables:
  - e3title: The title of the event
  - e3logo: a link to one of the logos in `~\assets\paper_img\eventlogos\...`
  - e3location: location info of the event
  - e3datetime: date and time separated by the `<br />` tag
  - e3text: the main body that you wrote before
  - e3link: the link to the sign-up form that you made under 2


## Other text
The other text is embedded directly into the `index.html` file. Just open this file in a text editor of your choice, `ctrl+f` the text you want to change, and save!

## Pictures/other elements
Most of the pictures in `~\assets\paper_img\..` are linked via `~\assets\css\demo.css`. The other style elements can also be found here.
