import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import bg from "../assets/images/ministerCredential.jpg";

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
import { Link } from "react-router-dom";

const { TextArea } = Input;
const { Option } = Select;

const MinisterCredentialForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    console.log(values);
    setLoading(true);
    // try {
    //   const response = await emailjs.send(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     "YOUR_USER_ID"
    //   );

    //   console.log("SUCCESS!", response.status, response.text);
    //   message.success("Application submitted successfully!");
    //   form.resetFields();
    //   setBroadcastedBefore(false);
    // } catch (err) {
    //   console.error("FAILED...", err);
    //   message.error("Failed to submit application. Please try again.");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="relative bg-cover bg-center min-h-screen pb-10 ">
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
            Minister Credential
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
            Minister Credential
          </h1>
        </div>
      </div>

      <div className="bg-gray-100 flex justify-center flex-col z-20">
        <h1 className="text-center text-black text-2xl my-10 mx-auto p-2 md:p-0 md:w-8/12 py-8">
          Please Answer All Questions & Provide Requested Information.
          Incomplete Applications Will Not Be Processed.
        </h1>

        <div className="md:w-8/12 mx-auto">
          <div className="bg-[#1A2E5C] p-5">
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
                    rules={[
                      { required: true, message: "Please enter your name!" },
                    ]}
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
                    label={
                      <span className="text-white">Apartment, suite, etc.</span>
                    } // Explicitly set label color
                  >
                    <Input placeholder="Apt 4B" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={8}>
                  <Form.Item
                    name="city"
                    label={<span className="text-white">City</span>} // Explicitly set label color
                    rules={[
                      { required: true, message: "Please enter your city!" },
                    ]}
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
                    label={
                      <span className="text-white">ZIP / Postal Code</span>
                    } // Explicitly set label color
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
                      {
                        required: true,
                        message: "Please select your country!",
                      },
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
                      {
                        required: true,
                        message: "Please enter your phone number!",
                      },
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
                    <span className="text-white">
                      How did you learn about NFCOCC
                    </span>
                  } // Explicitly set label color
                >
                  <Select showSearch placeholder="Select">
                    <Option value="Conference">Conference</Option>
                    <Option value="EmailsNewsletter">
                      Emails / Newsletter
                    </Option>
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
              <h1 className="text-white my-2  text-lg">
                Check here to learn how you may be exempt from paying Social
                Security tax as a credentialed minister.
              </h1>
              <Form.Item name="agreement" valuePropName="checked">
                <Checkbox>Please Contact Me With More Information</Checkbox>
              </Form.Item>
              <h1 className="text-white my-2 text-lg mb-4">
                You will be contacted after you are granted credentials by
                NFCOCC.
              </h1>

              <hr className="my-8 border-gray-700" />

              <h1 className="text-lg font-bold">
                List Your Previous Three Addresses & Length Of Time At Each: *
              </h1>
              {/* Address 1 start */}
              <div>
                <Col xs={24}>
                  <Form.Item
                    name="apartment1"
                    label={
                      <span className="text-white">Apartment, suite, etc.</span>
                    } // Explicitly set label color
                  >
                    <Input placeholder="Apt 4B" />
                  </Form.Item>
                </Col>
                <Row gutter={[24, 16]}>
                  <Col xs={24} sm={8}>
                    <Form.Item
                      name="city1"
                      label={<span className="text-white">City</span>} // Explicitly set label color
                      rules={[
                        { required: true, message: "Please enter your city!" },
                      ]}
                    >
                      <Input placeholder="New York" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Form.Item
                      name="state1"
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
                      name="zip1"
                      label={
                        <span className="text-white">ZIP / Postal Code</span>
                      } // Explicitly set label color
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
                </Row>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="country1"
                    label={<span className="text-white">Country</span>} // Explicitly set label color
                    rules={[
                      {
                        required: true,
                        message: "Please select your country!",
                      },
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

                <Row gutter={[24, 16]}>
                  <Col xs={24} sm={8}>
                    <Form.Item
                      name="howlong1"
                      label={<span className="text-white">How Long</span>} // Explicitly set label color
                      rules={[
                        {
                          required: true,
                          message: "Please enter How Long",
                        },
                      ]}
                    >
                      <Input placeholder="" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Form.Item
                      name="streetAddress1"
                      label={
                        <span className="text-white"> Street Address *</span>
                      } // Explicitly set label color
                      rules={[
                        {
                          required: true,
                          message: "Please enter How Long",
                        },
                      ]}
                    >
                      <Input placeholder="" />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
              {/* Address 2 start */}
              <div>
                <Col xs={24}>
                  <Form.Item
                    name="apartment2"
                    label={
                      <span className="text-white">Apartment, suite, etc.</span>
                    } // Explicitly set label color
                  >
                    <Input placeholder="Apt 4B" />
                  </Form.Item>
                </Col>
                <Row gutter={[24, 16]}>
                  <Col xs={24} sm={8}>
                    <Form.Item
                      name="city2"
                      label={<span className="text-white">City</span>} // Explicitly set label color
                      rules={[
                        { required: true, message: "Please enter your city!" },
                      ]}
                    >
                      <Input placeholder="New York" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Form.Item
                      name="state2"
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
                      name="zip2"
                      label={
                        <span className="text-white">ZIP / Postal Code</span>
                      } // Explicitly set label color
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
                </Row>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="country2"
                    label={<span className="text-white">Country</span>} // Explicitly set label color
                    rules={[
                      {
                        required: true,
                        message: "Please select your country!",
                      },
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

                <Row gutter={[24, 16]}>
                  <Col xs={24} sm={8}>
                    <Form.Item
                      name="howlong2"
                      label={<span className="text-white">How Long</span>} // Explicitly set label color
                      rules={[
                        {
                          required: true,
                          message: "Please enter How Long",
                        },
                      ]}
                    >
                      <Input placeholder="" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Form.Item
                      name="streetAddress2"
                      label={
                        <span className="text-white"> Street Address *</span>
                      } // Explicitly set label color
                      rules={[
                        {
                          required: true,
                          message: "Please enter How Long",
                        },
                      ]}
                    >
                      <Input placeholder="" />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
              <hr className="my-8 border-gray-700" />

              <Row gutter={[24, 16]}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="Sex"
                    label={<span className="text-white">Sex</span>}
                  >
                    <Select showSearch placeholder="Select">
                      <Option value="male">Male</Option>
                      <Option value="female">Female</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="maritalState"
                    label={<span className="text-white">Marital Status</span>}
                    rules={[
                      {
                        required: true,
                        message: "Please enter marital Status!",
                      },
                    ]}
                  >
                    <Select showSearch placeholder="Select">
                      <Option value="singlee">Single</Option>
                      <Option value="married">Married</Option>
                      <Option value="divorced">Divorced</Option>
                      <Option value="widowed">Widowed</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Col xs={24} sm={12}>
                <Form.Item
                  name="areYouUsCitizen"
                  label={
                    <span className="text-white">Are you a U.S citizen</span>
                  }
                >
                  <Select showSearch placeholder="Select">
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item
                  name="visaOrSocialSecurity"
                  label="Social Security Number or U.S. Visa Number *"
                >
                  <Input />
                </Form.Item>
              </Col>

              <Row gutter={[24, 16]}>
                <Col xs={24}>
                  <Form.Item
                    name="sponsorName"
                    label="Name of Sponsor (if any)"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="presentMinistryRole"
                    label="What's Your Present Ministry?"
                  >
                    <Select placeholder="Select">
                      <Option value="preaching">Preaching</Option>
                      <Option value="evangelizing">Evangelizing</Option>
                      <Option value="counseling">Counseling</Option>
                      <Option value="bibleTeaching">Bible Teaching</Option>
                      <Option value="music">Music</Option>
                      <Option value="other">Other</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="isFullTime"
                    label="Are You Currently in Full-Time Ministry?"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="ministryDescription"
                    label="Please Describe Your Ministry."
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="callTestimony"
                    label="Through what source or ministry did you answer this call?"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="isSupported"
                    label="Are you supported entirely by your ministry?"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="ministerialRoles"
                    label="What Ministerial Roles Have You Previously Held?"
                  >
                    <TextArea rows={3} />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="currentIncome"
                    label="What is your annual income?"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="yearsInMinistry"
                    label="How Many Years Have You Held the Title That You Now?"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="salvationTestimony"
                    label="If Asked What Does It Mean To Be Saved? (Received Jesus As Lord and Savior)"
                  >
                    <TextArea rows={2} />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="isChristInLife"
                    label="Is Christ First In Your Life, And The Salvation Of Souls? (Col. 2:10, Rom. 1:1)"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="baptizedWater"
                    label="Do You Believe In Water Baptism According To Matthew 28:19?"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="baptizedSpirit"
                    label="Do You Have The Baptism In The Holy Spirit According To Acts 2:4 - AND do you believe in speaking in tongues?"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="unityInBody"
                    label="Do You Strive Earnestly For Unity In The Entire Body Of Christ? (John 17:21)"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="soulWinner"
                    label="Are You A Soul Winner? (Proverbs 11:30)"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="lifestyleStandard"
                    label="At the Present Time, Are You Living A Clean, Consistent Christian Life According To The New Testament Standard Of Holiness? (See Gal. 5:22, Phil.4:8)"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="doYouBelieve"
                    label="Do You Believe & And Agree To Our 'Tenets', The Fundamental Truth?"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="pastorName"
                    label="Your Current Pastor's Name:"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="fellowshipStatus"
                    label="Do You Remain Tied To (Shackles Or Outspokenly Harm Your Brethren)?"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="pastorContact"
                    label="Your Current Pastor's Telephone Number:"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="address"
                    label="Your Current Physical Address"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="dob"
                    label="Is Your Date Of Birth In A Timely Manner?"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="substanceUse"
                    label="Do You Use Any Form Of: Beverage, Alcohol, Tobacco?, Narcotics?"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="theologicalViews"
                    label="Please Share Your Theological Views In The Following Areas:"
                  >
                    <TextArea rows={3} />
                  </Form.Item>
                </Col>
                <hr className="my-8 border-gray-700" />
                <Col xs={24}>
                  <Form.Item
                    name="misconductAccusation"
                    label="Have You Ever Been Dismissed From A Position (Secular Or Clerical) As A Result Of Sexual Misconduct?"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="legalConviction"
                    label="Have You Ever Been Lawfully Convicted Or Legally Charged By An Individual, Group Or Institution, Or An Organization, Of Sexual Misconduct?"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="explanation"
                    label="If yes, explain or elaborate."
                  >
                    <TextArea rows={2} />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="alreadyCredentialed"
                    label="Are You Already Credentialed Or Licensed With Another Organization?"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item name="paragraph" label="Paragraph">
                    <TextArea rows={3} />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="holySpiritBaptism"
                    label="Holy Spirit Baptism"
                  >
                    <TextArea rows={2} />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item name="waterBaptism" label="Water Baptism">
                    <TextArea rows={2} />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item
                    name="justLivingByFaith:"
                    label="Just Living By Faith:"
                  >
                    <TextArea rows={2} />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="ordinationConsent"
                    label="If Granted A License As An Ordained Minister, You Will Be Required To Take An Exam (Comparable For That Level, If Your Score Is Inadequate, You May Retake It). Do You Consent With Your Written Signature?"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="actsDisqualify"
                    label="Do You Understand And Agree That Any Involvement Or Indecent Acts Committed By You Will Automatically Reject You From NFCOCC?"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="willSurrender"
                    label="Will You Surrender Your Credentials If Expelled?"
                  >
                    <Select placeholder="Select">
                      <Option value="yes">Yes</Option>
                      <Option value="no">No</Option>
                    </Select>
                  </Form.Item>
                </Col>
              
                <Col xs={24}>
                  <Form.Item name="declaration" valuePropName="checked">
                    <Checkbox>
                      <span className="text-white">
                        I Agree to the Declaration and Pledge
                      </span>
                    </Checkbox>
                  </Form.Item>
                </Col>
                <h1 className="text-white mb-3">
                  I hereby declare each of the statements given or made in this
                  application and supporting documents are correct and true; and
                  I solemnly pledge to abide by all promises and statements
                  contained therein.*
                </h1>
  <hr className="my-8 border-gray-700" />
                <Col xs={24}>
                  <Form.Item
                    name="electronicSignature"
                    label="Electronic Signature"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <h1>
                  By signing with your electronic signature you agree that it
                  has the same legal validity as if you were signing by hand.
                  Please place your initials between two forward slash symbols:
                  ex. /ABC/
                </h1>

                <Col xs={24}>
                  <Form.Item name="fullName" label="Type Full Name">
                    <Input />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item name="submissionDate" label="Today's Date">
                    <Input type="date" />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    name="credentialCategory"
                    label="Ministerial Fee(s):"
                  >
                    <Select placeholder="Please Select A Ministerial Credentials Category">
                      <Option value="ordained_minister">
                        Ordained Minister (OM)
                      </Option>
                      <Option value="ordained_chaplain">
                        Ordained Chaplain (OC)
                      </Option>
                      <Option value="licensed_minister">
                        Licensed Minister (LM)
                      </Option>
                      <Option value="evangelist">Evangelist (E)</Option>
                      <Option value="missionary">Missionary (M)</Option>
                      <Option value="minister_of_music">
                        Minister Of Music (MM)
                      </Option>
                      <Option value="praise_worship_leader">
                        Praise & Worship Leader (PWL)
                      </Option>
                      <Option value="ordained_member">
                        Ordained Member (OME)
                      </Option>
                      <Option value="licensed_member">
                        Licensed Member (LME)
                      </Option>
                      <Option value="christian_worker">
                        Christian Worker (CW)
                      </Option>
                      <Option value="general_member">
                        General Member (GM)
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item name="materialsConsent" valuePropName="checked">
                    <Checkbox>
                      <span className="text-white">
                        I agree to receiving marketing and promotional materials
                      </span>
                    </Checkbox>
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinisterCredentialForm;

// {
//     "streetAddress": "Mrs.",
//     "name": "gauravLakhera",
//     "email": "test@gmail.com",
//     "apartment": "apt",
//     "city": "qwd",
//     "state": "qd",
//     "zip": "123123",
//     "country": "Australia",
//     "phone": "9719881716",
//     "How_did_you_learn_about": "Church/Pastor",
//     "apartment1": "321",
//     "city1": "dq",
//     "state1": "dewd",
//     "zip1": "3213",
//     "country1": "Australia",
//     "howlong1": "3",
//     "streetAddress1": "dw",
//     "apartment2": "wed",
//     "city2": "dw",
//     "state2": "de",
//     "zip2": "2323",
//     "country2": "India",
//     "howlong2": "2",
//     "streetAddress2": "ewd",
//     "Sex": "female",
//     "maritalState": "divorced",
//     "areYouUsCitizen": "no",
//     "visaOrSocialSecurity": "32423432",
//     "sponsorName": "fdfef",
//     "presentMinistryRole": "counseling",
//     "isFullTime": "yes",
//     "ministryDescription": "fewf",
//     "callTestimony": "fwef",
//     "isSupported": "no",
//     "ministerialRoles": "vfevvrf",
//     "currentIncome": "1000000",
//     "yearsInMinistry": "vfdv",
//     "salvationTestimony": "vfrvdfv",
//     "isChristInLife": "no",
//     "baptizedWater": "no",
//     "baptizedSpirit": "no",
//     "unityInBody": "no",
//     "soulWinner": "yes",
//     "lifestyleStandard": "yes",
//     "doYouBelieve": "no",
//     "pastorName": "vfv",
//     "fellowshipStatus": "yes",
//     "pastorContact": "45453543533",
//     "address": "212",
//     "dob": "yes",
//     "substanceUse": "yes",
//     "theologicalViews": "refdwe",
//     "misconductAccusation": "yes",
//     "legalConviction": "no",
//     "explanation": "fewfwef",
//     "alreadyCredentialed": "yes",
//     "paragraph": "fewefwefwerf",
//     "holySpiritBaptism": "ewrfwfwef",
//     "waterBaptism": "crefwerf",
//     "ordinationConsent": "no",
//     "actsDisqualify": "no",
//     "willSurrender": "yes",
//     "electronicSignature": "gaurav",
//     "fullName": "gaurav lakhera",
//     "submissionDate": "2025-12-12",
//     "credentialCategory": "praise_worship_leader",
//     "materialsConsent": true
// }
