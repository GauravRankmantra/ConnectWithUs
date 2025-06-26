import React from "react";
import { Form, Input, Button, Select, Radio, Row, Col, message } from "antd";
import { Link } from "react-router-dom";
import bg from "../assets/images/associatebg.jpg";

const { TextArea } = Input;
const { Option } = Select;

const MeetingRequestForm = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log("Form Data:", values);
    message.success("Form submitted successfully!");
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 30%",
        }}
        className="relative py-32 z-20"
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-20">
          {" "}
          {/* Added relative and z-20 */}
          <h1 className="text-4xl md:text-5xl  text-white text-center my-4">
            Special Sacerdotal Request Form
          </h1>
        </div>

        <div className="flex absolute bottom-1 translate-x-1/2 right-1/2 justify-end p-2 w-max mx-auto bg-black/10 text-2xl items-center z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-white"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          <Link to={"/"} className="text-white ml-1 text-lg md:text-xl">
            Home{" "}
          </Link>
          <h1 className="text-green-500 mx-2 text-lg md:text-xl">
            {" "}
            Special Sacerdotal Request Form
          </h1>
        </div>
      </div>

      <div className="md:w-8/12 mx-auto mt-10">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Special Sacerdotal Request Form
        </h2>

        <div className="bg-[#1A2E5C] p-5 text-white">
          <Form form={form} layout="vertical" onFinish={handleFinish}>
            <Form.Item className="text-white">
              <h3>
                PLEASE NOTE: NO DATES ARE FINAL UNTIL YOU HAVE A RESPONSE FROM
                OUR PASTOR
              </h3>
            </Form.Item>

            <Form.Item className="text-white">
              <h3>Personal Information</h3>
            </Form.Item>

            <Row gutter={16}>
              <Col span={6}>
                <Form.Item name="code1">
                  <Input placeholder="1" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="code2">
                  <Input placeholder="584e722b6e8d4" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="url">
                  <Input placeholder="https://connectwithus.info" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="code3">
                  <Input placeholder="134" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item name="formTitle">
              <Input placeholder="Speaking-Request" />
            </Form.Item>

            <Form.Item
              name="contactName"
              label="Contact Name(required)"
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="title" label="Title">
              <Input />
            </Form.Item>

            <Form.Item
              name="contactPhone"
              label="Contact Phone(required)"
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="contactEmail"
              label="Contact Email(required)"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Enter a valid email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="othersParticipating"
              label="Name of Others Particpating (If Applicable)"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="briefDescription"
              label="Brief Description of Your Request"
            >
              <Input />
            </Form.Item>

            <Form.Item name="dateOfRequest" label="Date of Your Request">
              <Input />
            </Form.Item>

            <Form.Item name="yourAddress" label="What is your address?">
              <Input />
            </Form.Item>

            <Form.Item
              name="fullAddress"
              label="Address"
              rules={[{ required: true, message: "Address is required" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="city"
              label="City"
              rules={[{ required: true, message: "City is required" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="state"
              label="State"
              rules={[{ required: true, message: "State is required" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="zip"
              label="Zip"
              rules={[{ required: true, message: "Zip is required" }]}
            >
              <Input />
            </Form.Item>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="requestPurpose"
                  label="What is the purpose of your request?(required)"
                  rules={[
                    { required: true, message: "Please select a purpose" },
                  ]}
                >
                  <Select placeholder="Select Service">
                    <Option value="Wedding">Wedding</Option>
                    <Option value="Funeral">Funeral</Option>
                    <Option value="Baptism">Baptism</Option>
                    <Option value="Child Dedication">Child Dedication</Option>
                    <Option value="Other">Other</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="venue"
                  label="Venue of Request (required)"
                  rules={[{ required: true, message: "Please select a venue" }]}
                >
                  <Select placeholder="Select from Options">
                    <Option value="Harvest">Harvest</Option>
                    <Option value="Other">Other</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="estimatedAttendance"
              label="Estimated Attendance(required)"
              rules={[{ required: true, message: "Please select attendance" }]}
            >
              <Select placeholder="Select from Options">
                <Option value="0-100">0-100</Option>
                <Option value="101-200">101-200</Option>
                <Option value="201-300">201-300</Option>
                <Option value="301-400">301-400</Option>
                <Option value="500">500</Option>
                <Option value="Higher">Higher</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Are you prepared to meet?" name="preparedToMeet">
              <Radio.Group>
                <Radio value="Yes">Yes</Radio>
                <Radio value="No">No</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="budget"
              label="Is there a budget associated with this event?"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="details"
              label="Please provide the details of this request."
            >
              <TextArea rows={6} />
            </Form.Item>

            <Form.Item
              name="captcha"
              label="Type the characters(required)"
              rules={[
                { required: true, message: "Please enter the characters" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default MeetingRequestForm;
