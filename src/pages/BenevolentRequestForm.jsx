import React from "react";
import { Form, Input, Button, Select, Radio, Row, Col, message } from "antd";
import bg from "../assets/images/associatebg.jpg";
import { Link } from "react-router-dom";

const { TextArea } = Input;
const { Option } = Select;

const BenevolentRequestForm = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log("Submitted values:", values);
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
            Benevolent Request Form
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
            Benevolent Request Form
          </h1>
        </div>
      </div>

      <div className="md:w-8/12 mx-auto mt-10">
        <h2 className="text-center text-3xl font-semibold mb-6">
          Benevolent Request Form
        </h2>

        <div className="bg-[#1A2E5C] p-5 text-white">
          <Form layout="vertical" form={form} onFinish={handleFinish}>
            <Form.Item className="text-white">
              <h3>
                PLEASE NOTE: ALL REQUESTS ARE BASED UPON AVAILABLE FUNDS & ARE
                REVIEWED BY THE CHURCH ADVISORY COMMITTEE, AND ON A FIRST
                REQUEST BASIS
              </h3>
            </Form.Item>

            <Form.Item>
              <h3 className="text-white">Personal Information</h3>
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
                  <Input placeholder="https://connectwithus.info/" />
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
              rules={[{ required: true, message: "Contact name is required" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="title" label="Title">
              <Input />
            </Form.Item>

            <Form.Item
              name="contactPhone"
              label="Contact Phone(required)"
              rules={[{ required: true, message: "Phone number is required" }]}
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
                  message: "Valid email required",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="organizationName"
              label="Name of organization (If Applicable)"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="organizationDescription"
              label="Brief Description of Your Organization"
            >
              <Input />
            </Form.Item>

            <Form.Item name="requestedAmount" label="Amount of Requested">
              <Input />
            </Form.Item>

            <Form.Item name="yourAddress" label="What is your address?">
              <Input />
            </Form.Item>

            <Form.Item
              name="address"
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
                  name="maritalStatus"
                  label="Status(required)"
                  rules={[{ required: true, message: "Status is required" }]}
                >
                  <Select placeholder="Select from Options">
                    <Option value="Married">Married</Option>
                    <Option value="Divorce">Divorce</Option>
                    <Option value="Single">Single</Option>
                    <Option value="Other">Other</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="householdNumber"
                  label="Number In Household (required)"
                  rules={[
                    { required: true, message: "This field is required" },
                  ]}
                >
                  <Select placeholder="Select from Options">
                    <Option value="One">One</Option>
                    <Option value="Two">Two</Option>
                    <Option value="Three">Three</Option>
                    <Option value="Four">Four</Option>
                    <Option value="Other">Other</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="sourcesApplied"
              label="What other sources have you applied for?(required)"
              rules={[{ required: true, message: "Please select a source" }]}
            >
              <Select placeholder="Select from Options">
                <Option value="Red Cross">Red Cross</Option>
                <Option value="Salvation Army">Salvation Army</Option>
                <Option value="Social Services">Social Services</Option>
                <Option value="Others">Others</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="employmentStatus"
              label="Are you currently employed?"
              rules={[{ required: true, message: "Please select an option" }]}
            >
              <Radio.Group>
                <Radio value="Yes">Yes</Radio>
                <Radio value="No">No</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="referralSource"
              label="How did you hear about this program?"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="requestDetails"
              label="Please provide the detail cause and purpose of this request."
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

export default BenevolentRequestForm;
