import React from "react";
import { Form, Input, Select, Radio, Button, Row, Col } from "antd";

const { TextArea } = Input;
const { Option } = Select;
import bg from "../assets/images/associatebg.jpg";
import { Link } from "react-router-dom";


const MinistryRequestForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form submitted:", values);
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
          <Form form={form} onFinish={onFinish} layout="vertical">
            <h3>
              If you would like to have a session with Dr. Gary Kirkwood please
              fill out the form below.
            </h3>
            <h3>PLEASE NOTE MOST SESSIONS LAST ONLY 1 HOUR</h3>

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

            <Form.Item name="requestType">
              <Input placeholder="Speaking-Request" />
            </Form.Item>

            <Form.Item
              name="contactName"
              label="Contact Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="title" label="Title">
              <Input />
            </Form.Item>

            <Form.Item
              name="contactPhone"
              label="Contact Phone"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="contactEmail"
              label="Contact Email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="organizationName"
              label="Name of Organization (If Applicable)"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="organizationDescription"
              label="Brief Description of Your Organization"
            >
              <Input />
            </Form.Item>

            <h2>Session Details</h2>

            <Form.Item
              name="sessionDateTime"
              label="Day, Date & Time of your request?"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="locationRequest"
              label="Location Request (If other than my location)"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true, message: "Please enter the address" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="city"
              label="City"
              rules={[{ required: true, message: "Please enter the city" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="state"
              label="State"
              rules={[{ required: true, message: "Please enter the state" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="zip"
              label="Zip"
              rules={[{ required: true, message: "Please enter the zip code" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="proposedRole"
              label="Proposed Role"
              rules={[{ required: true, message: "Please select a role" }]}
            >
              <Select placeholder="Select Service">
                <Option value="pastoral">Pastoral</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="topic"
              label="Topic of Discussion"
              rules={[{ required: true, message: "Please select a topic" }]}
            >
              <Select placeholder="Select from Options">
                <Option value="family">Family</Option>
                <Option value="marriage">Marriage</Option>
                <Option value="ministry">Ministry</Option>
                <Option value="business">Business</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="participants"
              label="Key Participants"
              rules={[
                { required: true, message: "Please select key participants" },
              ]}
            >
              <Select placeholder="Select from Options">
                <Option value="spouse">Spouse</Option>
                <Option value="familyMember">Family Member</Option>
                <Option value="minister">Minister</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="refreshments"
              label="Will this session include or require refreshments?"
              rules={[{ required: true, message: "Please choose an option" }]}
            >
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="referralSource"
              label="How did you hear about Gary Kirkwood?"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="purpose"
              label="Please provide the purpose of this request."
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              name="captcha"
              label="Type the characters"
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

export default MinistryRequestForm;
