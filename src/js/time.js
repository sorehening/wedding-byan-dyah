import { data } from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const [receptionDiv] = timeContainer.querySelectorAll('div div');
    const mapLink = timeContainer.querySelector('p');
    const addressParagraph = timeContainer.querySelector('p');

    const createTimeListItem = (title, details) => (
        `<h3>${title}</h3>
         <p>${details.day}, ${details.date} ${details.month} ${details.year} <br> 
         Pukul ${details.hours.start} WIB sd ${details.hours.finish}</p>`
    );

    
    receptionDiv.innerHTML = createTimeListItem('Resepsi', data.time.reception);

    mapLink.href = data.link.map;
    addressParagraph.textContent = data.time.address;
};
