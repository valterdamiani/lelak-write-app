# The Writer

The Writer application was developed using Javascript, HTML5 and CSS3, in addition to a library of icons used in the interface;

The images are inserted using internet urls, which are arranged in a javascript object that also contains the id and name of each image;

The images are rendered on the screen using a javascript function,
which generates the HTML elements by ordering them based on the information saved by the user or according to the ID;

The colors used in the development were obtained from a color palette available on the website https://coolors.co/faa916-fbfffe-6d676e-1b1b1e-96031a ;       

The system works based on the insertion of strings by the user in the writing area and also draggable elements that can be arranged in the document and printed using the system interface;

The images can be dragged by the user to any point of the writing area or put back in the list;

The list can be sorted using the filters or by dragging the elements;
 
The writing area of the page is composed of an HTML TAG - TEXTAREA - which has been styled to simulate an A4 page that can be printed by the user;

The effects of dragging and dropping the images were carried out using the HTML DRAG and DROP API and based on the coordinates of the image when it is dragged across the screen, it is positioned in the document or placed in the list of elements;

The text can be formatted by the user, changing the font size and color, styles such as Bold, Italic and Underline can be added. The text can also be aligned to the right, left, centered or justified;

This change in styling of the text is accomplished by inserting and removing style elements in the HTML tag;

The content generated on the screen can be printed by the user, maintaining the formatting, clicking on the printer icon or using the shortcut Ctrl + P;

The ordering of the images in the list is stored in the browser's localStorage, using the native localStorage javascript function;



## The project can be used by accessing github pages through the link https://valterdamiani.github.io/lelak-write-app/src/public/index.html;

## It can also be executed locally by simply cloning the github repository, and after cloning open the file index.html located in the folder the-writer/src/public/index.html;
 
## If the system presents any problem in the display of images, just click on the first icon on the right side, to open a new page.
