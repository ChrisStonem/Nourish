import { useState, useEffect } from 'react';
import Icon1 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/apple.png";
import Icon2 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/bananas.png";
import Icon3 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/blueberry.png";
import Icon4 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/strawberries.png";
import Icon5 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/oranges.png";
import Icon6 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/grapes.png";
import Icon7 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Watermelon.png";
import Icon8 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Pineapple.png";
import Icon9 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Mango.png";
import Icon10 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Kiwi.png";
import Icon11 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Peach.png";
import Icon12 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Avocado.png";
import Icon13 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Lemon.png";
import Icon14 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Lime.png";
import Icon15 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Spinach.png";
import Icon16 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Kale.png";
import Icon17 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Lettuce.png";
import Icon18 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Cabbage.png";
import Icon19 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Carrots.png";
import Icon20 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Celery.png";
import Icon21 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Broccoli.png";
import Icon22 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Cauliflower.png";
import Icon23 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Bell peppers.png";
import Icon24 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Cucumber.png";
import Icon25 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Zucchini.png";
import Icon26 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Sweet potatoes.png";
import Icon27 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Potatoes.png";
import Icon28 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Onions.png";
import Icon29 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Garlic.png";
import Icon30 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Ginger.png";
import Icon31 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Mushrooms.png";
import Icon32 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Tomatoes.png";
import Icon33 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Eggplant.png";
import Icon34 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Asparagus.png";
import Icon35 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Green beans.png";
import Icon36 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Brussels sprouts.png";
import Icon37 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Peas.png";
import Icon38 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Lentils.png";
import Icon39 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Chickpeas.png";
import Icon40 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Black beans.png";
import Icon41 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Kidney beans.png";
import Icon42 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Quinoa.png";
import Icon43 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Brown rice.png";
import Icon44 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Oats.png";
import Icon45 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Barley.png";
import Icon46 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Whole wheat bread.png";
import Icon47 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Almonds.png";
import Icon48 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Walnuts.png";
import Icon49 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Cashews.png";
import Icon50 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Pistachios.png";
import Icon51 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Brazil nuts.png";
import Icon52 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Chia seeds.png";
import Icon53 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Flaxseeds.png";
import Icon54 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Pumpkin seeds.png";
import Icon55 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Sunflower seeds.png";
import Icon56 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Sesame seeds.png";
import Icon57 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Peanut butter.png";
import Icon58 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Almond butter.png";
import Icon59 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Greek yogurt.png";
import Icon60 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Cottage cheese.png";
import Icon61 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Eggs.png";
import Icon62 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Chicken breast.png";
import Icon63 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Turkey breast.png";
import Icon64 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Salmon.png";
import Icon65 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Tuna.png";
import Icon66 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Shrimp.png";
import Icon67 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Cod.png";
import Icon68 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Tofu.png";
import Icon69 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Tempeh.png";
import Icon70 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Edamame.png";
import Icon71 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/ricotta cheese.png";
import Icon72 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Feta cheese.png";
import Icon73 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Mozzarella cheese.png";
import Icon74 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Parmesan cheese.png";
import Icon75 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Goats milk yogurt.png";
import Icon76 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Milk.png";
import Icon77 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Honey.png";
import Icon78 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Maple syrup.png";
import Icon79 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Olive oil.png";
import Icon80 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Coconut oil.png";
import Icon81 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Avocado oil.png";
import Icon82 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Balsamic vinegar.png";
import Icon83 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Apple cider vinegar.png";
import Icon84 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Soy sauce.png";
import Icon85 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Tamari.png";
import Icon86 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Mustard.png";
import Icon87 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Turmeric.png";
import Icon88 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Cinnamon.png";
import Icon89 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Paprika.png";
import Icon90 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Cumin.png";
import Icon91 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Basil.png";
import Icon92 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Thyme.png";
import Icon93 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Rosemary.png";
import Icon94 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Oregano.png";
import Icon95 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Parsley.png";
import Icon96 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Mint.png";
import Icon97 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Nutritional yeast.png";
import Icon98 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/Unsweetened cocoa powder.png";
import Icon99 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/cola.png";
import Icon100 from "C:/Users/redi user/Desktop/AZAV/nourish/src/assets/icons/chocolate.png";


