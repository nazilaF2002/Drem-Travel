
import destinations from "./Array";
const HandleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    const destinationElements = document.querySelectorAll('.destination p');
    destinationElements.forEach((element, index) => {
      // const destinationIndex = parseInt(element.dataset.index, 10);
      element.textContent = destinations[index].description[selectedLanguage];
    });
  };
   export default HandleLanguageChange;