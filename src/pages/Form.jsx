import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  message,
  Row,
  Col,
  Space,
  Switch,
  Checkbox,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import emailjs from "@emailjs/browser";

const { TextArea } = Input;
const { Option } = Select;

const MediaMemberForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [broadcastedBefore, setBroadcastedBefore] = useState(false); // State for conditional field

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const signatureFile = values.signature
        ? values.signature[0]?.originFileObj
        : null;
      const formValuesToSend = { ...values };
      delete formValuesToSend.signature;

      if (signatureFile) {
        console.log("Signature file ready to be handled:", signatureFile.name);
      }

      const response = await emailjs.send(
        "YOUR_SERVICE_ID", // replace with your service ID
        "YOUR_TEMPLATE_ID", // replace with your template ID
        formValuesToSend,
        "YOUR_USER_ID" // replace with your public key (user ID)
      );

      console.log("SUCCESS!", response.status, response.text);
      message.success("Application submitted successfully!");
      form.resetFields();
      setBroadcastedBefore(false);
    } catch (err) {
      console.error("FAILED...", err);
      message.error("Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div className="bg-[#1A2E5C] p-10">
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        // Apply text-white to the form for global label color
        className="bg-[#1A2E5C] mx-auto my-8 text-white  rounded-lg shadow-xl max-w-4xl"
        initialValues={{
          country: "USA",
          hasMediaDept: false,
          broadcastedBefore: false,
        }}
      >
        {/* Personal Information Section */}
        <Row gutter={[24, 16]}>
          <Col xs={24}>
            <Form.Item
              name="streetAddress"
              label={<span className="text-white">Current Title</span>} // Explicitly set label color
              rules={[
                {
                  required: true,
                  message: "Please enter your street address!",
                },
              ]}
            >
              <Select showSearch placeholder="Add Title">
                <Option value="Apostle">Apostle</Option>
                <Option value="Bishop">Bishop</Option>
                <Option value="Dr.">Dr.</Option>
                <Option value="Evangelist">Evangelist</Option>
                <Option value="Minister">Minister</Option>
                <Option value="Miss">Miss</Option>
                <Option value="Mr.">Mr.</Option>
                <Option value="Mrs.">Mrs.</Option>
                <Option value="Ms.">Ms.</Option>
                <Option value="Pastor">Pastor</Option>
                <Option value="Rev.">Rev.</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="name"
              label={<span className="text-white">Name</span>} // Explicitly set label color
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input placeholder="John Doe" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="email"
              label={<span className="text-white">Email Address</span>} // Explicitly set label color
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input placeholder="john.doe@example.com" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              name="streetAddress"
              label={<span className="text-white">Street Address</span>} // Explicitly set label color
              rules={[
                {
                  required: true,
                  message: "Please enter your street address!",
                },
              ]}
            >
              <Input placeholder="123 Main St" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              name="apartment"
              label={<span className="text-white">Apartment, suite, etc.</span>} // Explicitly set label color
            >
              <Input placeholder="Apt 4B" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Item
              name="city"
              label={<span className="text-white">City</span>} // Explicitly set label color
              rules={[{ required: true, message: "Please enter your city!" }]}
            >
              <Input placeholder="New York" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Item
              name="state"
              label={<span className="text-white">State/Province</span>} // Explicitly set label color
              rules={[
                {
                  required: true,
                  message: "Please enter your state/province!",
                },
              ]}
            >
              <Input placeholder="NY" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Item
              name="zip"
              label={<span className="text-white">ZIP / Postal Code</span>} // Explicitly set label color
              rules={[
                {
                  required: true,
                  message: "Please enter your ZIP/postal code!",
                },
              ]}
            >
              <Input placeholder="10001" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="country"
              label={<span className="text-white">Country</span>} // Explicitly set label color
              rules={[
                { required: true, message: "Please select your country!" },
              ]}
            >
              <Select showSearch placeholder="Select a country">
                <Option value="USA">United States</Option>
                <Option value="Canada">Canada</Option>
                <Option value="UK">United Kingdom</Option>
                <Option value="Australia">Australia</Option>
                <Option value="Germany">Germany</Option>
                <Option value="France">France</Option>
                <Option value="Japan">Japan</Option>
                <Option value="India">India</Option>
                <Option value="China">China</Option>
                <Option value="Brazil">Brazil</Option>
                <Option value="Mexico">Mexico</Option>
                <Option value="Italy">Italy</Option>
                <Option value="Spain">Spain</Option>
                <Option value="SouthAfrica">South Africa</Option>
                <Option value="Nigeria">Nigeria</Option>
                <Option value="Egypt">Egypt</Option>
                <Option value="Argentina">Argentina</Option>
                <Option value="Russia">Russia</Option>
                <Option value="SouthKorea">South Korea</Option>
                <Option value="SaudiArabia">Saudi Arabia</Option>
                <Option value="Indonesia">Indonesia</Option>
                <Option value="Turkey">Turkey</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="phone"
              label={<span className="text-white">Phone Number</span>} // Explicitly set label color
              rules={[
                { required: true, message: "Please enter your phone number!" },
              ]}
            >
              <Input placeholder="(123) 456-7890" />
            </Form.Item>
          </Col>
        </Row>

        {/* <hr className="my-8 border-gray-700" /> */}

        {/* Church/Ministry Information Section */}
        {/* <h3 className="text-2xl font-semibold mb-6">
          Church / Ministry Information
        </h3> */}
        {/* <Row gutter={[24, 16]}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="church"
              label={
                <span className="text-white">Name Of Church Or Ministry</span>
              } // Explicitly set label color
              rules={[
                {
                  required: true,
                  message: "Please enter the church/ministry name!",
                },
              ]}
            >
              <Input placeholder="Example Church" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="address"
              label={<span className="text-white">Address</span>} // Explicitly set label color
              rules={[
                {
                  required: true,
                  message: "Please enter the church/ministry address!",
                },
              ]}
            >
              <Input placeholder="456 Oak Ave" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="website"
              label={<span className="text-white">Website</span>} // Explicitly set label color
              rules={[
                {
                  required: true,
                  type: "url",
                  message: "Please enter a valid website URL!",
                },
              ]}
            >
              <Input placeholder="https://www.examplechurch.org" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="denomination"
              label={<span className="text-white">Denomination</span>} // Explicitly set label color
              rules={[
                { required: true, message: "Please enter the denomination!" },
              ]}
            >
              <Input placeholder="Non-denominational" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              name="position"
              label={<span className="text-white">Your Position</span>} // Explicitly set label color
              rules={[
                { required: true, message: "Please enter your position!" },
              ]}
            >
              <Input placeholder="Media Volunteer / Pastor" />
            </Form.Item>
          </Col>
        </Row> */}
        <Col xs={24}>
          <Form.Item
            name="How_did_you_learn_about"
            label={
              <span className="text-white">How did you learn about NFCOCC</span>
            } // Explicitly set label color
          >
            <Select showSearch placeholder="Select">
              <Option value="Conference">Conference</Option>
              <Option value="EmailsNewsletter">Emails / Newsletter</Option>
              <Option value="SearchEngine">Search Engine</Option>
              <Option value="Mailer">Mailer</Option>
              <Option value="Church/Pastor">Church / Pastor</Option>
              <Option value="Radio">Radio</Option>
              <Option value="TV">TV</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
        </Col>

        <hr className="my-8 border-gray-700" />

        <Form.Item name="agreement" valuePropName="checked">
            <h1 className="text-white my-2  text-lg">Check here to learn how you may be exempt from paying Social Security tax as a credentialed minister.</h1>
          <Checkbox >
            Please Contact Me With More Information
          </Checkbox>
            <h1 className="text-white my-2 text-lg">You will be contacted after you are granted credentials by NFCOCC.</h1>
        </Form.Item>

        {/* Media Department Information */}
        <h3 className="text-2xl font-semibold mb-6">
          Media Department Information
        </h3>
        <Row gutter={[24, 16]}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="hasMediaDept"
              label={
                <span className="text-white">
                  Do you have a media department?
                </span>
              } // Explicitly set label color
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  message: "Please specify if you have a media department!",
                },
              ]}
            >
              <Switch
                checkedChildren="Yes"
                unCheckedChildren="No"
                onChange={(checked) =>
                  form.setFieldsValue({ hasMediaDept: checked })
                }
              />
            </Form.Item>
          </Col>
          {form.getFieldValue("hasMediaDept") && (
            <Col xs={24} sm={12}>
              <Form.Item
                name="mediaDirector"
                label={
                  <span className="text-white">Who’s your media Director?</span>
                } // Explicitly set label color
                rules={[
                  {
                    required: true,
                    message: "Please enter your media director's name!",
                  },
                ]}
              >
                <Input placeholder="Jane Doe" />
              </Form.Item>
            </Col>
          )}
          <Col xs={24} sm={12}>
            <Form.Item
              name="platform"
              label={
                <span className="text-white">
                  Which media platform do you prefer?
                </span>
              } // Explicitly set label color
              rules={[
                {
                  required: true,
                  message: "Please specify your preferred media platform!",
                },
              ]}
            >
              <Input placeholder="YouTube, Facebook, Website, etc." />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="contentCreator"
              label={
                <span className="text-white">
                  Who's responsible for your content creation?
                </span>
              } // Explicitly set label color
              rules={[
                {
                  required: true,
                  message: "Please specify who creates your content!",
                },
              ]}
            >
              <Input placeholder="Internal Team / Freelancer" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="broadcastedBefore"
              label={
                <span className="text-white">
                  Have you ever broadcast before?
                </span>
              } // Explicitly set label color
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  message: "Please specify if you've broadcasted before!",
                },
              ]}
            >
              <Switch
                checkedChildren="Yes"
                unCheckedChildren="No"
                onChange={(checked) => {
                  setBroadcastedBefore(checked);
                  form.setFieldsValue({ broadcastedBefore: checked });
                }}
              />
            </Form.Item>
          </Col>
          {broadcastedBefore && (
            <Col xs={24} sm={12}>
              <Form.Item
                name="mediaCompany"
                label={
                  <span className="text-white">
                    And if so, what media company?
                  </span>
                } // Explicitly set label color
                rules={[
                  {
                    required: true,
                    message: "Please specify the media company!",
                  },
                ]}
              >
                <Input placeholder="ABC Broadcasting" />
              </Form.Item>
            </Col>
          )}
          <Col xs={24}>
            <Form.Item
              name="demo"
              label={
                <span className="text-white">Can you provide a demo link?</span>
              } // Explicitly set label color
              rules={[
                {
                  required: true,
                  type: "url",
                  message: "Please provide a valid demo URL!",
                },
              ]}
              tooltip="A link to your past broadcasts, sermons, or media content."
            >
              <Input placeholder="https://youtube.com/your-demo" />
            </Form.Item>
          </Col>
        </Row>

        <hr className="my-8 border-gray-700" />

        {/* Compliance & Signature */}
        <h3 className="text-2xl font-semibold mb-6">Compliance & Signature</h3>
        <Form.Item
          name="understoodStandards"
          label={
            <span className="text-white">
              Have you thoroughly read and understand our broadcasting
              standards?
            </span>
          } // Explicitly set label color
          rules={[
            {
              required: true,
              message: "Please confirm you understand our standards!",
            },
          ]}
        >
          <Select placeholder="Select an option">
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="message"
          label={
            <span className="text-white">Additional Message (optional)</span>
          } // Explicitly set label color
        >
          <TextArea
            rows={4}
            maxLength={500}
            showCount
            placeholder="Enter any additional comments or questions here."
          />
        </Form.Item>

        <Form.Item
          name="signature"
          label={<span className="text-white">Upload your signature here</span>} // Explicitly set label color
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: "Please upload your signature!" }]}
          extra="Accepted formats: JPG, PNG, PDF. Max size: 2MB"
        >
          <Upload
            accept=".jpg,.jpeg,.png,.pdf"
            maxCount={1}
            beforeUpload={(file) => {
              const isLt2M = file.size / 1024 / 1024 < 2;
              if (!isLt2M) {
                message.error("File must be smaller than 2MB!");
              }
              return isLt2M || Upload.LIST_IGNORE;
            }}
            onRemove={() => {
              form.setFieldsValue({ signature: [] });
              return true;
            }}
          >
            <Button icon={<UploadOutlined />}>Select File</Button>
          </Upload>
        </Form.Item>

        <Form.Item className="text-center">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
            className="w-full sm:w-auto px-8 py-2 rounded-md transition duration-300 ease-in-out hover:bg-[#1A2E5C] border border-blue-500 hover:text-white"
            style={{ backgroundColor: "#2563EB", borderColor: "#2563EB" }}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MediaMemberForm;
