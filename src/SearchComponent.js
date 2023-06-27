import React, { useState } from "react";
import { Col, Input, Switch, Checkbox, Collapse } from "antd";
import { EnvironmentOutlined, AppstoreOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Panel } = Collapse;

const SearchComponent = ({ onSearch, onLocationChange, onIndustryChange }) => {
  const [showOnlyMyLocation, setShowOnlyMyLocation] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  const handleSearch = (value) => {
    onSearch(value);
  };

  const handleShowOnlyMyLocationChange = (checked) => {
    setShowOnlyMyLocation(checked);
  };

  const handleLocationChange = (checkedValues) => {
    setSelectedLocations(checkedValues);
    onLocationChange(checkedValues);
  };

  const handleIndustryChange = (checkedValues) => {
    setSelectedIndustries(checkedValues);
    onIndustryChange(checkedValues);
  };

  return (
    <Col span={4}>
      <Search placeholder="Search" enterButton onSearch={handleSearch} />
      <div style={{ marginTop: "16px" }}>
        <Switch
          checked={showOnlyMyLocation}
          onChange={handleShowOnlyMyLocationChange}
          checkedChildren="Show Only My Location"
          unCheckedChildren="Show All"
        />
        <Collapse style={{ marginTop: "16px" }} bordered={false}>
          <Panel
            header={
              <h4>
                <EnvironmentOutlined /> Location
              </h4>
            }
            key="location"
          >
            <Checkbox.Group
              value={selectedLocations}
              onChange={handleLocationChange}
            >
              <Checkbox value="america">America</Checkbox>
              <div style={{ marginLeft: "16px" }}>
                <Checkbox value="new-york">New York</Checkbox>
                <Checkbox value="san-francisco">San Francisco</Checkbox>
              </div>
            </Checkbox.Group>
          </Panel>
          <Panel
            header={
              <h4>
                <AppstoreOutlined /> Industry
              </h4>
            }
            key="industry"
          >
            <Checkbox.Group
              value={selectedIndustries}
              onChange={handleIndustryChange}
            >
              <Checkbox value="hyperscale">Hyperscale</Checkbox>
              <Checkbox value="services">Services</Checkbox>
              <Checkbox value="software">Software</Checkbox>
            </Checkbox.Group>
          </Panel>
        </Collapse>
      </div>
    </Col>
  );
};

export default SearchComponent;
