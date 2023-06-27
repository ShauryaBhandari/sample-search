import React, { useState } from "react";
import { Row, Col } from "antd";
import SearchComponent from "./SearchComponent";
import CardComponent from "./CardComponent";
import dummyData from "./data"; // Import the dummy data from data.js

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleLocationChange = (value) => {
    setSelectedLocation(value);
  };

  const filteredData = dummyData.filter((data) => {
    const isMatchedName = data.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    if (selectedLocation && selectedLocation !== "all") {
      const isMatchedLocation = data.locations.includes(selectedLocation);
      return isMatchedName && isMatchedLocation;
    }

    return isMatchedName;
  });

  return (
    <div style={{ padding: "24px" }}>
      <Row gutter={[24, 24]}>
        <SearchComponent
          onSearch={handleSearch}
          onLocationChange={handleLocationChange}
        />
        <Col span={16}>
          <Row gutter={[24, 24]}>
            {filteredData.map((data, index) => (
              <CardComponent data={data} key={index} />
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default App;
