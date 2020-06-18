const Seeder = require('lorem-ipsum').LoremIpsum;

const overviewSeed = new Seeder({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const descriptionSeed = new Seeder({
  sentencesPerParagraph: {
    max: 1,
    min: 1,
  },
  wordsPerSentence: {
    max: 20,
    min: 10,
  },
});

module.exports.generateExperienceEntry = function (index) {
  const rate = Math.floor(Math.random() * (5 - 1)) + 1;
  const costs = Math.floor(Math.random() * (250 - 80)) + 80;
  const popular = Math.floor(Math.random() * (35000 - 1000)) + 1000;
  const confirm = () => {
    if (rate % 2 === 0) {
      return true;
    }
    return false;
  };

  const entry = {
    id: index,
    heart: false,
    image: `${index}.jpg`,
    description: descriptionSeed.generateParagraphs(1),
    rating: rate,
    cost_unit: { cost: costs, unit: 'adult' },
    link: '',
    popularity: popular,
    quickview: {
      category: descriptionSeed.generateWords(2),
      overview: overviewSeed.generateParagraphs(2),
      languages: [descriptionSeed.generateWords(1)],
      vouchers_allowed: [descriptionSeed.generateWords(1), descriptionSeed.generateWords(1)],
      tour_time: {
        time: rate,
        unit: 'hours',
      },
      instant_confirmation: confirm(),
      map_address: {
        lat: 37.0902405,
        lng: -95.7128906,
      },
    },
  };
  return entry;
};