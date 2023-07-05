module.exports = {
  fonts: {
    GreatVibes: {
      normal: __dirname + '/GreatVibes-Regular.ttf',
    },
    Raleway: {
      normal: __dirname + '/Raleway-Regular.ttf',
      bold: __dirname + '/Raleway-Bold.ttf',
    },
  },
  document: (data) => {
    return {
      pageSize: 'A4',
      pageOrientation: 'landscape',
      pageMargins: [0, 0, 0, 0],
      content: [
        {
          image: __dirname + `/bg.png`,
          fit: [842, 595],
        },
        {
          text: data.name,
          font: 'GreatVibes',
          alignment: 'centre',
          fontSize: 75,
          absolutePosition: { x: 90, y: 200 },
        },
        {
          text: `eSatya hereby awards this Certificate of Accomplishment
          for completion of 20 hours of Blockchain power course

              This course introduced participants to design and deploy
                  smart contracts using Solidity and interact with smart
                  contract using web3. This end-to-end course was designed
                  to provide developers with the knowledge needed to
                  become Ethereum developers.`,
          font: 'Raleway',
          bold: true,
          alignment: 'left',
          color: '#000000',
          fontSize: 12,
          absolutePosition: { x: 100, y: 340 },
        },
        {
          text: `Blockchain Power Course 2019`,
          font: 'Raleway',
          alignment: 'left',
          color: '#000000',
          fontSize: 17,
          absolutePosition: { x: 80, y: 144 },
        },
      ],
    };
  },
};
