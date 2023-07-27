import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";

import Calendar from "./Calendar";
import Progress_Bar from "./Prograss_bar";

export default function App() {
  const [active, setActive] = useState("tab1");

  const handleClick = (value) => {
    if (value === active) {
      return;
    }

    setActive(value);
  };

  return (
    <>
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
     <h3 className="heading">Progress Bar</h3>
     <Progress_Bar bgcolor="#99ff66" progress='50'  height={30} />
     </div>
    <section className="gradient-custom vh-100">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol xl="10">
            <MDBCard>
              <MDBCardBody className="p-5">
                <h1> Modules
                  {/* <MDBInput
                    type="text"
                    id="form1"
                    label="New task..."
                    wrapperClass="flex-fill"
                  />
                  <MDBBtn type="submit" color="info" className="ms-2">
                    Add
                  </MDBBtn> */}
                </h1>
                <MDBTabs className="mb-4 pb-2">
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleClick("tab1")}
                      active={active === "tab1"}
                    >
                      All
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleClick("tab2")}
                      active={active === "tab2"}
                    >
                      Active
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink
                      onClick={() => handleClick("tab3")}
                      active={active === "tab3"}
                    >
                      Completed
                    </MDBTabsLink>
                  </MDBTabsItem>
                </MDBTabs>
                <MDBTabsContent>
                  <MDBTabsPane show={active === "tab1"}>
                    <MDBListGroup className="mb-0">
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                          defaultChecked
                        />
                        <s>Module-1</s>
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                          defaultChecked
                        />
                        <s>Module-2</s>
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
                        Module-3
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
                        Module-4
                      </MDBListGroupItem>
                      {/* <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
                        Vestibulum at eros
                      </MDBListGroupItem> */}
                    </MDBListGroup>
                  </MDBTabsPane>
                  <MDBTabsPane show={active === "tab2"}>
                    <MDBListGroup className="mb-0">
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
                        Module-3
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
                        Module-4
                      </MDBListGroupItem>
                      {/* <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                        />
                        Vestibulum at eros
                      </MDBListGroupItem> */}
                    </MDBListGroup>
                  </MDBTabsPane>
                  <MDBTabsPane show={active === "tab3"}>
                    <MDBListGroup className="mb-0">
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                          defaultChecked
                        />
                        <s>Module-1</s>
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className=" d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: "#f4f6f7" }}
                      >
                        {" "}
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheck"
                          className="me-3"
                          defaultChecked
                        />
                        <s>Module-2</s>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBTabsPane>
                </MDBTabsContent>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* <Scheduling /> */}
      <center><h1>Schedules</h1></center>
      <Calendar />
    </section>
    </>
  );
}