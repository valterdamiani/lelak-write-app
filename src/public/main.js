// Create a javascript object with a list of predefined images that will be used in the application
let imgList = [{
    id: 'img01',
    name: 'lelak-logo',
    url: "data:image/jpeg;base64,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"
}, {
    id: 'img02',
    name: 'benefits-of-svg',
    url: "https://3.bp.blogspot.com/-d4h-gTU6B1o/WP4EktEoSjI/AAAAAAAABYA/uxsamJsZbqQCK9WvvvNNej3RcvcvahOTwCK4B/w1200-h630-p-k-no-nu/benefits-of-svg.png"
}, {
    id: 'img03',
    name: 'example',
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiaYMhMdDs3v34nGbSSCLEUn7RhJvNGBZ8rQ&usqp=CAU"
}, {
    id: 'img04',
    name: 'svg-green',
    url: "https://blog.yang-hong-xin.com/free-or-open-source-illustrator-alternatives/green-svg-banner.svg"
}, {
    id: 'img05',
    name: 'world',
    url: "https://blog.mozilla.org/hacks/files/2012/12/CSS3-up-and-running.jpg"
}, {
    id: 'img06',
    name: 'html-js-css',
    url: "https://i.pinimg.com/originals/b5/ca/36/b5ca36317a8735169463da56f520f4eb.png"
}, {
    id: 'img07',
    name: 'svg-blue',
    url: "https://uploads.sitepoint.com/wp-content/uploads/2017/12/1498798784svg101.svg"
}, {
    id: 'img08',
    name: 'planets',
    url: "https://i.pinimg.com/originals/20/fa/3e/20fa3e3790a0eaf6cd117c474f481880.jpg"
}, {
    id: 'img09',
    name: 'technology',
    url: "https://pitchworx.com/wp-content/uploads/2019/03/How-to-make-Animation-Video_Blog.jpg"
}, {
    id: 'img10',
    name: 'notebook',
    url: "https://static.rfstat.com/bloggers_folders/user_2540376/my_media/0acc07bb-7967-4ecc-be4d-3fafecbf89fe.jpg"
}, {
    id: 'img11',
    name: 'robot',
    url: "https://cdn.dribbble.com/users/84109/screenshots/2811872/robot.gif"
}, {
    id: 'img12',
    name: 'cellphone',
    url: "https://ak.picdn.net/shutterstock/videos/16876429/thumb/2.jpg"
}];


// create html elements responsible for displaying the images, and insert attributes in those elements
function create() {
    let imgLibDef = document.getElementById('img-lib');
    if (localStorage.length > 0) {

        for (i = 0; i < localStorage.length; i++) {
            let storageId = localStorage.getItem('id' + i);
            let storageName = localStorage.getItem('name' + i);
            let storageUrl = localStorage.getItem('url' + i);

            if (storageId != null && storageName != null && storageUrl != null) {
                let img = document.createElement('img');
                img.className = 'droppable-img';
                img.setAttribute('draggable', 'true');
                img.setAttribute('id', storageId);
                img.setAttribute('name', storageName);
                img.setAttribute('src', storageUrl);
                imgLibDef.appendChild(img);
                var getImgs = document.querySelectorAll('.droppable-img');
            }

            getImgs.forEach(imgOpt => {
                imgOpt.addEventListener('dragstart', dragstart);
                imgOpt.addEventListener('dragend', dragend);
            })
        }
    } else {
        imgList.forEach(imgLine => {
            let id = imgLine.id;
            let name = imgLine.name;
            let url = imgLine.url;

            let img = document.createElement('img');
            img.className = 'droppable-img';
            img.setAttribute('draggable', 'true');
            img.setAttribute('id', id);
            img.setAttribute('name', name);
            img.setAttribute('src', url);
            imgLibDef.appendChild(img);

            var getImgs = document.querySelectorAll('.droppable-img');

            getImgs.forEach(imgOpt => {
                imgOpt.addEventListener('dragstart', dragstart);
                imgOpt.addEventListener('dragend', dragend);
            })
        });
    }
}


// Text alignment tool, aligns the text content present in the writing area. Using swich cases
function align(element) {
    switch (element.id) {
        case 'center':
            alignedItem = 'center';
            break

        case 'justify':
            alignedItem = 'justify';
            break

        case 'left':
            alignedItem = 'left';
            break

        case 'right':
            alignedItem = 'right';
            break
    }

    let fSize = document.getElementById('fSize').value;
    let alignTxt = document.getElementById('writer-area');
    let fWeight = alignTxt.style.fontWeight;
    let fcolor = alignTxt.style.color;
    let italic = alignTxt.style.fontStyle;
    let underline = alignTxt.style.textDecoration;

    alignTxt.setAttribute('style',
        "text-align:" + alignedItem +
        "; font-weight: " + fWeight +
        "; color: " + fcolor +
        "; font-style: " + italic +
        "; text-decoration: " + underline +
        "; font-size: " + fSize + 'px' +
        ";");
}


