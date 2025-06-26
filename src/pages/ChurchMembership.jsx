import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  Checkbox,
  DatePicker,
  Row,
  Col,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import bg from "../assets/images/associatebg.jpg";
import { Link } from "react-router-dom";
const ChurchMembership = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log("Form submitted:", values);
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
            Church Membership Application Form
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
            Church Membership Application Form
          </h1>
        </div>
      </div>

      <div className="md:w-8/12 mx-auto mt-10">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Church Membership Application Form
        </h2>

        <div className="bg-[#1A2E5C] p-5 text-white">
          <Form form={form} layout="vertical" onFinish={handleFinish}>
            <Form.Item>
              <h2 className="text-white">
                Welcome to Scripture Church Membership Class Application
                Process!
              </h2>
              <p className="text-white">
                Membership Classes are scheduled four times a year. The next
                class begins the first Saturday in January, April, July, and
                October at 7pm for 12 weeks.
              </p>
            </Form.Item>

            <Form.Item className="text-white">
              <h2>THE APPLICATION FORM</h2>
              <p>
                1. Complete all information. Incomplete forms won’t be
                processed.
              </p>
              <p>
                2. Attachments: Letter of release (if applicable) and
                passport-sized photo(s).
              </p>
              <p>
                If you have been a member of another bible believing church, and
                wish to join us, please provide a letter of release from the
                Pastor along with your application form. If you cannot provide
                one, please hold off your application until you can obtain one
                or provide statement as to why you are unable to obtain a letter
                of release!
              </p>
              <p>
                 Please include a passport sized photograph of yourself and
                family members who are applying for membership. Having a picture
                will aid Pastors and Leadership to get to know you. Please print
                the appropriate name at the back of the picture.
              </p>
              <p>
                *If your name has been approved & you miss the class, you will
                be deferred to the next class. However, should you miss that
                class as well, you will have to re-apply.
              </p>
              <p>
                ** Please take note that anyone who comes 10 minutes late will
                not be able to attend the class.
              </p>
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="applicationDate"
                  label="Date"
                  rules={[{ required: true }]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="passportPhoto"
                  label="Passport Sized Photo"
                  valuePropName="fileList"
                  getValueFromEvent={(e) =>
                    Array.isArray(e) ? e : e?.fileList
                  }
                >
                  <Upload
                    name="photo"
                    listType="picture"
                    beforeUpload={() => false}
                  >
                    <Button icon={<UploadOutlined />}>Upload Photo</Button>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item name="applyingFor" label="Applying for">
              <Checkbox.Group>
                <Row>
                  <Col span={12}>
                    <Checkbox value="Regular Membership">
                      Regular Membership
                    </Checkbox>
                  </Col>
                  <Col span={12}>
                    <Checkbox value="InState">In __________ (state)</Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="firstName"
                  label="First Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="lastName"
                  label="Last Name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="dateOfBirth"
                  label="Date of Birth"
                  rules={[{ required: true }]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[{ required: true }]}
                >
                  <Select placeholder="Select gender">
                    <Select.Option value="Male">Male</Select.Option>
                    <Select.Option value="Female">Female</Select.Option>
                    <Select.Option value="Other">Other</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="address"
              label="Residential Address"
              rules={[{ required: true }]}
            >
              <Input.TextArea rows={2} />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="city"
                  label="City"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="state"
                  label="State"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="zipCode"
                  label="Zip Code"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="country"
                  label="Country"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="mobilePhone"
                  label="Mobile Phone"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="Email Address"
                  rules={[{ type: "email" }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="maritalStatus"
              label="Marital Status"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select">
                <Select.Option value="Single">Single</Select.Option>
                <Select.Option value="Married">Married</Select.Option>
                <Select.Option value="Divorced">Divorced</Select.Option>
                <Select.Option value="Widowed">Widowed</Select.Option>
              </Select>
            </Form.Item>
            <h1 className="text-white">
              SPOUSE’S INFORMATION (If married, please fill out, whether your
              spouse is applying for membership or not, and if separated please
              still include your spouse’s details as you are still legally
              married)
            </h1>

            <Form.Item name="spouseName" label="Spouse’s Name">
              <Input />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="spouseDOB" label="Spouse’s Date of Birth">
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="anniversary" label="Anniversary Date">
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item name="children" label="Do you have children?">
              <Select placeholder="Select">
                <Select.Option value="Yes">Yes</Select.Option>
                <Select.Option value="No">No</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="childrenNamesAges"
              label="If yes, list their names and ages"
            >
              <Input.TextArea rows={2} />
            </Form.Item>
            <Form.Item
              name="previousChurch"
              label="Previous Church Affiliation"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="previousPastor"
              label="Name of Pastor / Leader of that Church"
            >
              <Input />
            </Form.Item>
            <h1 className="text-white">*List the names of churches that you have been a part of before coming to Scripture Church beginning with the church you first attended. A letter of release is required if you have been a member of another church prior to coming to Scripture Church. Complete information below as follows: name/s of church, denomination, length of attendance and your reason for leaving.</h1>

            <Form.Item
              name="reasonForLeaving"
              label="Reason for Leaving that Ministry / Church"
            >
              <Input.TextArea rows={2} />
            </Form.Item>

            <Form.Item
              name="saved"
              label="Have you accepted Jesus Christ as your personal Lord and Savior?"
            >
              <Select placeholder="Select">
                <Select.Option value="Yes">Yes</Select.Option>
                <Select.Option value="No">No</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="salvationExperience"
              label="Please briefly describe your salvation experience"
            >
              <Input.TextArea rows={3} />
            </Form.Item>

            <Form.Item
              name="baptized"
              label="Have you been water baptized by immersion?"
            >
              <Select placeholder="Select">
                <Select.Option value="Yes">Yes</Select.Option>
                <Select.Option value="No">No</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="baptismLocation"
              label="If yes, where were you baptized?"
            >
              <Input />
            </Form.Item>

            <Form.Item name="baptismDate" label="When were you baptized?">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name="currentMinistry"
              label="Are you currently serving in a ministry?"
            >
              <Select placeholder="Select">
                <Select.Option value="Yes">Yes</Select.Option>
                <Select.Option value="No">No</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="ministryDetails"
              label="If yes, which ministry and what is your role?"
            >
              <Input.TextArea rows={2} />
            </Form.Item>

            <Form.Item
              name="spiritualGifts"
              label="What do you believe your spiritual gifts are?"
            >
              <Input.TextArea rows={2} />
            </Form.Item>

            <Form.Item
              name="skills"
              label="List any skills or areas of experience you believe would be a blessing to the ministry"
            >
              <Input.TextArea rows={2} />
            </Form.Item>

            <Form.Item
              name="expectations"
              label="What are your expectations from Scripture Church?"
            >
              <Input.TextArea rows={2} />
            </Form.Item>

            <Form.Item
              name="agreeStatement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("You must agree before submitting."),
                },
              ]}
            >
              <Checkbox>
                I understand that completing this application does not guarantee
                acceptance into membership and that I may be contacted for
                further discussion or an interview.
              </Checkbox>
            </Form.Item>

            <Form.Item
              name="signature"
              label="Type your full name as signature"
            >
              <Input />
            </Form.Item>

            <Form.Item name="signatureDate" label="Date">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit Application
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ChurchMembership;
