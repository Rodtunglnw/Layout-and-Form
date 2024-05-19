import { Row, Col } from "antd";
import { useState } from "react";
import "./Contents.css";
import Circle from "./PictureFromCSS/Circle";
import Oval from "./PictureFromCSS/Oval";
import Square from "./PictureFromCSS/Square";
import Trapezoid from "./PictureFromCSS/Trapezoid";
import Parallelogram from "./PictureFromCSS/Parallelogram";
import Rectangle from "./PictureFromCSS/Rectangle";
import { useTranslation } from "react-i18next";

function Contents() {
  interface TypePicture {
    id: number;
    label: string;
    icon: React.ReactNode;
  }
  const { t } = useTranslation();

  const Picture_MENU: TypePicture[] = [
    {
      id: 0,
      label: "วงกลม",
      icon: <Circle />,
    },
    {
      id: 1,
      label: "วงรี",
      icon: <Oval />,
    },
    {
      id: 2,
      label: "สี่เหลี่ยมผืนผ้า",
      icon: <Square />,
    },
    {
      id: 3,
      label: "สี่เหลี่ยมคางหมู",
      icon: <Trapezoid />,
    },
    {
      id: 4,
      label: "สี่เหลี่ยมด้านขนาน",
      icon: <Parallelogram />,
    },
    {
      id: 5,
      label: "สี่เหลี่ยมผืนผ้า",
      icon: <Rectangle />,
    },
  ];

  const [items, setItems] = useState<TypePicture[]>(Picture_MENU);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const rowStyleChange = isClicked ? "center" : "end";

  const rowStyleChange2 = isClicked ? "end" : "center";

  const shuffleArray = (array: TypePicture[]) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleShuffle = () => {
    setItems(shuffleArray(items));
  };

  const renderImages1 = items.map((item, index) => (
    <Col
      span={6}
      key={index}
      className=" bg-white 
       mr-5 flex justify-center align-center mt-10 rounded-xl"
    >
      <div className="mb-10" onClick={handleShuffle}>
        {item.icon}
      </div>
    </Col>
  ));

  const moveLeft = () => {
    const newItem = [...items];
    newItem.push(newItem.shift()!);
    setItems(newItem);
  };

  const moveRight = () => {
    const newItem = [...items];
    newItem.unshift(newItem.pop()!);
    setItems(newItem);
  };

  return (
    <div>
      <div className="mt-[200px]">
        <Row gutter={[48, 8]} className="flex justify-center h-[200px]">
          <Col
            span={6}
            className="bg-white mr-[20px] flex justify-center rounded-xl"
          >
            <div className="flex justify-center">
              <div className="triangle-left"></div>
              <div className="relative top-[180px] right-[80px]">
                <button
                  className=" bg-green-300 rounded-md p-2"
                  onClick={moveLeft}
                >
                  {t("Move Shape")}
                </button>
              </div>
            </div>
          </Col>
          <Col
            span={10}
            className="bg-white mr-[20px] flex justify-center rounded-xl"
          >
            <div className="flex justify-center">
              <div className="triangle-top relative right-[150px]"></div>
              <div className="triangle-bottom relative left-[200px]"></div>
            </div>
            <div className="relative top-[180px] right-[150px]">
              <button
                className="bg-green-300 rounded-md p-2"
                onClick={handleClick}
              >
                {t("Move Position")}
              </button>
            </div>
          </Col>
          <Col
            span={6}
            className="bg-white mr-[20px] flex justify-center rounded-xl"
          >
            <div className="flex justify-center ">
              <div className="triangle-right"></div>
              <div>
                <div className="relative top-[180px] right-[100px]">
                  <button
                    className="bg-green-300 rounded-md p-2"
                    onClick={moveRight}
                  >
                    {t("Move Shape")}
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-[50px]">
        <Row justify={rowStyleChange} gutter={48}>
          {renderImages1.slice(0, 3)}
        </Row>
        <Row justify={rowStyleChange2} gutter={48}>
          {renderImages1.slice(3)}
        </Row>
      </div>
    </div>
  );
}

export default Contents;