// Text 'weight' change tool, changes the text content present in the writing area.
function toBold() {
    let fSize = document.getElementById('fSize').value;
    let boldTxt = document.getElementById('writer-area');
    let alignedItem = boldTxt.style.textAlign;
    let fcolor = boldTxt.style.color;
    let italic = boldTxt.style.fontStyle;
    let underline = boldTxt.style.textDecoration;
    let wheight = boldTxt.style.fontWeight;
    let fWeight;

    if (wheight == 'bolder') {
        fWeight = ' normal';
    } else {
        fWeight = ' bolder';
    }

    boldTxt.setAttribute('style',
        "text-align:" + alignedItem +
        "; font-weight: " + fWeight +
        "; color: " + fcolor +
        "; font-style: " + italic +
        "; text-decoration: " + underline +
        "; font-size: " + fSize + 'px' +
        ";");
}


// Tool to change the font style to Italian, changes the text content present in the writing area.
function toItalic() {
    let fSize = document.getElementById('fSize').value;
    let italicTxt = document.getElementById('writer-area');
    let alignedItem = italicTxt.style.textAlign;
    let fcolor = italicTxt.style.color;
    let italicStyle = italicTxt.style.fontStyle;
    let underline = italicTxt.style.textDecoration;
    let fWeight = italicTxt.style.fontWeight;
    let toItalic;

    if (italicStyle == 'italic') {
        toItalic = 'normal';
    } else {
        toItalic = 'italic';
    }

    italicTxt.setAttribute('style',
        "text-align:" + alignedItem +
        "; font-weight: " + fWeight +
        "; color: " + fcolor +
        "; font-style: " + toItalic +
        "; text-decoration: " + underline +
        "; font-size: " + fSize + 'px' +
        ";");
}


// Change the decoration of the text to underline, change the text content present in the writing area.
function toUnderline() {
    let fSize = document.getElementById('fSize').value;
    let underlineTxt = document.getElementById('writer-area');
    let alignedItem = underlineTxt.style.textAlign;
    let fcolor = underlineTxt.style.color;
    let italic = underlineTxt.style.fontStyle;
    let under = underlineTxt.style.textDecoration;
    let fWeight = underlineTxt.style.fontWeight;
    let toUnderline;

    if (under == 'underline') {
        toUnderline = 'normal';
    } else {
        toUnderline = 'underline'
    }

    underlineTxt.setAttribute('style',
        "text-align:" + alignedItem +
        "; font-weight: " + fWeight +
        "; color: " + fcolor +
        "; font-style: " + italic +
        "; text-decoration: " + toUnderline +
        "; font-size: " + fSize + 'px' +
        ";");
}


// Increase or decrease the font size displayed in the writing area
function changeFontSize(element) {
    let fSize = document.getElementById('fSize').value;
    if (element.id == 'up') {
        fSize++;
    } else {
        fSize = fSize - 1;
    }
    document.getElementById('writer-area').style.fontSize = fSize + 'px';
    document.getElementById('fSize').value = fSize;
}


// Changes the color of the text according to the option chosen by the user
function changeColor(element) {
    switch (element.id) {
        case 'black':
            color = 'black';
            break;

        case 'white':
            color = 'white';
            break;

        case 'red':
            color = 'red';
            break;

        case 'green':
            color = 'green';
            break;

        case 'blue':
            color = 'blue';
            break;

        case 'gray':
            color = 'gray';
            break;

        case 'yellow':
            color = 'yellow';
            break;

        case 'purple':
            color = 'purple';
            break;
    };

    let changeColorTo = document.getElementById('writer-area');
    let fSize = document.getElementById('fSize').value;
    let alignedItem = changeColorTo.style.textAlign;
    let italic = changeColorTo.style.fontStyle;
    let under = changeColorTo.style.textDecoration;
    let fWeight = changeColorTo.style.fontWeight;

    changeColorTo.setAttribute('style',
        "text-align:" + alignedItem +
        "; font-weight: " + fWeight +
        "; color: " + color +
        "; font-style: " + italic +
        "; text-decoration: " + under +
        "; font-size: " + fSize + 'px' +
        ";");
};


// Creates a 'modal' for confirming the creation of a new document
function clearPage() {
    let startModal = document.getElementById('title');
    let backgroundModal = document.createElement('div');
    let modal = document.createElement('div');
    let modalTitle = document.createElement('h1');
    let modalText = document.createElement('p');
    let btnBox = document.createElement('div')
    let confirmBtn = document.createElement('button');
    let cancelBtn = document.createElement('button');

    startModal.appendChild(backgroundModal);
    backgroundModal.appendChild(modal);
    modal.appendChild(modalTitle);
    modal.appendChild(modalText);
    modal.appendChild(btnBox);
    btnBox.appendChild(cancelBtn);
    btnBox.appendChild(confirmBtn);

    backgroundModal.className = 'background-modal';
    modal.className = 'modal';
    modalTitle.className = 'modal-title';
    modalText.className = 'modal-txt';
    btnBox.className = 'box-btn';
    cancelBtn.className = 'cancel-btn';
    confirmBtn.className = 'confirm-btn'

    modalTitle.innerHTML = 'New Page';
    modalText.innerHTML = 'Você tem certeza que deseja abrir uma nova pagina, as informações da pagina anterior serão perdidas!'
    cancelBtn.innerHTML = 'Cancel';
    confirmBtn.innerHTML = 'Confirm';
    confirmBtn.setAttribute('onclick', 'newPage()')

    backgroundModal.addEventListener('click', function() {
        backgroundModal.style.display = 'none'
    })
}


