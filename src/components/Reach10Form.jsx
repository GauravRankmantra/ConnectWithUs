import React from "react";
import { Form, Input, Select, DatePicker, Button, Checkbox, Radio } from "antd";

const { Option } = Select;

const Reach10Form = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form submitted:", values);
    // You can integrate your own submit logic here
  };

  return (
    <div className="bg-blue-950">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        scrollToFirstError
      >
        {/* Adult 1 */}
        <Form.Item>
          <h2>Get to Know You - Adult 1</h2>
        </Form.Item>

        <Form.Item name="todayDecided" label="Today I Decided To:">
          <Select placeholder="Select an option">
            <Option value="Become-a-Reach1070-Covenant-Faith-Partner">
              Become a Reach1070 Covenant Faith Partner
            </Option>
            <Option value="one">
              Accept Jesus Christ as my Lord and Savior
            </Option>
            <Option value="two">Become a Member</Option>
            <Option value="Get-Baptized">Get Baptized</Option>
            <Option value="Re-dedicate-my-life-to-Jesus-Christ">
              Re-dedicate my life to Jesus Christ
            </Option>
            <Option value="Request-Prayer">Request Prayer</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="additionalDetails"
          label="Additional details about your decision: (optional)"
        >
          <Input.TextArea rows={6} maxLength={180} />
        </Form.Item>

        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: "Please enter your first name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="middleName" label="Middle Name">
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: "Please enter your last name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastNameLetter"
          label="Last Name Begins With The Letter"
        >
          <Select placeholder="Select">
            <Option value="A-C">A-C</Option>
            <Option value="D-F">D-F</Option>
            <Option value="G-I">G-I</Option>
            <Option value="J-L">J-L</Option>
            <Option value="M-O">M-O</Option>
            <Option value="P-R">P-R</Option>
            <Option value="S-V">S-V</Option>
            <Option value="W-Z">W-Z</Option>
          </Select>
        </Form.Item>
        <Form.Item name="suffix" label="Suffix">
          <Select placeholder="Select">
            <Option value="Jr">Jr</Option>
            <Option value="Sr">Sr</Option>
            <Option value="III">III</Option>
            <Option value="IV">IV</Option>
            <Option value="V">V</Option>
          </Select>
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Select placeholder="Select">
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>
        </Form.Item>
        <Form.Item name="ethnicity" label="Ethnicity">
          <Select placeholder="Select">
            <Option value="African American">African American</Option>
            <Option value="Asian">Asian</Option>
            <Option value="Caucasian">Caucasian</Option>
            <Option value="Hispanic">Hispanic</Option>
            <Option value="Multi-Racial">Multi Racial</Option>
            <Option value="Native-American">Native American</Option>
            <Option value="Pacific-Islander">Pacific Islander</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item name="maritalStatus" label="Marital Status">
          <Select placeholder="Select">
            <Option value="Single">Single</Option>
            <Option value="Married">Married</Option>
            <Option value="Separated">Separated</Option>
            <Option value="Divorced">Divorced</Option>
            <Option value="Widow">Widow</Option>
            <Option value="Widower">Widower</Option>
          </Select>
        </Form.Item>
        <Form.Item name="dob" label="Date Of Birth">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email Address"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="E.g. john@doe.com" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input />
        </Form.Item>

        {/* Primary Address */}
        <Form.Item>
          <h2>Primary Address</h2>
        </Form.Item>
        <Form.Item
          name="streetAddress"
          label="Street Address*"
          rules={[
            { required: true, message: "Please enter your street address" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="addressLine2" label="Apartment, suite, etc*">
          <Input />
        </Form.Item>
        <Form.Item
          name="city"
          label="City*"
          rules={[{ required: true, message: "Please enter your city" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="stateProvince"
          label="State/Province*"
          rules={[
            { required: true, message: "Please enter your state or province" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="postalCode"
          label="ZIP / Postal Code*"
          rules={[{ required: true, message: "Please enter your postal code" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="country"
          label="Country*"
          rules={[{ required: true, message: "Please select your country" }]}
        >
          <Select
            showSearch
            placeholder="Select a country"
            optionFilterProp="children"
          >
            <Option value="United States">United States</Option>
            <Option value="Canada">Canada</Option>
            <Option value="India">India</Option>
            <Option value="United Kingdom">United Kingdom</Option>
          </Select>
        </Form.Item>

        {/* Registering As */}
        <Form.Item name="roles" label="I am registering as a">
          <Checkbox.Group>
            <Checkbox value="Audio/Visual/Production">
              Audio/Visual/Production
            </Checkbox>
            <Checkbox value="Children/Youth/College">
              Children/Youth/College
            </Checkbox>
            <Checkbox value="Communications & Social Media">
              Communications & Social Media
            </Checkbox>
            <Checkbox value="Discipleship">Discipleship</Checkbox>
            <Checkbox value="Hospitality">Hospitality</Checkbox>
            <Checkbox value="Ministry">Ministry</Checkbox>
            <Checkbox value="Outreach">Outreach</Checkbox>
            <Checkbox value="Worship & Arts">Worship & Arts</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          name="interests"
          label="I'm Interested In: (optional)"
          help="Baptism is for 5 years and up."
        >
          <Checkbox.Group>
            <Checkbox value="Baby Dedication (for ages 4 and under)">
              Baby Dedication (for ages 4 and under)
            </Checkbox>
            <Checkbox value="Baptism">Baptism</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        {/* Next Steps */}
        <Form.Item>
          <h2>Next Steps - Become A Member</h2>
          <h3>
            Becoming a member is...today and become an essential part of our New
            Birth family!
          </h3>
        </Form.Item>
        <Form.Item
          name="nextSteps"
          label="Next Steps - Become A Member"
          rules={[{ required: true, message: "Please choose an option" }]}
        >
          <Radio.Group>
            <Radio value="now">Register for the Next Steps Class now</Radio>
            <Radio value="later">Register for the Next Steps Class later</Radio>
          </Radio.Group>
        </Form.Item>

        {/* Tell Us About Your Visit */}
        <Form.Item>
          <h2>Tell Us About Your Visit</h2>
        </Form.Item>
        <Form.Item
          name="howHeard"
          label="How did you hear about us?"
          rules={[{ required: true, message: "Please select one" }]}
        >
          <Select placeholder="Select an option">
            <Option value="Invited">Invited</Option>
            <Option value="Community Outreach">Community Outreach</Option>
            <Option value="Flyer">Flyer</Option>
            <Option value="Radio">Radio</Option>
            <Option value="Social Media Ad (Facebook, Instagram)">
              Social Media Ad (Facebook, Instagram)
            </Option>
            <Option value="Live Streaming Service">
              Live Streaming Service
            </Option>
            <Option value="Website/Mail/Eblast">Website/Mail/Eblast</Option>
            <Option value="Online Search">Online Search</Option>
            <Option value="Homegoing/Funeral">Homegoing/Funeral</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item name="otherHowHeard" label="Other (please specify)">
          <Input />
        </Form.Item>
        <Form.Item
          name="referrerName"
          label="Who invited you?"
          rules={[{ required: true, message: "Please enter a name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="referrerPhone" label="Referrer's Phone Number">
          <Input />
        </Form.Item>
        <Form.Item name="referrerEmail" label="Referrer's Email Address">
          <Input />
        </Form.Item>

        {/* Adult 2 */}
        <Form.Item>
          <h2>Get to Know You - Adult 2</h2>
        </Form.Item>
        <Form.Item name="todayDecidedAdult2" label="Today I Decided To:">
          <Select placeholder="Select an option">
            <Option value="Become-a-Reach1070-Covenant-Faith-Partner">
              Become a Reach1070 Covenant Faith Partner
            </Option>
            <Option value="one">
              Accept Jesus Christ as my Lord and Savior
            </Option>
            <Option value="two">Become a Member</Option>
            <Option value="Get-Baptized">Get Baptized</Option>
            <Option value="Re-dedicate-my-life-to-Jesus-Christ">
              Re-dedicate my life to Jesus Christ
            </Option>
            <Option value="Request-Prayer">Request Prayer</Option>
          </Select>
        </Form.Item>
        <Form.Item name="addMoreAdult2" label="Add More Adult">
          <Checkbox.Group>
            <Checkbox value="no">No</Checkbox>
            <Checkbox value="one">Yes</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        {/* Adult 3 */}
        <Form.Item>
          <h2>Get to Know You - Adult 3</h2>
        </Form.Item>
        <Form.Item name="todayDecidedAdult3" label="Today I Decided To:">
          <Select placeholder="Select an option">
            <Option value="Become-a-Reach1070-Covenant-Faith-Partner">
              Become a Reach1070 Covenant Faith Partner
            </Option>
            <Option value="one">
              Accept Jesus Christ as my Lord and Savior
            </Option>
            <Option value="two">Become a Member</Option>
            <Option value="Get-Baptized">Get Baptized</Option>
            <Option value="Re-dedicate-my-life-to-Jesus-Christ">
              Re-dedicate my life to Jesus Christ
            </Option>
            <Option value="Request-Prayer">Request Prayer</Option>
          </Select>
        </Form.Item>
        <Form.Item name="addMoreAdult3" label="Add More Adult">
          <Checkbox.Group>
            <Checkbox value="no">No</Checkbox>
            <Checkbox value="one">Yes</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        {/* Child 1 */}
        <Form.Item>
          <h2>Get to Know You - Child 1</h2>
        </Form.Item>
        <Form.Item name="todayDecidedChild1" label="Today I Decided To:">
          <Select placeholder="Select an option">
            <Option value="Become-a-Reach1070-Covenant-Faith-Partner">
              Become a Reach1070 Covenant Faith Partner
            </Option>
            <Option value="one">
              Accept Jesus Christ as my Lord and Savior
            </Option>
            <Option value="two">Become a Member</Option>
            <Option value="Get-Baptized">Get Baptized</Option>
            <Option value="Re-dedicate-my-life-to-Jesus-Christ">
              Re-dedicate my life to Jesus Christ
            </Option>
            <Option value="Request-Prayer">Request Prayer</Option>
          </Select>
        </Form.Item>
        <Form.Item name="addMoreChild1" label="Add More Child">
          <Checkbox.Group>
            <Checkbox value="no">No</Checkbox>
            <Checkbox value="one">Yes</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        {/* Child 2 */}
        <Form.Item>
          <h2>Get to Know You - Child 2</h2>
        </Form.Item>
        <Form.Item name="todayDecidedChild2" label="Today I Decided To:">
          <Select placeholder="Select an option">
            <Option value="Become-a-Reach1070-Covenant-Faith-Partner">
              Become a Reach1070 Covenant Faith Partner
            </Option>
            <Option value="one">
              Accept Jesus Christ as my Lord and Savior
            </Option>
            <Option value="two">Become a Member</Option>
            <Option value="Get-Baptized">Get Baptized</Option>
            <Option value="Re-dedicate-my-life-to-Jesus-Christ">
              Re-dedicate my life to Jesus Christ
            </Option>
            <Option value="Request-Prayer">Request Prayer</Option>
          </Select>
        </Form.Item>
        <Form.Item name="addMoreChild2" label="Add More Child">
          <Checkbox.Group>
            <Checkbox value="no">No</Checkbox>
            <Checkbox value="one">Yes</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        {/* Child 3 */}
        <Form.Item>
          <h2>Get to Know You - Child 3</h2>
        </Form.Item>
        <Form.Item name="todayDecidedChild3" label="Today I Decided To:">
          <Select placeholder="Select an option">
            <Option value="Become-a-Reach1070-Covenant-Faith-Partner">
              Become a Reach1070 Covenant Faith Partner
            </Option>
            <Option value="one">
              Accept Jesus Christ as my Lord and Savior
            </Option>
            <Option value="two">Become a Member</Option>
            <Option value="Get-Baptized">Get Baptized</Option>
            <Option value="Re-dedicate-my-life-to-Jesus-Christ">
              Re-dedicate my life to Jesus Christ
            </Option>
            <Option value="Request-Prayer">Request Prayer</Option>
          </Select>
        </Form.Item>
        <Form.Item name="addMoreChild3" label="Add More Child">
          <Checkbox.Group>
            <Checkbox value="no">No</Checkbox>
            <Checkbox value="one">Yes</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        {/* Child 4 */}
        <Form.Item>
          <h2>Get to Know You - Child 4</h2>
        </Form.Item>
        <Form.Item name="todayDecidedChild4" label="Today I Decided To:">
          <Select placeholder="Select an option">
            <Option value="Become-a-Reach1070-Covenant-Faith-Partner">
              Become a Reach1070 Covenant Faith Partner
            </Option>
            <Option value="one">
              Accept Jesus Christ as my Lord and Savior
            </Option>
            <Option value="two">Become a Member</Option>
            <Option value="Get-Baptized">Get Baptized</Option>
            <Option value="Re-dedicate-my-life-to-Jesus-Christ">
              Re-dedicate my life to Jesus Christ
            </Option>
            <Option value="Request-Prayer">Request Prayer</Option>
          </Select>
        </Form.Item>
        <Form.Item name="addMoreChild4" label="Add More Child">
          <Checkbox.Group>
            <Checkbox value="no">No</Checkbox>
            <Checkbox value="one">Yes</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        {/* Child 5 */}
        <Form.Item>
          <h2>Get to Know You - Child 5</h2>
        </Form.Item>
        <Form.Item name="todayDecidedChild5" label="Today I Decided To:">
          <Select placeholder="Select an option">
            <Option value="Become-a-Reach1070-Covenant-Faith-Partner">
              Become a Reach1070 Covenant Faith Partner
            </Option>
            <Option value="one">
              Accept Jesus Christ as my Lord and Savior
            </Option>
            <Option value="two">Become a Member</Option>
            <Option value="Get-Baptized">Get Baptized</Option>
            <Option value="Re-dedicate-my-life-to-Jesus-Christ">
              Re-dedicate my life to Jesus Christ
            </Option>
            <Option value="Request-Prayer">Request Prayer</Option>
          </Select>
        </Form.Item>

        {/* Mailing List */}
        <Form.Item
          name="mailingList"
          label="Would you like to join our mailing list?"
        >
          <Radio.Group>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>

        {/* Prayer Requests */}
        <Form.Item
          name="prayerRequests"
          label="Any Prayer Requests? (optional)"
        >
          <Input.TextArea rows={3} />
        </Form.Item>

        {/* Digital Signature */}
        <Form.Item
          name="digitalSignature"
          label="Digital Signature (type your name)"
        >
          <Input placeholder="Full Name" />
        </Form.Item>
        <Form.Item
          name="dateSigned"
          label="Date Signed"
          initialValue={new Date().toLocaleDateString()}
        >
          <Input disabled />
        </Form.Item>

        {/* Contact Preference */}
        <Form.Item
          name="contactPreference"
          label="How would you prefer to be contacted?"
        >
          <Checkbox.Group>
            <Checkbox value="phone">Phone</Checkbox>
            <Checkbox value="email">Email</Checkbox>
            <Checkbox value="sms">SMS</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        {/* Media Consent */}
        <Form.Item name="mediaConsent" valuePropName="checked">
          <Checkbox>
            I consent to being photographed or recorded during events.
          </Checkbox>
        </Form.Item>

        {/* Emergency Contact */}
        <Form.Item name="emergencyContactName" label="Emergency Contact Name">
          <Input />
        </Form.Item>
        <Form.Item name="emergencyContactPhone" label="Emergency Contact Phone">
          <Input />
        </Form.Item>

        {/* Final Comments */}
        <Form.Item
          name="finalComments"
          label="Additional Comments or Questions?"
        >
          <Input.TextArea rows={3} />
        </Form.Item>

        {/* Final Declaration/Agreement */}
        <Form.Item
          name="finalAgreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("You must accept the agreement to continue")
                    ),
            },
          ]}
        >
          <Checkbox>
            I confirm that the information provided is accurate and complete. I
            understand and agree to the terms and privacy policy.
          </Checkbox>
        </Form.Item>

        {/* Submit */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Reach10Form;
