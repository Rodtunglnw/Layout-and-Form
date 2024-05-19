import { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  DatePicker,
  Radio,
  Table,
} from "antd";
import { useTranslation } from "react-i18next";
import moment, { Moment } from "moment";

interface FormData {
  prefix: string;
  firstname: string;
  lastname: string;
  birthDate: Moment | string | null;
  nationality: string;
  idCard: string;
  gender: string;
  phone: string;
  passport?: string;
  expectedSalary: string;
}

const MyForm: React.FC = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [formDataList, setFormDataList] = useState<FormData[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    const savedData: FormData[] = JSON.parse(
      localStorage.getItem("formDataList") || "[]"
    );
    setFormDataList(savedData);
  }, []);

  const onFinish = (values: FormData) => {
    const newDataList = [...formDataList];
    values.birthDate = values.birthDate
      ? (values.birthDate as Moment).format("YYYY-MM-DD")
      : null;
    if (editingIndex !== null && editingIndex >= 0) {
      newDataList[editingIndex] = values;
      setEditingIndex(null);
    } else {
      newDataList.push(values);
    }
    setFormDataList(newDataList);
    localStorage.setItem("formDataList", JSON.stringify(newDataList));
    form.resetFields();
  };

  const onEdit = (record: FormData, index: number) => {
    record.birthDate = moment(record.birthDate as string, "YYYY-MM-DD");
    form.setFieldsValue(record);
    setEditingIndex(index);
  };

  const onDelete = (index: number) => {
    const newDataList = formDataList.filter((_, i) => i !== index);
    setFormDataList(newDataList);
    localStorage.setItem("formDataList", JSON.stringify(newDataList));
  };

  const columns = [
    {
      title: t("Prefix"),
      dataIndex: "prefix",
      key: "prefix",
      sorter: (a: FormData, b: FormData) => a.prefix.localeCompare(b.prefix),
    },
    {
      title: t("Firstname"),
      dataIndex: "firstname",
      key: "firstname",
      sorter: (a: FormData, b: FormData) =>
        a.firstname.localeCompare(b.firstname),
    },
    {
      title: t("Lastname"),
      dataIndex: "lastname",
      key: "lastname",
      sorter: (a: FormData, b: FormData) =>
        a.lastname.localeCompare(b.lastname),
    },
    {
      title: t("Date of birth"),
      dataIndex: "birthDate",
      key: "birthDate",
      sorter: (a: FormData, b: FormData) =>
        moment(a.birthDate as string).unix() -
        moment(b.birthDate as string).unix(),
    },
    {
      title: t("Nationality"),
      dataIndex: "nationality",
      key: "nationality",
      sorter: (a: FormData, b: FormData) =>
        a.nationality.localeCompare(b.nationality),
    },
    {
      title: t("ID CARD"),
      dataIndex: "idCard",
      key: "idCard",
      sorter: (a: FormData, b: FormData) => a.idCard.localeCompare(b.idCard),
    },
    {
      title: t("Gender"),
      dataIndex: "gender",
      key: "gender",
      sorter: (a: FormData, b: FormData) => a.gender.localeCompare(b.gender),
    },
    {
      title: t("Phone"),
      dataIndex: "phone",
      key: "phone",
      sorter: (a: FormData, b: FormData) => a.phone.localeCompare(b.phone),
    },
    {
      title: t("Passport"),
      dataIndex: "passport",
      key: "passport",
      sorter: (a: FormData, b: FormData) =>
        (a.passport || "").localeCompare(b.passport || ""),
    },
    {
      title: t("Expected Salary"),
      dataIndex: "expectedSalary",
      key: "expectedSalary",
      sorter: (a: FormData, b: FormData) =>
        parseFloat(a.expectedSalary) - parseFloat(b.expectedSalary),
    },
    {
      title: t("Action"),
      key: "action",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (_: any, record: FormData, index: number) => (
        <>
          <Button onClick={() => onEdit(record, index)}>{t("Edit")}</Button>
          <Button onClick={() => onDelete(index)}>{t("Delete")}</Button>
        </>
      ),
    },
  ];

  const onReset = () => {
    form.resetFields();
    localStorage.removeItem("formData");
  };

  return (
    <div>
      <div className="border-4 border-black mt-[150px] mr-[400px] ml-[400px] rounded-md">
        <Form
          form={form}
          className="m-[20px]"
          onFinish={onFinish}
          onValuesChange={(_, values) =>
            localStorage.setItem("formData", JSON.stringify(values))
          }
        >
          <Row gutter={12} justify="start">
            <Col span={4}>
              <Form.Item
                rules={[{ required: true }]}
                label={t("Prefix")}
                name="prefix"
              >
                <Select size="small" placeholder={t("Prefix")}>
                  <Select.Option value="Mr">{t("Mr")}</Select.Option>
                  <Select.Option value="Ms">{t("Ms")}</Select.Option>
                  <Select.Option value="Mrs">{t("Mrs")}</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={t("Firstname")}
                name="firstname"
                rules={[{ required: true }]}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 20 }}
              >
                <Input placeholder={t("Firstname")} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={t("Lastname")}
                name="lastname"
                rules={[{ required: true }]}
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 20 }}
              >
                <Input placeholder={t("Lastname")} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12} justify="start">
            <Col span={5}>
              <Form.Item
                label={t("Date of birth")}
                name="birthDate"
                rules={[{ required: true }]}
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 18 }}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label={t("Nationality")}
                name="nationality"
                rules={[{ required: true }]}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <Input placeholder={t("Nationality")} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12} justify="start">
            <Col span={9}>
              <Form.Item
                label={t("ID CARD")}
                name="idCard"
                rules={[
                  {
                    required: true,
                    message: t("Please enter your ID card number"),
                  },
                ]}
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 20 }}
              >
                <Input
                  maxLength={13}
                  className="w-[400px]"
                  placeholder={t("ID CARD")}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12} justify="start">
            <Col span={6}>
              <Form.Item
                name="gender"
                label={t("Gender")}
                rules={[
                  { required: true, message: t("Please select your gender") },
                ]}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
              >
                <Radio.Group>
                  <Radio value="Male">{t("Male")}</Radio>
                  <Radio value="Female">{t("Female")}</Radio>
                  <Radio value="Gender not specified">
                    {t("Gender not specified")}
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12} justify="start">
            <Col span={18}>
              <Form.Item
                name="phone"
                label={t("Phone")}
                rules={[
                  {
                    required: true,
                    message: t("Please enter your phone number"),
                  },
                ]}
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 20 }}
              >
                <Input maxLength={10} placeholder={t("Phone")} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12} justify="start">
            <Col span={18}>
              <Form.Item
                name="passport"
                label={t("Passport")}
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 20 }}
              >
                <Input maxLength={9} placeholder={t("Passport")} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={12} justify="start">
            <Col span={18}>
              <Form.Item
                name="expectedSalary"
                label={t("Expected Salary")}
                rules={[
                  {
                    required: true,
                    message: t("Please enter your expected salary"),
                  },
                ]}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 20 }}
              >
                <Input
                  maxLength={7}
                  className="w-[300px]"
                  placeholder={t("Expected Salary")}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {t("Submit")}
                </Button>
                <Button htmlType="button" onClick={onReset}>
                  {t("Reset")}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <Table columns={columns} dataSource={formDataList} rowKey="idCard" />
    </div>
  );
};

export default MyForm;