// Eliminates the content present in the writing area, saves the changes made to the element library and reloads the page
function newPage() {
    localStorage.clear();
    document.getElementById('writer-area').value = '';
    saveImgPotision();
    location.reload();
}


// Get all droppable imagens in the page
let getImgs = document.querySelectorAll('.droppable-img');


// Get the drop points
const dropzones = document.querySelectorAll('.dropzone');


// Geting imagens of start point
getImgs.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('dragend', dragend);
});


// Starting image drag
function dragstart() {
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));
    this.classList.add('is-dragging');
    this.classList.add('moved');
}


// Captures the drag end of the image and determines the position it is in the writing area using the x and y coordinates
function dragend(e) {
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
    this.classList.remove('is-dragging');
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    let movedImgId = this.id;
    let elmnt = document.getElementById(movedImgId);

    pos4 = pos4 - 80;
    pos3 = pos3 - 85;
    elmnt.style.top = pos4 + 'px';
    elmnt.style.left = pos3 + 'px';
}


// Identifies the image release location and inserts it in the list of predefined elements or positions the image in the writing area
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(dropzone, e.clientY)
        const card = document.querySelector('.is-dragging');
        if (afterElement == undefined) {
            card.classList.add('set-img-pos');
            card.classList.add('moved');
        } else {
            card.classList.remove('set-img-pos');
            card.classList.remove('moved');
            if (afterElement == null) {
                dropzone.appendChild(card)
            } else {
                dropzone.insertBefore(card, afterElement)
            }
        }
    });
    dropzone.addEventListener('dragleave', dragleave);
});


// Determines the position of the list where the dragged element is to be repositioned
function getDragAfterElement(dropzone, y) {
    const draggableElements = [...dropzone.querySelectorAll('.droppable-img:not(.is-dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}


function dragleave() {
    this.classList.remove('over');
}


// Displays element with filter options for the library of predefined elements
function openFilter() {
    let getFilterModal = document.getElementById('filterBox')
    if (getFilterModal.style.display == 'none') {
        getFilterModal.style.display = 'block';
    } else {
        getFilterModal.style.display = 'none';
    }
}


// Sorts the elements according to the option selected by the user
function orderBy(element) {
    let list;
    let imgLibDef = document.getElementById('img-lib');
    let all = imgLibDef.querySelectorAll('.droppable-img:not(.moved)');

    for (i = 0; i < all.length; i++) {
        all[i].remove()
    }

    let getFilterModal = document.getElementById('filterBox');

    if (element.id == 'idUp') {
        list = imgList.sort((a, b) => (a.id > b.id) ? 1 : -1);
    } else if (element.id == 'idDown') {
        list = imgList.sort((a, b) => (a.id < b.id) ? 1 : -1);
    } else if (element.id == 'nameUp') {
        list = imgList.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else if (element.id == 'nameDown') {
        list = imgList.sort((a, b) => (a.name < b.name) ? 1 : -1);
    }
    getFilterModal.style.display = 'none';

    list.forEach(listItem => {
        let id = listItem.id;
        let name = listItem.name;
        let url = listItem.url;

        let img = document.createElement('img');
        img.className = 'droppable-img';
        img.setAttribute('draggable', 'true');
        img.setAttribute('id', id);
        img.setAttribute('name', name);
        img.setAttribute('src', url);
        imgLibDef.appendChild(img);

        var getImgs = document.querySelectorAll('.droppable-img');

        getImgs.forEach(imgOpt => {
            imgOpt.addEventListener('dragstart', dragstart);
            imgOpt.addEventListener('dragend', dragend);
        })
    });
    saveImgPotision();
}


// Saves the position of the library images with each movement of one of these elements
function saveImgPotision() {
    localStorage.clear()
    let imgLibDef = document.getElementById('img-lib');
    let all = imgLibDef.querySelectorAll('.droppable-img:not(.moved)');
    console.log(all);

    for (i = 0; i < all.length; i++) {
        localStorage.setItem('id' + i, all[i].id);
        localStorage.setItem('name' + i, all[i].name);
        localStorage.setItem('url' + i, all[i].src);
    }
}


// listen drop events performed on the screen and triggers the 'save elements' function to save the new position
document.getElementById('img-lib').addEventListener('drop', e => {
    console.log('saveImgPotision');
    saveImgPotision();
})


// listen dragstart events performed on the screen and triggers the 'save elements' function to save the new position
document.getElementById('img-lib').addEventListener('dragstart', e => {
    console.log('saveImgPotision');
    saveImgPotision();
})