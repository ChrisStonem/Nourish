import { useState } from 'react';

export const Skills = () => {
  const [counter, setCounter] = useState(0);
  const [boxClicked, setBoxClicked] = useState([]);

  const boxContents = [
    '1. Eating a small snack between meals',
    '2. Trying a new fruit or vegetable',
    '3. Adding a side dish to a meal',
    '4. Eating a meal without weighing or measuring the portions',
    '5. Trying a new type of grain or cereal',
    '6. Experimenting with different cooking oils',
    '7. Eating a meal without calorie counting',
    '8. Trying a new cooking method (e.g., baking, grilling)',
    '9. Incorporating a source of dairy or dairy alternative into a meal',
    '10. Having a meal with someone supportive',
    '11. Eating a meal mindfully, savoring each bite',
    '12. Trying a new recipe with basic ingredients',
    '13. Eating a meal without distractions (e.g., TV, phone)',
    '14. Adding herbs and spices for flavor',
    '15. Eating a balanced meal with protein, carbohydrates, and fats',
    '16. Trying a new salad or salad dressing',
    '17. Eating a meal outdoors or in a different setting',
    '18. Preparing a simple meal with multiple components',
    'Trying a new type of protein (e.g., tofu, beans)',
    'Eating a meal without checking mirrors or body checking',
    'Experimenting with different flavors in cooking (e.g., sweet, savory)',
    'Trying a new condiment or sauce',
    'Incorporating a source of healthy fats into a meal',
    'Eating a meal without comparing it to others portions',
    'Trying a new cooking technique (e.g., sautéing, roasting)',
    'Adding a variety of colors to a meal (e.g., colorful vegetables)',
    'Eating a meal without compensatory behaviors (e.g., excessive exercise)',
    'Trying a new type of whole grain (e.g., quinoa, brown rice)',
    'Eating a meal without following strict food rules',
    'Preparing a meal with ingredients previously avoided',
    'Trying a new combination of flavors or cuisines',
    'Eating a meal without reading nutrition labels',
    'Incorporating fermented foods into a meal (e.g., yogurt, sauerkraut)',
    'Trying a new cooking method that promotes self-reliance',
    'Experimenting with homemade dressings or marinades',
    'Eating a meal without preoccupation about future meals',
    'Trying a new vegetable preparation (e.g., steamed, roasted)',
    'Adding a source of natural sweetness to a meal (e.g., honey, fruit)',
    'Eating a meal without feeling the need to exercise afterward',
    'Trying a new seasoning or spice blend',
    'Incorporating a source of plant-based protein into a meal',
    'Eating a meal without rigidly following a meal plan',
    'Trying a new type of legume (e.g., lentils, chickpeas)',
    'Adding a touch of creativity to food presentation',
    'Eating a meal without seeking reassurance or validation',
    'Trying a new cooking technique that requires patience (e.g., slow cooking)',
    'Incorporating a source of Omega-3 fatty acids into a meal',
    'Eating a meal without compensating with restriction in subsequent meals',
    'Trying a new flavor combination that challenges previous preferences',
    'Eating a meal without guilt or negative self-talk',
  ];

  const handleClick = (index) => {
    if (!boxClicked[index]) {
      setBoxClicked((prevBoxClicked) => {
        const updatedBoxClicked = [...prevBoxClicked];
        updatedBoxClicked[index] = true;
        return updatedBoxClicked;
      });
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const renderBoxes = () => {
    return boxContents.map((content, index) => (
      <div
        key={index}
        className={`box ${boxClicked[index] ? 'clicked' : ''}`}
        onClick={() => handleClick(index)}
      >
        <p>{content}</p>
      </div>
    ));
  };

  return (
    <>
      <div className="maincontent2">
        <h2>Skills</h2>
        <h3>{counter} / 50</h3>
        <br />
        {renderBoxes()}
      </div>
    </>
  );
};
