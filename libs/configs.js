let displayConfigurations = (configsBase, configs) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const contents = document.createElement('div');
    contents.classList.add('modal-contents');
    modal.append(contents);
    // add the modal to the main section of the parent element
    document.body.append(modal);
    if (configs.length > 1) {

        let modalWidth = getComputedStyle(modal).getPropertyValue("width");
        let columns = nearestSquare(configs.length);
        let rows = columns;
        if (columns > 5) {
            columns = 5;
            rows = Math.ceil(configs.length / columns);
        }

        const table = document.createElement('table');
        for (let r = 0; r < rows; r++) {
            const row = document.createElement('tr');
            for (let c = 0; c < columns; c++) {
                if (r * columns + c >= configs.length) {
                    break;
                }
                const cell = document.createElement('td');
                cell.classList.add('config-detail')
                const title = document.createElement('h2');
                title.classList.add('config-title');
                const link = document.createElement('a');
                link.href = configsBase + "/" + configs[r * columns + c];
                link.innerHTML = configs[r * columns + c];
                title.append(link);
                cell.append(title);
                const newImage = document.createElement('img');
                newImage.src = configsBase + "/" + configs[r * columns + c] + '/xPhys.png';
                newImage.style.width = (parseInt(modalWidth) / columns) + 'px';
                newImage.style.height = "auto";
                cell.append(newImage);
                row.append(cell);
            }
            table.append(row);
        }
        contents.append(table);

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = 'Close';
        closeBtn.addEventListener('click', () => {
            modal.remove();
        });
        modal.append(closeBtn);
    }
    else {
        const newImage = document.createElement('img');
        newImage.src = configsBase + "/" + configs[0] + '/xPhys.png';
        contents.classList.add('config-detail')

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = 'Close';
        closeBtn.addEventListener('click', () => {
            modal.remove();
        });
        contents.append(newImage);
        modal.append(closeBtn);
    }

}

// Calculate the nearest square grid size
let nearestSquare = (n) => {
    let root = Math.sqrt(n);
    return Math.ceil(root);
}