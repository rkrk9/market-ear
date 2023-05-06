import React from "react";
import { PageHeaders } from "@/Shared/Prism/Prism";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {LightGallery, settings} from "./data"
import Link from 'next/link';
import { Card, CardBody, Col, Row, Table } from "reactstrap";



const FileDetails = () => (
  <div>
    <PageHeaders
      title="File Details"
      home="Home"
      name="Apps"
      fonticonsname="File Details"
    />
    <Row className="row-sm">
      <Col xl="8"lg="12"md="12">
        <Card className="overflow-hidden">
          <CardBody className="px-4 pt-4">
            <Link href={`/pages/blog/blog03`}>
            </Link>
          </CardBody>
        </Card>
      </Col>
      <Col xl="4"lg="12"md="12">
        <Card>
          <CardBody>
            <h5 className="mb-3">File details :</h5>
            <div className="">
              <Row>
                <Col xl="12">
                  <div className="table-responsive">
                    <Table className="table mb-0 border-top table-bordered text-nowrap">
                      <tbody>
                        <tr>
                          <th scope="row">File-name</th>
                          <td>image.jpg</td>
                        </tr>
                        <tr>
                          <th scope="row">File-size</th>
                          <td>12.45mb</td>
                        </tr>
                        <tr>
                          <th scope="row">uploaded-date</th>
                          <td>01-12-2020</td>
                        </tr>
                        <tr>
                          <th scope="row">uploaded-by</th>
                          <td>prityy abodh</td>
                        </tr>
                        <tr>
                          <th scope="row">image-width</th>
                          <td>1000</td>
                        </tr>
                        <tr>
                          <th scope="row">image-height</th>
                          <td>600</td>
                        </tr>
                        <tr>
                          <th scope="row">File-formate</th>
                          <td>jpg</td>
                        </tr>
                        <tr className="border-bottom">
                          <th scope="row">File-location</th>
                          <td>storage/photos/image.jpg</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl="8"lg="12"md="12">
        <Card>
          <CardBody className="h-100">
            <Slider {...settings}>
                  {/* <div id="owl-demo2" className="owl-carousel owl-carousel-icons2"> */}
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link href={`/apps/filemanager/filedetails`}>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link href={`/apps/filemanager/filedetails`}>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link href={`/apps/filemanager/filedetails`}>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link href={`/apps/filemanager/filedetails`}>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link href={`/apps/filemanager/filedetails`}>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link href={`/apps/filemanager/filedetails`}>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link href={`/apps/filemanager/filedetails`}>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="slicksliders">
                      <div className="custom-card overflow-hidden mb-0 me-2 br-5">
                        <Link href={`/apps/filemanager/filedetails`}>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </Slider>
          </CardBody>
        </Card>
      </Col>
      <Col xl="4"lg="12"md="12">
        <Card>
          <CardBody>
            <h5 className="mb-3">Recent Files</h5>
          <LightGallery />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

FileDetails.propTypes = {};

FileDetails.defaultProps = {};

export default FileDetails;
