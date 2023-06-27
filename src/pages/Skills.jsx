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
    '19. Trying a new type of protein (e.g., tofu, beans)',
    '20. Eating a meal without checking mirrors or body checking',
    '21. Experimenting with different flavors in cooking (e.g., sweet, savory)',
    '22. Trying a new condiment or sauce',
    '23. Incorporating a source of healthy fats into a meal',
    '24. Eating a meal without comparing it to others portions',
    '25. Trying a new cooking technique (e.g., sautéing, roasting)',
    '26. Adding a variety of colors to a meal (e.g., colorful vegetables)',
    '27. Eating a meal without compensatory behaviors (e.g., excessive exercise)',
    '28. Trying a new type of whole grain (e.g., quinoa, brown rice)',
    '29. Eating a meal without following strict food rules',
    '30. Preparing a meal with ingredients previously avoided',
    '31. Trying a new combination of flavors or cuisines',
    '32. Eating a meal without reading nutrition labels',
    '33. Incorporating fermented foods into a meal (e.g., yogurt, sauerkraut)',
    '34. Trying a new cooking method that promotes self-reliance',
    '35. Experimenting with homemade dressings or marinades',
    '36. Eating a meal without preoccupation about future meals',
    '37. Trying a new vegetable preparation (e.g., steamed, roasted)',
    '38. Adding a source of natural sweetness to a meal (e.g., honey, fruit)',
    '39. Eating a meal without feeling the need to exercise afterward',
    '40. Trying a new seasoning or spice blend',
    '41. Incorporating a source of plant-based protein into a meal',
    '42. Eating a meal without rigidly following a meal plan',
    '43. Trying a new type of legume (e.g., lentils, chickpeas)',
    '44. Adding a touch of creativity to food presentation',
    '45. Eating a meal without seeking reassurance or validation',
    '46. Trying a new cooking technique that requires patience (e.g., slow cooking)',
    '47. Incorporating a source of Omega-3 fatty acids into a meal',
    '48. Eating a meal without compensating with restriction in subsequent meals',
    '49. Trying a new flavor combination that challenges previous preferences',
    '50. Eating a meal without guilt or negative self-talk',
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
        className={`box2 ${boxClicked[index] ? 'clicked' : ''}`}
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
        <p>click the boxes to earn points.</p>

        <h3>{counter} / 50</h3>
        <br />
        <div className='boxes2'>
        {renderBoxes()}
        </div>
      </div>
    </>
  );
};