export const Foods = () => {
  const [counter2, setCounter2] = useState(0);
  const [boxClicked2, setBoxClicked2] = useState(() => {
    const savedClickedState = localStorage.getItem('boxClicked2');
    return savedClickedState ? JSON.parse(savedClickedState) : [];
  });

  useEffect(() => {
    // Retrieve the clicked state from local storage
    const savedClickedState = localStorage.getItem('boxClicked2');
    if (savedClickedState) {
      setBoxClicked2(JSON.parse(savedClickedState));
    }
  }, []);

useEffect(() => {
    // Save the clicked state to local storage
    localStorage.setItem('boxClicked2', JSON.stringify(boxClicked2));
  }, [boxClicked2]);

  useEffect(() => {
    // Calculate the current counter value based on the clicked boxes
    const currentCounter = boxClicked2.filter((clicked) => clicked).length;
    setCounter2(currentCounter);
  }, [boxClicked2]);



  useEffect(() => {
    // Save the counter value to local storage
    localStorage.setItem('counter2', counter2.toString());
  }, [counter2]);

  useEffect(() => {
    // Retrieve the counter value from local storage
    const savedCounter = localStorage.getItem('counter2');
    if (savedCounter !== null) {
      setCounter2(parseInt(savedCounter));
    }
  }, []);

  // Update the local storage whenever boxClicked changes
  useEffect(() => {
    localStorage.setItem('boxClicked2', JSON.stringify(boxClicked2));
  }, [boxClicked2]);

  const boxContents = [
    <img src={Icon1} alt="apple" width="100px" height="100px"/>,
    <img src={Icon2} alt="banana" width="100px" height="100px"/>,
    <img src={Icon3} alt="blueberry" width="100px" height="100px"/>,
    <img src={Icon4} alt="strawberries" width="100px" height="100px"/>,
    <img src={Icon5} alt="oranges" width="100px" height="100px"/>,
    <img src={Icon6} alt="grapes" width="100px" height="100px"/>,
    <img src={Icon7} alt="watermelon" width="100px" height="100px"/>,
    <img src={Icon8} alt="Pineapple" width="100px" height="100px"/>,
    <img src={Icon9} alt="Mango" width="100px" height="100px"/>,
    <img src={Icon10} alt="Kiwi" width="100px" height="100px"/>,
    <img src={Icon11} alt="Peach" width="100px" height="100px"/>,
    <img src={Icon12} alt="Avocado" width="100px" height="100px"/>,
    <img src={Icon13} alt="Lemon" width="100px" height="100px"/>,
    <img src={Icon14} alt="Lime" width="100px" height="100px"/>,
    <img src={Icon15} alt="Spinach" width="100px" height="100px"/>,
    <img src={Icon16} alt="Kale" width="100px" height="100px"/>,
    <img src={Icon17} alt="Lettuce" width="100px" height="100px"/>,
    <img src={Icon18} alt="Cabbage" width="100px" height="100px"/>,
    <img src={Icon19} alt="Carrots" width="100px" height="100px"/>,
    <img src={Icon20} alt="Celery" width="100px" height="100px"/>,
    <img src={Icon21} alt="Broccoli" width="100px" height="100px"/>,
    <img src={Icon22} alt="Cauliflower" width="100px" height="100px"/>,
    <img src={Icon23} alt="Bell peppers" width="100px" height="100px"/>,
    <img src={Icon24} alt="Cucumber" width="100px" height="100px"/>,
    <img src={Icon25} alt="Zucchini" width="100px" height="100px"/>,
    <img src={Icon26} alt="Sweet potatoes" width="100px" height="100px"/>,
    <img src={Icon27} alt="Potatoes" width="100px" height="100px"/>,
    <img src={Icon28} alt="Onions" width="100px" height="100px"/>,
    <img src={Icon29} alt="Garlic" width="100px" height="100px"/>,
    <img src={Icon30} alt="Ginger" width="100px" height="100px"/>,
    <img src={Icon31} alt="Mushrooms" width="100px" height="100px"/>,
    <img src={Icon32} alt="Tomatoes" width="100px" height="100px"/>,
    <img src={Icon33} alt="Eggplant" width="100px" height="100px"/>,
    <img src={Icon34} alt="Asparagus" width="100px" height="100px"/>,
    <img src={Icon35} alt="Green beans" width="100px" height="100px"/>,
    <img src={Icon36} alt="Brussels sprouts" width="100px" height="100px"/>,
    <img src={Icon37} alt="Peas" width="100px" height="100px"/>,
    <img src={Icon38} alt="Lentils" width="100px" height="100px"/>,
    <img src={Icon39} alt="Chickpeas" width="100px" height="100px"/>,
    <img src={Icon40} alt="Black beans" width="100px" height="100px"/>,
    <img src={Icon41} alt="Kidney beans" width="100px" height="100px"/>,
    <img src={Icon42} alt="Quinoa" width="100px" height="100px"/>,
    <img src={Icon43} alt="Brown rice" width="100px" height="100px"/>,
    <img src={Icon44} alt="Oats" width="100px" height="100px"/>,
    <img src={Icon45} alt="Barley" width="100px" height="100px"/>,,
    <img src={Icon46} alt="Whole wheat bread" width="100px" height="100px"/>,
    <img src={Icon47} alt="Almonds" width="100px" height="100px"/>,
    <img src={Icon48} alt="Walnuts" width="100px" height="100px"/>,
    <img src={Icon49} alt="Cashews" width="100px" height="100px"/>,
    <img src={Icon50} alt="Pistachios" width="100px" height="100px"/>,
    <img src={Icon51} alt="Brazil nuts" width="100px" height="100px"/>,
    <img src={Icon52} alt="Chia seeds" width="100px" height="100px"/>,
    <img src={Icon53} alt="Flaxseeds" width="100px" height="100px"/>,
    <img src={Icon54} alt="Pumpkin seeds" width="100px" height="100px"/>,
    <img src={Icon55} alt="Sunflower seeds" width="100px" height="100px"/>,
    <img src={Icon56} alt="Sesame seeds" width="100px" height="100px"/>,
    <img src={Icon57} alt="Peanut butter" width="100px" height="100px"/>,
    <img src={Icon58} alt="Almond butter" width="100px" height="100px"/>,
    <img src={Icon59} alt="Greek yogurt" width="100px" height="100px"/>,
    <img src={Icon60} alt="Cottage cheese" width="100px" height="100px"/>,
    <img src={Icon61} alt="Eggs" width="100px" height="100px"/>,
    <img src={Icon62} alt="Chicken breast" width="100px" height="100px"/>,
    <img src={Icon63} alt="Turkey breast" width="100px" height="100px"/>,
    <img src={Icon64} alt="Salmon" width="100px" height="100px"/>,
    <img src={Icon65} alt="Tuna" width="100px" height="100px"/>,
    <img src={Icon66} alt="Shrimp" width="100px" height="100px"/>,
    <img src={Icon67} alt="Cod" width="100px" height="100px"/>,
    <img src={Icon68} alt="Tofu" width="100px" height="100px"/>,
    <img src={Icon69} alt="Tempeh" width="100px" height="100px"/>,
    <img src={Icon70} alt="Edamame" width="100px" height="100px"/>,
    <img src={Icon71} alt="ricotta cheese" width="100px" height="100px"/>,
    <img src={Icon72} alt="Feta cheese" width="100px" height="100px"/>,
    <img src={Icon73} alt="Mozzarella cheese" width="100px" height="100px"/>,
    <img src={Icon74} alt="Parmesan cheese" width="100px" height="100px"/>,
    <img src={Icon75} alt="Goats milk yogurt" width="100px" height="100px"/>,
    <img src={Icon76} alt="Milk" width="100px" height="100px"/>,
    <img src={Icon77} alt="Honey" width="100px" height="100px"/>,
    <img src={Icon78} alt="Maple syrup" width="100px" height="100px"/>,
    <img src={Icon79} alt="Olive oil" width="100px" height="100px"/>,
    <img src={Icon80} alt="Coconut oil" width="100px" height="100px"/>,
    <img src={Icon81} alt="Avocado oil" width="100px" height="100px"/>,
    <img src={Icon82} alt="Balsamic vinegar" width="100px" height="100px"/>,
    <img src={Icon83} alt="Apple cider vinegar" width="100px" height="100px"/>,
    <img src={Icon84} alt="Soy sauce" width="100px" height="100px"/>,
    <img src={Icon85} alt="Tamari" width="100px" height="100px"/>,
    <img src={Icon86} alt="Mustard" width="100px" height="100px"/>,
    <img src={Icon87} alt="Turmeric" width="100px" height="100px"/>,
    <img src={Icon88} alt="Cinnamon" width="100px" height="100px"/>,
    <img src={Icon89} alt="Paprika" width="100px" height="100px"/>,
    <img src={Icon90} alt="Cumin" width="100px" height="100px"/>,
    <img src={Icon91} alt="Basil" width="100px" height="100px"/>,
    <img src={Icon92} alt="Thyme" width="100px" height="100px"/>,
    <img src={Icon93} alt="Rosemary" width="100px" height="100px"/>,
    <img src={Icon94} alt="Oregano" width="100px" height="100px"/>,
    <img src={Icon95} alt="Parsley" width="100px" height="100px"/>,
    <img src={Icon96} alt="Mint" width="100px" height="100px"/>,
    <img src={Icon97} alt="Nutritional yeast" width="100px" height="100px"/>,
    <img src={Icon98} alt="Unsweetened cocoa powder" width="100px" height="100px"/>,
    <img src={Icon99} alt="cola" width="100px" height="100px"/>,
    <img src={Icon100} alt="chocolate" width="100px" height="100px"/>,
  ];

  const handleClick = (index) => {
    if (!boxClicked2[index]) {
      setBoxClicked2((prevBoxClicked) => {
        const updatedBoxClicked = [...prevBoxClicked];
        updatedBoxClicked[index] = true;
        return updatedBoxClicked;
      });
      setCounter2((prevCounter) => prevCounter + 1);
    }
  };

  const renderBoxes = () => {
    return boxContents.map((content, index) => (
      <div
        key={index}
        className={`box ${boxClicked2[index] ? 'clicked' : ''}`}
        onClick={() => handleClick(index)}
      >
        <p>{content}</p>
      </div>
    ));
  };

  return(
    <>
      <div className="maincontent2">
        <h2>Food I can eat already</h2>
        <p>click the boxes to earn points.</p>
        <h3>{counter2} / 100</h3>
        <br />
        <div className='boxes'>
          {renderBoxes()}
        </div>
      </div>
    </>
  );}