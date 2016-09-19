How to edit the website content
===============================

![img](/assets/paper_img/balloon.jpg)
## GitHub Write Access
In order to be able to change the website, ask the moderator of the GitHub account for write access or submit a pull request to the main repo from your own fork.

## Event text
The event text can be edited in the text files in `~\assets\events\`. Do as follows:

1. Write the event main (body) text in a separate file, e.g. in notepad.

2. Create a new sign-up sheet using the google form template from https://docs.google.com/forms/ and copy the link.

3. Move the events, e.g.:
    - rename `event1.txt` to `event.txt`
    - rename `event2.txt` and `event3.txt` to `event1.txt` and `event2.txt`, respectively
    - rename `event.txt` to `event3.txt`

4. Open the `.txt` file associated with the event of your choice, in the example `event3.txt`.

5. Overwrite the old info with the new info in the file:
    - title: The title of the event
    - logo: a link to one of the logos in `~\assets\paper_img\eventlogos\...`
    - link: the link to the sign-up form that you made under 2. If no link is specified, a pop-up will appear upon clicking, notifying the user that registration is not yet open.
    - location: location info of the event
    - date: date of the event, in the format `mm/dd/yyyy`
    - time: time of the event in 24h format
    - description: the main body that you wrote before


## Other text
The other text is embedded directly into the `index.html` file. Just open this file in a text editor of your choice, `ctrl+f` the text you want to change, and save!

## Pictures/other elements
Most of the pictures in `~\assets\paper_img\..` are linked via `~\assets\css\demo.css`. The other style elements can also be found here.
