import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import "./SearchTitle.css";
const SearchByTitile = () => {
  const getInputHandler = (e) => {
    console.log("hello world");
    console.log(e.target.value);
  };

  const [options, setOptions] = useState({});

  return (
    <>
      <Container>
        <h1>Search By Title</h1>
        <Card
          style={{
            backgroundColor: "#fafafa",
            borderColor: "#333",
          }}
        >
          <CardBody>
            <CardTitle tag="h5">By Title</CardTitle>
            <Form>
              <Row>
                <Col>
                  <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={2}>
                      Title
                    </Label>
                    <Col sm={10}>
                      <Input
                        onChange={getInputHandler}
                        bsSize="lg"
                        id="title"
                        name="title"
                        placeholder="Title"
                        type="text"
                      />
                    </Col>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup row>
                    <Label for="year" size="lg" sm={2}>
                      Year
                    </Label>
                    <Col sm={10}>
                      <Input
                        bsSize="lg"
                        id="year"
                        name="Year"
                        placeholder="year"
                        type="text"
                      />
                    </Col>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup row>
                    <Label for="exampleEmail" size="lg" sm={2}>
                      Plot
                    </Label>
                    <Col sm={10}>
                      <Input bsSize="lg" className="mb-3" type="select">
                        <option>Short</option>
                        <option>Full</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
            <Button className="search">Search</Button>
            <Button className="reset">Reset</Button>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default SearchByTitile;
