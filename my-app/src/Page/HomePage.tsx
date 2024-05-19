import "../App.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className=" mt-[450px]">
      <Row gutter={[8, 16]} className="flex justify-center">
        <Col
          span={10}
          className="flex justify-center bg-white mr-[50px] p-[20px]"
        >
          <Link to={`/layout`}>
            <button>Layout and Style</button>
          </Link>
        </Col>

        <Col
          span={10}
          className="flex justify-center bg-white mr-[50px] p-[20px]"
        >
          <Link to={`/form`}>
            <button>Form</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
