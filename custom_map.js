var bubble_map = new Datamap({
  element: document.getElementById("container"),
  geographyConfig: {
    popupOnHover: true, // Should it show the name of the country?
    highlightOnHover: true // Should it highlight the country
  },
  fills: {
    defaultFill: '#ABDDA4', // Default color
    USA: 'blue',
    RUS: 'red'
  }
});
