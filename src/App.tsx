import { Button, Card, Col, Divider, Form, Layout, Menu, Row, Space, Table, Tag, Typography } from 'antd';
import './styles/dashboard.css';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { AiOutlineHome, AiOutlineEdit, AiOutlineDelete, AiOutlineUserAdd, AiOutlineMoneyCollect } from 'react-icons/ai';
import { GoOrganization } from 'react-icons/go';
import { FaUserEdit } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdContacts } from 'react-icons/md';
import { BsFillPersonFill, BsSun } from 'react-icons/bs';
import { CgCommunity } from 'react-icons/cg';
import { BiSolidMoon } from 'react-icons/bi';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import ButtonGroup from 'antd/es/button/button-group';
const App: React.FC  = () => {
  const [collpased, setCollpased] = useState(false);
  const [changeMode, setChangeMode] = useState(false);
  const changeModeFunc = () => {
    setChangeMode(!changeMode);
  }
  const generateData = () => {
    const dat  = [];
    for( let i = 0; i< 34; i++){
      dat.push({
        id: faker.datatype.number(1000),
        name: faker.name.fullName(),
        email: faker.internet.email(),
        status: Math.random() > 0.5 ? true : false
      })
    }
    return dat;
  }
  const data = generateData();

  return (
    <Layout className='container' style={{backgroundColor: "#95a19b"}}>
      <Header
        style={{
          backgroundColor:
            changeMode ? "#fff" :  "#01496e"
          ,
          color: changeMode ? "#01496e" :  "#fff"
        }}>
        <div style={{
            display: "flex", 
            alignItems: "center",
            justifyContent: "space-between"
            }}>
          <GiHamburgerMenu onClick= {()=> setCollpased(!collpased)} size={24}  style={{marginRight: "20px", marginLeft: "0px"}}/>
          <div className="brand">
            Cool - Dashboard
          </div>
          <div className="dark-mode" onClick={changeModeFunc}>
              {
                changeMode ? <BiSolidMoon size={24} /> :  <BsSun size={24} />
              }
          </div>
        </div>
      </Header>
      <Layout>
        <Sider 
          collapsed={collpased} 
          style={{
            backgroundColor:
              changeMode ? "#fff" :  "#01496e",
              color: changeMode ? "#01496e" :  "#fff"
            }}>
          <Menu 
            style={{
              backgroundColor:
              changeMode ? "#fff" :  "#01496e",
              color: changeMode ? "#01496e" :  "#fff"
            }}
          mode='inline'
          items={[
            {
              label: "Home",
              key: "Home",
              icon: <AiOutlineHome />,
              children: [
                {
                  label: "Add profile",
                  key: "Add profile",
                  icon: <AiOutlineUserAdd />
                },
                {
                  label: "Edit Profile",
                  key: "Edit profile",
                  icon: <FaUserEdit />
                }
              ]
            },
            {
              label: "About",
              key: "About",
              icon: <GoOrganization />,
              children: [{
                label: "About Community",
                key: "About Community",
                icon: <CgCommunity />
              }]
            },
            {
              label: "Contact",
              key: "Contact",
              icon: <MdContacts />,
              children: [
                {
                  label: "Person 1",
                  key: "Person 1",
                  icon: <BsFillPersonFill />
                },
                {
                  label: "Person 2",
                  key: "Person 2",
                  icon: <BsFillPersonFill />
                },
                {
                  label: "Person 3",
                  key: "Person 3",
                  icon: <BsFillPersonFill />
                }
              ]
            }
          ]}/>
        </Sider>
        <Content 
          className='content' 
          style={{
            border: "none",
            backgroundColor:
            changeMode ? "#c9ced1" :  "#082636",
            color: changeMode ? "#082636" :  "#c9ced1"
          }}>

          {/* <Card 
            className='content' 
            style={{
              border: "none",
              backgroundColor:
              changeMode ? "#fff" :  "#01496e",
              color: changeMode ? "#01496e" :  "#fff"
            }}>
            <Typography.Title style={{color: changeMode ? "#01496e" :  "#fff"}}>Sales</Typography.Title>
            <Typography.Paragraph style={{color: changeMode ? "#01496e" :  "#fff"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolore id ab provident totam aut sunt odit ad, quod facere quidem accusamus quisquam facilis itaque, ullam enim molestiae eos consequatur.
            </Typography.Paragraph>
          </Card>

          <Card 
            title="Sales"
            bordered={false} 
            style={{
              border: "none",
              marginTop: "10px",
              backgroundColor:
              changeMode ? "#fff" :  "#01496e",
              color: changeMode ? "#01496e" :  "#fff"
            }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolore id ab provident totam aut sunt odit ad, quod facere quidem accusamus quisquam facilis itaque, ullam enim molestiae eos consequatur.  
          </Card>

          <Space direction='horizontal'>
            <Card  
              style={{
                backgroundColor:
                changeMode ? "#fff" :  "#01496e",
                marginTop: "10px",
                border: "none",
                color: changeMode ? "#01496e" :  "#fff"
              }}>
              <Space direction='horizontal'>
                <AiOutlineMoneyCollect />
                <small>Total sales</small>
              </Space>
                <Typography.Title style={{color: changeMode ? "#01496e" :  "#fff", fontSize: "36px"}}>$2430</Typography.Title>
            </Card>

            <Card  
              style={{
                backgroundColor:
                changeMode ? "#fff" :  "#01496e",
                marginTop: "10px",
                border: "none",
                color: changeMode ? "#01496e" :  "#fff"
              }}>
              <Space direction='horizontal'>
                <AiOutlineMoneyCollect />
                <small>Total sales</small>
              </Space>
                <Typography.Title style={{color: changeMode ? "#01496e" :  "#fff", fontSize: "36px"}}>$3906</Typography.Title>
            </Card>

            <Card  
              style={{
                backgroundColor:
                changeMode ? "#fff" :  "#01496e",
                marginTop: "10px",
                border: "none",
                color: changeMode ? "#01496e" :  "#fff"
              }}>
              <Space direction='horizontal'>
                <AiOutlineMoneyCollect />
                <small>Total sales</small>
              </Space>
                <Typography.Title style={{color: changeMode ? "#01496e" :  "#fff", fontSize: "36px"}}>$1923</Typography.Title>
            </Card>
            <Card  
              style={{
                backgroundColor:
                changeMode ? "#fff" :  "#01496e",
                marginTop: "10px",
                border: "none",
                color: changeMode ? "#01496e" :  "#fff"
              }}>
              <Space direction='horizontal'>
                <AiOutlineMoneyCollect />
                <small>Total sales</small>
              </Space>
                <Typography.Title style={{color: changeMode ? "#01496e" :  "#fff", fontSize: "36px"}}>$6021</Typography.Title>
            </Card>

            <Card  
              style={{
                backgroundColor:
                changeMode ? "#fff" :  "#01496e",
                marginTop: "10px",
                border: "none",
                color: changeMode ? "#01496e" :  "#fff"
              }}>
              <Space direction='horizontal'>
                <AiOutlineMoneyCollect />
                <small>Total sales</small>
              </Space>
                <Typography.Title style={{color: changeMode ? "#01496e" :  "#fff", fontSize: "36px"}}>$7302</Typography.Title>
            </Card>

            <Card  
              style={{
                backgroundColor:
                changeMode ? "#fff" :  "#01496e",
                marginTop: "10px",
                border: "none",
                color: changeMode ? "#01496e" :  "#fff"
              }}>
              <Space direction='horizontal'>
                <AiOutlineMoneyCollect />
                <small>Total sales</small>
              </Space>
                <Typography.Title style={{color: changeMode ? "#01496e" :  "#fff", fontSize: "36px"}}>$4982</Typography.Title>
            </Card>

            <Card  
              style={{
                backgroundColor:
                changeMode ? "#fff" :  "#01496e",
                marginTop: "10px",
                border: "none",
                color: changeMode ? "#01496e" :  "#fff"
              }}>
              <Space direction='horizontal'>
                <AiOutlineMoneyCollect />
                <small>Total sales</small>
              </Space>
                <Typography.Title style={{color: changeMode ? "#01496e" :  "#fff", fontSize: "36px"}}>$3728</Typography.Title>
            </Card>
          </Space>
          <Divider />

          <Row gutter={10} >
            <Col span={7} >
              <Card 
                style={{
                  backgroundColor:
                  changeMode ? "#fff" :  "#01496e",
                  color: changeMode ? "#01496e" :  "#fff",
                  border: "none",
                }}>
                <Typography.Title style={{color: changeMode ? "#01496e" :  "#fff", fontSize: "24px"}}>Something</Typography.Title>
              </Card>
            </Col>
            <Col span={9}>
              <Card
                style={{
                  backgroundColor:
                  changeMode ? "#fff" :  "#01496e",
                  color: changeMode ? "#01496e" :  "#fff",
                  border: "none"
                }}>
                <Typography.Title style={{color: changeMode ? "#01496e" :  "#fff", fontSize: "24px"}}>Something New</Typography.Title>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                style={{
                  backgroundColor:
                  changeMode ? "#fff" :  "#01496e",
                  color: changeMode ? "#01496e" :  "#fff",
                  border: "none"
                }}>
                <Typography.Title style={{color: changeMode ? "#01496e" :  "#fff", fontSize: "24px"}}>Hi there</Typography.Title>
              </Card>
            </Col>
          </Row> */}

          <Row gutter={10}>
            <Col span={18}>
            <Table
              dataSource={data} columns={[
              {
                dataIndex : "id",
                title: "ID",
                key: "id"
              },
              {
                dataIndex : "name",
                title: "name",
                key: "name"
              },
              {
                dataIndex : "email",
                title: "Email id",
                key: "email"
              },
              {
                dataIndex: "status",
                title: "Status",
                render: (val) => val ? <Tag>Active</Tag> : <Tag>Not Active</Tag>
              },
              {
                title: "Actions",
                render: () => (
                  <ButtonGroup>
                    <Button><AiOutlineEdit /> Edit</Button>
                    <Button type='primary' danger>< AiOutlineDelete/> Delete</Button>
                  </ButtonGroup>
                )
              }
            ]}/>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  )
}
export default App;